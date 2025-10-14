import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        

        <div className='nav-link'>
        <Link className='' to='/' >Home</Link>
          <Link>About</Link>
          <Link>Rasume</Link>
          <Link>Linkdin</Link>
        </div>
        
          
      
    </div>
  )
}    


export default Navbar
