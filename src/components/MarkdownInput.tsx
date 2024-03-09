'use client';
import React, { useState, useEffect } from "react";
import { Editor} from "novel";

export default function App() {
  const [editorContent, setEditorContent] = useState("");
  return (
    <Editor
      defaultValue={"hello"}
      onUpdate={(res) => console.log(res?.getHTML())}
      className="bg-black"      
      />
  );
}  