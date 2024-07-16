"use client";

import { useState } from 'react';

interface TextInputProps {
  onSubmit: (input: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter your query..." 
        required 
        className="border border-gray-300 p-2 rounded w-full text-black"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default TextInput;
