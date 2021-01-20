import SingleQuery from "./SingleQuery";
import React, { useState } from "react";
import Brat from "./Brat";
import TaskDefinition from "./TaskDefinition";
import TaskInformation from "./TaskInformation";

const url = "http://lvh.me:4440/evaluate";

const Ner = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const example_sents = ["Ali ata bak", "Naber"];
  return (
    <>
      <TaskDefinition context="ner" />
      <TaskInformation context="ner1_info" />
      <SingleQuery
        onChange={setAnswer}
        value={answer}
        url={url}
        example_sents={example_sents}
        onQueryChange={setQuery}
      />
      {/* <Brat doc={docData} coll={collData} /> */}
    </>
  );
};

export default Ner;
