import Users from './Pages/Users'
import Home from './Pages/Home'
import Movie from './Pages/Movie'

export default [
    {
        path : '/',
        component : Home
    },
    {
        path : '/movies',
        component : Movie
    },
    {
        path : '/users',
        component : Users
    }
]