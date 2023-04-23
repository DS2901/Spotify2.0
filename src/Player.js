import React from 'react'
import './player.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';


function Player({spotify}) {
  return (
    <div>
<h1>
    {/* Sidebar */}

    <div className="player">
      <div className="player_body">
        <Sidebar/>
        <Body spotify={spotify}/>
      </div>

<Footer/>
    </div>

</h1>
    </div>
  )
}

export default Player
