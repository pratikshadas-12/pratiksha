import React, { useState } from "react";

function Quiz() {
  const questions = [
    {
      questionText: "What are the advantages of arrays?",
        answerOptions: [
        { answerText: "Objects of mixed data types can be stored", isCorrect: false },
        { answerText: "Elements in an array cannot be sorted", isCorrect: false },
        { answerText:  "Index of first element of an array is 1", isCorrect: true },
        { answerText:  "Easier to store elements of same data type", isCorrect: false }
      ]
  },
  {
    questionText: "In general, the index of the first element in an array is __________",
 answerOptions: [
{ answerText:   "0", isCorrect: true },
{ answerText: "-1", isCorrect: false },
{ answerText:  "2", isCorrect: false },
{ answerText:  "1", isCorrect: false }
]
  },
  {
      questionText: "A linear list of elements in which deletion can be done from one end (front) and insertion can take place only at the other end (rear) is known as _____________",
        answerOptions: [
        { answerText: "Queue", isCorrect: true },
        { answerText: "Stack", isCorrect: false },
        { answerText: "Tree", isCorrect: false },
        { answerText: "Linked list", isCorrect: false }
      ]
    },
    {
      questionText: "If the elements “A”, “B”, “C” and “D” are placed in a queue and are deleted one at a time, in what order will they be removed?",
            answerOptions: [
        { answerText: "ABCD", isCorrect: true },
        { answerText: "DCBA", isCorrect: false },
        { answerText:  "DCAB", isCorrect: false },
        { answerText: "ABDC", isCorrect: false }
      ]
    },
    
    {
      questionText: "A circular queue is implemented using an array of size 10. The array index starts with 0, front is 6, and rear is 9. The insertion of next element takes place at the array index.",
             answerOptions: [
        { answerText: "0", isCorrect: true },
        { answerText: "7", isCorrect: false },
        { answerText:  "9", isCorrect: false },
        { answerText: "10", isCorrect: false }
      ]
    },
    {
      questionText: "An array of size MAX_SIZE is used to implement a circular queue. Front, Rear, and count are tracked. Suppose front is 0 and rear is MAX_SIZE -1. How many elements are present in the queue?",
        answerOptions: [
        { answerText: "Zero", isCorrect: false },
        { answerText: "One", isCorrect: false },
        { answerText:  "MAX_SIZE-1", isCorrect: true },
        { answerText: "MAX_SIZE", isCorrect: false }
      ]
    },
    {
      questionText: "In a stack, if a user tries to remove an element from an empty stack it is called _________",
             answerOptions: [
        { answerText: "Underflow", isCorrect: true },
        { answerText: "Empty collection", isCorrect: false },
        { answerText:  "Overflow", isCorrect: false },
        { answerText: "Garbage Collection", isCorrect: false }
      ]
},
{
  questionText: "The data structure required to check whether an expression contains balanced parenthesis is",
         answerOptions: [
    { answerText: "Stack", isCorrect: true },
    { answerText: "Queue", isCorrect: false },
    { answerText:  "Array", isCorrect: false },
    { answerText: "Tree", isCorrect: false }
  ]
},
{
  questionText: "Merge sort uses which of the following technique to implement sorting?",
        answerOptions: [
        { answerText: "backtracking", isCorrect: false },
        { answerText: " greedy algorithm", isCorrect: false },
        { answerText: "divide and conquer", isCorrect: true},
        { answerText: "dynamic programming", isCorrect: false }
      ]
},
{
  questionText: " What is the auxiliary space complexity of merge sort?",
        answerOptions: [
        { answerText: "O(n log n)", isCorrect: true },
        { answerText: "  O(n2)", isCorrect: false },
        { answerText: "O(n2 log n)", isCorrect: false},
        { answerText: "O(n log n2)", isCorrect: false }
      ]
},
{
  questionText: " On which algorithm is heap sort based on?",
  answerOptions: [
  { answerText: "Fibonacci heap", isCorrect: false},
  { answerText: " Binary tree", isCorrect: false },
  { answerText: "Priority queue", isCorrect: true},
  { answerText: "FIFO", isCorrect: false }
]
},
{
questionText: " Heap sort is faster than Shell sort.",
  answerOptions: [
  { answerText: "true", isCorrect: false},
  
  { answerText: "false", isCorrect: true},
 
]
},
{
  questionText: " Which is the safest method to choose a pivot element?",
        answerOptions: [
        { answerText: "choosing a random element as pivot", isCorrect: true},
        { answerText: " choosing the first element as pivot", isCorrect: false },
        { answerText: "choosing the last element as pivot", isCorrect: false},
        { answerText: "median-of-three partitioning method", isCorrect: false }
      ]
    },
    {
questionText: " What is the average running time of a quick sort algorithm?",
        answerOptions: [
        { answerText: "O(N2)", isCorrect: false},
        { answerText: " O(N)", isCorrect: false },
        { answerText: "O(N log N)", isCorrect: true},
        { answerText: "O(log N)", isCorrect: false }
      ]

},
{
  questionText: " What is the average case complexity of bubble sort?",
  answerOptions: [
  { answerText: "O(nlogn)", isCorrect: false},
  { answerText: " O(logn)", isCorrect: false },
  { answerText: "O(n)", isCorrect: false},
  { answerText: "O(n2)", isCorrect: true }
]
},
{
questionText: "In a bubble sort structure, there is/are?",
  answerOptions: [
  { answerText: "A single for loop", isCorrect: false},
  { answerText: " Three for loops, all separate", isCorrect: false },
  { answerText: "A while loop", isCorrect: false},
  { answerText: "Two for loops, one nested in the other", isCorrect: true }
]
},
{
  questionText: "Which of the following algorithm implementations is similar to that of an insertion sort?",
        answerOptions: [
        { answerText: "Binary heap", isCorrect: true},
        { answerText: " Quick sort", isCorrect: false },
        { answerText: "Merge sort", isCorrect: false},
        { answerText: "Radix sort", isCorrect: false }
      ]
    },
    {
questionText: "How many passes does an insertion sort algorithm consist of?",
        answerOptions: [
        { answerText: "N", isCorrect: false},
        { answerText: " N-1", isCorrect: true },
        { answerText: "N+1", isCorrect: false},
        { answerText: "N2", isCorrect: false }
      ]
},
{
  questionText: "What are the applications of dequeue?",
        answerOptions: [
        { answerText: "To avoid collision in hash tables", isCorrect: true},
        { answerText: " A-Steal job scheduling algorithm", isCorrect: false },
        { answerText: "Can be used as both stack and queue", isCorrect: false},
        { answerText: "To find the maximum of all sub arrays of size k", isCorrect: false }
      ]
  },
  {
questionText: "What is a dequeue?",
        answerOptions: [
        { answerText: "A queue implemented with a doubly linked list", isCorrect: false},
        { answerText: " A queue with insert/delete defined for both front and rear ends of the queue", isCorrect: true },
        { answerText: "A queue implemented with both singly and doubly linked lists", isCorrect: false},
        { answerText: "A queue with insert/delete defined for front side of the queue", isCorrect: false }
      ]
}
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;

    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <h1 className="header">Quiz</h1>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>
                {questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>

            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <button
                  onClick={() =>
                    handleAnswerButtonClick(answerOptions.isCorrect)
                  }
                >
                  {answerOptions.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Quiz;
