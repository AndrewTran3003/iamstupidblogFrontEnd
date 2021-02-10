import React from "react";
import LoadingStatus from "./LoadingStatus";
import NotFound from "./NotFound";
import ServerError from "./ServerError";
const LoadingException = (props: { status: string; }) =>{
    let status = props.status;
    let pageContent:{};

    if (status === "loading") {
      pageContent = <LoadingStatus />;
    } else if (status === "no-content") {

      pageContent = <NotFound />;
    } else {
      pageContent = <ServerError />;
    }
    return <>{pageContent}</>;
}

export default LoadingException;