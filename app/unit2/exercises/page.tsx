'use client';

import CodeBlock from '@/app/components/CodeBlock';
import React, { useState } from 'react';

interface SolutionPanelProps {
  children: React.ReactNode;
}

const SolutionPanel: React.FC<SolutionPanelProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gray-100 text-blue-600 px-4 py-2 rounded hover:bg-gray-200 transition-colors w-full text-left flex justify-between items-center"
      >
        <span>{isVisible ? 'Hide Solution' : 'Show Solution'}</span>
        <span className="transform transition-transform duration-200" style={{ transform: isVisible ? 'rotate(180deg)' : '' }}>▼</span>
      </button>
      {isVisible && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
};

interface MultipleChoiceQuestionProps {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({ question, options, correctAnswer, explanation }) => {
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
      <SolutionPanel>
        <p className="font-semibold">Explanation:</p>
        <p>{explanation}</p>
      </SolutionPanel>
    </div>
  );
};

interface LogicGateExerciseProps {
  question: string;
  inputs: boolean[][];
  gateType: string;
  truthTable: boolean[];
  explanation: string;
}

const LogicGateExercise: React.FC<LogicGateExerciseProps> = ({ question, inputs, gateType, truthTable, explanation }) => {
  const [answers, setAnswers] = useState<(boolean | null)[]>(new Array(inputs.length).fill(null));
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleAnswerChange = (index: number, value: boolean) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const checkAnswer = (answer: boolean, index: number) => {
    return answer === truthTable[index];
  };

  return (
    <div className="mb-8 w-full max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <div className="space-y-2">
        {inputs.map((input, index) => (
          <div key={index} className="flex items-center space-x-4">
            <span className="w-20">Inputs: {input.map(i => i ? '1' : '0').join(', ')}</span>
            <select
              value={answers[index] === null ? '' : answers[index].toString()}
              onChange={(e) => handleAnswerChange(index, e.target.value === 'true')}
              className="border p-1 rounded"
            >
              <option value="">Select...</option>
              <option value="true">1</option>
              <option value="false">0</option>
            </select>
            {showResults && answers[index] !== null && (
              <span className={checkAnswer(answers[index]!, index) ? 'text-green-600' : 'text-red-600'}>
                {checkAnswer(answers[index]!, index) ? '✓' : '✗'}
              </span>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        Check Answers
      </button>
      <SolutionPanel>
        <div>
          <p className="font-semibold">Truth Table for {gateType} Gate:</p>
          <table className="mt-2 w-full">
            <thead>
              <tr>
                <th className="border px-2 py-1">Input A</th>
                <th className="border px-2 py-1">Input B</th>
                <th className="border px-2 py-1">Output</th>
              </tr>
            </thead>
            <tbody>
              {inputs.map((input, index) => (
                <tr key={index}>
                  <td className="border px-2 py-1 text-center">{input[0] ? '1' : '0'}</td>
                  <td className="border px-2 py-1 text-center">{input[1] ? '1' : '0'}</td>
                  <td className="border px-2 py-1 text-center">{truthTable[index] ? '1' : '0'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4">{explanation}</p>
        </div>
      </SolutionPanel>
    </div>
  );
};

const Unit2Exercises: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Unit 2: Computer Hardware Exercises</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-blue-500">Logic Gates</h2>
        
        <LogicGateExercise
          question="Complete the truth table for an AND gate:"
          inputs={[[true, true], [true, false], [false, true], [false, false]]}
          gateType="AND"
          truthTable={[true, false, false, false]}
          explanation="An AND gate outputs 1 (true) only when both inputs are 1. In all other cases, it outputs 0 (false)."
        />

        <LogicGateExercise
          question="Complete the truth table for an OR gate:"
          inputs={[[true, true], [true, false], [false, true], [false, false]]}
          gateType="OR"
          truthTable={[true, true, true, false]}
          explanation="An OR gate outputs 1 (true) when at least one input is 1. It only outputs 0 (false) when both inputs are 0."
        />

        <MultipleChoiceQuestion
          question="What is the output of a NAND gate when both inputs are 1?"
          options={["0", "1", "Undefined", "Depends on the circuit"]}
          correctAnswer={0}
          explanation="A NAND gate is the opposite of an AND gate. Since an AND gate outputs 1 when both inputs are 1, a NAND gate outputs 0 in this case."
        />

        <MultipleChoiceQuestion
          question="Which logic gate performs the opposite function of an OR gate?"
          options={["AND", "NAND", "NOR", "XOR"]}
          correctAnswer={2}
          explanation="A NOR gate performs the exact opposite function of an OR gate. When an OR gate would output 1, a NOR gate outputs 0, and vice versa."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-blue-500">Digital Circuits</h2>

        <MultipleChoiceQuestion
          question="In a half adder circuit, what are the outputs?"
          options={[
            "Only Sum",
            "Only Carry",
            "Sum and Carry",
            "Difference and Borrow"
          ]}
          correctAnswer={2}
          explanation="A half adder produces two outputs: a sum bit (using XOR) and a carry bit (using AND). Both are necessary for binary addition."
        />

        <MultipleChoiceQuestion
          question="What is the main difference between a half adder and a full adder?"
          options={[
            "Full adder can handle larger numbers",
            "Full adder has three inputs instead of two",
            "Full adder is more accurate",
            "Full adder uses fewer gates"
          ]}
          correctAnswer={1}
          explanation="A full adder has three inputs (two bits to add plus a carry-in), while a half adder only has two inputs. This allows full adders to be chained together for multi-bit addition."
        />

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Implement a Half Adder</h3>
          <CodeBlock code={`
# Implement a half adder using Python
def half_adder(a: bool, b: bool) -> tuple[bool, bool]:
    """
    Implement a half adder that returns (sum, carry)
    Example: half_adder(True, True) should return (False, True)
    """
    # Your implementation here
    pass

# Test cases:
print(half_adder(True, True))   # Should output: (False, True)
print(half_adder(True, False))  # Should output: (True, False)
print(half_adder(False, True))  # Should output: (True, False)
print(half_adder(False, False)) # Should output: (False, False)
          `} language="python" />
          <SolutionPanel>
            <CodeBlock code={`
def half_adder(a: bool, b: bool) -> tuple[bool, bool]:
    """
    Implement a half adder that returns (sum, carry)
    Sum is implemented using XOR
    Carry is implemented using AND
    """
    sum_bit = a != b  # XOR operation
    carry_bit = a and b  # AND operation
    return (sum_bit, carry_bit)

# Test cases
print(half_adder(True, True))   # (False, True)  - 1 + 1 = 10 in binary
print(half_adder(True, False))  # (True, False)  - 1 + 0 = 1 in binary
print(half_adder(False, True))  # (True, False)  - 0 + 1 = 1 in binary
print(half_adder(False, False)) # (False, False) - 0 + 0 = 0 in binary
            `} language="python" />
            <p className="mt-4">
              The half adder uses two logic gates:
              1. XOR gate for the sum bit (true when inputs are different)
              2. AND gate for the carry bit (true only when both inputs are true)
            </p>
          </SolutionPanel>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-blue-500">Memory and Storage</h2>

        <MultipleChoiceQuestion
          question="Which type of memory is volatile?"
          options={["ROM", "Hard Drive", "RAM", "Flash Memory"]}
          correctAnswer={2}
          explanation="RAM (Random Access Memory) is volatile, meaning it loses its contents when power is removed. All other options maintain their data even without power."
        />

        <MultipleChoiceQuestion
          question="What is the primary advantage of cache memory?"
          options={[
            "Larger storage capacity",
            "Non-volatile storage",
            "Faster access speed",
            "Lower cost"
          ]}
          correctAnswer={2}
          explanation="Cache memory's primary advantage is its very fast access speed. It serves as a buffer between main memory and the CPU, storing frequently accessed data for quick retrieval."
        />

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Cache Simulator Implementation</h3>
          <CodeBlock code={`
class CacheSimulator:
    def __init__(self, size: int):
        """
        Implement a simple cache simulator with the given size
        Track hits and misses when accessing data
        """
        # Your implementation here
        pass
    
    def access(self, address: int) -> bool:
        """
        Return True for cache hit, False for cache miss
        Update cache contents accordingly
        """
        # Your implementation here
        pass

# Example usage:
cache = CacheSimulator(4)
print(cache.access(1))  # Miss (False)
print(cache.access(1))  # Hit (True)
          `} language="python" />
          <SolutionPanel>
            <CodeBlock code={`
class CacheSimulator:
    def __init__(self, size: int):
        """Initialize cache with given size"""
        self.size = size
        self.cache = {}
        self.hits = 0
        self.misses = 0
    
    def access(self, address: int) -> bool:
        """Simulate cache access"""
        cache_line = address % self.size
        
        if cache_line in self.cache and self.cache[cache_line] == address:
            self.hits += 1
            return True
        else:
            self.misses += 1
            self.cache[cache_line] = address
            return False
    
    def get_stats(self):
        """Return cache statistics"""
        total = self.hits + self.misses
        hit_rate = (self.hits / total * 100) if total > 0 else 0
        return {
            'hits': self.hits,
            'misses': self.misses,
            'hit_rate': f"{hit_rate:.2f}%"
        }

# Test the implementation
cache = CacheSimulator(4)
print(cache.access(1))  # False (miss)
print(cache.access(1))  # True (hit)
print(cache.access(5))  # False (miss, same cache line as 1)
print(cache.get_stats())
            `} language="python" />
           <p className="mt-4">
                This implementation simulates a direct-mapped cache where:
                1. Each address maps to a specific cache line using modulo
                2. Cache hits/misses are tracked for statistics
                3. The cache automatically handles replacement when needed
              </p>
            </SolutionPanel>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-500">Challenge Questions</h2>

          <MultipleChoiceQuestion
            question="What is the minimum number of logic gates needed to implement a half adder?"
            options={["1", "2", "3", "4"]}
            correctAnswer={1}
            explanation="A half adder requires exactly 2 gates: an XOR gate for the sum and an AND gate for the carry output. These are the minimum gates needed for binary addition of two bits."
          />

          <MultipleChoiceQuestion
            question="Which combination of gates can be used to create any other logic gate?"
            options={[
              "AND and OR",
              "NAND only",
              "NOR only",
              "XOR and AND"
            ]}
            correctAnswer={1}
            explanation="NAND gates are universal gates, meaning any other logic function can be constructed using only NAND gates. This makes NAND gates fundamental to digital circuit design."
          />

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Full Adder Implementation Challenge</h3>
            <CodeBlock code={`
# Challenge: Implement a full adder using only NAND gates
def nand(a: bool, b: bool) -> bool:
    """Basic NAND gate implementation"""
    return not (a and b)

def full_adder(a: bool, b: bool, carry_in: bool) -> tuple[bool, bool]:
    """
    Implement a full adder using only NAND gates
    Return (sum, carry_out)
    """
    # Your implementation here
    pass

# Test your implementation
print(full_adder(True, True, True))    # Should output: (True, True)
print(full_adder(True, True, False))   # Should output: (False, True)
            `} language="python" />
            <SolutionPanel>
              <CodeBlock code={`
def nand(a: bool, b: bool) -> bool:
    """Basic NAND gate implementation"""
    return not (a and b)

def full_adder(a: bool, b: bool, carry_in: bool) -> tuple[bool, bool]:
    """
    Implement a full adder using only NAND gates
    Returns (sum, carry_out)
    """
    # Create NOT gate using NAND
    def NOT(x): return nand(x, x)
    
    # Create AND gate using NAND
    def AND(x, y): return NOT(nand(x, y))
    
    # Create OR gate using NAND
    def OR(x, y): return nand(NOT(x), NOT(y))
    
    # Create XOR gate using NAND
    def XOR(x, y):
        nand1 = nand(x, y)
        nand2 = nand(x, nand1)
        nand3 = nand(y, nand1)
        return nand(nand2, nand3)
    
    # Calculate sum using XOR gates
    sum_bit = XOR(XOR(a, b), carry_in)
    
    # Calculate carry using NAND combinations
    c1 = AND(a, b)
    c2 = AND(b, carry_in)
    c3 = AND(a, carry_in)
    carry_out = OR(OR(c1, c2), c3)
    
    return (sum_bit, carry_out)

# Test cases
print("Full Adder Test Cases:")
print(full_adder(True, True, True))     # (True, True)   - 1 + 1 + 1 = 11
print(full_adder(True, True, False))    # (False, True)  - 1 + 1 + 0 = 10
print(full_adder(True, False, False))   # (True, False)  - 1 + 0 + 0 = 01
print(full_adder(False, False, False))  # (False, False) - 0 + 0 + 0 = 00
              `} language="python" />
              <div className="mt-4">
                <p className="font-semibold">Implementation Explanation:</p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                  <li>First, we build basic gates (NOT, AND, OR, XOR) using only NAND gates</li>
                  <li>The XOR implementation uses 4 NAND gates in a specific arrangement</li>
                  <li>The sum bit is calculated using two XOR operations</li>
                  <li>The carry out is calculated using AND and OR combinations</li>
                  <li>All operations ultimately use only NAND gates internally</li>
                </ol>
              </div>
            </SolutionPanel>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-500">Additional Resources</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Further Reading</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Digital Logic Design Fundamentals</li>
              <li>Computer Organization and Architecture</li>
              <li>Memory Systems in Modern Computers</li>
              <li>Advanced Circuit Design Techniques</li>
            </ul>
            <div className="mt-4">
              <p className="text-gray-700">
                These exercises cover the basics of digital logic and computer hardware. 
                For more advanced topics, consider exploring computer architecture and 
                digital system design courses.
              </p>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Unit2Exercises;