import * as notesAPI from '../../utilities/notes-api';


export default function NoteCard({ note }) {
  const handleClick = async () => {
    notesAPI.deleteNote(note._id);
    console.log(`clicked ${note._id}`);
  }


  return (
    <div>
      <div>Posted: {new Date(note.updatedAt).toLocaleDateString()}</div>
      <div>Note: <strong>{note.content}</strong> <button onClick={handleClick}>x</button></div>
      <hr />
    </div>
  )
}