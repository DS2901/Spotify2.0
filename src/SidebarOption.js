import React from 'react'
import './sidebaroption.css';

function SidebarOption({title, Icon}) {
  return (
    <div className='sidebarOption'>
    {Icon && <Icon className="sidebarOption__icon"/>}
    {Icon ? <h5>{title}</h5>: <h6>{title}</h6>}

    </div>
  )
}

export default SidebarOption
