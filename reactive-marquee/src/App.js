import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import data from './data/content.json';
import './App.css';
import Marquee from './components/Marquee';
import Error from './components/Error';
import Layout from './components/LayoutUI/Layout';
import axios from 'axios';
 
class App extends Component {

  config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};

  state = {
    isLoading: true,
    pageData: [],
    backgroundClass: '', //initial background image
    activeLink: false
  }

  componentDidMount() {
    //axios.get(`https://f.v1.n0.cdn.getcloudapp.com/items/3e1W2F0W1s2U2d3R2Z46/content.json`, this.config)
     // .then(res => {
        this.setState({ pageData : data, isLoading : false });
     // })
  }

  handleClick = (e) => {
    // change background depending on which page user is on //maybe use map object to map window pathname or innertext with background image?
    this.state.pageData.pages.forEach(page => {
      if(page.title === e.target.innerText) {
        console.log(page.blocks[0].background.replace('.jpg',''))
        this.setState({ backgroundClass: page.blocks[0].background.replace('.jpg',''), activeLink: true }) 
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
            <Layout data={this.state.pageData.pages} handleClick={this.handleClick} active={this.state.activeLink}/>
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