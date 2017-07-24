const express = require('express')
const app = express()

app.put('/message/:id', (req, res) => {
  var str = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + req.params.id)
        .digest('hex')

  res.end(str);
});

app.listen(process.argv[2]);

// const express = require('express')
// const app = express()
//
// app.use(require('stylus').middleware(process.argv[3]));
// app.use(express.static(process.argv[3]));
//
//
// app.listen(process.argv[2])

// const bodyParser = require('body-parser');
// const express = require('express');
// const app = express();
//
// app.use(bodyParser.urlencoded({extended: false}));
//
// app.post('/form', (req, res) => {
//   var string = req.body.str.split('').reverse().join('');
//   res.end(string);
// });
//
// app.listen(process.argv[2]);

// const path = require('path');
// const express = require('express');
// const app = express();
//
// app.set('views', path.join(process.argv[3]));
// app.set('view engine', 'jade')
//
// app.get('/home', (req, res) => {
//   res.render('index', {date: new Date().toDateString()})
// });
//
// app.listen(process.argv[2]);

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
