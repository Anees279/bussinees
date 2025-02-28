import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import VisaIcon from "@mui/icons-material/AssignmentInd";

const FreezonePLus = () => {
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
            width: "130px",
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
          Business Registration Dubai
        </Typography>
      </Box>

      {/* Main container for the cards */}
      <Grid container spacing={2} justifyContent="center">
        {/* Card items */}
        {[
          {
            icon: <BusinessIcon fontSize="large" sx={{ color: "black" }} />,
            title: "Expertise:",
            description:
              " With years of experience, we have an in-depth understanding of Dubai’s business landscape and legal requirements. Our expertise ensures that your business setup is handled professionally and efficiently.",
          },
          {
            icon: <VisaIcon fontSize="large" sx={{ color: "black" }} />,
            title: "Efficiency",
            description: (
              "We offer competitive pricing and transparent fee structures, making business setup in Al Barsha cost-effective."
            ),
          },
          {
            icon: <VisaIcon fontSize="large" sx={{ color: "black" }} />,
            title: "Personalized Service",
            description: (
             "We value your time, and our streamlined processes ensure that your business setup is completed in a timely manner."
            ),
          },
        ].map((card, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card
              sx={{
                position: "relative",
                overflow: "hidden",
                boxShadow: 3,

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

export default FreezonePLus;
