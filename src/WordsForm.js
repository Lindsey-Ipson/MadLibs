import React, { useState } from "react";
import useFields from './hooks/useFields';
import './WordsForm.css';

const WordsForm = ({ onSubmit }) => {
  const [formData, handleChange, resetForm] = useFields({
    adj1: "",
    adj2: "",
    nounSingular1: "",
    nounSingular2: "",
    nounPlural: ""
  })

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(formData);
    resetForm();
  }

  return (
    <form className="WordsForm" onSubmit={handleSubmit}>
      <h2>Submit the words below to generate a story!</h2>

      <label htmlFor="adj1">adjective</label>
      <input
        id="adj1"
        type="text"
        name="adj1"
        value={formData.adj1}
        onChange={handleChange}
      />

      <label htmlFor="adj2">adjective</label>
      <input
        id="adj2"
        type="text"
        name="adj2"
        value={formData.adj2}
        onChange={handleChange}
      />

      <label htmlFor="nounSingular1">noun (singular)</label>
      <input
        id="nounSingular1"
        type="text"
        name="nounSingular1"
        value={formData.nounSingular1}
        onChange={handleChange}
      />

      <label htmlFor="nounSingular2">noun (singular)</label>
      <input
        id="nounSingular2"
        type="text"
        name="nounSingular2"
        value={formData.nounSingular2}
        onChange={handleChange}
      />

      <label htmlFor="nounPlural">noun (plural)</label>
      <input
        id="nounPlural"
        type="text"
        name="nounPlural"
        value={formData.nounPlural}
        onChange={handleChange}
      />

      <button>Get story!</button>

    </form>
  )
}

export default WordsForm;