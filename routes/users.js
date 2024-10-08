const express = require('express');

const router = express.Router();

const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, '..', 'data', 'users.json'), 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao ler o arquivo' });
    }

    try {
      const users = JSON.parse(data);
      return res.json(users);
    } catch (parseError) {
      return res.status(500).json({ message: 'Erro ao parsear o JSON' });
    }
  });
});

router.get('/:id', (req, res) => {
  const userId = req.params.id;

  fs.readFile(path.join(__dirname, '..', 'data', 'users.json'), 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao ler o arquivo' });
    }

    try {
      const users = JSON.parse(data);
      const selectedUser = users.find((user) => user._id === userId);

      if (selectedUser) {
        return res.json(selectedUser);
      }

      return res.status(404).json({ message: 'Usuário não encontrado' });
    } catch (parseError) {
      return res.status(500).json({ message: 'Erro ao parsear o JSON' });
    }
  });
});

module.exports = router;
