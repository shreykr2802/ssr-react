const Search = require('../src/components/Search/Search');
const MovieList = require('../src/components/MovieList/MovieList');
const MovieDetail = require('../src/components/MovieDetail/MovieDetail');

module.exports = [
    {
        path: '/',
        exact: true,
        component: Search,
    },
    {
        path: '/*',
        exact: true,
        component: MovieList,
    },
    {
        path: '/details/*',
        exact: true,
        component: MovieDetail,
    }
];