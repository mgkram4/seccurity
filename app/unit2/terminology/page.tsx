

export default function Unit2Terminology() {
  return (

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Unit 2: Key Terms and Definitions</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">Logic Gates Terms</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Logic Gate</h3>
              <p className="text-gray-700">An electronic circuit that performs a logical operation on one or more binary inputs and produces a single binary output.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">AND Gate</h3>
              <p className="text-gray-700">A logic gate that outputs 1 only when all inputs are 1; otherwise outputs 0. Used for checking if multiple conditions are true.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">OR Gate</h3>
              <p className="text-gray-700">A logic gate that outputs 1 if at least one input is 1; outputs 0 only when all inputs are 0. Used for checking if any condition is true.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">NOT Gate</h3>
              <p className="text-gray-700">A logic gate that inverts its input: changes 1 to 0 and 0 to 1. Also called an inverter.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">XOR Gate</h3>
              <p className="text-gray-700">A logic gate that outputs 1 only when inputs are different; outputs 0 when inputs are the same. Used in arithmetic operations.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Truth Table</h3>
              <p className="text-gray-700">A table showing all possible combinations of inputs and their corresponding outputs for a logic gate or circuit.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">Digital Circuits Terms</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Half Adder</h3>
              <p className="text-gray-700">A digital circuit that adds two single binary digits and produces a sum and a carry bit as output.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Full Adder</h3>
              <p className="text-gray-700">A digital circuit that adds three single binary digits (including a carry from a previous addition) and produces a sum and a carry bit.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Multiplexer (MUX)</h3>
              <p className="text-gray-700">A circuit that selects one of several input signals and forwards it to a single output line based on a selection signal.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Decoder</h3>
              <p className="text-gray-700">A circuit that converts a binary input code into a set of individual output lines, activating one specific output based on the input combination.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">Memory and Storage Terms</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">RAM (Random Access Memory)</h3>
              <p className="text-gray-700">Volatile memory that provides fast read/write access to currently active programs and data. Contents are lost when power is removed.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">ROM (Read-Only Memory)</h3>
              <p className="text-gray-700">Non-volatile memory that retains its contents even when power is removed. Generally used for storing firmware or essential system instructions.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Cache Memory</h3>
              <p className="text-gray-700">High-speed memory that acts as a buffer between RAM and the CPU, storing frequently accessed data for faster retrieval.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Virtual Memory</h3>
              <p className="text-gray-700">A memory management technique that uses hard disk space to supplement RAM, allowing programs to use more memory than physically available.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">File Types and Operations</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Text Files (.txt, .csv, .md)</h3>
              <p className="text-gray-700">Files containing human-readable characters. TXT stores plain text, CSV stores comma-separated data, and MD contains Markdown-formatted text.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Documents (.doc, .pdf, .odt)</h3>
              <p className="text-gray-700">Files containing formatted text and media. DOC is Microsoft Words format, PDF preserves formatting across platforms, and ODT is open-source.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Image Files (.jpg, .png, .gif)</h3>
              <p className="text-gray-700">Visual file formats. JPG for compressed photos, PNG for graphics with transparency, and GIF for simple animations.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Audio Files (.mp3, .wav, .flac)</h3>
              <p className="text-gray-700">Sound files. MP3 uses lossy compression, WAV is uncompressed, and FLAC offers lossless compression.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Video Files (.mp4, .avi, .mov)</h3>
              <p className="text-gray-700">Moving image formats. MP4 is widely compatible, AVI supports various codecs, and MOV is Apples QuickTime format.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Archive Files (.zip, .rar, .tar)</h3>
              <p className="text-gray-700">Compressed file containers. ZIP is common and versatile, RAR offers better compression, and TAR combines files without compression.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Executable Files (.exe, .app, .sh)</h3>
              <p className="text-gray-700">Runnable program files. EXE for Windows programs, APP for macOS applications, and SH for Unix shell scripts.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">Data Size Units</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Byte (B)</h3>
              <p className="text-gray-700">The basic unit of digital information, typically representing a single character. Consists of 8 bits.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Kilobyte (KB)</h3>
              <p className="text-gray-700">1,024 bytes. Typically the size of a small text file or simple program script.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Megabyte (MB)</h3>
              <p className="text-gray-700">1,024 kilobytes. Common size for photos, songs, or small applications.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Gigabyte (GB)</h3>
              <p className="text-gray-700">1,024 megabytes. Typical size for movies, games, or large applications.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Terabyte (TB)</h3>
              <p className="text-gray-700">1,024 gigabytes. Used for large databases, storage drives, or server systems.</p>
            </div>
          </div>
        </section>
      </div>

  );
}