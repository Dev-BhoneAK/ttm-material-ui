import React from "react";

import DetailAppBar from "../components/app-bar/DetailAppBar";

export default function NovelDetail() {
  return (
    <>
      <DetailAppBar
        headingTitle={<HeadingTitle title="Weekly Weather Forecast" />}
      />
    </>
  );
}
