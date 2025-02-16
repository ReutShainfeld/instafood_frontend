import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const userName = localStorage.getItem('fullName');

    const handleLogout = () => {
        localStorage.removeItem('fullName');
        localStorage.removeItem('userId');
        navigate('/login'); // 🔹 ניווט במקום window.location.href
    };

    return (
        <nav style={styles.navbar}>
            <Link to="/" style={styles.link}>
                <span role="img" aria-label="home">🏠</span> Home
            </Link>
            <Link to="/upload" style={styles.link}>
                <span role="img" aria-label="camera">📸</span> Upload
            </Link>

            {userName ? (
                <>
                    <Link to="/profile" style={styles.link}>
                        <span role="img" aria-label="profile">👤</span> {userName}
                    </Link>
                    <button onClick={handleLogout} style={styles.logoutButton}>
                        <span role="img" aria-label="logout">🚪</span> Logout
                    </button>
                </>
            ) : (
                <>
                    <Link to="/login" style={styles.link}>
                        <span role="img" aria-label="login">🔑</span> Login
                    </Link>
                    <Link to="/register" style={styles.link}>
                        <span role="img" aria-label="register">📝</span> Register
                    </Link>
                </>
            )}
        </nav>
    );
}

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        background: 'linear-gradient(to right, #ff6f61, #d9773d)',
        padding: '15px 30px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
        fontWeight: 'bold',
        padding: '10px 15px',
        borderRadius: '5px',
        transition: 'all 0.3s ease-in-out',
    },
    logoutButton: {
        background: '#ff4d4d',
        color: 'white',
        border: 'none',
        padding: '10px 15px',
        fontSize: '16px',
        fontWeight: 'bold',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
    },
};

export default Navbar;
