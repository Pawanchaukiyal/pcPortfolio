import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#050816', // Primary color
        color: '#f3f3f3', // White-100 color
      }}
    >
      <div>
        <p>Presented by Pawan Chaukiyal</p>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a
          href="https://github.com/Pawanchaukiyal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={{ color: '#f3f3f3', transition: 'color 0.3s ease' }}
          onMouseEnter={(e) => (e.target.style.color = '#aaa6c3')} // Secondary color on hover
          onMouseLeave={(e) => (e.target.style.color = '#f3f3f3')}
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.instagram.com/chaukiyalpawan/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          style={{ color: '#f3f3f3', transition: 'color 0.3s ease' }}
          onMouseEnter={(e) => (e.target.style.color = '#aaa6c3')}
          onMouseLeave={(e) => (e.target.style.color = '#f3f3f3')}
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/p-c-3546461b9/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={{ color: '#f3f3f3', transition: 'color 0.3s ease' }}
          onMouseEnter={(e) => (e.target.style.color = '#aaa6c3')}
          onMouseLeave={(e) => (e.target.style.color = '#f3f3f3')}
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          style={{ color: '#f3f3f3', transition: 'color 0.3s ease' }}
          onMouseEnter={(e) => (e.target.style.color = '#aaa6c3')}
          onMouseLeave={(e) => (e.target.style.color = '#f3f3f3')}
        >
          <FaTwitter size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
