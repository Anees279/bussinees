import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import VisaIcon from "@mui/icons-material/AssignmentInd";
import IdCardIcon from "@mui/icons-material/PermIdentity";
import GovernmentIcon from "@mui/icons-material/Gavel";
import EconomicIcon from "@mui/icons-material/AccountBalance";
import DocumentIcon from "@mui/icons-material/Description";

import image1 from "../../../component/assets/image/bg.jpg";
import image2 from "../../../component/assets/image/bgp.jpg";
import image3 from "../../../component/assets/image/bg.jpg";

const Proonestep = () => {
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
      sm: "2rem",   // For medium devices (tablets)
      md: "2.5rem", // For large devices (desktops)
      lg: "3rem",   // For extra-large devices (large desktops)
    },
  }}
>
  Our Comprehensive PRO Services Include:
</Typography>

      </Box>

      {/* Main container for the cards */}
      <Grid container spacing={2} justifyContent="center">
        {/* Card items */}
        {[
          {
            icon: <BusinessIcon fontSize="large" sx={{ color: "black" }} />,
            title: "Business Setup Services",
            description:
              "Whether you’re launching a new venture or expanding an existing one, we provide expert guidance and assistance throughout the business setup journey.",
            image: image1,
          },
          {
            icon: <VisaIcon fontSize="large" sx={{ color: "black" }} />,
            title: "Residency Visa Processing",
            description:
              "We simplify the often intricate and time-consuming task of obtaining and managing residency visas for both you and your employees.",
            image: image2,
          },
          {
            icon: <IdCardIcon fontSize="large" sx={{ color: "black" }} />,
            title: "Emirates ID Services",
            description:
              "We manage applications and typing services for Emirates ID, a crucial identification document in the UAE.",
            image: image3,
          },
          {
            icon: <GovernmentIcon fontSize="large" sx={{ color: "black" }} />,
            title: "Ministry Services",
            description:
              "Our team helps navigate the approval process with different ministries and government agencies to ensure that your business complies with regulations.",
            image: image1,
          },
          {
            icon: <EconomicIcon fontSize="large" sx={{ color: "black" }} />,
            title: "Economic Department Services",
            description:
              "We aid in handling documentation and meeting requirements associated with the UAE Economic Department, paving the way for your business to prosper.",
            image: image2,
          },
          {
            icon: <DocumentIcon fontSize="large" sx={{ color: "black" }} />,
            title: "Documents Clearing",
            description:
              "We streamline the document clearing process, ensuring that your documents are processed swiftly and accurately.",
            image: image3,
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
                // width: { xs: "auto", md: 300 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "transform 0.5s ease, opacity 0.5s ease",
                "&:hover": {
                  transform: "scale(1.05)", // Zoom in effect
                  opacity: 0.9,
                  // "& .card-content": {
                  //   opacity: 0, // Hide the content
                  // },
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
                className="card-content"
                sx={{
                  textAlign: "center",
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

export default Proonestep;
