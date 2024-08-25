// InputForm.js
import React, { useState } from 'react';
import axios from 'axios';

const InputForm = ({ setResponse }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedInput = JSON.parse(input);
      const response = await axios.post('http://localhost:3000/bfhl', parsedInput);
      setResponse(response.data);
      setError('');
    } catch (err) {
      setError('Invalid JSON format or server error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='{"data":["A","B","C"]}'
      />
      <button type="submit">Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default InputForm;
