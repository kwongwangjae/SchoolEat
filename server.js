const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
}); 

app.use(express.json());
var cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'eatfront/build')));

app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/eatfront/build/index.html'));
});

app.get('/product', function (요청, 응답) {
    응답.json([
      {id:'1',class_name: '라면',img_url:'https://img.choroc.com/newshop/goods/013039/013039_1.jpg',price:3000},
      {id:'2',class_name: '김치찌개',img_url:'https://img.choroc.com/newshop/goods/013039/013039_1.jpg',price:3000},
      {id:'3',class_name: '고기덮밥',img_url:'https://img.choroc.com/newshop/goods/013039/013039_1.jpg',price:3000},
      {id:'4',class_name: '피자',img_url:'https://img.choroc.com/newshop/goods/013039/013039_1.jpg',price:3000},
      {id:'5',class_name: '닭강정',img_url:'https://img.choroc.com/newshop/goods/013039/013039_1.jpg',price:3000},
      {id:'6',class_name: '권광재',img_url:'https://img.choroc.com/newshop/goods/013039/013039_1.jpg',price:3000},
      {id:'7',class_name: '바보',img_url:'https://img.choroc.com/newshop/goods/013039/013039_1.jpg',price:3000},

    ]); 
  });








app.get('*', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/react-project/build/index.html'));
  });