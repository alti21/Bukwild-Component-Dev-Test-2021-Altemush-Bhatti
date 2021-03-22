import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import data from './data/content.json';
import './App.css';
import Marquee from './components/Marquee';
import Error from './components/Error';
import Layout from './components/LayoutUI/Layout';
import axios from 'axios';
 
class App extends Component {

  state = {
    isLoading: true,
    pageData: []
  }

  componentDidMount() {
    axios.get(`https://f.v1.n0.cdn.getcloudapp.com/items/3e1W2F0W1s2U2d3R2Z46/content.json`)
      .then(res => {
        //const pageData = res.data;
        //console.log(res.data);
        this.setState({ pageData : res.data, isLoading : false });
      })
  }

  render() {

    if (this.state.isLoading) {
      return <div className="container">Loading...</div>;
    }
    
    return (      
       <BrowserRouter>
        <div className="container">
            <Layout data={this.state.pageData.pages}/>
            <Switch>
            {this.state.pageData.pages.map(page => <Route key={page.slug} path={`/${page.slug}`} render={(props) => <Marquee {...props} data={page} />} />    )}
             <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;