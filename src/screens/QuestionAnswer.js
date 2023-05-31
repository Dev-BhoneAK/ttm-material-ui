import React from "react";
import DetailAppBar from "../components/app-bar/DetailAppBar";
import HeadingTitle from "../components/common/HeadingTitle";
import CustomAccordion from "../components/common/CustomAccordion";
import useGreyBackground from "../hooks/useDarkLightTheme";

export default function QuestionAnswer() {
  const styles = {
    mb: { xs: 2, sm: 3 },
    position: "static",
    boxShadow: "none",
  };

  const greyBackground = useGreyBackground();
  return (
    <>
      <DetailAppBar
        headingTitle={<HeadingTitle title="Question & Answer" />}
        styles={styles}
      />
      <CustomAccordion
        title="Accordion 1"
        detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
      <CustomAccordion
        title="Accordion 2"
        detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
      <CustomAccordion
        title="Accordion 3"
        detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
      <CustomAccordion
        title="Accordion 4"
        detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
    </>
  );
}
