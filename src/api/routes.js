const {
  addBookController,
  getAllBooksController,
  getBookByIdController,
  editBookByIdController,
  deleteBookByIdController,
} = require('./controller');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookController,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksController,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdController,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdController,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdController,
  },
];

module.exports = routes;
