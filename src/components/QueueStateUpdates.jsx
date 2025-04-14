import Codify from "./Codify";

export default function QueueStateUpdates() {
  return (
    <>
      <h2>Queueing a Series of State Updates</h2>
      <p>Setting a state variable will queue another render. But sometimes we might want to perform multiple operations on the value before queueing the next render. To do this, it helps to understand how React batches state updates.</p>
      <h3>React batches state updates</h3>
      <p>React batches state updates to improve performance. When we call set function, React does not immediately update the state. Instead, it puts the update in a queue and processes it later. This is done to optimize performance by <b>reducing the number of re-renders.</b></p>
      <p>React waits until all code in the event handlers has run before processing our state updates. This lets us update multiple state variables—even from multiple components—without triggering too many re-renders. But this also means that the UI won’t be updated until after our event handler, and any code in it, completes. This behavior is known as <b>batching</b>, and it makes our React app run much faster. It also avoids dealing with confusing “half-finished” renders where only some of the variables have been updated.</p>
      <p><b><i>Important:</i></b> <i>React does not batch across multiple intentional events like clicks—each click is handled separately. React's official documentation states: "Rest assured that React only does batching when it’s generally safe to do. This ensures that, for example, if the first button click disables a form, the second click would not submit it again."</i></p>
      <h3>Updating the same state multiple times before the next render (The trick)</h3>
      <p>It is an uncommon use case, but if we would like to update the same state variable multiple times before the next render, instead of passing the next state value like <code>setNumber(number + 1)</code>, <b>we can pass a function that calculates the next state based on the previous one in the queue</b>, like <code>setNumber(n => n + 1)</code>. It is a way to tell React to "do something with the state value" instead of just replacing it.</p>
      <p>Here, <code>n => n + 1</code> is called an <b>updater function</b>. When we pass it to a state setter:</p>
      <ul>
        <li>React queues this function to be processed after all the other code in the event handler has run.</li>
        <li>During the next render, React goes through the queue and gives us the final updated state.</li>
      </ul>
      <p><b>Updater functions must be pure</b> and only return the result. We shouldn't try to set state or run other side effects from inside of them. In Strict Mode, React will run each updater function twice (but discard the second result) to help us find mistakes.</p>
      <p>Important thing to keep in mind from all this: In every render, React goes through a queue of updates and gives us the final updated state.</p>
      <h3>Naming conventions</h3>
      <p>It’s common to name the updater function argument by the first letters of the corresponding state variable:</p>
      <Codify code={`setEnabled(e => !e)
setLastName(ln => ln.reverse())
setFriendCount(fc => fc * 2)`}/>
      <p>If we prefer more verbose code, another common convention is to repeat the full state variable name, like <code>setEnabled(enabled => !enabled)</code>, or to use a prefix like <code>setEnabled(prevEnabled => !prevEnabled)</code>.</p>
    </>
  );
}