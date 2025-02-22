import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import VisaIcon from "@mui/icons-material/AssignmentInd";

const Proplus = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        p: 3,
        my: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          p: 0,
          my: 6,
        }}
      >
        <Box
          sx={{
            width: "120px",
            height: "3px",
            backgroundColor: "#FF6347",
            mb: 2,
          }}
        ></Box>

        <Typography
          variant="h2"
          component="h1"
          align="center"
          sx={{
            fontWeight: "bold",
            mb: 3,
            color: "#FF6347",
            fontSize: {
              xs: "1.5rem", // For small devices (phones)
              sm: "2rem", // For medium devices (tablets)
              md: "2.5rem", // For large devices (desktops)
              lg: "3rem", // For extra-large devices (large desktops)
            },
          }}
        >
          PRO Services in UAE
        </Typography>
      </Box>

      {/* Main container for the cards */}
      <Grid container spacing={2} justifyContent="center">
        {/* Card items */}
        {[
          {
            icon: <BusinessIcon fontSize="large" sx={{ color: "black" }} />,
            title: "Our PRO Services Cover Various Locations:",
            description: (
              <ul
                style={{
                  //   listStyleType: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                <li style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Dubai
                </li>
                <li style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Abu Dhabi
                </li>
                <li style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Sharjah
                </li>
                <li style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Umm al-Qaiwain
                </li>
                <li style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Fujairah
                </li>
                <li style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Ajman
                </li>
                <li style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Ra’s al-Khaimah
                </li>
              </ul>
            ),
          },
          {
            icon: <VisaIcon fontSize="large" sx={{ color: "black" }} />,
            title: "Our Range of PRO Services Includes:",
            description: (
              <ul
                style={{
                  //   listStyleType: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                <li style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  {" "}
                  Employment Visa Services
                </li>
                <li style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Residency Visa Services
                </li>
                <li style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Visa Renewals and Cancellations
                </li>
                <li style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Medical Checkup Assistance
                </li>
                <li style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Economic Department Documentation
                </li>
                <li style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Document Clearance and Processing
                </li>
                <li style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Government and Semi-Government Liaison
                </li>
                <li style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Document Typing and Writing
                </li>
                <li style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Arabic Document Processing
                </li>
              </ul>
            ),
          },
        ].map((card, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card
              sx={{
                position: "relative",
                overflow: "hidden",
                boxShadow: 3,
                border: 1,
                borderColor: "grey.300",
                borderRadius: 2,
                height: { xs: "auto", md: 300 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start", // Align items to start (left)
                alignItems: "flex-start", // Ensure all content is aligned left
                p: 2,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "transform 0.5s ease, opacity 0.5s ease",
                "&:hover": {
                  transform: "scale(1.05)", // Zoom in effect on hover
                  opacity: 0.9, // Reduce opacity slightly on hover
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                {card.icon}
                <Typography variant="h5" component="h3" sx={{ ml: 1 }}>
                  {card.title}
                </Typography>
              </Box>

              <CardContent
                sx={{
                  textAlign: "left", // Align text content to the left
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  p: 2,
                  borderRadius: 2,
                  transition: "opacity 0.5s ease",
                }}
              >
                <Typography variant="body2" color="textSecondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Proplus;
