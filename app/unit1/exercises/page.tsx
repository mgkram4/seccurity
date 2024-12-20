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
    <div className="mb-8 w-full max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <div className="space-y-2">
        {options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={`q${question.replace(/\s/g, '')}-${index}`}
              name={`answer-${question.replace(/\s/g, '')}`}
              value={index}
              checked={selectedAnswer === index}
              onChange={() => setSelectedAnswer(index)}
              className="mr-2"
            />
            <label htmlFor={`q${question.replace(/\s/g, '')}-${index}`}>{option}</label>
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
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
    <div className="mb-8 w-full max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={inputPlaceholder}
        className="border p-2 mr-2 w-full mb-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
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
    <div className="container mx-auto px-4">
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

        <MultipleChoiceQuestion
          question="Which of the following is a valid binary number?"
          options={["10102", "1234", "0101", "2201"]}
          correctAnswer={2}
        />

        <MultipleChoiceQuestion
          question="What is the decimal equivalent of the binary number 1100?"
          options={["6", "8", "12", "16"]}
          correctAnswer={2}
        />

        <MultipleChoiceQuestion
          question="Which number system has a base of 16?"
          options={["Binary", "Octal", "Decimal", "Hexadecimal"]}
          correctAnswer={3}
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

        <ConversionExercise
          question="Convert the decimal number 30 to hexadecimal:"
          inputPlaceholder="Enter hexadecimal number"
          checkAnswer={(input: string) => input.toLowerCase() === "1e"}
        />

        <ConversionExercise
          question="Convert the binary number 11001 to hexadecimal:"
          inputPlaceholder="Enter hexadecimal number"
          checkAnswer={(input: string) => input.toLowerCase() === "19"}
        />

        <ConversionExercise
          question="Convert the octal number 52 to decimal:"
          inputPlaceholder="Enter decimal number"
          checkAnswer={(input: string) => parseInt(input) === 42}
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
    </div>
  );
};

export default Unit1Exercises;