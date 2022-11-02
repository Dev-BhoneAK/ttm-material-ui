import React from "react";
import SectionTitle from "../common/SectionTitle";
import ArticleIcon from "@mui/icons-material/Article";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import MediaCard from "../common/MediaCard";
import Card from "@mui/material/Card";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// export default function Novels() {
//   const settings = {
//     // className: "slider variable-width",
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     infinite: false,
//   };
//   return (
//     <>
//       <SectionTitle icon={<MenuBookIcon />} title="Novels" />
//       <Slider {...settings}>
//         {/* <MediaCard type="horizontal" margin="true" />
//         <MediaCard type="horizontal" margin="true" />
//         <MediaCard type="horizontal" margin="true" />
//         <MediaCard type="horizontal" margin="true" />
//         <MediaCard type="horizontal" margin="true" /> */}
//         <Card sx={{ display: "flex", mr: 1.5 }}>
//           <CardMedia
//             component="img"
//             sx={{ width: 80 }}
//             image="https://mui.com/static/images/cards/live-from-space.jpg"
//             alt="Live from space album cover"
//           />
//           <Box sx={{ display: "flex", flexDirection: "column" }}>
//             <CardContent sx={{ flex: "1 0 auto", p: "16px 4px 8px 8px" }}>
//               <Typography>Live From Space Lorem Ipsum</Typography>
//             </CardContent>
//           </Box>
//         </Card>
//         <Card sx={{ display: "flex", mr: 1.5 }}>
//           <CardMedia
//             component="img"
//             sx={{ width: 80 }}
//             image="https://mui.com/static/images/cards/live-from-space.jpg"
//             alt="Live from space album cover"
//           />
//           <Box sx={{ display: "flex", flexDirection: "column" }}>
//             <CardContent sx={{ flex: "1 0 auto", p: "16px 4px 8px 8px" }}>
//               <Typography>Live From Space Lorem Ipsum</Typography>
//             </CardContent>
//           </Box>
//         </Card>
//         <Card sx={{ display: "flex", mr: 1.5 }}>
//           <CardMedia
//             component="img"
//             sx={{ width: 80 }}
//             image="https://mui.com/static/images/cards/live-from-space.jpg"
//             alt="Live from space album cover"
//           />
//           <Box sx={{ display: "flex", flexDirection: "column" }}>
//             <CardContent sx={{ flex: "1 0 auto", p: "16px 4px 8px 8px" }}>
//               <Typography>Live From Space Lorem Ipsum</Typography>
//             </CardContent>
//           </Box>
//         </Card>
//         <Card sx={{ display: "flex", mr: 1.5 }}>
//           <CardMedia
//             component="img"
//             sx={{ width: 80 }}
//             image="https://mui.com/static/images/cards/live-from-space.jpg"
//             alt="Live from space album cover"
//           />
//           <Box sx={{ display: "flex", flexDirection: "column" }}>
//             <CardContent sx={{ flex: "1 0 auto", p: "16px 4px 8px 8px" }}>
//               <Typography>Live From Space Lorem Ipsum</Typography>
//             </CardContent>
//           </Box>
//         </Card>
//         {/* <Card sx={{ mr: 5 }}>
//           <CardMedia
//             component="img"
//             height="180"
//             image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
//             alt="green iguana"
//           />
//         </Card>
//         <Card sx={{ mr: 5 }}>
//           <CardMedia
//             component="img"
//             height="180"
//             image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
//             alt="green iguana"
//           />
//         </Card>
//         <Card sx={{ mr: 5 }}>
//           <CardMedia
//             component="img"
//             height="180"
//             image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
//             alt="green iguana"
//           />
//         </Card>
//         <Card sx={{ mr: 5 }}>
//           <CardMedia
//             component="img"
//             height="180"
//             image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
//             alt="green iguana"
//           />
//         </Card> */}
//       </Slider>
//     </>
//   );
// }

export default function Novels({ novels }) {
  const settings = {
    className: "slider variable-width",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  };
  return (
    <>
      <SectionTitle icon={<MenuBookIcon />} title="Novels" />
      <Slider {...settings}>
        {novels.map((novel) => (
          <MediaCard type="image" margin="true" key={novel.id} data={novel} />
        ))}
      </Slider>
    </>
  );
}
