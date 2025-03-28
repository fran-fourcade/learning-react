import { CodeSnippet } from "./Props";

export default function Events () {
  return (
    <>
      <h3>Responding to Events</h3>
      <p>In React we can add <i>event handlers</i> to our JSX. Event handlers are our own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.</p>
      <p>To add an event handler, we first need to define a function and then pass it as a prop to the appropriate JSX tag. </p>
      <p>Event handler functions:
        <ul>
          <li>Are usually defined <i>inside</i> components.</li>
          <li>Have names that start with <code>handle</code>, followed by the name of the event.</li>
        </ul>
        Alternatively, we can define an event handler inline in the JSX, even using an arrow function (convenient for short functions):
        <CodeSnippet code={`<button onClick={ () => {
  alert('You clicked me!');
} />
`}></CodeSnippet>
      </p>
      <strong>Reading props in event handlers: </strong>
      <br />
      <span>Because event handlers are declared inside of a component, they have access to the component’s props.</span>
      <br />
      <br />
      <strong>Passing event handlers as props: </strong>
      <br />
      <span>Often we'll want the parent component to specify a child’s event handler. For example, buttons: depending on where we're using a Button component, we might want to execute a different function—perhaps one plays a movie and another uploads an image. To do this, we need to pass a prop the component receives from its parent as the event handler</span>
      <br />
      <br />
      <strong>Event propagation:</strong>
      <br />
      <span>Event handlers will also catch events from any children a component might have. We say that an event “bubbles” or “propagates” up the tree: it starts with where the event happened, and then goes up the tree.</span>
      <br />
      <code>NOTE: </code> <span> All events propagate in React except <code>onScroll</code>, which only works on the JSX tag you attach it to.</span>
      <br />
      <br />
      <strong>Stopping propagation: </strong>
      <br />
      <span>Event handlers receive an event object as their only argument. By convention, it’s usually called e, which stands for “event”. We can use this object to read information about the event.</span>
      <br />
      <span>That event object also lets us stop the propagation. If we want to prevent an event from reaching parent components, we need to call <code>e.stopPropagation()</code></span>
      <br />
      <br />
      <span><strong>Note: Events can be captured regardless the propagation logic </strong>(for example to log every click to analytics). We can do this by adding Capture at the end of the event name</span>
      <br />
      <br />
      <span>Events propagate in three phases:</span>
      <br />
      <ol>
        <li><code>It travels down, calling all onClickCapture handlers.</code></li>
        <li><code>It runs the clicked element’s onClick handler.</code></li>
        <li><code>It travels upwards, calling all onClick handlers.</code></li>
      </ol>
      <strong>Preventing default behavior: </strong>
      <br />
      <span>Many events have a default behavior that we might want to prevent. For example, a form submission usually refreshes the page, and a link click navigates to a new page. We can prevent this default behavior by calling <code>e.preventDefault()</code></span>
      <br />
      <br />
      <strong>Can event handlers have side effects?</strong>
      <br />
      <span>Absolutely! Event handlers are the best place for side effects.</span>
      <br />
      <span>Unlike rendering functions, event handlers don’t need to be <b>pure</b>, so it’s a great place to change something — for example, change an input’s value in response to typing, or change a list in response to a button press. However, in order to change some information, we first need some way to store it. In React, this is done by using <b>state.</b></span>
    </>
  );
}