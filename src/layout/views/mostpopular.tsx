import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import backgroundImage1 from '../../component/assets/image/bgp.jpg'; // Add your background images
import backgroundImage3 from '../../component/assets/image/bgp.jpg';

const Most = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, p: 3, my: 6 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, p: 0, my: 6 }}>
        {/* Line above the heading */}
        <Box sx={{ width: '120px', height: '3px', backgroundColor: '#FF6347', mb: 2 }}></Box>

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
          Most Popular
        </Typography>

        <Typography variant="body1" align="center">
          Here are some of the popular Business Setup  we recommend. Each free zone has unique advantages, and our experts will guide you in selecting the right one based on your business goals.
        </Typography>
      </Box>

      {/* Main container for the cards */}
      <Grid container spacing={2} justifyContent="center">
        {/* Card with background image 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              boxShadow: 3,
              border: 1,
              borderColor: 'grey.300',
              borderRadius: 2,
              height: { xs: 'auto', md: 350 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2,
              backgroundImage: `url(${backgroundImage1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white', // Optional: Change text color for better readability
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="h3">
                Meydan
              </Typography>
              <Typography variant="body2" color="textSecondary">
              Ideal for cost-effective company formation with premium business benefits.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              boxShadow: 3,
              border: 1,
              borderColor: 'grey.300',
              borderRadius: 2,
              height: { xs: 'auto', md: 350 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2,
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="h3">
                Shams
              </Typography>
              <Typography variant="body2" color="textSecondary">
              – Best suited for startups, media, and creative industries
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card with background image 3 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              boxShadow: 3,
              border: 1,
              borderColor: 'grey.300',
              borderRadius: 2,
              height: { xs: 'auto', md: 350 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2,
              backgroundImage: `url(${backgroundImage3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white', // Optional: Change text color for better readability
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="h3">
                IFZA
              </Typography>
              <Typography variant="body2" color="textSecondary">
              – Offers multiple license types, including trading, consultancy, and service-based businesses.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 4 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              boxShadow: 3,
              border: 1,
              borderColor: 'grey.300',
              borderRadius: 2,
              height: { xs: 'auto', md: 350 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2,
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="h3">
                RAKEZ
              </Typography>
              <Typography variant="body2" color="textSecondary">
              – Provides affordable business setup options for industrial, commercial, and service-based companies.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Most;
