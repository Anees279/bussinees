import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"; // Import MUI Button component
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import { Autoplay } from "swiper/modules"; // Import Autoplay module from Swiper 11
import "swiper/css"; // Swiper styles
import "swiper/css/autoplay"; // Swiper autoplay styles

// Import images for slides
import slide1 from "../../component/assets/image/freezone.jpg";
import slide2 from "../../component/assets/image/pexels-ketut-subiyanto-4881149.jpg";
import slide3 from "../../component/assets/image/pexels-vlada-karpovich-7368317.jpg";

// Import small triangle images for both sides
import smallLeft1 from "../../component/assets/image/ded-round-image.webp";
import smallLeft2 from "../../component/assets/image/dmcc-round-image.webp";
import smallLeft3 from "../../component/assets/image/ifza-round-image.webp";

import smallRight1 from "../../component/assets/image/meydan-round-image.webp";
import smallRight2 from "../../component/assets/image/rakicc-round-image.webp";
import smallRight3 from "../../component/assets/image/shams-round-image.webp";

// Import top-right corner image
import cornerImage from "../../component/assets/image/logo.png";

const slideImages: string[] = [slide1, slide2, slide3];

const HereSection: React.FC = () => {
  return (
    <Box
      className="HereSection"
      sx={{ width: "100%", height: "90vh", position: "relative" }}
    >
      <Swiper
        modules={[Autoplay]} // Pass the Autoplay module
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
        spaceBetween={0}
        slidesPerView={1}
        style={{ width: "100%", height: "100%" }}
      >
        {slideImages.map((src, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "82vh",
                position: "relative",
              }}
            >
              {/* Top-right corner image */}
              <Box
                component="img"
                src={cornerImage}
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  width: "150px",
                  height: "150px",
                  // mr: 30,
                  // mt: 10,
                  boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
                  animation: "fadeInCornerImage 1.5s ease-in-out forwards",
                  "@keyframes fadeInCornerImage": {
                    "0%": { opacity: 0, transform: "translateY(-20px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                  },
                  "@media (max-width: 600px)": {
                    display: "none", // Hide the corner image on small devices
                  },
                }}
              />

              {/* Overlayed text */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fff",
                  textAlign: "center",
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
                  opacity: 0, // Initially invisible
                  animation:
                    "fadeIn 2s ease-in-out 0.5s forwards, slideIn 1s ease-in-out", // Apply animations
                  width: {
                    xs: "100%", // Full width on small devices
                    sm: "auto", // Default width on medium and large devices
                  },
                  padding: {
                    xs: "2px", // Padding for small devices
                    sm: "0", // No padding for medium and large devices
                  },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    "@keyframes fadeIn": {
                      "0%": { opacity: 0 },
                      "100%": { opacity: 1 },
                    },
                    "@keyframes slideIn": {
                      "0%": { transform: "translate(-50%, -40%)" },
                      "100%": { transform: "translate(-50%, -50%)" },
                    },
                    fontWeight: "bold",
                    mb: 3,
                    // color: '#FF6347',
                    fontSize: {
                      xs: "2rem", // For small devices (phones)
                      sm: "2.5rem", // For medium devices (tablets)
                      md: "2.5rem", // For large devices (desktops)
                      lg: "3rem", // For extra-large devices (large desktops)
                    },
                  }}
                >
                  Start Your Dream Business in UAE Today!
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    mt: 2,
                    animation:
                      "fadeInText 3s ease-in-out 1s forwards, slideInText 1.5s ease-in-out",
                    "@keyframes fadeInText": {
                      "0%": { opacity: 0 },
                      "100%": { opacity: 1 },
                    },
                    "@keyframes slideInText": {
                      "0%": { transform: "translate(-50%, -40%)" },
                      "100%": { transform: "translate(-50%, -50%)" },
                    },
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      color: "#FF6347", // Eye-catching color, e.g., Tomato Red
                      fontWeight: 800,
                      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)", // Adds shadow for extra emphasis
                    }}
                  >
                    Why Choose الاعتماد
                  </Box>
                  -We guarantee the lowest price and best services..
                </Typography>

                {/* Animated button */}
                <Button
                  variant="contained"
                  sx={{
                    mt: 4,
                    backgroundColor: "#007BFF", // Blue button color
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    px: 4,
                    py: 2,
                    animation: "fadeInButton 2s ease-in-out forwards",
                    "@keyframes fadeInButton": {
                      "0%": { opacity: 0, transform: "translateY(20px)" },
                      "100%": { opacity: 1, transform: "translateY(0)" },
                    },
                    "&:hover": {
                      backgroundColor: "#0056b3",
                      transform: "scale(1.05)", // Slight zoom effect on hover
                      transition: "transform 0.3s ease-in-out",
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>

              {/* Left Triangle Images */}
              <Box
                sx={{
                  position: "absolute",
                  top: "20%",
                  left: "5%",
                  display: "grid",
                  gridTemplateRows: "repeat(3, auto)",
                  gridTemplateColumns: "1fr",
                  gridRowGap: "10px",
                  alignItems: "center",
                  "@media (max-width: 900px)": {
                    display: "none",
                    // Hide images on medium to small devices
                  },
                }}
              >
                <Box
                  component="img"
                  src={smallLeft1}
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    gridRow: "1", // First row, single item
                    justifySelf: "center",
                    boxShadow: "2px 2px 8px rgba(0,0,0,0.5)",
                    mt: 30,
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gridRow: "2", // Second row with two items
                    gap: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src={smallLeft2}
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      boxShadow: "2px 2px 8px rgba(0,0,0,0.5)",
                    }}
                  />
                  <Box
                    component="img"
                    src={smallLeft3}
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      boxShadow: "2px 2px 8px rgba(0,0,0,0.5)",
                      ml: 10,
                      mt: 10,
                    }}
                  />
                </Box>
              </Box>

              {/* Right Triangle Images */}
              <Box
                sx={{
                  position: "absolute",
                  top: "20%",
                  right: "5%",
                  display: "grid",
                  gridTemplateRows: "repeat(3, auto)",
                  gridTemplateColumns: "1fr",
                  gridRowGap: "10px",
                  alignItems: "center",
                  "@media (max-width: 900px)": {
                    display: "none", // Hide images on medium to small devices
                  },
                }}
              >
                <Box
                  component="img"
                  src={smallRight1}
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    gridRow: "1", // First row, single item
                    justifySelf: "center",
                    boxShadow: "2px 2px 8px rgba(0,0,0,0.5)",
                    mt: 30,
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gridRow: "2", // Second row with two items
                    gap: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src={smallRight2}
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      boxShadow: "2px 2px 8px rgba(0,0,0,0.5)",
                    }}
                  />
                  <Box
                    component="img"
                    src={smallRight3}
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      boxShadow: "2px 2px 8px rgba(0,0,0,0.5)",
                      ml: 10,
                      mt: 10,
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

    </Box>
  );
};

export default HereSection;
