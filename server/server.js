// import middleware and express
const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

// import routers
const UsersRouter = require("./auth/auth-router.js")
const MoviesRouter = require("./api/movies-router.js")
const MyMoviesRouter = require("./api/my-movies-router.js")
const AuthRouter = require("./auth/auth-router.js")

// create server using express
const server = express()

// use middleware before routers
server.use(helmet())
server.use(express.json())
server.use(cors())

// setup paths for routers
server.use("/users", UsersRouter)
server.use("/movies", MoviesRouter)
server.use("/mymovies", MyMoviesRouter)
server.use("/auth", AuthRouter)

// GET request to root / to make sure everything is working
server.get("/", (req, res) => {
    res.json({message: "API is up!"})
})

// export server
module.exports = server