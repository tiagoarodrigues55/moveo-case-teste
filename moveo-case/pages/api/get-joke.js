// pages/api/get-joke.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const response = await axios.get(
        'https://v2.jokeapi.dev/joke/Any?lang=pt',
        {},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Retorna o conteúdo da resposta recebida
      res.status(200).json({joke: response.data, req:req});
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
