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
      <div className='ai-support'>
        <div className="ai-answer">
          <p className="text-white">{response}</p>
        </div>
        <form onSubmit={handleSubmit} className='ai-form'>
          <textarea
            value={prompt}
            onChange={handleInputChange}
            placeholder="Enter your prompt..." className='input-qus'
          />
          <button type="submit" className='d-block ms-auto send-btn'>Submit</button>
        </form>
      </div>
    </main>
  );
}

export default OpenAIChat;