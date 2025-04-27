// src/pages/ForgotPasswordPage.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import '../styles/authPages.css';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error('Forgot password error', err);
      toast.error('Server error');
    }
  };

  return (
    <div className="auth-page-container">
      <img src="/instaFood_small_logo.png" alt="InstaFood Logo" className="auth-logo" />
      <div className="auth-form-box">
        <h1 className="auth-title">Forgot Password</h1>
        <form onSubmit={handleSubmit} className="auth-form" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="auth-input"
            style={{
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '16px'
            }}
          />
          <button
            type="submit"
            className="auth-button"
            style={{
              padding: '12px',
              borderRadius: '8px',
              backgroundColor: '#ff6600',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
