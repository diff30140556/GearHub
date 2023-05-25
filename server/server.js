const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { Configuration, OpenAIApi } = require('openai');
const cors = require('cors');
require('dotenv').config();

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

app.post('/api/openai', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `You are an electronic expert. You can only answer questions about electronics and technologies.
      ${prompt}?`,
      max_tokens: 150,
      temperature: 0.5,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    const responseData = response.data.choices[0].text.trim().replace(/\n/g, '');
    return res.status(200).json({
      success: true,
      data: responseData,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      error: error.response ? error.response.data : 'There was an issue on the server',
    });
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
  startApolloServer();
  
