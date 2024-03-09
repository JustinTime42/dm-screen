'use client';
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { login, signup } from '../../mongo/auth';

type SignupDialogProps = {
  open: boolean;
  onClose: () => void;
};

const SignupDialog: React.FC<SignupDialogProps> = ({ open, onClose }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signup( email, password );
      alert("check your email for confirmation")
      onClose(); // Close dialog on successful login
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sign Up</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Retype Password"
            type="password"
            fullWidth
            margin="normal"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <Button 
            type="submit" 
            color="primary" 
            variant="contained" 
            fullWidth>
            Sign Up
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignupDialog;
           
