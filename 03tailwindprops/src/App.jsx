import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const address =
    "https://images.pexels.com/photos/29492618/pexels-photo-29492618/free-photo-of-elegant-woman-in-red-dress-in-hoi-an-s-lantern-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <div className="max-w-sm mx-auto my-4 bg-white rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src={address}
          alt="Elegant woman in red dress"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">Card Title</h2>
          <p className="text-gray-700 mt-2">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setCount(count + 1)}
          >
            Go somewhere
          </button>
          <p className="mt-2 text-gray-500">Button clicked {count} times.</p>
        </div>
      </div>
    </>
  );
}

export default App;
