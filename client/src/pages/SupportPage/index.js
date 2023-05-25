import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function OpenAIChat() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/openai', { prompt });
      setResponse(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={prompt}
            onChange={handleInputChange}
            placeholder="Enter your prompt..."
          />
          <button type="submit">Submit</button>
        </form>
        <p className="text-white">{response}</p>
      </div>
    </main>
  );
}

export default OpenAIChat;