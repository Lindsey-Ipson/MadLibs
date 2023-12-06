import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import WordsForm from "./WordsForm";
import GeneratedStory from "./GeneratedStory";


const MadLib = () => {

  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData);
    console.log(formData);
  };

  const handleCreateAnotherStory = () => {
    setSubmittedData(null);
  };

  return (
    <div>
      <h1>MadLibs</h1>
      {!submittedData && <WordsForm onSubmit={handleFormSubmit} /> }
      {submittedData && <GeneratedStory data={submittedData} onCreateAnotherStory={handleCreateAnotherStory} />}

    </div>
  )

}

export default MadLib;