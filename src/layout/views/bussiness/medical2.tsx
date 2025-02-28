import React from "react";
import { Box, Typography } from "@mui/material";
import img from "../../../component/assets/image/med1.jpg"; // Ensure the path to your image is correct

export const Med = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens, side-by-side on larger screens
          width: "100%", // Full width of the viewport
          minHeight: "auto", // Dynamically adjusts height according to content
          alignItems: "stretch", // Ensures both sides stretch to fit the container
          overflowX: "hidden", // Prevents any horizontal scrolling
        }}
      >
        {/* Left Side Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" }, // Full width on small screens, 50% on medium and larger screens
            display: "flex", // Ensure the image is centered vertically
            justifyContent: "center", // Horizontally center the image
            alignItems: "center", // Vertically center the image
            height: "auto", // Ensure image box takes up available height
            overflow: "hidden", // Prevent image overflow
          }}
        >
          <img
            src={img}
            alt="Ajman Visa Assistance"
            style={{
              width: "100%", // Make the image responsive, take full width
              height: "600px", // Set a fixed height (you can adjust this value)
              objectFit: "cover", // Ensure the image maintains its aspect ratio without cropping
            }}
          />
        </Box>

        {/* Right Side Content */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" }, // Full width on small screens, 50% on medium and larger screens
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Half-white background
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Center content vertically
            padding: { xs: "20px", md: "40px" }, // Padding adjusts based on screen size
            height: "100%", // Ensure content box takes up available height
          }}
        >
          {/* Headings and paragraphs */}
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              mb: 2,
              fontSize: { xs: "1.5rem", md: "3rem" },
              color: "blue",
            }}
          >
            Our Services
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            <ul>
              <li>
                <strong>MOH Licensing :</strong>
                We assist with the application process for obtaining a license
                from the Ministry of Health (MOH), ensuring compliance with all
                regulations.
              </li>
              <li>
                <strong>DHA Licensing:</strong> Our team helps healthcare
                professionals obtain their Dubai Health Authority (DHA) license,
                facilitating a hassle-free licensing experience.
              </li>
              <li>
                <strong>HAAD Licensing:</strong>We provide comprehensive support
                for obtaining a license from the Health Authority Abu Dhabi
                (HAAD), guiding you through the entire licensing process.
              </li>
            </ul>
          </Typography>
        </Box>
      </Box>

      {/* Track Your Visa Progress Section */}

      <Typography variant="body1" align="left" sx={{ padding: "24px" }}>
        <div
          style={{ maxWidth: "900px", margin: "0 auto", textAlign: "justify" }}
        >
          <Typography variant="h4" align="center" paddingTop="24px">
            Get in Touch:
          </Typography>
          <ul style={{ padding: 0 }}>
            <li>
              Contact us today to learn more about our medical licensing
              services for MOH, DHA, and HAAD. Let us help you navigate the
              licensing process and start your healthcare career in the UAE.
            </li>
          </ul>
        </div>
      </Typography>
    </>
  );
};
