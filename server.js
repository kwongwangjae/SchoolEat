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
      {id:'1',name: '라면'},
      {id:'2',name: '김치찌개'},
      {id:'3',name: '고기덮밥'},
      {id:'4',name: '피자'},
      {id:'5',name: '닭강정'},
      {id:'5',name: '권광재'},
      {id:'5',name: '바보'},

    ]);
  });








app.get('*', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/react-project/build/index.html'));
  });