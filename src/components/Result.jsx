import React from "react";
import theme from "./theme";

const styles = {
  container: {
    padding: theme.padding.large,
    backgroundColor: theme.colors.primaryBackground,
    borderRadius: theme.borderRadius,
    boxShadow: theme.boxShadow.primary,
    maxWidth: theme.maxWidth,
    margin: theme.margin.large,
    textAlign: "center",
  },
  image: {
    width: "100%",
    maxWidth: "300px",
    borderRadius: theme.borderRadius,
    margin: theme.margin.small,
  },
  treeName: {
    fontSize: theme.fontSize.large,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.secondaryBackground,
  },
  scientificName: {
    fontSize: theme.fontSize.medium,
    fontStyle: theme.fontStyle.italic,
    color: theme.colors.tertiaryText,
  },
  facts: {
    marginTop: "20px",
    color: theme.colors.secondaryText,
  },
  button: {
    marginTop: "20px",
    padding: theme.padding.medium,
    backgroundColor: theme.colors.secondaryBackground,
    color: theme.colors.primaryText,
    border: "none",
    borderRadius: theme.borderRadius,
    cursor: "pointer",
    transition: theme.transition,
  },
  buttonHover: {
    backgroundColor: theme.colors.hoverBackground,
  },
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
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor = styles.button.backgroundColor)
        }
        onClick={onRestart}
      >
        Identify Another Tree
      </button>
    </div>
  );
};

export default Result;
