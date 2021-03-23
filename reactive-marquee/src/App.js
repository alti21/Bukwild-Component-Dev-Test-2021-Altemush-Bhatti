import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import data from './data/content.json';
import './App.css';
import Marquee from './components/Marquee';
import Error from './components/Error';
import Layout from './components/LayoutUI/Layout';
import axios from 'axios';
 
class App extends Component {

  state = {
    isLoading: true,
    pageData: [],
    backgroundClass: '' //initial background image
  }

  componentDidMount() {
    axios.get(`https://f.v1.n0.cdn.getcloudapp.com/items/3e1W2F0W1s2U2d3R2Z46/content.json`)
      .then(res => {
        this.setState({ pageData : res.data, isLoading : false });
      })
  }

  handleClick = (e) => {
    this.state.pageData.pages.forEach(page => {
      if(page.title === e.target.innerText) {
        console.log(page.blocks[0].background.replace('.jpg',''))
        this.setState({ backgroundClass: page.blocks[0].background.replace('.jpg','') }) 
      }
    })
  }

  render() {

    if (this.state.isLoading) {
      return <div className="container">Loading...</div>;
    }

    let background = ''//for initial background
    if(this.state.isLoading === false && this.state.backgroundClass === '') {

      this.state.pageData.pages.forEach(page => {
        if(page.slug === window.location.pathname.replace('/','')) {
          background = page.blocks[0].background.replace('.jpg','')
        }
      })
    }

    return (      
       <BrowserRouter>
        <div className={`container ${this.state.backgroundClass || background}`}>
            <Layout data={this.state.pageData.pages} handleClick={this.handleClick}/>
            <Switch>
                {this.state.pageData.pages.map(page => <Route key={page.slug} path={`/${page.slug}`} render={(props) => <Marquee {...props} data={page} />} />  )}
             <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;