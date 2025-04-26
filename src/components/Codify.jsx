import { CodeBlock, atomOneDark } from "react-code-blocks";

export default function Codify({ code = '' }) {
  return (
      <CodeBlock
        text={code}
        theme={atomOneDark}
        language="jsx"
        showLineNumbers={true}
        codeBlock={true}
      />
  );
}