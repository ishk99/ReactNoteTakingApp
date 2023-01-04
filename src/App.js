import NotesList from "./components/NotesList";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";
const App = () => {
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setNotes] = useState([]);

  // getting data from local storage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app"));
    // if any notes from local storage - then we want to set them to the state
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // useEffect is loaded on the page load and this changes when the 'notes' state changes
  useEffect(() => {
    // saving data to local storage
    localStorage.setItem("react-notes-app", JSON.stringify(notes));
  }, [notes]);

  // creating the below function here because this is where the state lies
  const addNote = (text) => {
    const date = new Date();
    // create a new note object
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    // newNotes has previous notes and the one we just created
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id, e) => {
    e.stopPropagation();
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    // if dark mode is set to true then add the dark mode class
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        {/* pass the state 'notes' */}
        <Search handleSearchNote={setSearchText} />

        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          addNote={addNote}
          onDelete={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;

//how we filter the notes -- filter before passing down to NotesList
