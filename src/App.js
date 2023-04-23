// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './components/Spotify1';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';


const spotify= new SpotifyWebApi();
function App() {
// const[token, setToken]= useState(null);
const[{user,token}, dispatch]=useDataLayerValue();


useEffect(()=>{
const hash= getTokenFromUrl();

window.location.hash="";

const _token = hash.access_token;

if(_token){
  dispatch({
    type:"SET_TOKEN",
    token:_token,
  })
 
  spotify.setAccessToken(_token);

  spotify.getMe().then(user =>{
    dispatch({
      type:'SET_USER',
      user:user,
    })
  })

  spotify.getUserPlaylists().then((playlists)=>{
    dispatch({
      type:"SET_PLAYLISTS",
      playlists:playlists,
    })
  })

  spotify.getPlaylist('facb1e73d697435cba7fa0dd7b6782f7').then((response)=>{
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly:response,
  })
});
}

}, []);
console.log("ME", user)
console.log("they", token)
  return (
    <div className='App'>
    {
      token? (<Player/>):( <Login/> )
    }
  
    </div>
  );
}

export default App;
