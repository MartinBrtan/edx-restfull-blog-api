module.exports = {
    getPosts(req, res) {
      res.send(req.store.posts)
    },
    addPost(req, res) {
      let newPost = req.body
      newPost.comments = []
      req.store.posts.push(newPost)
      res.send({id: req.store.posts.length -1});
    },
    updatePost(req, res) {
      let postID = req.params.postId
      let post = req.store.posts[postID]
      post.name = req.body.name
      post.url = req.body.url
      post.text = req.body.text

      res.send(post);
    },
    removePost(req, res) {
      let postID = req.params.postId
      req.store.posts.splice(postID, 1)
      res.status(200).send('post removed')
    }
  }