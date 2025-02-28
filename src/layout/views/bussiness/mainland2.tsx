import React from "react";
import { Box, Typography } from "@mui/material";
import img from "../../../component/assets/image/main1.jpg"; // Ensure the path to your image is correct

export const Main = () => {
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
              height: "auto", // Maintain aspect ratio
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
              fontSize: { xs: "1.5rem", md: "3rem" },
              color: "blue",
            }}
          >
            Why Choose Mainland Company Setup?
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
                <strong>Market Access:</strong> Mainland companies can trade
                freely within the UAE market and are not restricted to operating
                within a specific free zone.
              </li>
              <li>
                {" "}
                <strong>Flexibility:</strong> Unlike free zone companies,
                mainland companies have no restrictions on the number of visas
                issued, allowing for greater flexibility in staffing.
              </li>
              <li>
                {" "}
                <strong>Local Presence:</strong> A mainland company requires a
                local sponsor, providing you with valuable insights into the
                local market and regulatory environment.
              </li>
            </ul>
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ mb: 2, fontSize: { xs: "1.5rem", md: "2.5rem" } }}
          >
            Here is a list of commonly required documents for mainland company
            setup in the UAE.
          </Typography>
          <p>
            Here is a list of commonly required documents for mainland company
            setup in the UAE. Please note that specific requirements may vary
            depending on the nature of your business and the jurisdiction in
            which you are establishing your company. It is advisable to consult
            with a legal advisor or business setup consultant for detailed
            guidance tailored to your specific situation.
          </p>

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
                <strong> Passport Copies:</strong> Copies of the passports of
                all shareholders and directors.
              </li>
              <li>
                <strong>Visa Copies:</strong> Copies of the UAE residence visas
                of all shareholders and directors (if applicable).
              </li>
              <li>
                <strong>Emirates ID Copies:</strong> Copies of the Emirates ID
                cards of all shareholders and directors (if applicable).
              </li>
              <li>
                <strong>No Objection Certificate (NOC):</strong>A No Objection
                Certificate from the current sponsor (if the shareholder or
                director is already sponsored in the UAE).
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
          <ul style={{ padding: 0 }}>
            <li>
              <strong>Memorandum of Association (MOA):</strong> A duly attested
              Memorandum of Association outlining the business activities and
              shareholding structure of the company.
            </li>
            <li>
              <strong>Local Sponsor Agreement:</strong> A sponsorship agreement
              with a UAE national who will act as the local sponsor for the
              company.
            </li>
            <li>
              <strong>Tenancy Contract:</strong> A tenancy contract for the
              office premises where the company will be located. any.
            </li>
            <li>
              <strong>TEjari Certificate:</strong> An Ejari certificate for the
              office premises issued by the Real Estate Regulatory Authority
              (RERA) in Dubai. any.
            </li>
            <li>
              <strong>Trade Name Reservation Certificate:</strong> A certificate
              issued by the Department of Economic Development (DED) confirming
              the reservation of the company’s trade name. any.
            </li>
            <li>
              <strong>Bank Reference Letter:</strong> A bank reference letter
              for each shareholder and director.
            </li>
            <li>
              <strong>Audited Financial Statements: </strong> statements for
              corporate shareholders (if applicable).
            </li>{" "}
            <li>
              <strong> Power of Attorney (POA):</strong> A Power of Attorney
              authorizing a representative to act on behalf of the company
              during the setup process.
            </li>{" "}
            <li>
              <strong> Approval from Regulatory Authorities:</strong> Approval
              from relevant regulatory authorities for certain business
              activities (e.g., healthcare, education, legal, etc.).
            </li>{" "}
            <li>
              <strong> Additional Permits and Licenses:</strong> Depending on
              the nature of your business, you may require additional permits
              and licenses from specific authorities (e.g., healthcare, food,
              tourism, etc.).
            </li>
          </ul>
          <Typography variant="h4" align="center" paddingTop="24px">
            Get in Touch:
          </Typography>
          <ul style={{ padding: 0 }}>
            <li>
              Need MOFA attestation services in the UAE? Contact Business Setup
              and Documents Clearing for fast and reliable attestation of your
              certificates and documents. Get in touch today to simplify your
              attestation process!
            </li>
          </ul>
        </div>
      </Typography>
    </>
  );
};
