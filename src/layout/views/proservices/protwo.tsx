import React from 'react';
import { Box, Typography } from '@mui/material';
import img from '../../../component/assets/image/proservices.jpeg'; // Ensure the path to your image is correct

export const Protwo = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens, side-by-side on larger
                width: '100%', // Full width of the viewport
                minHeight: 'auto', // Dynamically adjusts height according to content
                alignItems: 'stretch', // Ensures both sides stretch to fit the container
                overflowX: 'hidden', // Prevent horizontal overflow
            }}
        >
            {/* Left Side Image */}
            <Box
                sx={{
                    width: { xs: '100%', md: '50%' }, // Full width on small screens, 50% on medium and larger screens
                    display: 'flex', // Ensure the image is centered vertically
                    justifyContent: 'center', // Horizontally center the image
                    alignItems: 'center', // Vertically center the image
                    height: '100%', // Ensure image box takes up available height
                    overflow: 'hidden', // Prevent overflow
                }}
            >
                <img
                    src={img}
                    alt="Business Services"
                    style={{
                        width: '100%', // Make the image responsive, take full width
                        height: 'auto', // Maintain aspect ratio
                        objectFit: 'cover', // Ensure image fits well within the container
                        maxWidth: '100%', // Prevents the image from exceeding its container width
                    }}
                />
            </Box>

            {/* Right Side Content */}
            <Box
                sx={{
                    width: { xs: '100%', md: '50%' }, // Full width on small screens, 50% on medium and larger screens
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slight transparency for better readability
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', // Center content vertically
                    padding: { xs: '20px', md: '40px' }, // Padding adjusts based on screen size
                    height: '100%', // Ensure content box takes up available height
                    boxSizing: 'border-box', // Ensures padding doesn't cause overflow
                }}
            >
                {/* Headings and paragraphs */}
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '3rem' }, color: 'blue' }}
                >
                    Why Choose Business Setup Documents Clearing for PRO Services?
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, lineHeight: 1.6, mb: 2 }}
                >
                    <ul>
                        <li>
                            <strong>Maximizing Time:</strong> In the world of business, time equates to money. By taking charge of all your government-related responsibilities, we free up your valuable time so you can concentrate on more productive endeavors.
                        </li>
                        <li>
                            <strong>Affordable Solutions:</strong> Employing a dedicated PRO manager can be costly. Our alternative provides the expertise of a full-time PRO manager at a fraction of the expense.
                        </li>
                        <li>
                            <strong>Specialized Knowledge:</strong> Our team possesses extensive proficiency in all facets of PRO services, ensuring that each task is executed with utmost professionalism.
                        </li>
                    </ul>
                </Typography>

                <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '2.5rem' } }}
                >
                    Privacy Assurance:
                </Typography>

                {/* Unordered List */}
                <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                    <ul style={{ fontWeight: 'normal', paddingLeft: '20px' }}>
                        <li>Comprehensive Services: We serve as a one-stop destination for all your PRO service requirements in the UAE, delivering an array of services under one roof.</li>
                    </ul>
                </ul>
            </Box>
        </Box>
    );
};
