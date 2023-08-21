import React from "react";
import theme from "./theme";

const styles = {
  container: {
    padding: theme.padding.large,
    backgroundColor: theme.colors.primaryBackground,
    borderRadius: theme.borderRadius,
    boxShadow: theme.boxShadow.primary,
    maxWidth: theme.maxWidth,
    margin: theme.margin.medium,
  },
  instructions: {
    fontSize: theme.fontSize.small,
    marginBottom: "14px",
    color: theme.colors.secondaryText,
    fontStyle: theme.fontStyle.italic,
  },
  answers: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  answerButton: {
    width: "100%",
    padding: theme.padding.small,
    backgroundColor: theme.colors.secondaryBackground,
    color: theme.colors.primaryText,
    border: "none",
    borderRadius: theme.borderRadius,
    cursor: "pointer",
    transition: theme.transition,
  },
  answerButtonHover: {
    backgroundColor: theme.colors.hoverBackground,
  },
};

const Question = ({ group, onQuestionSelected }) => {
  return (
    <div style={styles.container}>
      <div style={styles.instructions}>
        Please select the statement that is true for your tree.
      </div>
      <div style={styles.answers}>
        {group.questions.map((question, index) => (
          <button
            key={index}
            style={styles.answerButton}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                styles.answerButtonHover.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor =
                styles.answerButton.backgroundColor)
            }
            onClick={() => onQuestionSelected(question.next)}
          >
            {question.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
