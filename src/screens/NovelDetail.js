import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { pdfjs, Document, Page } from "react-pdf";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import { getNovelsDetail } from "../utils/api";
import { circularButton } from "../utils/commonStyle";
import HeadingTitle from "../components/common/HeadingTitle";
import DetailAppBar from "../components/app-bar/DetailAppBar";
import useSwipeEvent from "../hooks/useSwipeEvent";
import useWindowWidth from "../hooks/useWindowWidth";
import useUpperTabletSize from "../hooks/useUpperTabletSize";

// const options = {
//   cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
//   cMapPacked: true,
//   standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
// };

export default function NovelDetail() {
  const { novel_id } = useParams();
  const [pdfLoadSuccess, setPdfLoadSuccess] = useState(false);
  const [novelDetailData, setNovelDetailData] = useState(undefined);
  const [numPages, setNumPages] = useState(undefined);
  const [pageNumber, setPageNumber] = useState(1);
  const width = useWindowWidth();
  const upperTabletSize = useUpperTabletSize();
  const { handleTouchStart, checkTouchPositionDiff } = useSwipeEvent();

  useEffect(() => {
    async function fetchData() {
      const novelDetail = await getNovelsDetail(novel_id);
      setNovelDetailData(novelDetail);
    }
    fetchData();
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setPdfLoadSuccess(true);
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const handleTouchMove = (event) => {
    const diff = checkTouchPositionDiff(event);
    if (diff === "next" && pageNumber < numPages) {
      nextPage();
    }
    if (diff === "prev" && pageNumber > 1) {
      previousPage();
    }
  };

  return (
    <>
      <DetailAppBar
        headingTitle={<HeadingTitle title={novelDetailData?.title} />}
      />
      <Box sx={{ px: 3, pb: 3 }}>
        <div className="novel-detail-container">
          <div className="document-container">
            {upperTabletSize && pdfLoadSuccess && (
              <Button
                variant="contained"
                disabled={pageNumber <= 1}
                onClick={previousPage}
                sx={{ ...circularButton, mr: { xs: 0.5, sm: 1 } }}
              >
                <ArrowBackIosNewIcon />
              </Button>
            )}
            <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
              <Document
                file={`${process.env.REACT_APP_API_DOMAIN}/assets${novelDetailData?.filePath}`}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<CircularProgress color="primary" size={50} />}
                error={<CircularProgress color="primary" size={50} />}
              >
                <Page
                  pageNumber={pageNumber}
                  width={Math.min(width * 1, 800)} // 100% view-width on mobile
                />
              </Document>
            </div>
            {upperTabletSize && pdfLoadSuccess && (
              <Button
                variant="contained"
                disabled={pageNumber >= numPages}
                onClick={nextPage}
                sx={{ ...circularButton, ml: { xs: 0.5, sm: 1 } }}
              >
                <ArrowForwardIosIcon />
              </Button>
            )}
          </div>

          {pdfLoadSuccess && (
            <div className="page-number-container">
              <p>
                Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
              </p>
            </div>
          )}
        </div>
      </Box>
    </>
  );
}
