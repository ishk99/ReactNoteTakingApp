import { MdDeleteForever } from "react-icons/md";
// This renders an individual note
const Notes = ({ id, text, date, onDelete }) => {
  //   const deleteNoteHandler = (id) => {
  //     deleteNote(id);
  //   };
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3rem"
          onClick={onDelete}
        />
      </div>
    </div>
  );
};

export default Notes;
