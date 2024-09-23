import React from 'react';

const ResumeButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/PcResNp5.0.pdf'; // Your resume file path
    window.open('/PcResNp5.0.pdf', '_blank'); // Open in a new tab
    link.download = 'Pawan_Chaukiyal_Resume.pdf'; // Desired filename
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      style={{
        position: 'fixed', // Use 'fixed' to stick the button to the screen
        top: '20px',  // Distance from the top of the screen
        right: '20px',  // Stick to the right side of the screen
        padding: '10px 20px',
        backgroundColor: '#1A73E8', // Blue color
        color: '#ffffff',  // White text
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: 1000,  // Ensure the button is on top of other elements
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = '#135cbf')}  // Darker blue on hover
      onMouseLeave={(e) => (e.target.style.backgroundColor = '#1A73E8')}
    >
      Download Resume
    </button>
  );
};

export default ResumeButton;
