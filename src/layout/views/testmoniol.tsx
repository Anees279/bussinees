import React from 'react';
import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules'; // Import Autoplay module from Swiper 11
import img from '../../component/assets/image/download (1).jpg'
import img1 from '../../component/assets/image/download.jpg'
import img2 from '../../component/assets/image/images.jpg'
const testimonials = [
    {
        name: 'John Doe',
        feedback: 'This service was amazing! Highly recommend to anyone starting a business.',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Jane Smith',
        feedback: 'Great experience, very professional and quick responses. Would use again!',
        image: img1
    },
    {
        name: 'Alice Johnson',
        feedback: 'Outstanding support and service, they made the process very smooth.',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'John Doe',
        feedback: 'This service was amazing! Highly recommend to anyone starting a business.',
        image: img ,
    },
    {
        name: 'Jane Smith',
        feedback: 'Great experience, very professional and quick responses. Would use again!',
        image: img2,
    },
    {
        name: 'Alice Johnson',
        feedback: 'Outstanding support and service, they made the process very smooth.',
        image: 'https://via.placeholder.com/150',
    },
];

const ClientTestimonial = () => {
    return (
        <Box sx={{ backgroundColor: '#f8f8f8', py: 6 }}>
           
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
What Our Clients Say
</Typography>

            <Typography variant="body1" align="center" sx={{ mb: 4 }}>
                “Fantastic service, all queries answered quickly and efficiently and in an easy to read manner so I could understand what was required every step of the way. Highly recommend this service.”
            </Typography>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                centeredSlides={true} // Center the middle slide
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]}
                breakpoints={{
                    0: {
                        slidesPerView: 1, // Only 1 slide on small screens
                    },
                    600: {
                        slidesPerView: 2, // 2 slides per row on medium screens
                    },
                    900: {
                        slidesPerView: 3, // 3 slides per row on larger screens
                    },
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minHeight: '300px',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.05)', // Slightly enlarge card on hover
                                },
                            }}
                        >
                            <Card
                                sx={{
                                    width: { xs: 240, sm: 260, md: 280, lg: 300 }, // Responsive width
                                    height: { xs: 240, sm: 260, md: 280, lg: 300 }, // Responsive height
                                    boxShadow: 3,
                                    backgroundColor: '#fff',
                                    p: 3,
                                    textAlign: 'center',
                                    borderRadius: '50%', // Make the card round
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    transition: 'transform 0.3s ease-in-out',
                                    transform: 'scale(0.85)', // Slightly smaller size for side cards
                                    '&.swiper-slide-active': {
                                        transform: 'scale(1)', // Full size for the center card
                                    },
                                }}
                            >
                                <Avatar
                                    alt={testimonial.name}
                                    src={testimonial.image}
                                    sx={{ width: 80, height: 80, mb: 2 }}
                                />
                                <CardContent>
                                    <Typography variant="body1" color="textPrimary" sx={{ mb: 2 }}>
                                        "{testimonial.feedback}"
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary">
                                        - {testimonial.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default ClientTestimonial;
