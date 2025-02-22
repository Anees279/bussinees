import React from "react";
import { Box, Typography } from "@mui/material";
import img from "../../../component/assets/image/Capture-4.png"; // Ensure the path to your image is correct

export const Abudabisteps = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens, side-by-side on larger
          width: "100%", // Full width of the viewport
          overflow: "hidden", // Prevents any scroll from appearing
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
            overflow: "hidden", // Prevents scroll from the image side
          }}
        >
          <img
            src={img}
            alt="Family Visa Process"
            style={{
              maxWidth: "100%", // Ensure the image takes full available width
              height: "auto", // Maintain aspect ratio
              objectFit: "cover", // Ensure image fits within the container
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
            overflowY: "auto", // Allows vertical scrolling if the content overflows on small screens
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
            Business Setup and Documents Clearing?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            We understand that applying for a family visa in Abu Dhabi can be
            complex, especially if you are relocating from other emirates. Our
            dedicated team of experts is well-versed in the intricacies of the
            Abu Dhabi Family Visa application process.
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
            Eligibility for Family Visa in Abu Dhabi:
          </Typography>

          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{
              mb: 2,
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            You can apply for a family visa in Abu Dhabi if you hold an
            employment visa or a businessman visa. The minimum salary required
            to apply for family status is AED 5,000 plus accommodation or AED
            6,000.
          </Typography>

          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{
              mb: 2,
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            The required documents for your wife and children’s visa application
            in Abu Dhabi include:
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
                Original and translated marriage certificate (with attestation)
              </li>
              <li>Original marriage certificate (for the file)</li>
              <li>
                Original and translated Arabic birth certificates for your
                children (if not issued in the UAE)
              </li>
              <li>Copies of the dependents’ passports</li>
              <li>Original passports</li>
              <li>
                2 photographs for each dependent with a white background
              </li>
              <li>
                Sponsor’s original labor contract and salary certificate in
                Arabic from the employer
              </li>
              <li>
                Tenancy contract with a stamp from Baladiya (Municipality) if
                applicable
              </li>
              <li>Sponsor’s original passport</li>
            </ul>
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ mb: 2, fontSize: { xs: "1.5rem", md: "2.5rem" } }}
          >
            Types of VISA
          </Typography>

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

      {/* Visa Process Section */}
      <Typography variant="h4" align="center" paddingTop="24px">
        The Visa Application Process:
      </Typography>

      <Typography variant="body1" align="left" style={{ paddingTop: "24px" }}>
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "justify",
          }}
        >
          <ul style={{ padding: 0 }}>
            <li>
              <strong>Contact Us:</strong> Reach out to us now to kickstart your
              dream journey to the UAE. We’re here to assist you every step of
              the way.
            </li>
            <li>
              Residence Permit (Entry Permit if family members are outside the
              UAE).
            </li>
            <li>
              Visit an authorized typing center to request a family visa
              application. Fees vary depending on the urgency of processing.
            </li>
            <li>
              Visit the Naturalization and Expatriate Affairs Department to
              submit your application and receive the “Pink visa.”
            </li>
            <li>
              If your family is already in the country, change their status by
              applying for a status change through a typing center.
            </li>
            <li>
              If there are fines to be paid (e.g., for overstaying), they must
              be settled.
            </li>
            <li>
              Undergo a medical test at an authorized medical center (except for
              individuals under 18 years old).
            </li>
            <li>Obtain health insurance for your family.</li>
            <li>Apply for Emirates ID if not already done.</li>
            <li>Complete the residence visa stamping process.</li>
            <li>
              <strong>Note:</strong> In case of a failed medical examination, immediate departure
              may be required if individuals are found unfit post-examination.
            </li>
          </ul>
        </div>
      </Typography>
    </>
  );
};
