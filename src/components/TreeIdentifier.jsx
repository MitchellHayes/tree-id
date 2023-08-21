import React, { useState } from "react";
import questionsBank from "../questionsBank";
import trees from "../trees";
import Question from "./Question";
import Result from "./Result";

function TreeIdentifier() {
  const [currentGroup, setCurrentGroup] = useState(questionsBank[0]);
  const [identifiedTree, setIdentifiedTree] = useState(null);

  const handleQuestionSelected = (next) => {
    const nextGroup = questionsBank.find((group) => group.id === next);

    if (nextGroup) {
      setCurrentGroup(nextGroup);
    } else {
      const tree = trees[next];
      if (tree) {
        setIdentifiedTree(tree);
      } else {
        console.error("Invalid tree result:", next);
      }
    }
  };

  return identifiedTree ? (
    <Result
      treeData={identifiedTree}
      onRestart={() => {
        setIdentifiedTree(null);
        setCurrentGroup(questionsBank[0]);
      }}
    />
  ) : (
    <Question
      group={currentGroup}
      onQuestionSelected={handleQuestionSelected}
    />
  );
}

export default TreeIdentifier;
