import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={styles.navbar}>
            <Link to="/" style={styles.link}>
                <span role="img" aria-label="home">🏠</span> Home
            </Link>
            <Link to="/upload" style={styles.link}>
                <span role="img" aria-label="camera">📸</span> Upload
            </Link>
            <Link to="/profile" style={styles.link}>
                <span role="img" aria-label="profile">👤</span> Profile
            </Link>
        </nav>
    );
}

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px', // 🔹 ריווח בין הלינקים
        background: 'linear-gradient(to right, #ff6f61, #d9773d)', // 🔹 גרדיאנט צבעוני מודרני
        padding: '15px 30px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
        fontWeight: 'bold',
        padding: '10px 15px',
        transition: 'all 0.3s ease-in-out',
        borderRadius: '5px',
    },
    linkHover: {
        background: 'rgba(255, 255, 255, 0.2)', // 🔹 רקע שקוף בעת מעבר עכבר
    }
};

export default Navbar;
