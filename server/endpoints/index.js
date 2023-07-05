const del = require('../controllers/delete');
const get = require('../controllers/get');
const post = require('../controllers/post');

module.exports = (app) => {
  app.get('/', (req, res) => {
    get.read(req, res);
  });

  app.get('/all', (req, res) => {
    get.readAll(req, res);
  });

  app.delete('/', (req, res) => {
    del.remove(req, res);
  });

  app.post('/', (req, res) => {
    post.create(req, res);
  });
}