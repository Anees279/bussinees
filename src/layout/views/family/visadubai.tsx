import React, { useState } from 'react';
import { Box, Typography, Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import img from '../../../component/assets/image/dubai.jpg'; // Ensure the path is correct
import Visadubaisteps from './vsadubaistep1'
import {Visadubaist} from './visadubaistep2'
const countries = [
    { code: '+92', name: 'Pakistan' },
    { code: '+971', name: 'United Arab Emirates' },
    { code: '+1', name: 'United States' },
    { code: '+44', name: 'United Kingdom' },
    { code: '+91', name: 'India' },
    // Add more countries and codes as needed
];

export const Visadubai = () => {
    const [countryCode, setCountryCode] = useState('+92'); // Default to Pakistan's code

    const handleCountryChange = (event: any) => {
        setCountryCode(event.target.value);
    };

    return (
        <>
        <Box
            sx={{
                minHeight: { xs: '100vh', md: '70vh' }, // Full height on small screens
                width: '100%', // Full width
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Column on small screens, row on larger
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundImage: `url(${img})`, // Background image
                backgroundSize: 'cover', // Cover the entire area
                backgroundPosition: 'center',
                position: 'relative',
                '::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay
                    zIndex: 1,
                },
            }}
        >
            {/* Content Section */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    color: '#fff',
                    width: { xs: '90%', sm: '80%', md: '50%' }, // Varying width for different breakpoints
                    padding: { xs: '20px', sm: '30px', md: '20px' }, // Responsive padding
                    mb: { xs: 4, md: 0 }, // Margin for spacing
                }}
            >
                <Typography variant="h1" fontWeight="bold" sx={{ fontSize: { xs: '1.8rem', md: '4rem' }, lineHeight: 1.2 }}>
                UAE E-ViSA
                </Typography>
                <Typography variant="h5" mt={2} sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, lineHeight: 1.4 }}>
                    Get 360° Assistance From the UAE's Golden Visa Experts
                </Typography>
                <Button variant="contained" color="warning" sx={{ mt: 3, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                    Shopper
                </Button>
            </Box>

            {/* Form Section */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    width: { xs: '90%', sm: '60%', md: '30%' }, // Responsive width
                    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Lighter overlay for form
                    padding: { xs: '20px', md: '30px' },
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    mb={2}
                    textAlign="center"
                    sx={{ color: 'green', fontSize: { xs: '1.25rem', md: '1.75rem' } }}
                >
                    Need a Consultation?
                </Typography>

                <Typography
                    variant="body1"
                    mb={2}
                    textAlign="center"
                    sx={{
                        backgroundColor: 'blue', 
                        color: 'white',          
                        padding: '8px',          
                        borderRadius: '4px',     
                    }}
                >
                    Get a Free Online Quote
                </Typography>

                {/* Full Name */}
                <TextField
                    fullWidth
                    label="Full name"
                    variant="outlined"
                    sx={{ mb: 2, fontSize: { xs: '0.8rem', md: '1rem' } }}
                />

                {/* E-mail */}
                <TextField
                    fullWidth
                    label="E-mail"
                    variant="outlined"
                    sx={{ mb: 2 }}
                />

                {/* Country Code and Phone Number */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 2 }}>
                    <FormControl fullWidth>
                        <InputLabel>Country Code</InputLabel>
                        <Select
                            value={countryCode}
                            onChange={handleCountryChange}
                            label="Country Code"
                        >
                            {countries.map((country) => (
                                <MenuItem key={country.code} value={country.code}>
                                    {country.code} {country.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField
                        fullWidth
                        label="Your phone"
                        variant="outlined"
                    />
                </Box>

                {/* Enquiry */}
                <TextField
                    fullWidth
                    label="Your enquiry"
                    variant="outlined"
                    multiline
                    rows={3}
                    sx={{ mb: 2 }}
                />

                <Typography variant="body2" color="textSecondary" textAlign="center">
                    We will handle your personal data in compliance with our Privacy Policy.
                </Typography>

                {/* Submit Button */}
                <Button
                    variant="contained"
                    sx={{
                        mt: 3,
                        backgroundColor: 'green',
                        fontSize: { xs: '0.8rem', md: '1rem' }, // Adjust button size for responsiveness
                        '&:hover': {
                            backgroundColor: 'darkgreen',
                        },
                    }}
                >
                    Get a Free Online Quote
                </Button>
            </Box>
        </Box>
        <Visadubaisteps/>
        <Visadubaist/>
        </>
        
    );
};
