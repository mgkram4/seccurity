import CodeBlock from '../components/CodeBlock';

export default function Unit2() {
  return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Unit 2: Computer Hardware and Logic</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-500">1. Logic Gates</h2>
          <div className="mb-6">
            <h3 className="text-2xl font-medium mb-2 text-blue-400">Theory</h3>
            <p className="mb-4 text-gray-700">Logic gates are the fundamental building blocks of digital circuits. They perform basic logical operations on binary inputs to produce binary outputs. Understanding these gates is crucial for computer architecture and digital design.</p>
            
            <div className="mb-4">
              <h4 className="text-xl font-medium mb-2">Basic Logic Gates:</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>AND Gate: Output is 1 only if all inputs are 1</li>
                <li>OR Gate: Output is 1 if any input is 1</li>
                <li>NOT Gate: Inverts the input</li>
                <li>NAND Gate: Combination of AND and NOT</li>
                <li>NOR Gate: Combination of OR and NOT</li>
                <li>XOR Gate: Output is 1 if inputs are different</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-medium mb-2 text-blue-400">Python Implementation</h3>
            <CodeBlock code={`
class LogicGates:
    @staticmethod
    def AND(a, b):
        return a and b
    
    @staticmethod
    def OR(a, b):
        return a or b
    
    @staticmethod
    def NOT(a):
        return not a
    
    @staticmethod
    def NAND(a, b):
        return not (a and b)
    
    @staticmethod
    def NOR(a, b):
        return not (a or b)
    
    @staticmethod
    def XOR(a, b):
        return a != b

# Test the gates
gates = LogicGates()
print("AND(1,1):", gates.AND(True, True))
print("OR(1,0):", gates.OR(True, False))
print("NOT(1):", gates.NOT(True))
print("NAND(1,1):", gates.NAND(True, True))
print("XOR(1,0):", gates.XOR(True, False))
            `} language="python" />
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-medium mb-2 text-blue-400">Practice Activity</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-xl mb-2">Logic Gate Truth Table Generator</h4>
              <p className="mb-4">Try implementing this Python code to generate truth tables for different logic gates:</p>
              <CodeBlock code={`
def generate_truth_table(gate_function, gate_name):
    print(f"\nTruth Table for {gate_name}")
    print("A | B | Output")
    print("-" * 15)
    
    for a in [False, True]:
        for b in [False, True]:
            if gate_name == "NOT":
                result = gate_function(a)
                print(f"{int(a)} | - | {int(result)}")
            else:
                result = gate_function(a, b)
                print(f"{int(a)} | {int(b)} | {int(result)}")

# Try generating tables for different gates
gates = LogicGates()
generate_truth_table(gates.AND, "AND")
generate_truth_table(gates.OR, "OR")
generate_truth_table(gates.NOT, "NOT")
              `} language="python" />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-500">2. Digital Circuits</h2>
          <div className="mb-6">
            <h3 className="text-2xl font-medium mb-2 text-blue-400">Theory</h3>
            <p className="mb-4 text-gray-700">Digital circuits combine multiple logic gates to perform more complex operations. These circuits form the basis of computer processors and memory systems.</p>
            
            <div className="mb-4">
              <h4 className="text-xl font-medium mb-2">Common Digital Circuits:</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Half Adder: Adds two single bits</li>
                <li>Full Adder: Adds three single bits</li>
                <li>Multiplexer: Selects between multiple inputs</li>
                <li>Decoder: Converts binary inputs to outputs</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-medium mb-2 text-blue-400">Python Implementation</h3>
            <CodeBlock code={`
class DigitalCircuits:
    def __init__(self):
        self.gates = LogicGates()
    
    def half_adder(self, a, b):
        sum_bit = self.gates.XOR(a, b)
        carry_bit = self.gates.AND(a, b)
        return sum_bit, carry_bit
    
    def full_adder(self, a, b, carry_in):
        sum1, carry1 = self.half_adder(a, b)
        sum_final, carry2 = self.half_adder(sum1, carry_in)
        carry_final = self.gates.OR(carry1, carry2)
        return sum_final, carry_final

# Test the circuits
circuits = DigitalCircuits()
sum_bit, carry_bit = circuits.half_adder(True, True)
print("Half Adder (1,1):", f"Sum: {int(sum_bit)}, Carry: {int(carry_bit)}")

sum_bit, carry_bit = circuits.full_adder(True, True, True)
print("Full Adder (1,1,1):", f"Sum: {int(sum_bit)}, Carry: {int(carry_bit)}")
            `} language="python" />
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-medium mb-2 text-blue-400">Practice Activity</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-xl mb-2">Binary Calculator</h4>
              <p className="mb-4">Implement a binary calculator using the circuits above:</p>
              <CodeBlock code={`
def binary_calculator():
    print("Binary Calculator")
    print("Enter two binary numbers (0 or 1) and an operation")
    
    a = bool(int(input("First number (0/1): ")))
    b = bool(int(input("Second number (0/1): ")))
    op = input("Operation (AND/OR/XOR): ").upper()
    
    gates = LogicGates()
    result = None
    
    if op == "AND":
        result = gates.AND(a, b)
    elif op == "OR":
        result = gates.OR(a, b)
    elif op == "XOR":
        result = gates.XOR(a, b)
    
    print(f"Result: {int(result)}")

# Try running: binary_calculator()
              `} language="python" />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-500">3. Memory and Storage</h2>
          <div className="mb-6">
            <h3 className="text-2xl font-medium mb-2 text-blue-400">Theory</h3>
            <p className="mb-4 text-gray-700">Computer memory and storage systems use combinations of logic gates to store and retrieve binary data. Understanding these systems helps in optimizing program performance and managing system resources.</p>
            
            <div className="mb-4">
              <h4 className="text-xl font-medium mb-2">Key Concepts:</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>RAM vs ROM</li>
                <li>Cache memory</li>
                <li>Virtual memory</li>
                <li>Storage hierarchies</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-medium mb-2 text-blue-400">Python Implementation</h3>
            <CodeBlock code={`
class SimpleMemory:
    def __init__(self, size):
        self.size = size
        self.memory = [0] * size
        self.cache = {}
    
    def write(self, address, data):
        if 0 <= address < self.size:
            self.memory[address] = data
            self.cache[address] = data
            return True
        return False
    
    def read(self, address):
        if address in self.cache:
            print("Cache hit!")
            return self.cache[address]
        if 0 <= address < self.size:
            print("Cache miss!")
            self.cache[address] = self.memory[address]
            return self.memory[address]
        return None

# Test the memory system
memory = SimpleMemory(16)
memory.write(0, 42)
print("First read:", memory.read(0))
print("Second read:", memory.read(0))
            `} language="python" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-500">Conclusion</h2>
          <p className="mb-4 text-gray-700">In this unit, weve covered:</p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Basic logic gates and their operations</li>
            <li>Digital circuits and their applications</li>
            <li>Memory systems and storage hierarchies</li>
            <li>Practical implementations in Python</li>
          </ul>
          <p className="mb-4 text-gray-700">These concepts form the foundation of computer hardware and are essential for understanding how computers process and store information.</p>
        </section>
{/* Previous sections remain the same until the last section */}

<section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-500">4. Computer Files</h2>
          <div className="mb-6">
            <h3 className="text-2xl font-medium mb-2 text-blue-400">Theory</h3>
            <p className="mb-4 text-gray-700">Computer files are units of stored information that can be manipulated by the operating system. They are fundamental to how computers organize and manage data.</p>
            
            <div className="mb-6">
              <h4 className="text-xl font-medium mb-2">Common File Types:</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li><strong>Text Files:</strong> .txt, .csv, .md</li>
                <li><strong>Documents:</strong> .doc, .pdf, .odt</li>
                <li><strong>Images:</strong> .jpg, .png, .gif</li>
                <li><strong>Audio:</strong> .mp3, .wav, .flac</li>
                <li><strong>Video:</strong> .mp4, .avi, .mov</li>
                <li><strong>Archives:</strong> .zip, .rar, .tar</li>
                <li><strong>Executables:</strong> .exe, .app, .sh</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-medium mb-2">File Sizes:</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Byte (B): A single character</li>
                <li>Kilobyte (KB): ~1,000 bytes, small text file</li>
                <li>Megabyte (MB): ~1,000 KB, photo or song</li>
                <li>Gigabyte (GB): ~1,000 MB, movie or game</li>
                <li>Terabyte (TB): ~1,000 GB, large database</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-medium mb-2 text-blue-400">Python File Operations</h3>
            <CodeBlock code={`
class FileHandler:
    @staticmethod
    def create_text_file(filename, content):
        """Create a text file with given content."""
        with open(filename, 'w') as file:
            file.write(content)
    
    @staticmethod
    def read_text_file(filename):
        """Read content from a text file."""
        try:
            with open(filename, 'r') as file:
                return file.read()
        except FileNotFoundError:
            return "File not found!"
    
    @staticmethod
    def get_file_info(filename):
        """Get information about a file."""
        import os
        try:
            stats = os.stat(filename)
            return {
                'size_bytes': stats.st_size,
                'size_kb': stats.st_size / 1024,
                'last_modified': stats.st_mtime,
                'is_file': os.path.isfile(filename)
            }
        except FileNotFoundError:
            return "File not found!"

# Example usage
handler = FileHandler()

# Create a file
handler.create_text_file('example.txt', 'Hello, World!')

# Read the file
content = handler.read_text_file('example.txt')
print(f"File content: {content}")

# Get file information
info = handler.get_file_info('example.txt')
print(f"File info: {info}")
            `} language="python" />
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-medium mb-2 text-blue-400">Practice Activity</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-xl mb-2">File Analysis Tool</h4>
              <p className="mb-4">Create a program that analyzes different types of files:</p>
              <CodeBlock code={`
def analyze_file_types(directory):
    """Analyze files in a directory and categorize them by type."""
    import os
    from collections import defaultdict
    
    file_types = defaultdict(int)
    total_size = 0
    
    for filename in os.listdir(directory):
        if os.path.isfile(os.path.join(directory, filename)):
            # Get file extension
            extension = os.path.splitext(filename)[1].lower()
            if not extension:
                extension = 'no extension'
            
            # Update counts
            file_types[extension] += 1
            
            # Update total size
            total_size += os.path.getsize(os.path.join(directory, filename))
    
    # Print report
    print("File Analysis Report")
    print("-" * 20)
    print(f"Total files: {sum(file_types.values())}")
    print(f"Total size: {total_size / 1024:.2f} KB")
    print("\nFile types found:")
    for ext, count in sorted(file_types.items()):
        print(f"{ext}: {count} files")

# Usage example:
# analyze_file_types('.')  # Analyze current directory
              `} language="python" />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-500">Conclusion</h2>
          <p className="mb-4 text-gray-700">In this unit, weve covered:</p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Basic logic gates and their operations</li>
            <li>Digital circuits and their applications</li>
            <li>Memory systems and storage hierarchies</li>
            <li>Computer files and file handling</li>
            <li>Practical implementations in Python</li>
          </ul>
          <p className="mb-4 text-gray-700">These concepts form the foundation of computer hardware and data management, essential for understanding how computers store and process information.</p>
        </section>
      </div>
  );
}