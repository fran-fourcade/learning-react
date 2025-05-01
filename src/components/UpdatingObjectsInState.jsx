import Codify from "./Codify";

export default function UpdatingObjectsInState() {
  return (
    <>
      <h2>Updating objects in state</h2>
      <p>State can hold any kind of JavaScript value, including objects. But we shouldn’t change objects that we hold in the React state directly. Instead, when we want to update an object, we need to create a new one (or make a copy of an existing one), and then set the state to use that copy.</p>
      <h3>What’s a mutation?</h3>
      <p>In Javascript, it’s not possible to make any changes to the built-in primitive values like numbers, strings, and booleans, but objects are a different story.</p>
      <p>Technically, it is possible to change the contents of the object itself. This is called a <b>mutation</b>:</p>
      <Codify code={`const [position, setPosition] = useState({ x: 0, y: 0 });
position.x = 10;`}/>
      <p>However, although objects in React state are technically mutable, we should treat them as if they were immutable—like numbers, booleans, and strings. Instead of mutating them, we should always replace them.</p>
      <Codify code={`const [position, setPosition] = useState({ x: 0, y: 10 });
setPosition({ x: 10, y: 10 });`}/>
      <p>With setPosition, we are telling React:</p>
      <ul>
        <li>Replace position with this new object</li>
        <li>And render this component again</li>
      </ul>
      <p><b>In other words, we should treat any JavaScript object that we put into state as read-only.</b></p>
      <p>If we mutate an object without using the state setting function, React has no idea that object has changed. So React does not do anything in response. While mutating state can work in some cases, it is not recommended. <b>We should treat the state value we have access to in a render as read-only.</b></p>
      <h3>Local mutation is fine</h3>
      <p>Code like this is absolutely fine because we’re mutating a fresh object we have just created:</p>
      <Codify code={`const nextPosition = {};
nextPosition.x = e.clientX;
nextPosition.y = e.clientY;
setPosition(nextPosition);`}/>
      <p>Mutation is only a problem when we change existing objects that are already in state. Mutating an object we’ve just created is okay because no other code references it yet. Changing it isn’t going to accidentally impact something that depends on it. This is called a “local mutation”. We can even do local mutation while rendering. Very convenient and completely okay!</p>
      <h3>Copying objects with the spread syntax</h3>
      <p>Often, we will want to include existing data as a part of the new object we’re creating. For example, we may want to update only one field in a form, but keep the previous values for all other fields. <br/>
      We can use the <code>...</code> object spread syntax to create a new object with the existing properties, and then override the properties we want to change.</p>
      <Codify code={`const nextPosition = { ...position, x: e.clientX, y: e.clientY };
setPosition(nextPosition);`}/>
      <p><b>Note that the ... spread syntax is “shallow”—it only copies things one level deep. This makes it fast, but it also means that if we want to update a nested property, we'll have to use it more than once.</b></p>
      <h3>Using a single event handler for multiple fields</h3>
      <p>When working with for example, forms, we can have a state variable for each form field, but it is usually a good practice to have just one variable that holds an object with all the fields.</p>
      <p>In this screnario, instead of having an event handler for each field, the best prectice is to have just one event handler and use the <code>[]</code> braces inside our object definition to specify a property with a dynamic name (<b>computed properties</b> added in ES6) and the <b>Spread Syntax</b> to ensure that React detects the change.</p>
      <Codify code={`import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({firstName: 'Barbara', lastName: 'Hepworth'});

  function handleChange(e) {
    // e.target.name can be "firstName" or "lastName"
    setPerson({
      ...person,                  // Copy all previous fields
      [e.target.name]: e.target.value  // Update only the changed field
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>

      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>

      <p>{person.firstName} {person.lastName}</p>
    
      </>
  );
}`}/>

      <h3>What happens with a nested object?</h3>
      <p>Considering a nested object structure like this:</p>
      <Codify code={`const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});`}/>

      <p>If we wanted to update <code>person.artwork.city</code> without mutations, we  would first need to produce the new artwork object (pre-populated with data from the previous one), and then produce the new person object which points at the new artwork:</p>
      <Codify code={`const nextArtwork = { ...person.artwork, city: 'New Delhi' };
const nextPerson = { ...person, artwork: nextArtwork };
setPerson(nextPerson);`}/>
  <p>Or, written as a single function call:</p>
  <Codify code={`setPerson({
  ...person,                        // Copy other fields
  artwork: {                       // but replace the artwork
    ...person.artwork,     // with the same one
    city: 'New Delhi'        // but in New Delhi!
  }
});`}/>

    <h3>Alternative: Immer</h3>
    <p>If our state is deeply nested, we might consider flattening it. But, if we don’t want to change your state structure, we might prefer a shortcut to nested spreads. <b>Immer</b> is a popular library that lets us write using the convenient but mutating syntax and takes care of producing the copies for us. With Immer, the code we write looks like we are “breaking the rules” and mutating an object:</p>
    <Codify code={`import { useImmer } from 'use-immer';

export default function Form() {
  const [person, updatePerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg'
    }
  });

  function handleNameChange(e) {
    updatePerson(draft => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange(e) {
    updatePerson(draft => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e) {
    updatePerson(draft => {
      draft.artwork.city = e.target.value;
    });
  }`}/>

    <p>The draft provided by Immer is a special type of object, called a Proxy, that “records” what we do with it. This is why we can mutate it freely as much as we like! Under the hood, Immer figures out which parts of the draft have been changed, and produces a completely new object that contains our edits.</p>

    <p>We can mix and match <code>useState</code> and <code>useImmer</code> in a single component as much as we like. Immer is a great way to keep the update handlers concise, especially if there’s nesting in our state, and copying objects leads to repetitive code.</p>

    <h3>Why is mutating state not recommended in React?</h3>
    <ul>
    <li>Debugging: If we use console.log and don’t mutate state, our past logs won’t get overridden by the more recent state changes. So we can clearly see how state has changed between renders.</li>
    <li>Optimizations: Common React optimization strategies rely on skipping work if previous props or state are the same as the next ones. If we never mutate state, it is very fast to check whether there were any changes. If <code>prevObj === obj</code>, we can be sure that nothing could have changed inside of it.</li>
    <li>New Features: The new React features being built rely on state being treated like a snapshot. If we mutate past versions of state, that may prevent us from using the new features.</li>
    <li>Requirement Changes: Some application features, like implementing Undo/Redo, showing a history of changes, or letting the user reset a form to earlier values, are easier to do when nothing is mutated. This is because we can keep past copies of state in memory, and reuse them when appropriate. If we start with a mutative approach, features like this can be difficult to add later on.</li>
    <li>Simpler Implementation: Because React does not rely on mutation, it does not need to do anything special with our objects. It does not need to hijack their properties, always wrap them into Proxies, or do other work at initialization as many “reactive” solutions do. This is also why React lets us put any object into state—no matter how large—without additional performance or correctness pitfalls.</li>
    <li>In practice, we can often “get away” with mutating state in React, but it is strongly advised not to do that so that we can use new React features developed with this approach in mind. Future contributors and perhaps even our future self will thank us!</li>
    </ul>
    </>
  );
}