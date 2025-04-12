import Codify from "./Codify";

export default function State() {
  return (
    <>
      <h2>State</h2>
      <subtitle>Components often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart. Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called <b>state</b>.</subtitle>
      <p><b>Why State and not work with local variables?</b></p>
      <p>When an event handler updates a local variable, two things prevent that change from being visible:</p>

      <ol>
        <li>Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.</li>
        <li>Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.</li>
      </ol>
      <p>To update a component with new data, two things need to happen:</p>

      <ol>
        <li>Retain the data between renders.</li>
        <li>Trigger React to render the component with new data (re-rendering).</li>
      </ol>
      <p>The useState Hook provides those two things:</p>

      <ul>
        <li>A state variable to retain the data between renders.</li>
        <li>A state setter function to update the variable and trigger React to render the component again.</li>
      </ul>
      <p>Here’s how we use the useState Hook:</p>
      <Codify code={`const [state, setState] = useState(initialState);`}/>
      <p>After we call <code>useState</code>, we will have a state variable and a function to update it. We can call the state setter function from event handlers and other places where we need to update the state.</p>
      <p>For example, here’s how we can use <code>useState</code> to add a counter to our app:</p>
      <Codify code={`function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}/>
    <p><b>Note: </b> <code>useState</code>, as well as any other function starting with "use", is a Hook. Hooks are special functions that are only available while React is <b>rendering</b>. They let us “hook into” different React features. </p>
    <p><b>IMPORTANT: </b> Hooks can only be called at the top level of our components or our own hooks. We can't call hooks inside conditions, loops, or other nested functions. It is like we 'use' React features at the top of our components similiar to how we 'import' modules at the top of a file.</p>

    <h3>Anatomy of useState</h3>
    <span>When we call <code>useState</code>, we are telling React that we want this component to remember something:</span>

    <Codify code={`const [index, setIndex] = useState(0);`}/>
    <p>In this case, we want React to remember <code>index</code>.</p>

    <span><b>Note: </b> The convention is to name this pair like <code>const [something, setSomething]</code>. </span>

    <p>The only argument to <code>useState</code> is the initial value of our state variable. In this example, the index’s initial value is set to 0 with <code>useState(0)</code>.</p>

    <p>Every time our component renders, <code>useState</code> gives us an array containing two values:</p>

    <ol>
      <li>The state variable (index) with the value we stored.</li>
      <li>The state setter function (setIndex) which can update the state variable and trigger React to render the component again.</li>
    </ol>

    <p>Here’s how that happens in action:</p>

    <Codify code={`const [index, setIndex] = useState(0);`}/>
    <ol>
      <li>Our component renders the first time. Because we passed 0 to <code>useState</code> as the initial value for index, it will return [0, setIndex]. React remembers 0 is the latest state value.</li>
      <li>We update the state. When a user clicks the button, it calls <code>setIndex(index + 1)</code>. index is 0, so it’s <code>setIndex(1)</code>. This tells React to remember index is 1 now and triggers another render.</li>
      <li>Our component’s second render. React still sees <code>useState(0)</code>, but because React remembers that we set index to 1, it returns [1, setIndex] instead.</li>
      <li>And so on!</li>
    </ol>
    <p>We can have as many state variables of as many types as we need in one component. It is a good idea to have multiple state variables if their state is unrelated.
      <br/>
    If we find that we often change two state variables together, it might be easier to combine them into one. For example, if we have a form with many fields, it’s more convenient to have a single state variable that holds an object than state variable per field.
    </p>
    <p><b>State is isolated and private</b> 
      <br/>
    State is local to a component instance on the screen. In other words, if we render the same component twice, each copy will have completely isolated state! Changing one of them will not affect the other.
    <br/>
    Unlike props, <b>state is fully private to the component declaring it.</b> The parent component can’t change it. This lets you add state to any component or remove it without impacting the rest of the components.
    </p>
    </>
  );
}