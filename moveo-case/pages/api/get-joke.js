// pages/api/get-joke.js

import axios from 'axios';

export default async function handler(req, res) {
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
      res.status(200).json({context: {joke: response.data, req:req.body}});
    } catch (error) {
      // Em caso de erro, retorna a mensagem de erro
      res.status(500).json({ error: error.message });
    }
}
