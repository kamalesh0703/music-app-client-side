import React, { useEffect, useState } from 'react';
import {Library} from '../Library/Library';
import {Feed} from '../Feed/Feed';
import {Favourites} from '../Favourites/Favourites';
import {Player} from '../Player/Player';
import {Trending} from '../Trending/Trending';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Sidebar } from '../../Components/SideBar/Sidebar';
import { Login } from '../auth/login';
import { setClientToken } from '../../Spotify';

function Home() {
  const [token,setToken]=useState('');

  useEffect(()=>{
    const token=window.localStorage.getItem('token');
    const hash=window.location.hash;
    window.location.hash="";
    if(!token && hash){
      const _token=hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token",_token);
      setToken(_token);
      setClientToken(_token);
    }
    else{
      setToken(token);
      setClientToken(token);
    }
  },[])
  return !token ? (
      <Login/>
  ):(
    <Router>
    <div className='main-body screen-container'>
      <Sidebar/>
    <Routes>
      <Route path='/Library' element={<Library/>}></Route>
      <Route path='/' element={<Feed/>}></Route>
      <Route path='/Favourites' element={<Favourites/>}></Route>
      <Route path='/Player' element={<Player/>}></Route>
      <Route path='/Trending' element={<Trending/>}></Route>
    </Routes>
    </div>
  </Router>
  )
  
}

export {Home};