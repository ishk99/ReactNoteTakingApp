// NotesList renders the Note
import Note from "./Notes";
import AddNote from "./AddNote";
const NotesList = ({ notes, addNote, onDelete = () => {} }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          key={note.id}
          onDelete={onDelete.bind(null, note.id)}
        />
      ))}
      <AddNote addNote={addNote} />
      {/*  */}
    </div>
  );
};

export default NotesList;
