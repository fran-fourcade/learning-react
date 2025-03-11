export default function FirstComponent() {
  return (
    <>
      <h3>A react component is a javascript function that returns markup (JSX)</h3>
      <Nested/>
      <Summary/>
    </>
  )  
}

function Nested() {
  return (
    <div>
      <h4>Components can be nested, but we should never define a component inside other component</h4>
    </div>
  )
}

function Summary() {
  return (
    <>
      <ul>
        <li><strong>In a React app, every piece of UI is a component.</strong></li>
        <li><b>React components are regular JavaScript functions except:</b></li>
        <ol>
          <li>Their names always begin with a capital letter.</li>
          <li>They return JSX markup.</li>
        </ol>
      </ul>
    </>
  )
}