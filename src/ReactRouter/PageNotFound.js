import React from 'react'
import { Link } from 'react-router-dom';


function PageNotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404</h1>
      <p style={styles.text}>Page Not Found</p>
      <Link to="/" style={styles.link}>Go Home</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  header: {
    fontSize: '72px',
    marginBottom: '24px',
  },
  text: {
    fontSize: '24px',
    marginBottom: '24px',
  },
  link: {
    fontSize: '18px',
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default PageNotFound