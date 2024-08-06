import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  function handleDelete(id) {
    
    const remainingQuestions = questions.filter(
      (question) => question.id !== id
    );
    setQuestions(remainingQuestions);


    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
