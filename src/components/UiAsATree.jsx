export default function UiAsATree() {
  return (
    <>
      <h2>Understanding the UI as a Tree</h2>
      <ul>
        <li>Trees are a common way to represent the relationship between entities. They are often used to model UI.</li>
        <li>Render trees represent the nested relationship between React components across a single render.</li>
        <li>With conditional rendering, the render tree may change across different renders. With different prop values, components may render different children components.</li>
        <li>Render trees help identify what the top-level and leaf components are. Top-level components affect the rendering performance of all components beneath them and leaf components are often re-rendered frequently. Identifying them is useful for understanding and debugging rendering performance.</li>
        <li>Dependency trees represent the module dependencies in a React app.</li>
        <li>Dependency trees are used by build tools to bundle the necessary code to ship an app.</li>
        <li>Dependency trees are useful for debugging large bundle sizes that slow time to paint and expose opportunities for optimizing what code is bundled.</li>
      </ul>
    </>
  );
}