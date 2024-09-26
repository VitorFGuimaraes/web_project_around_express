import { Router } from "express";
import  fs  from "fs";
import  path  from "path";
const router = Router();
const dirname = path.resolve();


router.get("/", (req, res) => {
  fs.readFile(path.join(dirname,'..', 'data','users.json'),  { encoding: "utf-8" }, (err,  data) => {
    return res.json(data);
  })
});

export default router;