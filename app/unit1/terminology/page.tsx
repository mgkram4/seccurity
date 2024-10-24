

export default function Unit1Terminology() {
  return (
  
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Unit 1: Digital Information Terms</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">Bits and Bytes</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Bit</h3>
              <p className="text-gray-700">The smallest unit of digital information, representing either a 0 or 1. Its the fundamental building block of all digital data.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Byte</h3>
              <p className="text-gray-700">A unit of digital information consisting of 8 bits. One byte can represent 256 different values (2^8) and typically stores one character of text.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Kilobyte (KB)</h3>
              <p className="text-gray-700">1,024 bytes of digital information. The prefix kilo in computing typically represents 2^10 rather than 1,000.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Megabyte (MB)</h3>
              <p className="text-gray-700">1,024 kilobytes. Common unit for measuring medium-sized files like images or documents.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Gigabyte (GB)</h3>
              <p className="text-gray-700">1,024 megabytes. Commonly used to measure storage capacity of drives and large files.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Terabyte (TB)</h3>
              <p className="text-gray-700">1,024 gigabytes. Used for very large storage systems and databases.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">Binary Number System</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Binary</h3>
              <p className="text-gray-700">A base-2 number system using only 0s and 1s. The foundation of digital computing and data storage.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Binary Digit (Bit)</h3>
              <p className="text-gray-700">A single position in a binary number, representing either 0 or 1, corresponding to off or on states in digital circuits.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Most Significant Bit (MSB)</h3>
              <p className="text-gray-700">The leftmost bit in a binary number, representing the largest value and often used for sign indication.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Least Significant Bit (LSB)</h3>
              <p className="text-gray-700">The rightmost bit in a binary number, representing the smallest value (2^0).</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">Hexadecimal System</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Hexadecimal</h3>
              <p className="text-gray-700">A base-16 number system using digits 0-9 and letters A-F. Used to represent binary data more compactly.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Hexadecimal Digit</h3>
              <p className="text-gray-700">A single position in a hexadecimal number, representing values from 0 to 15 (0-9, A-F). Each hex digit represents 4 binary digits.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Color Code</h3>
              <p className="text-gray-700">A hexadecimal representation of colors in computing, typically in the format #RRGGBB, where each pair represents red, green, and blue values.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">Number Storage Limitations</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Integer Overflow</h3>
              <p className="text-gray-700">Occurs when an arithmetic operation attempts to create a numeric value that exceeds the available space in memory.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Floating-Point</h3>
              <p className="text-gray-700">A method for representing real numbers in binary, consisting of a mantissa and an exponent. Can lead to precision issues due to limited bits.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Underflow</h3>
              <p className="text-gray-700">Occurs when a number becomes too small to be represented in the available precision, typically in floating-point calculations.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Rounding Error</h3>
              <p className="text-gray-700">Discrepancy between the actual value and its binary representation, common in floating-point arithmetic.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">Text Encoding</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">ASCII</h3>
              <p className="text-gray-700">American Standard Code for Information Interchange. A 7-bit encoding scheme representing 128 characters, including English letters, numbers, and basic symbols.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Unicode</h3>
              <p className="text-gray-700">A universal encoding standard designed to represent characters from all writing systems. Supports over 140,000 characters.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">UTF-8</h3>
              <p className="text-gray-700">A variable-width encoding that uses 1 to 4 bytes per character. Backwards compatible with ASCII and widely used on the internet.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">Analog to Digital Conversion</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Sampling</h3>
              <p className="text-gray-700">The process of measuring an analog signal at regular intervals to convert it to digital form.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Quantization</h3>
              <p className="text-gray-700">The process of converting sampled values to discrete digital levels, introducing some degree of error.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Sampling Rate</h3>
              <p className="text-gray-700">The number of samples taken per second when converting analog to digital. Higher rates capture more detail but require more storage.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Nyquist-Shannon Sampling Theorem</h3>
              <p className="text-gray-700">States that to accurately reconstruct a signal, the sampling rate must be at least twice the highest frequency component in the signal.</p>
            </div>
          </div>
        </section>
      </div>

  );
}