import { Router } from 'express'


const route = Router();

route.get('/', (req, res) => {
  res.send('Hello, World!');
});
route.post('/', (req, res) => {})

route.put('/',  (req, res) => {})

route.delete('/',   (req, res) => {})
