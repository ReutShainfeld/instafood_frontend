// src/pages/ForgotPasswordPage.js
// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import '../styles/authPages.css';

// function ForgotPasswordPage() {
//   const [email, setEmail] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/forgot-password`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         toast.success(data.message);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (err) {
//       console.error('Forgot password error', err);
//       toast.error('Server error');
//     }
//   };

//   return (
//     <div className="auth-page-container">
//       <img src="/instaFood_small_logo.png" alt="InstaFood Logo" className="auth-logo" />
//       <div className="auth-form-box">
//         <h1 className="auth-title">Forgot Password</h1>
//         <form onSubmit={handleSubmit} className="auth-form" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="auth-input"
//             style={{
//               padding: '12px',
//               borderRadius: '8px',
//               border: '1px solid #ccc',
//               fontSize: '16px'
//             }}
//           />
//           <button
//             type="submit"
//             className="auth-button"
//             style={{
//               padding: '12px',
//               borderRadius: '8px',
//               backgroundColor: '#ff6600',
//               color: '#fff',
//               fontWeight: 'bold',
//               fontSize: '16px',
//               border: 'none',
//               cursor: 'pointer',
//             }}
//           >
//             Send Reset Link
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ForgotPasswordPage;
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import '../styles/authPages.css';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [popup, setPopup] = useState({ open: false, message: '' });

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
        setPopup({ open: true, message: data.message });
      } else {
        setPopup({ open: true, message: data.message });
      }
    } catch (err) {
      console.error('Forgot password error', err);
      setPopup({ open: true, message: 'Server error' });
    }
  };

  useEffect(() => {
    if (popup.open) {
      const timer = setTimeout(() => {
        setPopup({ ...popup, open: false });
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [popup]);

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

      {/* Popup Message */}
      <Dialog 
        open={popup.open} 
        onClose={() => setPopup({ ...popup, open: false })} 
        PaperProps={{
          sx: {
            borderRadius: 3, // פינות מעוגלות
            minWidth: 350,    // ריבוע יותר גדול
            backgroundColor: '#f5f5f5',
            padding: 2,
          }
        }}
      >
        <DialogTitle sx={{
          textAlign: 'center',
          fontWeight: 'bold', // כתב עבה!
          color: '#4a4a4a',
          fontSize: '18px',    // כתב נורמלי
        }}>
          {popup.message}
        </DialogTitle>
      </Dialog>
    </div>
  );
}

export default ForgotPasswordPage;
