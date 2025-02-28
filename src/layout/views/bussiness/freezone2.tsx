import React from "react";
import { Box, Typography } from "@mui/material";
import img from "../../../component/assets/image/freezone.jpg"; // Ensure the path to your image is correct

export const Fre = () => {
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
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                mb: 2,
                fontSize: { xs: "1.5rem", md: "3rem" },
                color: "blue",
              }}
            >
              Business Registration Dubai
            </Typography>
            <Typography variant="body1" sx={{}}>
              However, to qualify as a free zone company there are certain
              conditions that must be fulfilled in order to be considered one.
              These requirements include having adequate substance in the UAE
              and receiving qualifying income while adhering to transfer pricing
              rules. It should also be noted that free zone companies are exempt
              from corporate tax in Dubai or throughout the UAE but may still be
              subject to VAT depending on whether their income qualifies or
              they’re owned by local entities.
            </Typography>
            <Typography variant="body1" sx={{}}>
              Step one is determining which legal form you wish to form, from
              FZE through FZCO and LLC. After that, clients must present all
              required documents to the free zone authority and register their
              company name with them; making sure it reflects both the nature of
              their business activities as well as any restrictions of free zone
              authorities.
            </Typography>{" "}
            <Typography variant="body1" sx={{}}>
              Next, submit and obtain a comprehensive business plan along with a
              No Objection Certificate from any relevant sponsors or partners in
              order to avoid losing privileges offered by free zones. Your plan
              must outline objectives, financial forecasts and operational
              schedule.
            </Typography>
            <Typography variant="h3" sx={{}}>
              Requirements
            </Typography>
            <Typography variant="body1" sx={{}}>
              Setting up business in Dubai free zones can be immensely
              satisfying and lucrative for foreign investors, offering numerous
              advantages like tax exemptions, lower overhead costs, and easier
              administration. To take full advantage of their potential value
              it’s crucial that investors understand each free zone’s
              requirements as well as consult a specialist to make sure their
              obligations are fulfilled in an optimal way.
            </Typography>
            <Typography variant="body1" sx={{}}>
              Your first step should be deciding the primary economic activity
              of your company. Each UAE free zone offers their own list of
              permitted activities; generally speaking, businesses that engage
              in commercial services, trading activities and manufacturing
              operations can all apply for specific licenses such as service
              licenses (for service providers), trade licenses (for trading
              activities) or industrial licenses (manufacturing activities).
            </Typography>{" "}
            <Typography variant="body1" sx={{}}>
              Next, submit and obtain a comprehensive business plan along with a
              Step two is selecting a legal structure for your business, which
              varies between Free Zones. Your choices could include setting up
              as either a New Company with individual shareholders, Subsidiary
              Company with corporate shareholders, or Branch of an Existing
              Local or Foreign Company.
            </Typography>
            <Typography variant="body1" sx={{}}>
              Your company name must comply with the naming regulations of your
              chosen Free Zone; otherwise it must be approved by relevant
              authorities. Furthermore, create a business plan detailing short
              and long-term goals for the company before opening a bank account
              for operations to commence.
            </Typography>
          </Typography>
        </Box>
      </Box>

      {/* Track Your Visa Progress Section */}

      <Typography variant="body1" align="left" sx={{ padding: "24px" }}>
        <div
          style={{ maxWidth: "900px", margin: "0 auto", textAlign: "justify" }}
        >
          <Typography variant="h4" align="center" paddingTop="24px">
            Documents
          </Typography>
          <Typography variant="body1" sx={{}}>
            Free zone companies provide numerous tax benefits, including zero
            corporation and personal taxes, 100% company ownership and
            repatriation of profits, no currency restrictions and an open
            business environment. Navigating document submission processes may
            prove challenging for those unfamiliar with free zone regulations;
            that is where BizDaddy comes in to help.
          </Typography>{" "}
          <Typography variant="body1" sx={{}}>
            Before commencing their venture, business owners should determine
            the type of entity they would like to form in a free zone. While
            your options depend on which free zone it will operate in, common
            choices include setting up either a new company with individual
            shareholders, branch of foreign or local company or joint venture.
            It is also necessary to select an official name which conforms with
            free zone naming regulations.
          </Typography>
          <Typography variant="body1" sx={{}}>
            Step two is to draft a comprehensive business plan, outlining your
            goals and objectives as well as financial forecasts and operational
            schedule. This document is essential to obtaining approval, and must
            be included as part of your standard package of corporate documents
            such as license, Certificate of Incorporation, Share Certificate(s),
            Articles of Association and Lease/Tenancy Contract. Furthermore, if
            any shareholders or managers currently employed within UAE borders
            need No Objection Certificates from their employer before obtaining
            this approval package.
          </Typography>
          <Typography variant="h4" align="center" paddingTop="24px">
            Contact Us Today
          </Typography>
          <ul style={{ padding: 0 }}>
            <li>
              kickstart your business journey in Dubai’s Al Barsha with the
              support of Business Setup. Contact us today to take the first step
              towards establishing your business in this dynamic and thriving
              hub. Dubai.
            </li>
          </ul>
        </div>
      </Typography>
    </>
  );
};
