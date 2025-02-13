import React from 'react';
import './Navbar.css'; // Import your CSS file
import { Avatar } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content"> {/* Container for your navbar items */}
        <div className='navbar-brand'>
          Test
        </div>
        <div className='navbar-info'>
          <Avatar> TU </Avatar>
          <ExitToAppIcon />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;