import React from 'react';

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '40px auto',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '10px',
    margin: '20px 0'
  },
  treeName: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333'
  },
  scientificName: {
    fontSize: '18px',
    fontStyle: 'italic',
    color: '#666'
  },
  facts: {
    marginTop: '20px',
    color: '#555'
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  buttonHover: {
    backgroundColor: '#555'
  }
};

const Result = ({ treeData, onRestart }) => {
  const { imageUrl, commonName, scientificName, facts } = treeData;

  return (
    <div style={styles.container}>
      <img src={imageUrl} alt={commonName} style={styles.image} />
      <div style={styles.treeName}>{commonName}</div>
      <div style={styles.scientificName}>{scientificName}</div>
      <div style={styles.facts}>{facts}</div>
      <button 
        style={styles.button} 
        onMouseEnter={e => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseLeave={e => e.target.style.backgroundColor = styles.button.backgroundColor}
        onClick={onRestart}
      >
        Identify Another Tree
      </button>
    </div>
  );
}

export default Result;
