'use client';
import React, { useState, useEffect, useContext } from "react";
import { Editor} from "novel";
import { UserContext } from "@/contexts/user.context";
import { Button } from "@mui/material";
import { createItem } from "@/app/utils";

export default function App() {
  const { user } = useContext(UserContext)
  const [editorContent, setEditorContent] = useState("");
  const [item, setItem] = useState({});


  // const createItem = async (collection: string, item: object) => {
  //   console.log(item)
  //   const res = await fetch("/api/", {
  //     method: "POST",
  //     headers: {
  //     "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ collection: collection, item: item }),
  //   });
  //   console.log(res);
  // }

  return (
    <>
      <Button onClick={() => createItem("test", item)}>Save</Button>
      <Editor
        defaultValue={"hello"}
        onUpdate={(res) => setItem({...item, description: res?.getHTML()} )}
        className="bg-black"      
      />
    </>

  );
}   