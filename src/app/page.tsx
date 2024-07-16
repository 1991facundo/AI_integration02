"use client";

import { useState } from 'react';
import TextInput from './../components/TextInput';
import axios from 'axios';

const Home = () => {
  const [response, setResponse] = useState('');

  const handleQuery = async (input: string) => {
    try {
      const result = await axios.post('/api/generate', { query: input });
      setResponse(result.data.text);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4  ">AI Text Generator</h1>
      <TextInput onSubmit={handleQuery} />
      {response && <p className="mt-4 p-4 bg-white border border-gray-300 text-black rounded shadow">{response}</p>}
    </div>
  );
};

export default Home;
