import React from "react";
import trees from "../trees";
import theme from "./theme";

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px 20px",
    margin: theme.margin.medium,
    padding: theme.padding.large,
    borderRadius: theme.borderRadius,
    boxShadow: theme.boxShadow.primary,
    backgroundColor: theme.colors.primaryBackground,
  },
  header: {
    textAlign: "center",
    marginBottom: theme.margin.medium,
    fontSize: theme.fontSize.large,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.secondaryBackground,
    gridColumn: "1 / -1",
  },
  treeCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: theme.padding.medium,
    border: `1px solid ${theme.colors.secondaryBackground}`,
    borderRadius: theme.borderRadius,
    boxShadow: theme.boxShadow.primary,
  },
  image: {
    width: "100%",
    maxWidth: "300px",
    height: "auto",
    objectFit: "cover",
    borderRadius: theme.borderRadius,
    marginBottom: theme.margin.small,
  },
  treeName: {
    fontSize: theme.fontSize.medium,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.secondaryBackground,
    marginBottom: "8px",
  },
  scientificName: {
    fontSize: theme.fontSize.small,
    fontStyle: theme.fontStyle.italic,
    color: theme.colors.tertiaryText,
    marginTop: "4px",
  },
};

function TreeList() {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Trees we can identify:</h2>
      {Object.keys(trees).map((key) => {
        const tree = trees[key];
        return (
          <div key={key} style={styles.treeCard}>
            <img
              src={tree.imageUrl}
              alt={tree.commonName}
              style={styles.image}
            />
            <h3 style={styles.treeName}>{tree.commonName}</h3>
            <p style={styles.scientificName}>
              <i>{tree.scientificName}</i>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default TreeList;
