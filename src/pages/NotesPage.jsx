import React from "react";
import Notes from "../assets/data";
import ListItem from "../components/ListItem";

const NotesPage = () => {
  return (
    <div>
      {Notes.map((note) => (
        <ListItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesPage;
