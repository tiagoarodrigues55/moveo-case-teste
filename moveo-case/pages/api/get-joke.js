// pages/api/get-joke.js

const JokeAPI = require('sv443-joke-api');
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const response = await JokeAPI.getJokes(lang='pt')
        .then((res) => res.json())
        .then((data) => {
          res.status(200).json(data);
        });

      // Retorna o conteúdo da resposta recebida
    } catch (error) {
      // Em caso de erro, retorna a mensagem de erro
      res.status(500).json({ error: error.message });
    }
  } else {
    // Retorna 405 se o método não for GET
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
