const express = require('express');
const expressHandlebars = require("express-handlebars")
const methodOverride = require("method-override");

const PORT = process.env.PORT || 2901;

const app = express();


app.use(express.static('public'));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(methodOverride('_method'));

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


const routes = require('./Controller/burgers_controller');
app.use(routes);


app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);