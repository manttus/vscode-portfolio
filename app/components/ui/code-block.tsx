import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface ICodeBlock {
  text: string;
  showLine?: boolean;
  content: string;
}

const CodeBlock = ({ text, showLine = false, content = " " }: ICodeBlock) => {
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
      {content.replace("\n", "")}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
