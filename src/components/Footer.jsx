import React from 'react';

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
    backgroundColor: '#333',
    color: '#fff',
    boxShadow: '0px -3px 10px rgba(0, 0, 0, 0.2)',
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    zIndex: '1000'
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: '5px'
  },
  linkHover: {
    textDecoration: 'underline'
  }
};

const Footer = ({ repoLink = "https://github.com/MitchellHayes/tree-id" }) => {
  return (
    <footer style={styles.footer}>
      <span>View the code on</span>
      <a 
        href={repoLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={styles.link}
        onMouseEnter={e => e.target.style.textDecoration = styles.linkHover.textDecoration}
        onMouseLeave={e => e.target.style.textDecoration = 'none'}
      >
        GitHub
      </a>
    </footer>
  );
}

export default Footer;
