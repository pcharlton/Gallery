import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListArtworkComponent from './components/ListArtworkComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateArtworkComponent from './components/CreateArtworkComponent';
//import UpdateArtworkComponent from './components/UpdateArtworkComponent';
import ViewArtworkComponent from './components/ViewArtworkComponent';
import SwipeArtworkComponent from './components/SwipeArtworkComponent';

export const GalleryAdminLayout = (props) =>
    <div>
        <HeaderComponent />
            <Switch>
                          <Route path = "/admin/artworks" component = {ListArtworkComponent}></Route>
                          <Route path = "/admin/add-artwork/:id" component = {CreateArtworkComponent}></Route>
                          <Route path = "/admin/view-artwork/:id" component = {ViewArtworkComponent}></Route>
                          {/* <Route path = "/admin/update-artwork/:id" component = {UpdateArtworkComponent}></Route> */}
            </Switch>
        <FooterComponent />;
    </div>

export const GalleryDisplayLayout = (props) =>
<Switch>
      <Route path = "/" exact component = {SwipeArtworkComponent}></Route>
      <Route path = "/swipe-artworks" component = {SwipeArtworkComponent}></Route>
</Switch>;

function App() {
  return (
    <div>
        <Router>
            <div className="container">
                <Switch>
                      <Route path = "/" exact component = {GalleryDisplayLayout}></Route>
                      <Route path = "/admin" component = {GalleryAdminLayout}></Route>
                </Switch>
            </div>
        </Router>
    </div>
    
  );
}

export default App;
