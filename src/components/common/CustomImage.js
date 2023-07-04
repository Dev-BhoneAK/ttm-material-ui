import React from "react";
import Image from "mui-image";

export default function CustomImage({ imageSrc }) {
  return (
    <Image
      src={imageSrc}
      width="100%"
      showLoading
      duration={3000}
      easing="ease-in-out"
      bgColor="inherit"
    />
  );
}
