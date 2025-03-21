export default function PureComponents () {
  return (
    <>
      <h3>Keeping components pure</h3>
      <article>
        <p>A pure function is a function with the following characteristics:</p>
          <ul>
            <li><b>It minds its own business.</b> It does not change any objects or variables that existed before it was called.</li>
            <li><b>Same inputs, same output.</b> Given the same inputs, a pure function should always return the same result.</li>
          </ul>
        <p><b>React assumes that every component we write is a pure function.</b> This means that React components we write must always return the same JSX given the same inputs</p>
        <p>in React there are three kinds of inputs that we can read while rendering: <b>props, state, and context.</b> We should always treat these inputs as <i>read-only.</i></p>
        <p>When we want to change something in response to user input, we should <b>setState</b> instead of writing to a variable. We should never change preexisting variables or objects while our component is rendering.</p>
        <p>React offers a <b>“Strict Mode”</b> in which it calls each component’s function <i>twice</i> during development. By calling the component functions twice, Strict Mode helps find components that break these rules. <br />
        {`Strict Mode has no effect in production, so it won’t slow down the app for our users. To opt into Strict Mode, we can wrap our root component into `}  <code>  {`<React.StrictMode>`}</code> {`Some frameworks do this by default.`}</p>
        <p>We need to strive to express our component’s logic in the JSX we return. When we need to “change things”, we'll usually want to do it in an event handler (functions that React runs when we perform some action—for example, when we click a button. Even though event handlers are defined inside your component, they don’t run during rendering! So they don’t need to be pure). As a last resort, we can useEffect. <br /></p>
        <p>Writing pure functions takes a bit of practice, but it unlocks the power of React’s paradigm.</p>
      </article>
    </>
  );
}