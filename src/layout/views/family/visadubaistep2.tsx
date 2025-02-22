
import React from 'react';
import { Box, Typography } from '@mui/material';
import img from '../../../component/assets/image/city-13.jpg'; // Ensure the path to your image is correct

export const Visadubaist = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens, side-by-side on larger
                width: '100%', // Full width of the viewport
                minHeight: 'auto', // Dynamically adjusts height according to content
                alignItems: 'stretch', // Ensures both sides stretch to fit the container
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
                }}
            >
                <img
                    src={img}
                    alt="Person with glasses"
                    style={{
                        width: '100%', // Make the image responsive, take full width
                        height: 'auto', // Maintain aspect ratio
                        objectFit: 'contain', // Ensure image fits well within the container
                    }}
                />
            </Box>

            {/* Right Side Content */}
            <Box
                sx={{
                    width: { xs: '100%', md: '50%' }, // Full width on small screens, 50% on medium and larger screens
                    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Half-white background
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', // Center content vertically
                    padding: { xs: '20px', md: '40px' }, // Padding adjusts based on screen size
                    height: '100%', // Ensure content box takes up available height
                }}
            >
                {/* Headings and paragraphs */}
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '3rem', color: 'blue' } }}
                >
                    Secure Your UAE Visit and Tourist Visas Hassle-Free!
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, lineHeight: 1.6, mb: 2 }}
                >
                    Are you planning an unforgettable journey to the luxurious landscapes, bustling markets, and awe-inspiring skyscrapers of Dubai and the United Arab Emirates (UAE)? Look no further than Amazon Attestation and Documents Clearing for all your visit and tourist visa needs.
                </Typography>

                <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '2.5rem', color: '#FF6347' } }}
                >
                    Why Choose Amazon Attestation and Documents Clearing?
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, lineHeight: 1.6, mb: 2 }}
                >
                    <ul>
                        <li>
                            Streamlined Process: From your initial application to the moment you step foot in the UAE, our team ensures a seamless, straightforward process.

                        </li>
                        <li>
                            Expertise: Our team of experts is well-versed in the intricate visa regulations in the UAE, including Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah.

                        </li>
                        <li>
                            Security: Your data and personal information are protected under stringent security measures, guaranteeing peace of mind.

                        </li>
                        <li>
                            Personalized Service: Whether you’re coming for leisure, business, or family visits, our services are tailored to meet your specific needs.

                        </li>
                    </ul>



                </Typography>

                <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '2.5rem' } }}
                >
                    Types of VISA
                </Typography>

                {/* Unordered List */}
                <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                    <li style={{ fontSize: '1rem', lineHeight: 1.6, fontWeight: 'bold' }}>
                        Tourist e-Visa
                        <ul style={{ fontWeight: 'normal', paddingLeft: '20px' }}>
                            <li>For tourism purposes.</li>
                            <li>Allows exploration of tourist attractions.</li>
                        </ul>
                    </li>
                    <li style={{ fontSize: '1rem', lineHeight: 1.6, fontWeight: 'bold' }}>
                        Business e-Visa
                        <ul style={{ fontWeight: 'normal', paddingLeft: '20px' }}>
                            <li>For business-related activities.</li>
                            <li>Includes meetings, conferences, and negotiations.</li>
                        </ul>
                    </li>
                    <li style={{ fontSize: '1rem', lineHeight: 1.6, fontWeight: 'bold' }}>
                        Family Visit e-Visa
                        <ul style={{ fontWeight: 'normal', paddingLeft: '20px' }}>
                            <li>Intended for visiting relatives or friends.</li>
                            <li>Facilitates family reunification.</li>
                        </ul>
                    </li>
                </ul>
            </Box>
        </Box>
    );
};
