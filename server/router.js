const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  app.post('/api/users/register', controllers.User.register);
  app.post('/api/users/login', controllers.User.login);
  app.get('/api/comics', controllers.Comic.getComics);
  app.post('/api/comics/add', mid.requiresLogin, controllers.Comic.addComic);
};

module.exports = router;
