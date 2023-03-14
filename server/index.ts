import express, { RequestHandler } from 'express'
import { createPostHandler, listPostsHandler } from './handlers/postHandler'
const app = express()

app.use(express.json())


const requestMiddleWare : RequestHandler = (req, res, next) => {
    console.log("req meth : ", req.method , " -request path : " , req.path , " -body : " , req.body)
    res.status(200)
    next()
}

app.use(requestMiddleWare)

app.get('/posts' , listPostsHandler)

app.post('/posts' , createPostHandler)

app.delete('/posts/:ref', (req,res) => {
})

app.listen(3000 , () => {console.log("server started")})