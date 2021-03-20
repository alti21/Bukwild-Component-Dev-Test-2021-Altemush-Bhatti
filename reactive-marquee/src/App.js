import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import data from './data/content.json';
 
import Services from './components/Services';
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
        <div>
          <Layout />
            <Switch>
             <Route path="/" component={Services} exact/>
             <Route path="/industries" component={Industries}/>
             <Route path="/about" component={About}/>
             <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
