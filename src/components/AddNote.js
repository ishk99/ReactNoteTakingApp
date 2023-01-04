import { useState } from "react";

const AddNote = ({ addNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;
  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    } else {
      alert("Limit Reached");
    }
  };

  //   pass a handler function from the parent to the child component that
  // accepts an argument which is the data from the child component
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      addNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        name=""
        cols="10"
        rows="8"
        placeholder="Type to add a note..."
        maxLength="200"
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length}</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
