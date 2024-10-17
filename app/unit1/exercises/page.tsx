// app/unit1/exercises/page.tsx
'use client';


import CodeBlock from '@/app/components/CodeBlock';
import React, { useState } from 'react';

interface MultipleChoiceQuestionProps {
  question: string;
  options: string[];
  correctAnswer: number;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({ question, options, correctAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleSubmit = () => {
    setShowResult(true);
  };

  return (
    <div className="mb-8 m-20 flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <div className="space-y-2">
        {options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={`q${index}`}
              name="answer"
              value={index}
              checked={selectedAnswer === index}
              onChange={() => setSelectedAnswer(index)}
              className="mr-2"
            />
            <label htmlFor={`q${index}`}>{option}</label>
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
      {showResult && (
        <p className={`mt-2 ${selectedAnswer === correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
          {selectedAnswer === correctAnswer ? 'Correct!' : 'Incorrect. Try again!'}
        </p>
      )}
    </div>
  );
};

interface ConversionExerciseProps {
  question: string;
  inputPlaceholder: string;
  checkAnswer: (input: string) => boolean;
}

const ConversionExercise: React.FC<ConversionExerciseProps> = ({ question, inputPlaceholder, checkAnswer }) => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<boolean | null>(null);

  const handleSubmit = () => {
    setResult(checkAnswer(input));
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={inputPlaceholder}
        className="border p-2 mr-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
      {result !== null && (
        <p className={`mt-2 ${result ? 'text-green-600' : 'text-red-600'}`}>
          {result ? 'Correct!' : 'Incorrect. Try again!'}
        </p>
      )}
    </div>
  );
};

const Unit1Exercises: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Unit 1: Exercises</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-blue-500">Multiple Choice Questions</h2>
        
        <MultipleChoiceQuestion
          question="How many bits are in a byte?"
          options={["4", "8", "16", "32"]}
          correctAnswer={1}
        />

        <MultipleChoiceQuestion
          question="Which of the following is NOT a common text encoding system?"
          options={["ASCII", "Unicode", "UTF-8", "JPEG"]}
          correctAnswer={3}
        />

        <MultipleChoiceQuestion
          question="What is the hexadecimal representation of the decimal number 255?"
          options={["FF", "00", "11", "EE"]}
          correctAnswer={0}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-blue-500">Conversion Exercises</h2>

        <ConversionExercise
          question="Convert the binary number 1010 to decimal:"
          inputPlaceholder="Enter decimal number"
          checkAnswer={(input: string) => parseInt(input) === 10}
        />

        <ConversionExercise
          question="Convert the decimal number 42 to binary:"
          inputPlaceholder="Enter binary number"
          checkAnswer={(input: string) => input === "101010"}
        />

        <ConversionExercise
          question="Convert the hexadecimal number A5 to decimal:"
          inputPlaceholder="Enter decimal number"
          checkAnswer={(input: string) => parseInt(input) === 165}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-blue-500">Code Exercise</h2>
        <p className="mb-4">Implement a function to perform binary addition without using built-in conversion functions:</p>
        <CodeBlock code={`
def binary_add(a: str, b: str) -> str:
    # Your implementation here
    pass

# Test your function
print(binary_add('1010', '1011'))  # Should output '10101'
        `} language="python" />
        <p className="mt-2">Implement this function and test it with various inputs to ensure it works correctly.</p>
      </section>
    </>
  );
};

export default Unit1Exercises;