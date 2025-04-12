export default function MarkupWithJSX() {
  return (
    <>
      <h2>Writing Markup with JSX</h2>
      <span>JSX is a separate thing from React. It is a syntax extension that looks a lot like HTML, but it is a bit stricter and can display dynamic information.</span>
      <strong><p>The Rules of JSX</p></strong>
      <ul>
        <li>
          <p><strong>Return a single root element: </strong></p>
          <p>To return multiple elements from a component, wrap them with a single parent tag (it can be any tag, or just a Fragment that doesn't leave any trace in the browser HTML tree).</p>
        </li>
        <li>
         <p><strong>Close all the tags: </strong></p>
         <p>JSX requires tags to be explicitly closed: self-closing tags like <code>&lt;img&gt;</code> must become <code>&lt;img /&gt;</code>, and wrapping tags like <code>&lt;li&gt;</code>oranges must be written as <code>&lt;li&gt;oranges&lt;/li&gt;</code>.</p>
        </li>
        <li>
         <p><strong>camelCase almost of the things: </strong></p>
         <p>JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like <code>class</code>.</p>
        </li>
      </ul>
    </>  
  );
}