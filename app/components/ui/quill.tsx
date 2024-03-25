import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Quill() {
  const modules = {
    toolbar: [["code", "image"]],
  };

  const formats = ["code", "image"];

  return (
    <ReactQuill className="w-full h-60" modules={modules} formats={formats} />
  );
}
