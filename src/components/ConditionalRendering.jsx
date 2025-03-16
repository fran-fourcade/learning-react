export default function ConditionalRendering() {
  return (
    <>
      <h3>Conditional rendering</h3>
      <span>
        Components often need to display different things depending on different
        conditions. In React, we can conditionally render JSX using JavaScript
        syntax like <code>if</code> statements, <code>&&</code>, and{" "}
        <code>?:</code> operators.
      </span>
      <ul>
        <li><i>In React, we control branching logic with JavaScript.</i></li>
        <li><i>We can return a JSX expression conditionally with an if statement</i></li>
        <li><i>We can conditionally save some JSX to a variable and then include it inside other JSX by using the curly braces.</i></li>
        <li><i>In JSX, <code>{`{cond ? <A /> : <B />}`}</code> means “if <code>cond</code>, render <code>{`<A />`}</code>, otherwise <code>{`<B />`}</code>”.</i></li>
        <li><i>In JSX, <code>{`{cond && <A />}`}</code> means “if <code>cond</code>, render <code>{`<A />`}</code>, otherwise nothing”.</i></li>
        <li><i>The shortcuts are common, but we don’t have to use them if you prefer plain if.</i></li>
      </ul>
    </>
  );
}
