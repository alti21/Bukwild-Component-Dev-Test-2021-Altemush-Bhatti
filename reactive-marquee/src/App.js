import React, { Component, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import data from './data/content.json';
import './App.css';
import Error from './components/Error';
import axios from 'axios';
const Layout = React.lazy(() => import('./components/LayoutUI/Layout'));
const Marquee = React.lazy(() => import('./components/Marquee'));

class App extends Component {

  state = {
    isLoading: true,
    pageData: [],
    backgroundClass: '', //initial background image
  }

  componentDidMount() {
    axios.get(`https://f.v1.n0.cdn.getcloudapp.com/items/3e1W2F0W1s2U2d3R2Z46/content.json`)
      .then(res => { 
        this.setState({ pageData : res.data, isLoading : false });
      })
      .catch(error => {
        console.log('Error', error);
        // just in case axios fails to fetch data, log an error and pull data from local json file instead
        this.setState({ pageData : data, isLoading : false }); 
      })
  }

  handleClick = (e) => {
    // change background depending on which page user is on //maybe use map object to map window pathname or innertext with background image?
    this.state.pageData.pages.forEach(page => {
      if(page.title === e.target.innerText) {
        this.setState({ backgroundClass: page.blocks[0].background.replace('.jpg','') }) 
      }
    })
  }

  //for initial background render
  initialBackground = () => {
    let background = ''
    if(this.state.isLoading === false && this.state.backgroundClass === '') {
      this.state.pageData.pages.forEach(page => {
        if(page.slug === window.location.hash.replace('#/','')) {
          background = page.blocks[0].background.replace('.jpg','')
        }
      })
    }
    return background;
  }

  render() {

    if (this.state.isLoading) {
      return <div className="container">Loading...</div>;
    }

    //Use HashRouter to establish 3 routes, one for each page. Pass data for each page in as props
    return (      
       <HashRouter>
        <div className={`container ${this.state.backgroundClass || this.initialBackground()}`}>
          <Suspense fallback={<div>Loading...</div>}> 
            <Layout data={this.state.pageData.pages} handleClick={this.handleClick} />
              <Switch>
                  {this.state.pageData.pages.map(page => <Route key={page.slug} path={`/${page.slug}`} render={(props) => <Marquee {...props} data={page} />} />  )}
              <Route component={Error}/>
            </Switch>
           </Suspense>
        </div> 
      </HashRouter>
    );
  }
}
 
export default App;