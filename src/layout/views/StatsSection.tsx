import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const StatsSection = () => {
  return (
    <Box 
      display="flex" 
      flexDirection={{ xs: 'column', md: 'row' }} 
      justifyContent="space-evenly" 
      gap={4} 
      p={4}
    >
      {/* Clients */}
      <Card
        sx={{
          flex: '1',
          minWidth: '200px',
          height: '250px', // Increase card height
          boxShadow: 3,
          borderRadius: 2,
          transition: 'transform 0.3s', // Smooth transition on hover
          '&:hover': {
            transform: 'scale(1.05)', // Slightly scale up on hover
          },
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%', // Ensure the content is vertically centered
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: 'green',
              fontSize: '3rem',
              fontWeight: 'bold',
              animation: 'fadeIn 1s ease-out', // Fade-in animation for the digits
              '@keyframes fadeIn': {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            }}
          >
            20,000+
          </Typography>
          <Typography variant="h5" sx={{ fontSize: '1.5rem' }}>
            Clients
          </Typography>
        </CardContent>
      </Card>

      {/* Consultations */}
      <Card
        sx={{
          flex: '1',
          minWidth: '200px',
          height: '250px', // Increase card height
          boxShadow: 3,
          borderRadius: 2,
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: 'green',
              fontSize: '3rem',
              fontWeight: 'bold',
              animation: 'fadeIn 1.2s ease-out',
              '@keyframes fadeIn': {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            }}
          >
            45,000+
          </Typography>
          <Typography variant="h5" sx={{ fontSize: '1.5rem' }}>
            Consultations
          </Typography>
        </CardContent>
      </Card>

      {/* Ratings */}
      <Card
        sx={{
          flex: '1',
          minWidth: '200px',
          height: '250px', // Increase card height
          boxShadow: 3,
          borderRadius: 2,
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: 'green',
              fontSize: '3rem',
              fontWeight: 'bold',
              animation: 'fadeIn 1.4s ease-out',
              '@keyframes fadeIn': {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            }}
          >
            4.8/5*
          </Typography>
          <Typography variant="h5" sx={{ fontSize: '1.5rem' }}>
            Ratings
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default StatsSection;
