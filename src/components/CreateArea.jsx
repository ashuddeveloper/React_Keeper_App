import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function changeHandler(event) {
    const { name, value } = event.target;
    setNote((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  }

  function addNotes(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={changeHandler}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={changeHandler}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={addNotes}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
