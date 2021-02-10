import React from "react";
import NavBar from "../NavBar";
import Summary from "./Summary";

const Heading = (params: { heading: string; description: string; }):any => {
  let summary = <></>;
  if(params.heading !== ""){ 
    summary = <Summary heading={params.heading} description={params.description} />;
  }


  return (
    <>
      <div id ="heading-frag">
        <NavBar />
        {summary}
      </div>
    </>
  );
};

export default Heading;