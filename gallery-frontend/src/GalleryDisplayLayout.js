import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListArtworkComponent from './components/ListArtworkComponent';
import SwipeArtworkComponent from './components/SwipeArtworkComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateArtworkComponent from './components/CreateArtworkComponent';
//import UpdateArtworkComponent from './components/UpdateArtworkComponent';
import ViewArtworkComponent from './components/ViewArtworkComponent';

export const GalleryAdminLayout = (props) =>

    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch>
                          <Route path = "/" exact component = {ListArtworkComponent}></Route>
                          <Route path = "/artworks" component = {ListArtworkComponent}></Route>
                          <Route path = "/swipe-artworks" component = {SwipeArtworkComponent}></Route>
                          <Route path = "/add-artwork/:id" component = {CreateArtworkComponent}></Route>
                          <Route path = "/view-artwork/:id" component = {ViewArtworkComponent}></Route>
                          {/* <Route path = "/update-artwork/:id" component = {UpdateArtworkComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>

  );
}

export default GalleryAdminApp;
