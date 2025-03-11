
import { Grid, Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import image1 from '../../../component/assets/image/inzone-guarantee-01.svg';
import image2 from '../../../component/assets/image/inzone-guarantee-02.svg';
import image3 from '../../../component/assets/image/inzone-guarantee-03.svg';

const Familyvisasteps = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, p: 3, my: 6 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, p: 0, my: 6 }}>
                {/* Line above the heading */}
                <Box sx={{ width: '120px', height: '3px', backgroundColor: '#FF6347' }}></Box>

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
                   Why Choose Our Service for UAE Family Visa?
                </Typography>
                
                <Typography variant="body1" align="center">
                Our legal advisors stay updated on 2025 regulations (e.g., GDRFA, ICA, and emirate-specific rules) to ensure your application is flawless. Family Visa Experts in the UAE:  
                </Typography>
            </Box>

            {/* Main container for the cards */}
            <Typography variant="body1" align="left" style={{ paddingTop: "24px" }}>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "justify",
          }}
        >
          <ul style={{ padding: 0 }}>
            <li>
              <strong>Zero Margin for Error:</strong> OWe have Expertise That Matters and 100% Compliance Guarantee.
              UAE immigration laws are strict and ever-changing. A single mistake in documentation, salary requirements, or medical tests can lead to visa rejection, fines, or even a ban.
            </li>
            <li>
              <strong>Decades of Experience :</strong>  With over approx 10 years of specialization in UAE family visas, we’ve successfully reunited thousands of families. Our team includes former government PROs and immigration lawyers who know the system inside-out.

            </li>
            
          </ul>
        </div>
       

      </Typography>
	–
        </Box>
    );
};

export default Familyvisasteps;
