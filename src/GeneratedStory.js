import React from "react";

const GeneratedStory = ({ data, onCreateAnotherStory }) => {

  const { adj1, adj2, nounSingular1, nounSingular2, nounPlural } = data;

  return (
    <div>
      <h2>Your Story:</h2>
      <p>Once upon a time there was a {adj2} {nounSingular1}. On a {adj1} day, a {nounSingular2} carrying {nounPlural} came by to visit. The end.</p>
      <button onClick={onCreateAnotherStory}>Create another story</button>
    </div>
  )

}

export default GeneratedStory;