import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Navigation from './components/Navigation'
import Footer from './components/Footer'

// Views
import Home from './views/Home'
import Artistas from './views/Artistas'
import Store from './views/Store'
import Blog from './views/Blog'
import Login from './views/Login'
import Signup from './views/Signup'
import User from './views/User'
import AddProduct from './views/AddProduct'
import AddPost from './views/AddPost'

export default class App extends Component {
  render() {
    return (
      <div className="bg-paper min-h-screen">
        <Router>

          <div className="min-h-10 mb-5">
            <Navigation />
          </div>
          

          <Route exact path="/" component={Home} />
          <Route path="/artistas" component={Artistas} />
          <Route path="/tienda" component={Store} />
          <Route path="/blog" component={Blog} />

          <Route path="/user" component={User} />

          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          
          <Route path="/crear-producto" component={AddProduct} />
          <Route path="/crear-post" component={AddPost} />
          
          <div>
            <Footer/>
          </div>

        </Router>
      </div>
    )
  }
}
