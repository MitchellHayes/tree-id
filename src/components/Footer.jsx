import React from "react";
import theme from "./theme";

const styles = {
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.5rem",
    backgroundColor: theme.colors.secondaryBackground,
    color: theme.colors.primaryText,
    boxShadow: theme.boxShadow.secondary,
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    zIndex: "1000",
  },
  link: {
    textDecoration: "none",
    color: theme.colors.primaryText,
    fontWeight: theme.fontWeight.bold,
    marginLeft: "0.5rem",
  },
  linkHover: {
    textDecoration: "underline",
  },
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
        onMouseEnter={(e) =>
          (e.target.style.textDecoration = styles.linkHover.textDecoration)
        }
        onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
      >
        GitHub
      </a>
    </footer>
  );
};

export default Footer;
