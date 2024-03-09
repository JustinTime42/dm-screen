'use client';
import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { AppBar, Icon, IconButton, Toolbar } from '@mui/material';
import AccountIcon from '@mui/icons-material/AccountCircle';
import SignupDialog from './auth/Signup';
import LoginDialog from './auth/Login';
import { UserContext } from '@/contexts/user.context';

const Header: React.FC = () => {
  const [openSignupDialog, setOpenSignupDialog] = useState(false);
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const { fetchUser, user, logout } = useContext(UserContext)

  useEffect(() => {
    fetchUser()
  },[])

  useEffect(() => {
    console.log(user)
  }, [user])

  const handleLogOut = () => {
    logout().then(() => {
      fetchUser().then(() => {
        console.log('logged out')
      })
    })
  }

  return (
    <AppBar className="bg-primary" position="static">
      <Toolbar className=" bg-primary flex flex-row justify-between">
      <div>
        <Link href='/' className="text-white-text text-2xl font-sans">DM Screen</Link>
      </div>  
      <div>
      <Link href='/dashboard' className="text-white-text text-2xl font-sans">Dashboard</Link>
        {user ? (
          <Button 
            onClick={handleLogOut}
            variant="outlined"
            >
            Logout
          </Button>
          ) : (
            <>
              <Button onClick={() => setOpenLoginDialog(true)}>
                Login
              </Button>
              <Button onClick={() => setOpenSignupDialog(true)}>
                Signup
              </Button>
            </>
          )}      
      </div>
        <Link 
          href="/account">
          <p className="text-white-text font-sans">Account</p>
        </Link> 
        <LoginDialog open={openLoginDialog} onClose={() => setOpenLoginDialog(false)} />
        <SignupDialog open={openSignupDialog} onClose={() => setOpenSignupDialog(false)} />
        </Toolbar>
    </AppBar>
  );
};

export default Header;
