
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.userId);
                localStorage.setItem('fullName', data.fullName);
                alert('✅ Registration successful!');
                navigate('/profile');
            } else {
                alert(`❌ Registration failed: ${data.message}`);
            }
        } catch (error) {
            console.error('❌ Error:', error);
            alert('❌ Failed to connect to server.');
        }
    };

    return (
        <div style={styles.container}>
            <h2>
                <span role="img" aria-label="register">📝</span> Register
            </h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

const styles = {
    container: { 
        textAlign: 'center', 
        padding: '50px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
    },
    form: { 
        display: 'flex', 
        flexDirection: 'column', 
        maxWidth: '400px', 
        width: '100%',
        gap: '12px', 
        background: '#fff', 
        padding: '25px', 
        borderRadius: '12px', 
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)' 
    },
    input: { 
        padding: '12px', 
        fontSize: '16px', 
        borderRadius: '5px', 
        border: '1px solid #ccc' 
    },
    button: { 
        padding: '12px', 
        fontSize: '18px', 
        background: '#ff6f61', 
        color: 'white', 
        border: 'none', 
        borderRadius: '5px', 
        cursor: 'pointer' 
    }
};

export default RegisterPage;
