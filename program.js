const express = require('express');
const app = express();

app.listen(process.argv[2]);
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

// const express = require('express');
// const app = express();
//
// app.get('/home', (req, res) => {
//   res.end("Hello World!");
// });
// app.listen(process.argv[2]);
