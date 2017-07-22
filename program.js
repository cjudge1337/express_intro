const path = require('path');
const express = require('express');
const app = express()

app.set('views', path.join(process.argv[3]));
app.set('view engine', 'jade')

app.get('/home', (req, res) => {
  res.render('index', {date: new Date().toDateString()})
});

app.listen(process.argv[2]);
// const express = require('express');
// const app = express();
//
// app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
// app.listen(process.argv[2]);

// const express = require('express');
// const app = express();
//
// app.get('/home', (req, res) => {
//   res.end("Hello World!");
// });
// app.listen(process.argv[2]);
