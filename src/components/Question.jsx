import React from 'react';

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '40px auto'
  },
  question: {
    fontSize: '20px',
    marginBottom: '20px',
    color: '#333'
  },
  answers: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  answerButton: {
    padding: '10px 15px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  answerButtonHover: {
    backgroundColor: '#555'
  }
};

const Question = ({ question, answers, onAnswerSelected }) => {
  return (
    <div style={styles.container}>
      <p style={styles.question}>{question}</p>
      <div style={styles.answers}>
        {answers.map((answer, index) => (
          <button
            key={index}
            style={styles.answerButton}
            onMouseEnter={e => e.target.style.backgroundColor = styles.answerButtonHover.backgroundColor}
            onMouseLeave={e => e.target.style.backgroundColor = styles.answerButton.backgroundColor}
            onClick={() => onAnswerSelected(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
