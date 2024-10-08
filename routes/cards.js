const express = require('express');

const router = express.Router();

const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, '..', 'data', 'cards.json'), 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao ler o arquivo' });
    }
    try {
      const response = JSON.parse(data);
      return res.json(response);
    } catch (parseError) {
      return res.status(500).json({ message: 'Erro ao parsear o JSON' });
    }
  });
});

module.exports = router;
