import React, { useState } from 'react'
import Question from './Question'

export function Java() {

  const javaQuestions = [
    //question 1
    {
      qnum : '1',
      ques : 'Memory occupied by int variable is ?',
      opA : '1 byte',
      opB : '8 bytes',
      opC : '2 bytes',
      opD : '4 bytes',
      ans : 'D'
    },
    //question 2
    {
      qnum : '2',
      ques : 'Memory occupied by char variable is ?',
      opA : '1 byte',
      opB : '8 bytes',
      opC : '2 bytes',
      opD : '4 bytes',
      ans : 'C'
    },
    //question 3
    {
      qnum : '3',
      ques : 'Memory occupied by long variable is ?',
      opA : '1 byte',
      opB : '8 bytes',
      opC : '2 bytes',
      opD : '4 bytes',
      ans : 'B'
    },
    //question 4
    {
      qnum : '4',
      ques : 'Memory occupied by byte variable is ?',
      opA : '1 byte',
      opB : '8 bytes',
      opC : '2 bytes',
      opD : '4 bytes',
      ans : 'A'
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const totalQuestions = javaQuestions.length;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleOnChange = (questionNum, selectedOption) => {
    setAnswers({ ...answers, [questionNum]: selectedOption });
    document.getElementsByName(questionNum).forEach((elem) => {
      if (elem.value === selectedOption) {
        elem.checked = true;
      } else {
        elem.checked = false;
      }
    });
  };

  return (
    <div>
      <h1>Java Assessment</h1>
      {!showResult ? (
        <form onSubmit={handleSubmit}>
          <Question
            qnum={javaQuestions[currentQuestion].qnum}
            ques={javaQuestions[currentQuestion].ques}
            opA={javaQuestions[currentQuestion].opA}
            opB={javaQuestions[currentQuestion].opB}
            opC={javaQuestions[currentQuestion].opC}
            opD={javaQuestions[currentQuestion].opD}
            ans={javaQuestions[currentQuestion].ans}
            onChange={handleOnChange}
          />
          <br/><br/>
          <button type='submit'>Submit</button>
        </form>
      ) : (
        <div className="resultContainer">
  <h2 className="resultText">Java Assessment Results</h2>
  <p className="resultText">You have completed the Java assessment.</p>
  <h3 className="resultText">Results:</h3>
  <ul>
    {javaQuestions.map((question) => (
      <li key={question.qnum} className="resultItem">
        Question {question.qnum}: {question.ques}
        <br />
        Correct Answer: <span className="correctAnswer">{question.ans}</span>
        <br />
        Your Answer: {answers[question.qnum] || 'Not answered'}
        <br />
        {answers[question.qnum] === question.ans ? (
          <span className="correctAnswer">Correct</span>
        ) : (
          <span className="incorrectAnswer">Incorrect</span>
        )}
      </li>
    ))}
  </ul>
</div>

      )}
    </div>
  );

}

export function Sql() {
  const sqlQuestions = [
    //question 1
    {
      qnum : '1',
      ques : 'What does the SQL acronym "SELECT" stand for?',
      opA : 'Sequential Extraction',
      opB : 'Selective Data Retrieval',
      opC : 'Structured Extraction',
      opD : 'Standardized Extraction',
      ans : 'B'
    },
    //question 2
    {
      qnum : '2',
      ques : 'Which SQL clause is used to filter rows from a table?',
      opA : 'ORDER BY',
      opB : 'GROUP BY',
      opC : 'WHERE',
      opD : 'HAVING',
      ans : 'C'
    },
    //question 3
    {
      qnum : '3',
      ques : 'What is the purpose of the SQL "UPDATE" statement?',
      opA : 'Add new rows to a table',
      opB : 'Remove existing rows from a table',
      opC : 'Modify existing data in a table',
      opD : 'Retrieve data from a table',
      ans : 'C'
    },
    //question 4
    {
      qnum : '4',
      ques : 'Which SQL keyword is used to retrieve unique records from a table?',
      opA : 'DISTINCT',
      opB : 'UNIQUE',
      opC : 'DISTINCTROW',
      opD : 'DIFFERENT',
      ans : 'A'
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const totalQuestions = sqlQuestions.length;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleOnChange = (questionNum, selectedOption) => {
    setAnswers({ ...answers, [questionNum]: selectedOption });
    document.getElementsByName(questionNum).forEach((elem) => {
      if (elem.value === selectedOption) {
        elem.checked = true;
      } else {
        elem.checked = false;
      }
    });
  };

  return (
    <div>
      <h1>SQL Assessment</h1>
      {!showResult ? (
        <form onSubmit={handleSubmit}>
          <Question
            qnum={sqlQuestions[currentQuestion].qnum}
            ques={sqlQuestions[currentQuestion].ques}
            opA={sqlQuestions[currentQuestion].opA}
            opB={sqlQuestions[currentQuestion].opB}
            opC={sqlQuestions[currentQuestion].opC}
            opD={sqlQuestions[currentQuestion].opD}
            ans={sqlQuestions[currentQuestion].ans}
            onChange={handleOnChange}
          />
          <br/><br/>
          <button type='submit'>Submit</button>
        </form>
      ) : (
        <div className="resultContainer">
  <h2 className="resultText">SQL Assessment Results</h2>
  <p className="resultText">You have completed the SQL assessment.</p>
  <h3 className="resultText">Results:</h3>
  <ul>
    {sqlQuestions.map((question) => (
      <li key={question.qnum} className="resultItem">
        Question {question.qnum}: {question.ques}
        <br />
        Correct Answer: <span className="correctAnswer">{question.ans}</span>
        <br />
        Your Answer: {answers[question.qnum] || 'Not answered'}
        <br />
        {answers[question.qnum] === question.ans ? (
          <span className="correctAnswer">Correct</span>
        ) : (
          <span className="incorrectAnswer">Incorrect</span>
        )}
      </li>
    ))}
  </ul>
</div>

      )}
    </div>
  );
}

export function Html(){

  const htmlQuestions = [
    //question 1
    {
      qnum : '1',
      ques : 'Which HTML tag is used to define the structure of a table?',
      opA : '<table>',
      opB : '<div>',
      opC : '<section>',
      opD : '<ul>',
      ans : 'A'
    },
    //question 2
    {
      qnum : '2',
      ques : 'What does HTML stand for?',
      opA : 'Hyper Text Markup Language',
      opB : 'High Text Manipulation Language',
      opC : 'Hyperlinks and Text Markup Language',
      opD : 'High-level Text Management Language',
      ans : 'A'
    },
    //question 3
    {
      qnum : '3',
      ques : 'Which HTML attribute is used to specify the URL of the linked resource?',
      opA : 'link',
      opB : 'href',
      opC : 'src',
      opD : 'url',
      ans : 'B'
    },
    //question 4
    {
      qnum : '4',
      ques : 'Which HTML tag is used to create a hyperlink?',
      opA : '<link>',
      opB : '<a>',
      opC : '<href>',
      opD : '<hyperlink>',
      ans : 'B'
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const totalQuestions = htmlQuestions.length;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleOnChange = (questionNum, selectedOption) => {
    setAnswers({ ...answers, [questionNum]: selectedOption });
    document.getElementsByName(questionNum).forEach((elem) => {
      if (elem.value === selectedOption) {
        elem.checked = true;
      } else {
        elem.checked = false;
      }
    });
  };

  return (
    <div>
      <h1>HTML Assessment</h1>
      {!showResult ? (
        <form onSubmit={handleSubmit}>
          <Question
            qnum={htmlQuestions[currentQuestion].qnum}
            ques={htmlQuestions[currentQuestion].ques}
            opA={htmlQuestions[currentQuestion].opA}
            opB={htmlQuestions[currentQuestion].opB}
            opC={htmlQuestions[currentQuestion].opC}
            opD={htmlQuestions[currentQuestion].opD}
            ans={htmlQuestions[currentQuestion].ans}
            onChange={handleOnChange}
          />
          <br/><br/>
          <button type='submit'>Submit</button>
        </form>
      ) : (
        <div className="resultContainer">
  <h2 className="resultText">HTML Assessment Results</h2>
  <p className="resultText">You have completed the HTML assessment.</p>
  <h3 className="resultText">Results:</h3>
  <ul>
    {htmlQuestions.map((question) => (
      <li key={question.qnum} className="resultItem">
        Question {question.qnum}: {question.ques}
        <br />
        Correct Answer: <span className="correctAnswer">{question.ans}</span>
        <br />
        Your Answer: {answers[question.qnum] || 'Not answered'}
        <br />
        {answers[question.qnum] === question.ans ? (
          <span className="correctAnswer">Correct</span>
        ) : (
          <span className="incorrectAnswer">Incorrect</span>
        )}
      </li>
    ))}
  </ul>
</div>

      )}
    </div>
  );
}

