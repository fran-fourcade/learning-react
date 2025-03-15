import { CodeBlock, nord } from "react-code-blocks";


export function CodeSnippet({ code = '' }) {
  return (
    <div style={{ padding: '20px' }}>
      <CodeBlock
        text={code}
        language={"jsx"}
        theme={nord}
        showLineNumbers={true}
      />
    </div>
  );
}

export default function Props() {
  return (
    <>
      <h3>Props</h3>
      <span>React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind us of HTML attributes, but we can pass any JavaScript value through them, including objects, arrays, and functions.</span>
      <span>They're parameters that we pass to a component. </span>
      
      <h5>They are used to:</h5>
      <ol>
        <li>
          <p>Send data to a component</p>
        </li>
        <li>
          <p>Customize how a component looks or behaves</p>
        </li>
        <li>
          <p>Reuse components with different data</p>
        </li>
      </ol>

      <h5>How do they work?</h5>
      <span>When we use a component in our markup, React automatically creates an object with whatever attributes we passed to it, and it passes this object to the component function as a props parameter. We just need to receive it in the function and use it.</span><br />
      <span><code>If we don't pass any attribute to a component, it's props will be an emty object {}</code></span>

      <h5>Destructuring</h5>
      <span>In the component function, we can use its props literally as 'props' in the header and 'props.something' in the body, or we can <strong>destructure</strong> the props object into an object with just the values that we will use</span>
      <br />
      <br />

      <strong>Without Destructuring: </strong> 
      <br />
      <CodeSnippet code={`function Car(props) {
  return <p>I'm a car of the brand {props.brand}</p>;
}
`}/>
      <br />
      <strong>Destructuring: </strong> 
      <br />
      <CodeSnippet code={`function Car({ brand }) {
  return <p>I'm a car of the brand {brand}</p>;
}
`}/>
    </>
  )
}