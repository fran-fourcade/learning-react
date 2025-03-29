import { CodeBlock, nord } from "react-code-blocks";

export default function Codify({ code = '' }) {
  return (
    <div style={{ padding: '5px' }}>
      <CodeBlock
        text={code}
        language={"jsx"}
        theme={nord}
        showLineNumbers={true}
      />
    </div>
  );
}