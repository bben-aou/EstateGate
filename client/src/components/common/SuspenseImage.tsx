import { TSuspenseImage } from "@/interfaces";
import React, { useState } from "react";

const SuspenseImage = (props: TSuspenseImage) => {
  const { src, alt, Skeleton } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <React.Fragment>
      {!isLoaded && Skeleton}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        style={{ display: isLoaded ? "block" : "none" }}
      />
    </React.Fragment>
  );
};
export default SuspenseImage;
