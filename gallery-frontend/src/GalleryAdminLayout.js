import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListArtworkComponent from './components/ListArtworkComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateArtworkComponent from './components/CreateArtworkComponent';
//import UpdateArtworkComponent from './components/UpdateArtworkComponent';
import ViewArtworkComponent from './components/ViewArtworkComponent';

export const GalleryAdminLayout = (props) =>
<Switch>
      <Route path = "/admin/artworks" component = {ListArtworkComponent}></Route>
      <Route path = "/admin/add-artwork/:id" component = {CreateArtworkComponent}></Route>
      <Route path = "/admin/view-artwork/:id" component = {ViewArtworkComponent}></Route>
      {/* <Route path = "/admin/update-artwork/:id" component = {UpdateArtworkComponent}></Route> */}
</Switch>

