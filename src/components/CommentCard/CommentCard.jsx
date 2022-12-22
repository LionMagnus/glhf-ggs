


export default function CommentCard({ comment }) {

  return (
    <div>
      {/* <div>User: {comment.username}</div> */}
      <div>{/* Comment:  */}<strong>{comment.content}</strong></div>
      <hr />
    </div>
  )
}