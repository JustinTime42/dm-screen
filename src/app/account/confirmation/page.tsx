'use client';
import React from "react";
import { Button } from "@mui/material";
import { confirmEmail } from "../../../mongo/auth";
import { useSearchParams, useRouter } from 'next/navigation'

const ConfirmationPage: React.FC = () => {

  const searchParams = useSearchParams()
  const router = useRouter()
  const token = searchParams.get("token")
  const tokenId = searchParams.get("tokenId")

  const handleConfirm = () => {
    confirmEmail(token, tokenId).then(() => {
      alert("Email confirmed successfully!")
      router.push("/")      
    })
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button variant="contained" color="primary" onClick={handleConfirm}>
        Confirm Email
      </Button>
    </div>
  );
};

export default ConfirmationPage;


