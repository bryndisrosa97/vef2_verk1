// eslint-disable-next-line import/extensions
const path = require('path');
const express = require('express');
const app = express();

const video = require('./src/videos');
const formatAge = require('./src/lib/formatAge');







app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.locals = formatAge;


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'public/videos')));
app.use('/', video);
app.use(express.static('./public'));



/*app.get('/index', (req, res, next) => {
    res.render('./index.ejs', data);
  });
  */
  
function notFoundHandler(req, res, next) { // eslint-disable-line
    const title = 'Fannst ekki';
    const message = 'Ó nei, efnið finnst ekki!';
    res.status(404).render('error', { title, message });
  }
  
  function errorHandler(err, req, res, next) { // eslint-disable-line
    console.error(err);
    const title = 'Villa kom upp';
    const message = '';
    res.status(500).render('error', { title, message });
  }
  
  app.use(notFoundHandler);
  app.use(errorHandler);
  
  const hostname = '127.0.0.1';
  const port = 3000;
  
 

  app.listen(port, hostname, () => {
    console.info(`Server running at http://${hostname}:${port}/`);
  });