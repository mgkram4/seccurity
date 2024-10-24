// pages/index.tsx
import Link from 'next/link';

export default function HomePage() {
  return (

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-8 text-center text-blue-600">
          Introduction to Cyber Security
        </h1>
        
        <div className="mb-12 text-xl text-center text-gray-700">
          <p className="mb-4">
            Welcome to the Introduction to Cyber Security course! In this course, you will learn 
            the fundamental concepts and principles that form the foundation of secure digital systems.
          </p>
          <p>
            Throughout the course, well explore topics such as binary and hexadecimal number systems, 
            text encoding, analog-to-digital conversion, and the limitations of digital data representation.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-500">Course Prerequisites</h2>
          <p className="mb-4 text-gray-700">
            To get the most out of this course, it is recommended that you have:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>A Google account to access Google Colaboratory</li>
            <li>Basic familiarity with Python programming</li>
            <li>Curiosity to learn about the inner workings of digital systems!</li>
          </ul>
          <p className="text-gray-700">
            Throughout the course, youll use Google Colaboratory and Jupyter Notebooks to explore 
            code examples and complete exercises. This interactive environment will allow you to 
            gain hands-on experience with the concepts you learn.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-500">Course Modules</h2>
          <p className="mb-4 text-gray-700">
            The course is divided into several modules, each focusing on a key aspect of digital information:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-700">
            <li>
              <Link href="/unit1" passHref>
                <p className="text-blue-600 hover:underline">Digital Information</p>
              </Link>
            </li>
            <li>
              <Link href="/unit2" passHref>
                <p className="text-blue-600 hover:underline">Computers</p>
              </Link>
            </li>
            <li>
              <Link href="/unit3" passHref>
                <p className="text-blue-600 hover:underline">The Internet</p>
              </Link>
            </li>
            <li>
              <Link href="/unit4" passHref>
                <p className="text-blue-600 hover:underline">Online data security</p>
              </Link>
            </li>
            <li>
              <Link href="/unit5" passHref>
                <p className="text-blue-600 hover:underline">Computing innovations</p>
              </Link>
            </li>

            {/* Add more modules as needed */}
          </ol>
          <p className="text-gray-700">
            Click on a module to dive into the material and start your learning journey!
          </p>
        </div>

        <div className="text-center">
          <Link href="/unit1" passHref>
            <p className="inline-block bg-blue-600 text-white text-xl font-semibold px-6 py-3 rounded-lg
              hover:bg-blue-700 transition duration-200">
              Start Learning!
            </p>
          </Link>
        </div>
      </div>

  );
}