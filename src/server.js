const app = require('./app');
const { PORT } = require('./config')
const { NODE_ENV } = require('./config')

app.listen(PORT, ()=> {
    if (NODE_ENV === 'development') {
        console.log(`Server listening at http://localhost:${PORT}`)
    }
})
