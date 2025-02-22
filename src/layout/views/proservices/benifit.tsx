import React from "react";
import { Box, Typography } from "@mui/material";

const BenefitsOfProServices = () => {
  const benefits = [
    {
      title: "Time-Saving",
      description:
        "By delegating your PRO requirements to us, you can save a significant amount of time, as we adeptly manage all necessary formalities and paperwork.",
    },
    {
      title: "Expert Guidance",
      description:
        "Our proficient team possesses deep knowledge of government procedures, guaranteeing precise adherence to all stipulations.",
    },
    {
      title: "Precision",
      description:
        "We assist in preventing costly errors by meticulously handling all documentation and formalities accurately from the outset.",
    },
    {
      title: "Streamlined Operations",
      description:
        "Our systematic approach minimizes disruptions and fosters seamless business operations.",
    },
    {
      title: "Confidentiality",
      description:
        "We uphold the utmost confidentiality with your documents and information, ensuring complete privacy.",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
        px: 2,
      }}
    >
      {/* Main Heading */}
      <Typography
        variant="h2"
        align="center"
        sx={{
          fontWeight: "bold",
          mb: 4,
          color: "#FF6347",
          fontSize: {
            xs: "1.5rem", // Small devices
            sm: "2rem",   // Medium devices
            md: "2.5rem", // Large devices
            lg: "3rem",   // Extra-large devices
          },
        }}
      >
        Benefits of Our PRO Services
      </Typography>

      {/* Ordered List for Benefits */}
      <Box
        component="ol"
        sx={{
          listStyleType: "decimal",
          paddingLeft: "20px",
          maxWidth: "1000px", // Limits width for better readability
          textAlign: "left", // Align text to left
        }}
      >
        {benefits.map((benefit, index) => (
          <Box key={index} component="li" sx={{ mb: 3 }}>
            {/* Sub-heading */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 1,
                color: "black",
              }}
            >
              {benefit.title}
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{ color: "textSecondary" }}
            >
              {benefit.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BenefitsOfProServices;
