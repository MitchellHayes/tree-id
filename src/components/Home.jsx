import React from 'react';
import { Link } from 'react-router-dom';
import theme from './theme';

const styles = {
  container: {
    padding: theme.padding.large,
    backgroundColor: theme.colors.primaryBackground,
    borderRadius: theme.borderRadius,
    boxShadow: theme.boxShadow.primary,
    maxWidth: theme.maxWidth,
    margin: theme.margin.medium,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    fontSize: theme.fontSize.large,
    marginBottom: theme.margin.medium,
    color: theme.colors.secondaryText,
  },
  linkList: {
    display: "flex",
    flexDirection: "column",
    gap: theme.margin.small,
  },
  link: {
    fontSize: theme.fontSize.medium,
    color: theme.colors.primaryText,
    textDecoration: "none",
    transition: theme.transition,
    padding: theme.padding.small,
    borderRadius: theme.borderRadius,
    backgroundColor: theme.colors.secondaryBackground,
    display: 'inline-block',
    width: '100%',
    textAlign: 'center',
  }
  
};

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to Tree ID</h1>
      <div style={styles.linkList}>
        <Link 
          to="/identify" 
          style={styles.link}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = theme.colors.hoverBackground)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = theme.colors.secondaryBackground)
          }
        >
          Tree Identifier
        </Link>
        <Link 
          to="/treelist" 
          style={styles.link}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = theme.colors.hoverBackground)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = theme.colors.secondaryBackground)
          }
        >
          Tree List
        </Link>
        {/* Add more links as you add more features */}
      </div>
    </div>
  );
}

export default Home;
