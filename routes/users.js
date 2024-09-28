import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const router = Router();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, '..' , 'data', 'users.json'), "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao ler o arquivo" });
    }

    try {
      const response = JSON.parse(data);
      return res.json(response); //
    } catch (parseError) {
      return res.status(500).json({ error: "Erro ao parsear o JSON" });
    }
  });
});

export default router;
