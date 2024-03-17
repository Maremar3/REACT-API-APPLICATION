import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
  return <>
  
    <nav>
        <ul>
            <li>
                <Link to="/Gallery" >Gallery </Link>
            </li>
        </ul>

    </nav>
  </>
}

export default Nav
