import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, '..', 'data', 'users.json'), "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao ler o arquivo" });
    }

    try {
      const users = JSON.parse(data);
      return res.json(users);
    } catch (parseError) {
      return res.status(500).json({ error: "Erro ao parsear o JSON" });
    }
  });
});

router.get("/:id", (req, res) => {
  const userId = req.params.id;

  fs.readFile(path.join(__dirname, '..', 'data', 'users.json'), "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao ler o arquivo" });
    }

    try {
      const users = JSON.parse(data);
      const selectedUser = users.find(user => user._id === userId);

      if (selectedUser) {
        return res.json(selectedUser);
      } else {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
    } catch (parseError) {
      return res.status(500).json({ error: "Erro ao parsear o JSON" });
    }
  });
});

export default router;