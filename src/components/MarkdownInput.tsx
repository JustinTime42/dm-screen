'use client';
import React, { useState, useEffect } from "react";
import { Editor, EditorProps } from "novel";

interface ExtendedEditorProps extends EditorProps {
  onChange?: (content: any) => void;
}


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