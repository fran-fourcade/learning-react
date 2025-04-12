export default function CurlyBraces () {
  return (
    <>
      <h2>JavaScript in JSX with curly braces</h2>
      <span>JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place. Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. In this situation, you can use curly braces in your JSX to “open a window” to JavaScript</span>
      <span>When writing markup, curly braces let you "escape" into Javascript. Any JavaScript expression will work between curly braces, including function calls.</span>
    </>
  )
}