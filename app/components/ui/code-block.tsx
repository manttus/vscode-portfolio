import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface ICodeBlock {
  text: string;
  showLine?: boolean;
}

const CodeBlock = ({ text, showLine = false }: ICodeBlock) => {
  const snippet = `
    {
      "name": "Raymon Bikram Basnyat",
      "age": 23,
      "address": {
        "city": "Kathmandu",
        "address": "Dhumbarai",
        "postal": 44600,
      },
      "socials": {
        "linkedin": "https://www.linkedin.com/in/raymon-basnyat-281382222/"
      }
    }`;

  return (
    <SyntaxHighlighter
      language="typescript"
      showLineNumbers={showLine}
      customStyle={{
        background: "1e1e1e",
        fontSize: text,
      }}
      style={atomOneDarkReasonable}
    >
      {snippet.replace("\n", "")}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
