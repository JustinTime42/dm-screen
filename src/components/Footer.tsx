'use client'
import { AppBar, Toolbar } from '@mui/material';
import React from 'react';

const Footer: React.FC = () => {
  return (
      <AppBar className="bg-primary" position="fixed" style={{ top: 'auto', bottom: 0 }}>
        <Toolbar className=" bg-primary flex flex-row justify-between">
          <div>          
            <ul>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              {/* Add more links here */}
            </ul></div>

        </Toolbar>
      </AppBar>
  );
};

export default Footer;

