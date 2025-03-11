import React from "react";
import { Box, Typography } from "@mui/material";
import img from "../../../component/assets/image/abudhabi.jpg"; // Ensure the path to your image is correct

export const Familyvisasteps2 = () => {
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
            height: "100%", // Ensure image box takes up available height
            overflow: "hidden", // Prevent image overflow
          }}
        >
          <img
            src={img}
            alt="Ajman Visa Assistance"
            style={{
              width: "100%", // Make the image responsive, take full width
              height: "auto", // Familyvisasteps2tain aspect ratio
              objectFit: "cover", // Cover the area appropriately
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
              fontSize: { xs: "1.5rem", md: "2rem" },
              color: "blue",
            }}
          >
            Why Should You be careful while selecting Legal Team
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            If you select someone who is not expert in these laws, you may
            counter following issues
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
                {" "}
                <strong></strong> Your family’s visa could be rejected or
                canceled.
              </li>
              <li>
                {" "}
                <strong></strong> You might lose thousands of dirhams in fines
              </li>
              <li>
                {" "}
                <strong></strong> Your family could be separated or banned from
                the UAE
              </li>
            </ul>
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            The UAE has clear "rules of the game" for family visas. If you
            follow them (with help from experts!), your family can live together
            safely. If you break them, it’s like failing a test—no second
            chances!
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ mb: 2, fontSize: { xs: "1.5rem", md: "2rem" } }}
          >
            The Hidden Dangers of Non-Professional Services
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            Choosing inexperienced agents or DIY applications can lead to
            irreversible consequences
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
                {" "}
                <strong>Legal Penalties:</strong> Submitting unauthenticated
                documents (e.g., non-attested marriage certificates) may result
                in **AED 10,000+ fines** or criminal charges for fraud.
              </li>
              <li>
                {" "}
                <strong>Visa Delays:</strong> Errors in entry permits or medical
                tests can trap dependents in immigration limbo for months.
              </li>
              <li>
                {" "}
                <strong>Scams:</strong> Unlicensed providers often disappear
                after taking payments, leaving families stranded.
              </li>
              <li>
                {" "}
                <strong>Permanent Rejection:</strong> d. Overstaying due to
                miscalculated grace periods or medical failures can blacklist
                dependents from entering the UAE
              </li>
            </ul>
          </Typography>

          <Typography variant="body1" fontWeight="bold">
            What Sets Us Apart?
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            End-to-End Legal Protection
          </Typography>
          {/* Unordered List */}
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
                <strong> Document Attestation Mastery:</strong> We handle home
                country embassy attestations, MOFA translations, and Ejari
                contracts to avoid rejections.
              </li>
              <li>
                <strong>Salary & Accommodation Solutions:</strong> If your
                income falls short, we legally optimize your profile (e.g.,
                combining spouse incomes or property ownership).
              </li>
              <li>
                <strong>24/7 Application Tracking: </strong>Real-time updates
                via our client portal so you’re never in the dark.
              </li>
              <li>
                <strong>Fast-Track Processing:</strong>Urgent cases completed in
                **48 hours** (vs. 2+ weeks with standard agents.
              </li>
              <li>
                <strong>Priority Government Liaison: </strong> Direct access to
                typing centers, medical facilities, and immigration offices.
              </li>
              <li>
                <strong>Transparency & Ethics: </strong>f. Fixed pricing with a
                full breakdown
              </li>
              <li>
                <strong>Confidentiality Assured::</strong> Your data is
                encrypted and never shared.
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
          <Typography variant="h5" fontWeight="bold">
            Don’t Gamble With Your Family’s Future
          </Typography>
          Why risk delays, rejections, or legal trouble?
          <ul style={{ padding: 0 }}>
            <li>✅ 100% Approval Rate</li>
            <li>✅ Licensed by UAE Immigration Authorities</li>
            <li>✅ Rated 5/5 on Google & Trustpilot</li>
            <li>
              <strong>
                {" "}
                Your Family Deserves the Best – Not the Cheapest.
              </strong>
            </li>
            <li>
              <strong>
                Jurius Legal Prime -Where Expertise Meets Integrity.
              </strong>
            </li>
          </ul>
        </div>
      </Typography>
    </>
  );
};
