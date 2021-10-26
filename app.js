const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({
  static: './asd-ems-frontend/build',
});
const PORT = process.env.PORT || 8000;
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
    '/:resource/:id/show': '/:resource/:id',
  })
);
server.use(router);
server.listen(PORT, () => {
  console.log('server is running');
});
