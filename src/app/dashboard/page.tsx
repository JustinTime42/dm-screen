'use client'
import React from "react";
import EntityEditor from "@/components/auth/EntityEditor";

const Dashbaord = () => {
  const [entity, setEntity] = React.useState({ title: "test", description: "", type: "Monster"});
  return (
    <div>
      <h1>Dashboard</h1>
      <EntityEditor entity={entity} onChange={setEntity}/>
    </div>
  );
};
export default Dashbaord;