import React from "react";
import { Box, Typography } from "@mui/material";
import img from "../../../component/assets/image/embassay.jpg"; // Ensure the path to your image is correct

export const Mof = () => {
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
            alt="Ajman Mofa Assistance"
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
              Certificate Attestation in Dubai
            </Typography>
            <Typography variant="body1" sx={{}}>
              Individuals preparing to work in Dubai or other Gulf countries
              should verify their certificates through an attestation process
              known as attestations, to ensure authenticity and validity.
              Attestation also expedites processes while helping avoid delays or
              rejection. Unfortunately, however, it can be time-consuming and
              complex; that is why it is advisable to hire a reputable company
              as your agent to manage this task on your behalf and ensure your
              documents conform with UAE rules and specifications.
            </Typography>
            <Typography variant="body1" sx={{}}>
              No matter who you are – whether a student, professional, or an
              individual moving abroad for personal reasons – MOFA attestation
              is an integral component of international travel. Here is our
              guide that will help you navigate this process and prepare
              yourself for life abroad.
            </Typography>{" "}
            <Typography variant="body1" sx={{}}>
              Attestation is a complex multi-step procedure that includes
              verification by local authorities, MOFA and foreign embassies.
              Without guidance it can be challenging to navigate its
              intricacies; but with assistance you can turn your dream of living
              overseas into reality. Attestation service providers such as BMS
              Auditing can manage this entire process for you – saving time and
              effort along the way! They even offer free evaluation of documents
              to determine whether further attestation will be required before
              they can be accepted in their new country of residency.
            </Typography>
            <Typography variant="h3" sx={{}}>
              Apostille Attestation in Dubai
            </Typography>
            <Typography variant="body1" sx={{}}>
              An apostille is a type of international certification used to
              authenticate the source of public documents. Signed and sealed by
              designated authorities from countries who adhere to the Apostille
              Convention, an Apostille allows it to be recognized legally in any
              of the 104 member states of this convention. While Apostilles can
              be helpful, their validity varies; UAE being non-member requires
              documents to undergo full legalization by local government before
              attesting by Embassy for final acceptance in the destination
              country.
            </Typography>
            <Typography variant="body1" sx={{}}>
              Attesting documents before moving abroad is an integral step of
              the visa application process, yet it can be confusing and time
              consuming to know exactly which steps need to be taken. Missteps
              often occur, including trusting Apostille services without first
              checking requirements of the target country.
            </Typography>{" "}
            <Typography variant="body1" sx={{}}>
              Companies without experience often rely on incorrect forms and
              procedures that lead to costly delays or even rejection of
              applications. Attestation processes are complex; for optimal
              results it’s best to leave this task to professionals; their
              experience will save both time and money by making sure your
              documents arrive at their destination safely while helping avoid
              common pitfalls that make the process cumbersome.
            </Typography>
          </Typography>
        </Box>
      </Box>

      {/* Track Your Mofa Progress Section */}

      <Typography variant="body1" align="left" sx={{ padding: "24px" }}>
        <div
          style={{ maxWidth: "900px", margin: "0 auto", textAlign: "justify" }}
        >
          <Typography variant="h4" align="center" paddingTop="24px">
            Embassy Attestation in Dubai
          </Typography>
          <Typography variant="body1" sx={{}}>
            If you plan on moving or setting up business in Dubai, documents
            will need to be attested before they can be used by the UAE
            government. Attestation primarily serves to verify authenticity and
            ensure they meet legal requirements set out by their government;
            usually this process is necessary when working or sponsoring family
            members there.
          </Typography>{" "}
          <Typography variant="body1" sx={{}}>
            Embassy Attestation begins by having your documents reviewed by an
            issuing authority in your home country, before being submitted for
            certification from the UAE Embassy for Attestation. Attestation
            certifies that your documents meet all UAE government requirements.
          </Typography>
          <Typography variant="body1" sx={{}}>
            There can be numerous reasons for seeking document attestation
            services, including: Employment and Immigration Attestation: This
            form of attestation verifies educational certificates and
            professional credentials to verify their legitimacy for employment
            visas or permits in the UAE, or verify experience letters required
            for certain occupations in the UAE.
          </Typography>
          <Typography variant="body1" sx={{}}>
            As part of the UAE Embassy Attestation Process, your documents will
            be held for at least 30 days with their custody being under their
            jurisdiction. As this can limit access to them while they’re there,
            it’s vital that a company offering secure document attestation
            services be utilized; otherwise you risk misplacing them and thus
            delaying your visa process.
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
