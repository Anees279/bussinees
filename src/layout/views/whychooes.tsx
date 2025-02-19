
import { Grid, Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import image1 from '../../component/assets/image/inzone-guarantee-01.svg';
import image2 from '../../component/assets/image/inzone-guarantee-02.svg';
import image3 from '../../component/assets/image/inzone-guarantee-03.svg';
import image4 from '../../component/assets/image/inzone-guarantee-04.svg';

const WhyChooseInZone = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, p: 3, my: 6 }}>
     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, p: 0, my: 6 }}>
  {/* Line above the heading */}
  <Box sx={{ width: '120px', height: '3px', backgroundColor: '#FF6347', mb: 2 }}></Box>

  <Typography
    variant="h2"
    component="h1"
    align="center"
    sx={{ fontWeight: 'bold', mb: 3, color: '#FF6347' }}
  >
    Why Choose الاعتماد?
  </Typography>

  <Typography variant="body1" align="center">
    Why not? We are simply the best business setup service provider in Dubai.
  </Typography>
</Box>

      

      {/* Main container for the cards */}
      <Grid container spacing={2} justifyContent="center"> {/* Smaller spacing between cards */}
        
        {/* Lowest Price Guarantee */}
        <Grid item xs={12} sm={6} md={6}> {/* Two cards per row on large devices */}
          <Card sx={{ boxShadow: 3, border: 1, borderColor: 'grey.300', borderRadius: 2, height: { xs: 'auto', md: 350 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 2 }}>
            <CardMedia
              component="img"
              alt="Lowest Price Guarantee"
              image={image1}
              sx={{ width: 120, height: 120 }}
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="h3">
                Lowest Price Guarantee
              </Typography>
              <Typography variant="body2" color="textSecondary">
                We provide an upfront price guarantee. In case you have a better
                quote, we will beat it!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick License Issuance */}
        <Grid item xs={12} sm={6} md={6}> {/* Two cards per row on large devices */}
          <Card sx={{ boxShadow: 3, border: 1, borderColor: 'grey.300', borderRadius: 2, height: { xs: 'auto', md: 350 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 2 }}>
            <CardMedia
              component="img"
              alt="Quick License Issuance"
              image={image2}
              sx={{ width: 120, height: 120 }}
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="h3">
                Quick License Issuance
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Our company formation consultants in Dubai ensure the issuance of
                company licenses within the shortest possible time.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* One-Stop-Shop Solutions */}
        <Grid item xs={12} sm={6} md={6}> {/* Two cards per row on large devices */}
          <Card sx={{ boxShadow: 3, border: 1, borderColor: 'grey.300', borderRadius: 2, height: { xs: 'auto', md: 350 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 2 }}>
            <CardMedia
              component="img"
              alt="One-Stop-Shop Solutions"
              image={image3}
              sx={{ width: 120, height: 120 }}
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="h3">
                One-Stop-Shop Solutions
              </Typography>
              <Typography variant="body2" color="textSecondary">
                We provide end-to-end business setup services in Dubai starting from
                company formation to UAE visa stamping and bank account opening.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Zero Service Fee */}
        <Grid item xs={12} sm={6} md={6}> {/* Two cards per row on large devices */}
          <Card sx={{ boxShadow: 3, border: 1, borderColor: 'grey.300', borderRadius: 2, height: { xs: 'auto', md: 350 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 2 }}>
            <CardMedia
              component="img"
              alt="Zero Service Fee"
              image={image4}
              sx={{ width: 120, height: 120 }}
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" component="h3">
                Zero Service Fee
              </Typography>
              <Typography variant="body2" color="textSecondary">
                You will only pay the government fee for setting up your free zone company.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
};

export default WhyChooseInZone;
