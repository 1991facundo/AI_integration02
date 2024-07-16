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
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter your query..." 
        required 
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TextInput;
