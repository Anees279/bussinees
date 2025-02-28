import React from "react";
import { Box, Typography } from "@mui/material";
import img from "../../../component/assets/image/alb.jpg"; // Ensure the path to your image is correct

export const Alb = () => {
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
            Our Business Setup Services in Al Barsha
          </Typography>
          <p>
            Business Setup is your trusted partner in making your business
            dreams a reality. We provide a wide range of services to assist you
            in every step of the business setup process:
          </p>
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
                <strong>Free Consultation: </strong>
                Our experts offer a free consultation to guide you through the
                process of starting your business in Dubai. We provide valuable
                insights and recommendations tailored to your specific needs.
              </li>
              <li>
                <strong>Dubai Trade License:</strong> We offer a fast-track PRO
                service to help you obtain your Dubai trade license within three
                days. Our services cover all types of company licenses with
                local sponsorship.
              </li>
              <li>
                <strong>Company Formation:</strong> We assist you in the
                formation of various types of companies in Dubai, including new
                trade licenses, new LLC companies, commercial companies,
                professional companies, sole establishment companies, and branch
                offices.
              </li>
              <li>
                <strong>License Renewal:</strong> We assist you in the formation
                of various types of companies in Dubai, including new trade
                licenses, new LLC companies, commercial companies, professional
                companies, sole establishment companies, and branch offices.
              </li>
              <li>
                <strong>Office and Shop Arrangement:</strong> Our services
                extend to helping you find and arrange suitable office or shop
                spaces, ensuring that your business has a physical presence in
                Al Barsha.
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
            Contact Us Today
          </Typography>
          <ul style={{ padding: 0 }}>
            <li>
              Kickstart your business journey in Dubai’s Al Barsha with the
              support of Business Setup. Contact us today to take the first step
              towards establishing your business in this dynamic and thriving
              hub.
            </li>
          </ul>
        </div>
      </Typography>
    </>
  );
};
