const express = require("express");

// const connect = require("./configs/db");

// const User = require("./models/user.model");
// const Tag = require("./models/tag.model")
// const Post = require("./models/post")
// const Comment = require("./models/comment.model")


const usersController = require("./controllers/users.controller");
const tagsController = require("./controllers/tags.controller");
const postsController = require("./controllers/posts.controller");
const commentsController = require("./controllers/comments.controller");

const app = express();

app.use(express.json());

app.use("/posts",postsController);
app.use("/comments",commentsController);
app.use("/users",usersController);
app.use("/tags",tagsController);

/*
  users
  post = /users
  get all = /users
  get one = /users/:id
  update one = /users/:id
  delete one = /users/:id
*/
module.exports = app;