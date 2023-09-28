import React, { useRef, useEffect, useState } from 'react';
import Home from './Home';
import Corousel from './Corousel';
function App() {
  // Remove unused refs
  const name = "Nattu";

  // State for the input value
  const [inputValue, setInputValue] = useState('');

  // State for the title
  const [title, setTitle] = useState('react-app');


  const inputRef = useRef(null);

  useEffect(() => {
    // Update the document title using useEffect
    document.title = "New Title";
    setTitle("New Title"); // Update the state
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${inputValue}`);
    setInputValue(''); // Clear the input field
    inputRef.current.focus();
  };

  // Handle input value change
  const handleInputChange = (e) => {
    e.preventDefault();
    console.log(inputRef.current)
    setInputValue(e.target.value); // Update the input value state
    inputRef.current.focus();
  };

  return (
    <div>
      <Corousel />
    
    </div>
  );
}

export default App;
