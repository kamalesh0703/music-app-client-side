import React from 'react';
import {Library} from '../Library/Library';
import {Feed} from '../Feed/Feed';
import {Favourites} from '../Favourites/Favourites';
import {Player} from '../Player/Player';
import {Trending} from '../Trending/Trending';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function Home() {
  return (
  <Router>
    <div className='main-body'>
    <Routes>
      <Route path='/Library' element={<Library/>}></Route>
      <Route path='/Feed' element={<Feed/>}></Route>
      <Route path='/Favourites' element={<Favourites/>}></Route>
      <Route path='/Player' element={<Player/>}></Route>
      <Route path='/Trending' element={<Trending/>}></Route>
    </Routes>
    </div>
  </Router>
  )
}

export {Home};