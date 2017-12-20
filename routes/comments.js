module.exports = {
    getComments(req, res) {
      let postID = req.params.postId
      let comments = req.store.posts[postID].comments
      res.send(comments)
    }, 
    addComment(req, res) {
      let postID = req.params.postId
      req.store.posts[postID].comments.push(req.body)
      res.send({id: req.store.posts[postID].comments.length -1})
    },
    updateComment(req, res) {
      let postID = req.params.postId
      let commentID = req.params.commentId
      
      req.store.posts[postID].comments[commentID].text = req.body.text
      res.send(req.store.posts[postID].comments[commentID])
    },
    removeComment(req, res) {
      let postID = req.params.postId
      let commentID = req.params.commentId

      req.store.posts[postID].comments.splice(commentID, 1)
      res.status(200).send(req.store.posts[postID].comments)
    }  
  }