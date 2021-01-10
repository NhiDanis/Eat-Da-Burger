const express = require('express');

const PORT = process.env.PORT || 2901;

const app = express();


app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


const routes = require('./Controllers/burgers_controller.js');
app.use(routes);


app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);