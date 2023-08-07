import React, { useState } from 'react';
import Header from "./components/Header";
import Question from "./components/Question";
import Footer from "./components/Footer";
import Result from "./components/Result";

const trees = {
  whiteOakTree: {
    imageUrl: "/assets/trees/white-oak-tree.jpg",
    commonName: "White Oak",
    scientificName: "Quercus alba",
    facts: "White oak trees are unique because they grow both male and female flowers. The male flowers range between two and four inches long and are green or yellowish in color, while the female flower appears slightly red in color. Acorns are actually fruit from the fertilized female flower."
  },
  redOakTree: {
    imageUrl: "/assets/trees/white-oak-tree.jpg",
    commonName: "Red Oak",
    scientificName: "Quercus rubra",
    facts: "The red oak tree requires a gap in the canopy to grow to maturity. Red oak is a rapidly growing, long-lived tree. The oldest of the red oaks may live to 300 to 500 years of age, but these are the exceptions. The average age of most red oaks today is less than that."
  }
};
const questionTree = {
  text: "What type of leaves does this tree have?",
  answers: ["Broad", "Needle-like", "Scaly", "Feathery"],
  children: {
    "Broad": {
      text: "Are the leaves compound or simple?",
      answers: ["Compound", "Simple"],
      children: {
        "Simple": {
          text: "Are the leaf margins smooth, toothed, or lobed?",
          answers: ["Smooth", "Toothed", "Lobed"],
          children: {
            "Lobed": {
              text: "Are the leaves arranged alternate or opposite?",
              answers: ["Alternate", "Opposite"],
              children: {
                "Alternate": {
                  text: "Are the lobe tips rounded or pointed?",
                  answers: ["Rounded", "Pointed"],
                  children: {
                    "Rounded": {
                      text: "What color is the underside of the leaf?",
                      answers: ["White", "Green (Not-White)"],
                      children: {
                        "Green (Not-White)": "whiteOakTree"
                      }
                    },
                    "Pointed": {
                      text: "Do the leaves and twigs have a cream/white color or do they show no sign of white color?",
                      answers: ["Cream/White Color", "No Sign of White Color"],
                      children: {
                        "No Sign of White Color": "redOakTree"
                      }
                    }
                  }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };

function App() {
  const [currentQuestionNode, setCurrentQuestionNode] = useState(questionTree);
  const [identifiedTree, setIdentifiedTree] = useState(null);

  const handleAnswerSelected = (answer) => {
    const nextNode = currentQuestionNode.children[answer];
    if (typeof nextNode === 'string') {
      setIdentifiedTree(nextNode);
    } else if (nextNode) {
      setCurrentQuestionNode(nextNode);
    }
  };

  return (
    <div>
      <Header />
      {identifiedTree ? (
        <Result treeData={trees[identifiedTree]} onRestart={() => {
          setIdentifiedTree(null);
          setCurrentQuestionNode(questionTree);
        }} />
      ) : (
        <Question 
          question={currentQuestionNode.text} 
          answers={currentQuestionNode.answers} 
          onAnswerSelected={handleAnswerSelected}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
