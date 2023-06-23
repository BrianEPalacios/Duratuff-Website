import React, { useState } from "react";

function ClientInfo(){

  const [name, setName] = useState("");

  function handleNameChange(event){
    // This targets the name of the text area
    setName(event.target.value);
  }

  return(
    <div>
    <h3 style={{color: "white"}}> Name </h3>
    <textarea
      type="name"
      value={name}
      placeholder="Name"
      onChange={handleNameChange}
      />

    <h3 style={{color: "white"}}> Email </h3>
    <textarea
    type="email"
    placeholder="Email"
    />
    </ div>
  );
};

export default ClientInfo;
