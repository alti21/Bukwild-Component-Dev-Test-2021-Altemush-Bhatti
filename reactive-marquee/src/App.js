import React, { Component, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import data from './data/content.json';
import './App.css';
//import Marquee from './components/Marquee';
import Error from './components/Error';
import Layout from './components/LayoutUI/Layout';
import axios from 'axios';
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
        console.log(window.location.hash);
        this.setState({ backgroundClass: page.blocks[0].background.replace('.jpg','') }) 
      }
    })
  }

  render() {

    // render during AJAX request
    if (this.state.isLoading) {
      return <div className="container">Loading...</div>;
    }

    let background = ''//for initial background render
    if(this.state.isLoading === false && this.state.backgroundClass === '') {
      this.state.pageData.pages.forEach(page => {
        if(page.slug === window.location.hash.replace('#/','')) {
          background = page.blocks[0].background.replace('.jpg','')
        }
      })
    }

    return (      
       <HashRouter>
        <div className={`container ${this.state.backgroundClass || background}`}>
            <Layout data={this.state.pageData.pages} handleClick={this.handleClick} />
            <Suspense fallback={<div>Loading...</div>}>
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