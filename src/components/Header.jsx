import React from "react";
import theme from "./theme";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.padding.headerFooter,
    backgroundColor: theme.colors.secondaryBackground,
    color: theme.colors.primaryText,
    boxShadow: theme.boxShadow.primary,
  },
  name: {
    fontSize: theme.fontSize.large,
    fontWeight: theme.fontWeight.bold,
    textDecoration: "none",
    color: theme.colors.primaryText,
  },
};

const Header = () => {
  return (
    <header style={styles.header}>
      <a href="/" style={styles.name}>
        Tree ID
      </a>
    </header>
  );
};

export default Header;
