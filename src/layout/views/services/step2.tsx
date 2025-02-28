
import React from 'react';
import { Box, Typography } from '@mui/material';
import img from '../../../component/assets/image/guy-with-glasses-2.webp'; // Ensure the path to your image is correct

export const ImageContentSplit = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens, side-by-side on larger
                width: '100%', // Full width of the viewport
                minHeight: 'auto', // Dynamically adjusts height according to content
                alignItems: 'stretch', // Ensures both sides stretch to fit the container
                overflow: 'hidden', // Prevents horizontal overflow/scroll
                boxSizing: 'border-box', // Ensures padding is included in the element's width and height
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
                    padding: { xs: '10px', md: '0' }, // Padding for small screens
                }}
            >
                <img
                    src={img}
                    alt="Person with glasses"
                    style={{
                        width: '100%', // Make the image responsive, take full width
                        maxWidth: '100%', // Prevent image from exceeding its container width
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
                    boxSizing: 'border-box', // Includes padding in width/height calculations
                }}
            >
                {/* Headings and paragraphs */}
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '3rem' }, color: 'blue' }}
                >
                    Who is Eligible for the Saudi E-Visa?
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, lineHeight: 1.6, mb: 2 }}
                >
                    The Saudi E-Visa is exclusively available to expatriates residing in the UAE. Whether you’re living in Dubai, Abu Dhabi, Sharjah, or any other emirate, as long as you hold a valid UAE residency, you’re eligible to apply for the Saudi eVisa.
                </Typography>

                <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '2.5rem' }, color: '#FF6347' }}
                >
                    Required Documents for Saudi eVisa Application
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, lineHeight: 1.6, mb: 2 }}
                >
                    To ensure a smooth application process, you’ll need the following documents:
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
