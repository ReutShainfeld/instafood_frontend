// src/pages/EmailVerifiedPage.js

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/authPages.css';


function EmailVerifiedPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasShownToast = sessionStorage.getItem('emailVerifiedToast');

    if (!hasShownToast) {
      toast.success('Email verified! Redirecting...', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      sessionStorage.setItem('emailVerifiedToast', 'true');
    }

    const timer = setTimeout(() => {
      const token = localStorage.getItem('token');
      if (token) {
        navigate('/profile');
      } else {
        navigate('/login');
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="auth-page-container">
      <img
        src="/instaFood_small_logo.png"
        alt="InstaFood Logo"
        className="auth-logo"
        />

      <div className="auth-form-box">
        <h1 className="auth-title">Email Verified Successfully!</h1>
        <p style={{ textAlign: 'center' }}>
          Your email has been verified.<br />Redirecting shortly...
        </p>
      </div>
    </div>
  );
}

export default EmailVerifiedPage;
