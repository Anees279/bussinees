import React from "react";
import { Box, Typography } from "@mui/material";
import img from "../../../component/assets/image/beauty.jpg"; // Ensure the path to your image is correct

export const Beu = () => {
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
            Documents Required in the First Stage:
          </Typography>
          <p>Passport copy and visa copy of partners and investors.</p>
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
                <strong>Name Reservation: </strong>
                Reserve a unique name for your salon and obtain initial approval
                for the business name.
              </li>
              <li>
                <strong>Shop Rental and Decoration:</strong> Rent a suitable
                shop and ensure it complies with Dubai’s planning regulations.
                Interior decoration is crucial for creating an inviting
                atmosphere.
              </li>
              <li>
                <strong>Memorandum of Association:</strong> Draft a memorandum
                of association that outlines the ownership structure and other
                essential details of your business.
              </li>
              <li>
                <strong>Health and Safety Approval:</strong> Obtain approval
                from health and safety authorities to ensure your salon meets
                all necessary hygiene and safety standards.
              </li>
              <li>
                <strong>License Issuance: </strong> Apply for and obtain your
                beauty salon license from the DED. This process typically takes
                1-3 weeks.
              </li>
              <li>
                <strong>
                  Types of Beauty Salon Licenses In Dubai, there are two main
                  types of beauty salon licenses:{" "}
                </strong>
              </li>
              <li>
                <strong>Women’s Salon License: </strong>This license allows you
                to offer a wide range of beauty and hair care services for
                women, including hair treatments, makeup, skincare, and hair
                removal.
              </li>
              <li>
                <strong>Men’s Salon License: With this license, </strong> you
                can provide hairdressing and beautification treatments
                specifically tailored to men, including haircuts, grooming, and
                facial treatments.
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
              The beauty salon industry in Dubai offers numerous opportunities
              for growth and diversification. Beyond basic beauty services, you
              can expand your business to include training and makeup courses,
              tapping into the ever-growing demand for beauty education.
            </li>
            <li>
              If you’re considering company formation in Dubai and have a
              passion for the beauty industry, now is the perfect time to take
              the leap. The UAE’s favorable policies for foreign entrepreneurs,
              combined with the consistent demand for beauty services, make
              Dubai an attractive destination for your salon business.
            </li>
          </ul>
          <Typography variant="h4" align="center" paddingTop="24px">
            Contact Us Today
          </Typography>
          <ul style={{ padding: 0 }}>
            <li>
              Still unsure about the process or have questions? Our experienced
              consultants are here to provide you with a free consultation and
              guide you through every step of setting up your beauty salon in
              Dubai.
            </li>
          </ul>
        </div>
      </Typography>
    </>
  );
};
