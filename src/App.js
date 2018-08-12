import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './template/NavigationBar';
import Footer from './template/Footer';
import { Home, About, Whoops404, Post } from './pages/index'
const App = () =>
    <BrowserRouter>
        <div>
            <NavigationBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/post" component={Post} />
                <Route path="/concat" component={Home} />
                <Route component={Whoops404} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
export default App;