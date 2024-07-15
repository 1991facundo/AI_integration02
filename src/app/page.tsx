
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
    <div>
      <h1>AI Text Generator</h1>
      <TextInput onSubmit={handleQuery} />
      {response && <p>Response: {response}</p>}
    </div>
  );
};

export default Home;
