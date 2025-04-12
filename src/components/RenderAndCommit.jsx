import Codify from "./Codify";

export default function RenderAndCommit() {
  return (
    <>
      <h2>Render and commit</h2>
      <h3>Before a component is displayed on screen, it must be rendered by React.
      Understanding the steps in this process is helpful when we think about how our code executes and explain its behavior.
      </h3>
      <p>React's official documentation (in which this notes are based) tells us to imagine that our components are cooks in the kitchen. In this scenario, React is the waiter who puts in requests from customers and brings them their orders. This process of requesting and serving UI has three steps:
      <ol>
        <li><b>Triggering</b> a render (delivering the guest’s order to the kitchen)</li>
        <li><b>Rendering</b> the component (preparing the order in the kitchen)</li>
        <li><b>Committing</b> to the DOM (placing the order on the table)</li>
      </ol>
      </p>
      <p>When a component is first added to the page, React triggers a render and commits the result to the DOM. When a component is updated, React triggers a re-render and commits the result to the DOM.</p>
      <h3>Step 1: Trigger a render </h3>
      <p>There are two reasons for a component to render:</p>
      <ol>
        <li>It’s the component’s initial render.</li>
        <li>The component’s (or one of its ancestors’) state has been updated.</li>
      </ol>
      <p><b>Initial render</b></p>
      <p>When our app starts, we need to trigger the initial render. Frameworks and sandboxes sometimes hide this code, but it’s done by calling createRoot with the target DOM node, and then calling its render method with our component</p>
      <Codify code={`import { createRoot } from 'react-dom/client';
function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}
const root = createRoot(document.getElementById('root'))
root.render(<Image />);`}/>
      <p><b>Re-renders when state updates</b></p>
      <p>Once the component has been initially rendered, we can trigger further renders by updating its state with the set function. Updating our component’s state automatically queues a render. (We can imagine these as a restaurant guest ordering tea, dessert, and all sorts of things after putting in their first order, depending on the state of their thirst or hunger.)</p>
      <h3>Step 2: React renders our components </h3>
<p>After we trigger a render, React calls our components to figure out what to display on screen. <b>“Rendering”</b> is React calling our components.</p>
<ul>
  <li>On initial render, React will call the root component.</li>
  <li>For subsequent renders, React will call the function component whose state update triggered the render.</li>
</ul>
<p>This process is recursive: if the updated component returns some other component, React will render that component next, and if that component also returns something, it will render that component next, and so on. The process will continue until there are no more nested components and React knows exactly what should be displayed on screen.</p>
<h3>Step 3: React commits changes to the DOM</h3>
<p>After React has calculated what should be displayed on screen, it commits the result to the DOM. <b>“Committing”</b> is React writing the result to the DOM.</p>
<ul>
  <li>For the initial render, React will use the appendChild() DOM API to put all the DOM nodes it has created on screen.</li>
  <li>For re-renders, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.</li>
</ul>
<p><b><i>React does not touch the DOM if the rendering result is the same as last time</i></b></p>
<p><b>Note: React only changes the DOM nodes if there’s a difference between renders.</b></p>
<p><b>Remember: When developing in “Strict Mode”, React calls each component’s function twice, which can help surface mistakes caused by impure functions.</b></p>
    </>
  );
}