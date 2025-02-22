import React from "react";
import { Box, Typography } from "@mui/material";
import img from "../../../component/assets/image/goldenvisa.jpg"; // Ensure the path to your image is correct

export const Goldensteps = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens, side-by-side on larger
          width: "100%", // Full width of the viewport
          maxWidth: "100vw", // Prevent overflow on smaller devices
          minHeight: "auto", // Dynamically adjusts height according to content
          alignItems: "stretch", // Ensure both sides stretch to fit the container
          overflowX: "hidden", // Prevent horizontal scroll
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
            alt="Golden Visa"
            style={{
              width: "100%", // Make the image responsive, take full width
              maxWidth: "100%", // Prevent it from exceeding its container width
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
            overflowX: "hidden", // Avoid horizontal overflow in content
          }}
        >
          {/* Headings and paragraphs */}
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              mb: 2,
              fontSize: { xs: "1.5rem", md: "3rem" }, // Adjust font size for responsiveness
              color: "blue",
            }}
          >
            Golden Residency Visa in UAE
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            The UAE’s Golden Residency Visa program offers a pathway to
            residency for investors, entrepreneurs, talented professionals, and
            specialized workers. Whether you’re seeking to invest in the UAE,
            establish a business, or contribute your skills to the nation’s
            growth, we are here to guide you through the visa application
            process.
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              mb: 2,
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              color: "#FF6347",
            }}
          >
            Our Range of Services
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
                Golden Residency Visa: Our experienced team is well-versed in
                all types of Golden Residency Visas, ensuring that you meet the
                requirements and navigate the procedures seamlessly.
              </li>
              <li>
                Visa Services for Dependents: We specialize in obtaining
                dependent visas for your loved ones, including spouses,
                children, parents, and domestic helpers.
              </li>
              <li>
                Document Attestation: Comprehensive attestation services for
                educational, marriage, birth certificates, and more.
              </li>
              <li>
                Document Clearing: Our experts handle the entire process,
                ensuring your documents are prepared, verified, and submitted
                accurately.
              </li>
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
        Transparency and Dependability
      </Typography>
      <Typography
        variant="body1"
        align="center"
        style={{ textDecoration: "none", paddingTop: "24px" }}
      >
        <div
          style={{ maxWidth: "600px", margin: "0 auto", textAlign: "justify" }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <strong>Contact Us:</strong> Reach out to us now to kickstart your
              dream journey to the UAE. We’re here to assist you every step of
              the way.
            </li>
            <li>
              Need help with your Oman visa application? Business Setup is here
              for you. Our experts ensure a hassle-free process. Get in touch
              today!
            </li>
            <li>
              Transparency is fundamental to our operations. Entrust us with
              your documents and visa applications, confident in our commitment
              to confidentiality and integrity throughout the entirety of the
              process.
            </li>
          </ul>
        </div>
      </Typography>
    </>
  );
};
