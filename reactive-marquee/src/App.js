import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import data from './data/content.json';
import './App.css';
import Marquee from './components/Marquee';
import About from './components/About';
import Industries from './components/Industries';
import Error from './components/Error';
import Layout from './components/LayoutUI/Layout';
 
class App extends Component {
  render() {
   // const info = JSON.parse(data);
    console.log(data.pages[0]);
    return (      
       <BrowserRouter>
        <div className="container">
            <Layout data={data}/>
            <Switch>
             <Route exact path={`/${data.pages[1].slug}`} render={(props) => <Marquee {...props} data={data.pages[1]} />} />
             <Route path={`/${data.pages[0].slug}`} render={(props) => <Marquee {...props} data={data.pages[0]} />} />
             <Route path={`/${data.pages[2].slug}`} render={(props) => <Marquee {...props} data={data.pages[2]} />} />
             <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
