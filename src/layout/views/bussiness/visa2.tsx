import React from "react";
import { Box, Typography } from "@mui/material";
import img from "../../../component/assets/image/visa.jpg"; // Ensure the path to your image is correct

export const Vis = () => {
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
              Business License Dubai
            </Typography>
            <Typography variant="body1" sx={{}}>
              Business License Dubai provides an efficient and simple service to
              businesses that wish to operate in the UAE. The process involves
              submitting all of the necessary paperwork, obtaining any necessary
              permits and securing a commercial location – once all requirements
              have been fulfilled by your company, a license from the Free Zone
              Authority will be issued by them.
            </Typography>
            <Typography variant="body1" sx={{}}>
              Business Setup Mideast offers expert help when it comes to
              obtaining business licenses in the UAE. Their team of
              professionals are knowledgeable in all aspects of business setup.
              They will guide you through the process, ensure all paperwork is
              error-free and make your journey less daunting. While getting a
              license in UAE may seem complex at first, MW Mideast’s assistance
              will make the journey smoother for you.
            </Typography>{" "}
            <Typography variant="body1" sx={{}}>
              There are various kinds of business licenses in the UAE depending
              on your line of work. For instance, companies selling motorcycles
              or cars require a trade business license while those providing
              professional services require professional licensure; finally,
              real estate businesses need real estate licenses as well.
            </Typography>
            <Typography variant="body1" sx={{}}>
              A Mainland license gives you permission to operate in any of the
              seven emirates and is granted by the Department of Economic
              Development within each emirate where your business plans to be
              located. A Freezone license grants permission for operations to
              occur within specified demographic locations.
            </Typography>
            <Typography variant="h3" sx={{}}>
            Business Permit Dubai
            </Typography>
            <Typography variant="body1" sx={{}}>
            The UAE provides business visas to foreign nationals looking to invest in its country. These visas may be short or long term depending on the duration of investment or business engagement and require extensive paperwork and security clearances; processing can take from several weeks up to months in certain cases (for instance when investing significant financial amounts is involved).
            </Typography>
            <Typography variant="body1" sx={{}}>
            MoHRE) issues work permits to foreign workers in the UAE for two year terms and can be renewed after that. They are issued to professionals with bachelor degrees; those holding post secondary diplomas; or high school graduates – each category being issued separate permits by MoHRE.
            </Typography>{" "}
            <Typography variant="body1" sx={{}}>
            To acquire a work permit in Dubai, first submit an employment offer contract and proof of educational qualifications to MoHRE. Following that step, undergo medical examination and submit additional documents; once these requirements have been fulfilled you will be issued a No Objection Certificate by MOHRE as well as an entry visa into UAE allowing legal work within its borders, or changing status if already a citizen. Our PRO services can assist with document collection and attestations for a seamless experience when getting your work permit in Dubai.
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
          Dubai and the UAE provide businesses with an ideal global business environment, boasting world-renowned infrastructure, modern transportation systems and telecom networks that facilitate communication with customers and suppliers worldwide. Furthermore, Dubai stands out as an attractive location for international businesses due to its combination of tax benefits, foreign ownership privileges and liberal business laws that make communicating easy.
          </Typography>{" "}
          <Typography variant="body1" sx={{}}>
          No matter if your company is new or established, we provide comprehensive assistance when it comes to registration in the UAE. Our team of specialists offer support throughout this process and help ensure its success. Furthermore, we can help your employees and their dependents obtain work visas.
          </Typography>
          <Typography variant="body1" sx={{}}>
          Before your workers can start work in the UAE, they need to obtain an entry visa through the Ministry of Labor (MOL). MOL staff check whether there are enough local candidates available and that their sponsoring company has registered itself in UAE.
          </Typography>
          <Typography variant="body1" sx={{}}>
          MOL will issue your workers a quota visa that lasts 30 days and can be extended twice. Once in the UAE, after their initial quota period ends they must complete additional formalities to transform their entry visa into residence visa status – this includes having medical tests at certified health centers to confirm they do not carry communicable diseases such as HIV or tuberculosis.

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
