
import { Grid, Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import image1 from '../../../component/assets/image/inzone-guarantee-01.svg';
import image2 from '../../../component/assets/image/inzone-guarantee-02.svg';
import image3 from '../../../component/assets/image/inzone-guarantee-03.svg';

const Visadubaisteps = () => {
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
                    UAE E-ViSA
                </Typography>
                <Typography variant="body1" align="left">
                    <ul>
                    <li><strong>Plan Your Trip:</strong>
                            Start planning your UAE adventure today with us. Our services ensure a smooth journey without any worries.
                        </li>
                        <li><strong>
                            Contact Us: </strong>
                            Reach out to us now to kickstart your dream journey to the UAE. We’re here to assist you every step of the way.
                        </li>
                        <li><strong>Worry-Free Adventure:</strong>
                            With our professional visa services, enjoy a worry-free and unforgettable experience in the UAE.
                        </li>
                        <li> <strong>Need help with your Oman visa application? </strong>
                            Business Setup is here for you. Our experts ensure a hassle-free process. Get in touch today!

                        </li>
                        <li><strong>No Visa Complications:</strong>
                            Don’t let visa issues hinder your UAE exploration. Trust Amazon Attestation and Documents Clearing for a hassle-free experience.

                        </li>
                       
                        <li><strong>Coverage Across Emirates:</strong>
                            Our visa services extend across all Emirates: Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah.

                        </li>
                        
                       
                       
                       
                        
                    </ul>





                </Typography>
                <Typography variant="body1" align="center">
                    3 simple steps to start your dream business in no time
                </Typography>
            </Box>

            {/* Main container for the cards */}
            <Grid container spacing={2} justifyContent="center">
                {/* Step 1 */}
                <Grid item xs={12} sm={6} md={4}> {/* Three cards per row on medium devices (>= 1024px) */}
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
                        <CardMedia
                            component="img"
                            alt="Lowest Price Guarantee"
                            image={image1}
                            sx={{ width: 120, height: 120 }}
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography variant="h5" component="h3">
                                Step 1
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                We will review your profile and determine your eligibility.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Step 2 */}
                <Grid item xs={12} sm={6} md={4}> {/* Three cards per row on medium devices (>= 1024px) */}
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
                        <CardMedia
                            component="img"
                            alt="Quick License Issuance"
                            image={image2}
                            sx={{ width: 120, height: 120 }}
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography variant="h5" component="h3">
                                Step 2
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                We will advise you on the documentation required.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Step 3 */}
                <Grid item xs={12} sm={6} md={4}> {/* Three cards per row on medium devices (>= 1024px) */}
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
                        <CardMedia
                            component="img"
                            alt="One-Stop-Shop Solutions"
                            image={image3}
                            sx={{ width: 120, height: 120 }}
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography variant="h5" component="h3">
                                Step 3
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                You will be assisted in submitting your application to the authorities.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Visadubaisteps;
