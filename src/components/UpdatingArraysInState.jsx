import React, { useState } from "react";
import Codify from "./Codify";

export default function UpdatingArraysInState() {
  const [artists, setArtists] = useState([
    { id: 0, name: "Leonardo da Vinci" },
    { id: 1, name: "Vincent van Gogh" },
    { id: 2, name: "Rembrandt" }
  ]);

  function handleRemove(id) {
    setArtists(artists.filter(artist => artist.id !== id));
  }

  function handleAdd() {
    const name = prompt("Enter the name of the new artist:");
    if (name) {
      setArtists([
        ...artists,
        { id: Date.now(), name }
      ]);
    }
  }

  function handleRename(id) {
    const name = prompt("Enter the new name:");
    setArtists(
      artists.map(artist =>
        artist.id === id ? { ...artist, name } : artist
      )
    );
  }

  return (
    <>
      <h2>Updating Arrays in State</h2>
      <p>When we store arrays in state, we never mutate them directly. Instead, we create a new array with the desired changes and set the state to that new array.</p>

      <h3>Removing an Item</h3>
      <p>To remove an item from an array in state, we use <code>filter</code> to create a new array without the item:</p>
      <Codify code={`setArtists(artists.filter(a => a.id !== id));`} />

      <h3>Adding an Item</h3>
      <p>To add an item, we use the spread syntax to create a new array with the new item at the end:</p>
      <Codify code={`setArtists([
  ...artists,
  { id: nextId, name: nextName }
]);`} />

      <h3>Updating an Item</h3>
      <p>To update an item, we use <code>map</code> to create a new array where only the matching item is changed:</p>
      <Codify code={`setArtists(artists.map(artist =>
  artist.id === id ? { ...artist, name: newName } : artist
));`} />

      <h3>Example: Artists List</h3>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name} <button onClick={() => handleRename(artist.id)}>Rename</button> <button onClick={() => handleRemove(artist.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAdd}>Add Artist</button>

      <h3>Summary</h3>
      <ul>
        <li>We never mutate arrays directly in state.</li>
        <li>We use methods like <code>map</code>, <code>filter</code>, and spread syntax to create new arrays.</li>
        <li>We update state by passing the new array to the setter function.</li>
      </ul>
    </>
  );
}
