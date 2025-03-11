 
import { Box, Typography } from "@mui/material";
import img from "../../../component/assets/image/goldenvisa.jpg"; // Ensure the path to your image is correct
import FAQSection  from "./faq";
export const Familyvisasteps3 = () => {
  return (
    <>
      <Box
       sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row-reverse" }, // Swap positions on medium and larger screens
        width: "100%", // Full width of the viewport
        maxWidth: "100vw", // Prevent elements from exceeding the viewport width
        minHeight: "auto", // Dynamically adjusts height according to content
        alignItems: "stretch", // Ensure both sides stretch to fit the container
        // No need for overflowX: hidden here
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
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              color: "#FF6347",
            }}
          >
            Laws regarding Family Visa in UAE
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1rem" },
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            <ul>
              <li>
                <strong>
                  {" "}
                  The "Residency Law" (Federal Decree-Law No. 29 of 2021) What
                  it says?
                </strong>{" "}
                <br />
                This law sets the rules for foreigners living in the UAE. It
                explains who can sponsor family members (like spouses, kids, or
                parents) and what they need to do (e.g., earn enough money, have
                a proper house).
              </li>
              <li>
                <strong>
                  The "Family Law" (Federal Law No. 11 of 1992) What it says ?
                </strong>
                <br />
                This law defines who counts as "family." For example, only
                legally married couples can sponsor each other, and kids must be
                under 18 (or up to 25 if they’re studying).
              </li>
              <li>
                <strong> The "Attestation Law" What it says ?</strong> <br />
                All family documents (like marriage or birth certificates) must
                be stamped (attested) by the UAE Embassy in your home country
                and the UAE government. If not, your visa application will be
                rejected.
              </li>
              <li>
                <strong> The "Medical Test Law" What it says ?</strong> <br />
                Everyone over 18 applying for a family visa must pass a health
                check for diseases like tuberculosis or HIV. If they fail, they
                can’t get the visa.
              </li>
              <li>
                <strong>
                  {" "}
                  The "Overstaying Penalty Law" (UAE Penal Code) What it says ?
                </strong>{" "}
                <br />
                If your family stays in the UAE after their visa expires, you’ll
                pay a fine. If you ignore this, you could go to jail or get
                banned from the UAE.
              </li>
              <li>
                <strong>
                  {" "}
                  The "Golden Visa Law" (Recent Updates) What it says ?
                </strong>{" "}
                <br />
                If you’re a VIP (like a doctor, engineer, or investor), you can
                sponsor unlimited family members without salary rules.
              </li>
              <li>
                <strong>
                  {" "}
                  The "Domestic Helper Law" (Federal Law No. 10 of 2017) What it
                  says ?
                </strong>{" "}
                <br />
                If you want to bring a maid or driver to the UAE, you need extra
                permits, and you must treat them fairly (e.g., pay salaries on
                time).
              </li>
            </ul>
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ mb: 2, fontSize: { xs: "1.5rem", md: "2.5rem" } }}
          >
            Types of Family Visas
          </Typography>

          {/* Unordered List */}
          <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
            <li
              style={{ fontSize: "1rem", lineHeight: 1.6, fontWeight: "bold" }}
            >
              Spouse Visa
              <ul style={{ fontWeight: "normal", paddingLeft: "20px" }}>
                <li>
                  {" "}
                  For legally married partners. Requires attested marriage
                  certificates and sponsor’s income proof.
                </li>
              </ul>
            </li>
            <li
              style={{ fontSize: "1rem", lineHeight: 1.6, fontWeight: "bold" }}
            >
              Child Visa
              <ul style={{ fontWeight: "normal", paddingLeft: "20px" }}>
                <li>
                  {" "}
                  Covers children under 18 (or older if studying/special needs).
                  Birth certificates must be attested. .
                </li>
              </ul>
            </li>
            <li
              style={{ fontSize: "1rem", lineHeight: 1.6, fontWeight: "bold" }}
            >
              Parent Visa
              <ul style={{ fontWeight: "normal", paddingLeft: "20px" }}>
                <li>
                  c. Parent Visa: High-income earners can sponsor parents with
                  valid medical insurance.
                </li>
              </ul>
            </li>
            <li
              style={{ fontSize: "1rem", lineHeight: 1.6, fontWeight: "bold" }}
            >
              Domestic Helper Visa
              <ul style={{ fontWeight: "normal", paddingLeft: "20px" }}>
                <li>
                  {" "}
                  Optional for sponsoring live-in housemaids (requires
                  additional permits
                </li>
              </ul>
            </li>
          </ul>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ mb: 2, fontSize: { xs: "1.5rem", md: "2.5rem" } }}
          >
            Benefits of a UAE Family Visa 
          </Typography>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
             <strong>Healthcare :</strong> 
             Access to public hospitals and insurance.<br />  
             <strong>Education: </strong> 
             Enroll children in UAE schools/universities.  
             <br />  
             <strong>Employment: </strong> 
             Dependents over 18 can work without a separate permit.  
.  
             <br /> <strong>Long-Term Residency: </strong> 
             Pathway to Golden Visas or citizenship.  
  
             <br />
            </li>
            </ul>

        </Box>
       
      </Box>

      

<Typography
  variant="body1"
  align="center"
  style={{ textDecoration: "none", paddingTop: "24px" }}
>
  <Box
    sx={{
      display: "flex", // Flex display for both divs
      flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens, side-by-side on medium+
      gap: "20px", // Add some space between the divs
      justifyContent: "space-between", // Ensure there's space between the divs
    }}
  >
    {/* First Div - Document Information */}
    <div
    
      style={{
        margin: "10px 30px",
        textAlign: "justify",
        flex: 1, // Make this div take up available space equally
      }}
    >
         <Typography variant="h4" align="left" paddingTop="24px">
        Required Documents
      </Typography>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <strong>Sponsor’s Documents</strong> <br />
          a. Passport and Emirates ID copy. <br />
          b. Recent salary certificate or 6-month bank statements. <br />
          c. Tenancy contract (Ejari). <br />
          d. Employer NOC (if employed). <br />
        </li>
        <li>
          <strong>Dependent’s Documents</strong> <br />
          a. Passport copies (valid for 6+ months). <br />
          b. Attested marriage/birth certificates (translated to
          Arabic/English). <br />
          c. Passport-sized photos with white background. <br />
          d. Medical fitness certificate (for adults over 18). <br />
        </li>
      </ul>
    </div>

    {/* Second Div - FAQ Section */}
    <div>
     <FAQSection/>
    </div>
  </Box>
  

</Typography>

    </>
  );
};
