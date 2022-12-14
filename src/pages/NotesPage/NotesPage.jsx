import  NoteCard from '../../components/NoteCard/NoteCard';

import CreateNewNote from "../../components/NewNote/NewNote";

export default function AllNotes({notes, setNotes, user}) {
  return (
    <>
      <h1>Notes</h1>
      <div>
        <CreateNewNote setNotes={setNotes} notes={notes} />
      </div>
      {notes.length === 0 ?
        <span>No Notes Yet!</span>
        :
        <div>
          {notes.map((note, idx) => (
          <div>
            <NoteCard note={note} key={idx}/>
          </div>
        ))}
        </div>
      }
    </>
  );
}