import React from 'react';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)'
  },
  name: {
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#fff',
  },
};

const Header = () => {
  return (
    <header style={styles.header}>
      <a href="/" style={styles.name}>Tree ID</a>
    </header>
  );
}

export default Header;
