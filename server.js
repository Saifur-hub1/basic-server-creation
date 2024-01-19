const express = require('express');

const app = express();

const books = [
  {
    id: '1',
    name: 'Personal Finance',
    price:500
  },
  
  {
    id: '2',
    name: 'Fire of Wings',
    price:700
  },
  {
    id: '3',
    name: 'Poor Dad Poor Child',
    price:250
  },
  {
    id: '3',
    name: 'Think and Grow Rich',
    price:600
  },
  {
    id: '4',
    name: 'Life waves',
    price:1400
  },
  {
    id: '5',
    name: 'Mental Health',
    price:2000
  },
  {
    id: '6',
    name: 'Mans war',
    price:500
  }
]

app.get('/books',(req, res)=>{
  // console.log(req.query);
  if(req.query.show==='all'){
    return res.json(books);
  }
  const result = books.filter((book)=> book.price<=500);
  res.json(result);
});

app.listen(8000, ()=>{
  console.log('Server is listening on port 8000');
});