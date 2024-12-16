const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
  res.send('server corriendo')
})

app.get('/productos', (req, res)=>{
  res.json([{
    name: 'producto 1',
    price: 1000
  },
  {
    name: 'producto 2',
    price: 2000
  }])
})

app.get('/productos/:id', (req, res)=>{
  const {id} = req.params
  res.json({
    id,
    name: 'producto 2',
    price: 2000
  })
})

app.listen(port, ()=>{
  console.log(`server corriendo en el puerto ${port}` )
})
