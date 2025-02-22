import React from "react";
import { Box, Typography } from "@mui/material";
import img from "../../../component/assets/image/ajaman1.jpeg"; // Ensure the path to your image is correct

export const Ajamansteps = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens, side-by-side on larger
          width: "100%", // Full width of the viewport
          minHeight: "auto", // Dynamically adjusts height according to content
          alignItems: "stretch", // Ensures both sides stretch to fit the container
        }}
      >
        {/* Left Side Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" }, // Full width on small screens, 50% on medium and larger screens
            display: "flex", // Ensure the image is centered vertically
            justifyContent: "center", // Horizontally center the image
            alignItems: "center", // Vertically center the image
            height: "100%", // Ensure image box takes up available height
          }}
        >
          <img
            src={img}
            alt="Person with glasses"
            style={{
              width: "100%", // Make the image responsive, take full width
              height: "auto", // Maintain aspect ratio
              objectFit: "contain", // Ensure image fits well within the container
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
              fontSize: { xs: "1.5rem", md: "3rem", color: "blue" },
            }}
          >
            Family Visa Assistance:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            Moving to the UAE with your family? Our Family Visa services
            simplify bringing your loved ones to Ajman. This category allows
            sponsorship of parents, spouses, and children (under 18). With our
            expertise, migrate your family seamlessly, ensuring a smooth
            transition.
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              mb: 2,
              fontSize: { xs: "1.5rem", md: "2.5rem", color: "#FF6347" },
            }}
          >
            Types of UAE Visas & Permits:{" "}
          </Typography>

          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{
              mb: 2,
              fontSize: { xs: ".5rem", md: "1rem" },
            }}
          >
            Our Ajman Visa services include::{" "}
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
              <li>Local Employee Visa</li>
              <li> Free Zone Visa</li>
              <li>Immigration / Establishment Card</li>
              <li>Visa Stamping</li>
              <li>Visa Renewal</li>
              <li>Visa Cancellation</li>
              <li>Labour Card Renewal</li>
              <li>Visa File Opening</li>
              <li>Entry Permit Visa</li>
              <li>Family Residency Visa</li>
              <li>Visa Renewal & Cancellation</li>
              <li>Change of Status</li>
              <li>Short and Long-Term Visit Visas</li>
              <li>Domestic Worker Visa</li>
              <li>Medical Application</li>
              <li>Emirates ID Application</li>
              <li>Health Insurance</li>
              <li>Visa Stamping Application</li>
            </ul>
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ mb: 2, fontSize: { xs: "1.5rem", md: "2.5rem" } }}
          >
            Types of VISA
          </Typography>

          {/* Unordered List */}
          <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
            <li
              style={{ fontSize: "1rem", lineHeight: 1.6, fontWeight: "bold" }}
            >
              Tourist e-Visa
              <ul style={{ fontWeight: "normal", paddingLeft: "20px" }}>
                <li>For tourism purposes.</li>
                <li>Allows exploration of tourist attractions.</li>
              </ul>
            </li>
            <li
              style={{ fontSize: "1rem", lineHeight: 1.6, fontWeight: "bold" }}
            >
              Business e-Visa
              <ul style={{ fontWeight: "normal", paddingLeft: "20px" }}>
                <li>For business-related activities.</li>
                <li>Includes meetings, conferences, and negotiations.</li>
              </ul>
            </li>
            <li
              style={{ fontSize: "1rem", lineHeight: 1.6, fontWeight: "bold" }}
            >
              Family Visit e-Visa
              <ul style={{ fontWeight: "normal", paddingLeft: "20px" }}>
                <li>Intended for visiting relatives or friends.</li>
                <li>Facilitates family reunification.</li>
              </ul>
            </li>
          </ul>
        </Box>
      </Box>
      <Typography variant="h4" align="center" paddingTop="24px">
        Track Your Visa Progress:
      </Typography>
      <Typography variant="body1" align="left" style={{ paddingTop: "24px" }}>
        <div
          style={{ maxWidth: "900px", margin: "0 auto", textAlign: "justify" }}
        >
          <ul style={{ padding: 0 }}>
            <li>
              Visa processing is time-sensitive. With our services, track your
              visa application, ensuring transparency and peace of mind
              throughout.
            </li>
          </ul>
          <Typography variant="h4" align="center" paddingTop="24px">
            Get in Touch:
          </Typography>
          <ul style={{ padding: 0 }}>
            <li>
              Ready for your UAE visa journey? Contact us now, and let us guide
              you through the Ajman Visa application. Whether an individual,
              family, or business, Business Setup and Document Clearing is your
              trusted partner for all visa needs.
            </li>
          </ul>
        </div>
      </Typography>
    </>
  );
};
