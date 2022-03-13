import React from "react";
import Notes from "../assets/data";

const NotePage = ({ match }) => {
  let noteId = match.params.id;
  let note = Notes.find((note) => note.id === noteId);

  return (
    <div>
      <p>{note?.body}</p>
    </div>
  );
};

export default NotePage;
