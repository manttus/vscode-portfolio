import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Markdown from "react-markdown";

interface ICodeBlock {
  text: string;
  showLine?: boolean;
  content: string;
}

const CodeBlock = ({ text, showLine = false, content = " " }: ICodeBlock) => {
  return (
    <Markdown
      components={{
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || "");

          return !inline && match ? (
            <SyntaxHighlighter
              style={atomOneDarkReasonable}
              language={match[1]}
              showLineNumbers={showLine}
              customStyle={{
                background: "1e1e1e",
                fontSize: text,
              }}
              children={String(children).replace(/\n$/, "")}
              {...props}
            />
          ) : (
            <code className={className ? className : ""} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </Markdown>
  );
};

export default CodeBlock;
