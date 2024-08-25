import React, { useEffect, useState } from 'react';
import InputForm from './InputForm';
import ResponseFilter from './ResponseFilter';

function App() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    document.title = "21BCB7124"; // Replace with your actual roll number
  }, []);

  return (
    <div className="App">
      <InputForm setResponse={setResponse} />
      {response && <ResponseFilter response={response} />}
    </div>
  );
}

export default App;
