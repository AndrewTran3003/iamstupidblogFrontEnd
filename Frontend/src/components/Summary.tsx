import React from "react";
import { useRef } from "react";

const Summary = (params:{heading:string, description:string}) =>{
  const x = useRef(null);
  const y = useRef(null);

  
    return (
      <React.Fragment>
        <div ref={y} className="summary">
          <div className="container">
            <h1 id="summary-heading">{params.heading}</h1>
            <i>
              <div
                id="summary-description"
                dangerouslySetInnerHTML={{ __html: params.description }}
                ref={x}
              ></div>
            </i>
          </div>
        </div>
      </React.Fragment>
    );
};
 export default Summary;

