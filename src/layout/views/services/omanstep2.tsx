
import React from 'react';
import { Box, Typography } from '@mui/material';
import img from '../../../component/assets/image/desktopsideimages2.png'; // Ensure the path to your image is correct

export const Omansteps2 = () => {
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
                    Who is Eligible for the Oman E-Visa?
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, lineHeight: 1.6, mb: 2 }}
                >
                    The Oman E-Visa is exclusively available to expatriates residing in the UAE. Whether you’re living in Dubai, Abu Dhabi, Sharjah, or any other emirate, as long as you hold a valid UAE residency, you’re eligible to apply. This initiative is part of Oman’s efforts to enhance tourism and make travel procedures more efficient for UAE residents.
                </Typography>

                <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '2.5rem', color: '#FF6347' } }}
                >
                   Required Documents for the Oman eVisa Application
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, lineHeight: 1.6, mb: 2 }}
                >
                    To ensure a smooth application process, you’ll need the following documents:
                    <ul>
                        <li>Valid Passport: Your passport should be valid for at least six months from the date of your arrival in Oman.</li>
                        <li>
                            UAE Residence Permit: A copy of your valid UAE residence permit is mandatory.

                        </li>
                        <li>
                            Passport-Sized Photo: A recent passport-sized photograph that meets the visa photo requirements.

                        </li>
                        <li>
                            Email Address: An active email address to receive your eVisa.

                        </li>
                        <li>
                            Payment Method: A credit or debit card to pay the visa fee online.

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
