// // // import React from 'react';
// // // import { useNavigate } from 'react-router-dom';

// // // const EmailVerifiedPage = () => {
// // //   const navigate = useNavigate();

// // //   const handleLoginRedirect = () => {
// // //     navigate('/login');
// // //   };

// // //   return (
// // //     <div className="flex flex-col items-center justify-center h-screen bg-white">
// // //       <h1 className="text-4xl font-bold mb-6 text-green-600">Email Verified Successfully!</h1>
// // //       <p className="text-lg mb-8">You can now log into your account.</p>
// // //       <button
// // //         onClick={handleLoginRedirect}
// // //         className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
// // //       >
// // //         Go to Login
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default EmailVerifiedPage;

// // // src/pages/EmailVerifiedPage.js

// // import React, { useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { toast } from 'react-toastify'; // אם יש לך toastify מותקן
// // import '../styles/authPages.css'; // עיצוב של העמודים

// // function EmailVerifiedPage() {
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     // ברגע שנטען העמוד - להראות טוסט ולהעביר לדף התחברות
// //     toast.success('Email verified! Redirecting to login...', {
// //       position: "top-center",
// //       autoClose: 2000, // טוסט ייעלם אחרי 2 שניות
// //       hideProgressBar: false,
// //       closeOnClick: true,
// //       pauseOnHover: false,
// //       draggable: false,
// //       progress: undefined,
// //       theme: "colored",
// //     });

// //     const timer = setTimeout(() => {
// //       navigate('/login');
// //     }, 4000); // מעבר אחרי 4 שניות

// //     return () => clearTimeout(timer); // אם העמוד נסגר לפני - ננקה טיימר
// //   }, [navigate]);

// //   return (
// //     <div className="auth-page-container">
// //       <img
// //         src="/instafood-icon.png" // אם אין לך - אפשר להחליף
// //         alt="InstaFood Logo"
// //         className="auth-logo"
// //       />
// //       <div className="auth-form-box">
// //         <h1 className="auth-title">Email Verified Successfully!</h1>
// //         <p style={{ textAlign: 'center' }}>
// //           Your email has been verified.<br />Redirecting to login page...
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default EmailVerifiedPage;

// // src/pages/EmailVerifiedPage.js

// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import '../styles/authPages.css';

// function EmailVerifiedPage() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     toast.success('Email verified! Redirecting...', {
//       position: "top-center",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: false,
//       draggable: false,
//       progress: undefined,
//       theme: "colored",
//     });

//     const timer = setTimeout(() => {
//       const token = localStorage.getItem('token');
//       if (token) {
//         navigate('/profile');
//       } else {
//         navigate('/login');
//       }
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, [navigate]);

//   return (
//     <div className="auth-page-container">
//       <img
//         src="/instafood-icon.png"
//         alt="InstaFood Logo"
//         className="auth-logo"
//       />
//       <div className="auth-form-box">
//         <h1 className="auth-title">Email Verified Successfully!</h1>
//         <p style={{ textAlign: 'center' }}>
//           Your email has been verified.<br />Redirecting shortly...
//         </p>
//       </div>
//     </div>
//   );
// }

// export default EmailVerifiedPage;

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
