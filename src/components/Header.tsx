'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { AppBar, Icon, IconButton, Toolbar } from '@mui/material';

const Header: React.FC = () => {

  return (
    <AppBar className="bg-primary" position="static">
      <Toolbar className=" bg-primary flex flex-row justify-between">
      <div>
        <Link href='/' className="text-white-text text-2xl font-sans">DM Screen</Link>
      </div>  
      <div>
      <Link href='/dashboard' className="text-white-text text-2xl font-sans">Dashboard</Link>

        {/* {user ? (
          <Button 
            onClick={() => auth.signOut()}
            variant="outlined"
            startIcon={<AccountIcon />}
            >
            Logout
          </Button>
          ) : (
            <Button onClick={handleLoginDialogOpen}>
              Login
            </Button>
          )}       */}
      </div> 
      
             
        {/* <Link 
          href="/customer">
          <p className="text-white-text font-sans">Account</p>
        </Link>  */}
        {/* <LoginDialog open={isLoginDialogOpen} onClose={handleLoginDialogClose} /> */}
        </Toolbar>
    </AppBar>
  );
};

export default Header;
