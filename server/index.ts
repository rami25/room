import express, { RequestHandler } from 'express'
const app = express()

app.use(express.json())

const posts : any[] = []

app.use((req, res, next) => {
    console.log("request path : " , req.path , " ,-body : " , req.body)
    console.log(req.method)
    next()
})

app.use((req, res, next) => {
    console.log(Date.now())
    next()
})

app.get('/posts' , (req, res) => {
    res.send({ posts })
})

app.post('/posts' , (req, res) =>{
    const post = req.body
    posts.push(post)
    res.sendStatus(200)
})
app.delete('/posts/:ref', (req,res) => {
   const index = posts.findIndex(p => p.name === req.params.ref)
   if(index == -1) return res.send(404)
   posts.splice(index, 1)
   res.send("deleted")
})
app.listen(3000 , () => {console.log("server started")})