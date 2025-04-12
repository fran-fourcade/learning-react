export default function RenderingLists () {
  return (
    <>
      <h2>Rendering Lists</h2>
      <article>
        <p>It is common to render elements from a collection. For that we can use loops and functions as map() or filter() and return markup using the data from the collection item. <br />
        The components mapped from the collecion must have a key so React can keep track of them in case of reorders, insertions or deletions. <br />
        Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays. <br />
        Keys must not change or that defeats their purpose! <b>Don’t generate them while rendering.</b></p>
      </article>
    </>
  );
}