export default function StateAsASnapshot() {
  return (
    <>
      <h2>State as a snapshot</h2>
      <p><b>State variables might look like regular JavaScript variables that you can read and write to. However, state behaves more like a snapshot. Setting it does not change the state variable you already have, but instead triggers a re-render.</b></p>
      <h3>Rendering takes a snapshot in time</h3>
      <p><b>Rendering</b> means that React is calling our component, which is a function. The JSX we return from that function is like a snapshot of the UI in time. Its props, event handlers, and local variables were all calculated using its state at the time of the render. </p>
      <p>Unlike a photograph or a movie frame, the UI “snapshot” we return is interactive. It includes logic like event handlers that specify what happens in response to inputs. React updates the screen to match this snapshot and connects the event handlers. As a result, pressing a button will trigger the click handler from our JSX.</p>
      <p>When React re-renders a component:</p>
      <ul>
        <li>React calls our function again.</li>
        <li>Our function returns a new JSX snapshot.</li>
        <li>React then updates the screen to match the snapshot our function returned.</li>
      </ul>
      <p>As a component’s memory, state is not like a regular variable that disappears after our function returns. State actually “lives” in React itself—as if on a shelf!—outside of our function. When React calls our component, it gives us a snapshot of the state for that particular render. Our component returns a snapshot of the UI with a fresh set of props and event handlers in its JSX, all calculated using the state values from that render!</p>
      <p><b>A state variable’s value never changes within a render</b>, even if its event handler’s code is asynchronous. The state stored in React may have changed by the time the event handler is executed but <b>it works with the snapshot of the state at the time the user interacted with it</b>. </p>
      <p>React keeps the state values “fixed” within one render’s event handlers. We don’t need to worry whether the state has changed while the code is running.</p>
      <p>Summary</p>
      <ul>
        <li>Setting state requests a new render.</li>
        <li>React stores state outside of our component, as if on a shelf.</li>
        <li>When we call useState, React gives us a snapshot of the state for that render.</li>
        <li>Variables and event handlers don’t “survive” re-renders. Every render has its own event handlers.</li>
        <li>Every render (and functions inside it) will always “see” the snapshot of the state that React gave to that render.</li>
        <li>Event handlers created in the past have the state values from the render in which they were created.</li>
      </ul>
    </>
  );
}