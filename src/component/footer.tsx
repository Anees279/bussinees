
import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Select, MenuItem, InputLabel, FormControl, Stack, SelectChangeEvent } from '@mui/material';
import footerImage from '../component/assets/image/footer.jpg'; // Import the background image
import logo from '../component/assets/image/logo.png'; // Import the logo image
import '@fortawesome/fontawesome-free/css/all.min.css';

interface ContactFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

const Footer: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown };
    setFormData(prevState => ({
      ...prevState,
      [name as string]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${footerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        pt: 4,
        position: 'relative',
        opacity: 1,
      }}
    >
      {/* Logo positioned at top right */}
    

      {/* Transparent Content Section */}
      <section id="contact-info" style={{ backgroundColor: 'transparent' }}>
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 6 } }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={0}
            justifyContent="center"
          >
            {/* Contact Information Block */}
            <Box
        sx={{
          position: 'absolute',
          top: 20,
          right: 30,
          zIndex: 10
        }}
      >
        <img
          src={logo}
          alt="Company Logo"
          style={{ height: '80px', width: '80px' }}
        />
      </Box>
            <Box sx={{ flex: 1, backgroundColor: 'transparent', p: 3, ml: { xs: 0, md: '-20px' } }}>
  <Typography variant="h4" sx={{ mb: 2, color: 'black', fontSize: { xs: '1.5rem', md: '2rem' } }}>
    Contact Us
  </Typography>
  {[
    { label: 'Main', value: '(971 585246123)' },
    { label: 'Business Consultant', value: '(255) 352-6260' },
    { label: 'Clerk', value: '(00) 352-6259' },
    { label: 'Time', value: '8am – 5pm daily' },
  ].map((info, idx) => (
    <Box key={idx} sx={{ mb: 2 }}>
      <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', color: 'black' }}>
        {info.label}: <span>{info.value}</span>
      </Typography>
    </Box>
  ))}
  <Box sx={{ display: 'flex', mt: 3, gap: 2 }}>
    {[
      { href: 'https://www.facebook.com', icon: 'fab fa-facebook', color: 'black' },
      { href: 'https://www.instagram.com', icon: 'fab fa-instagram', color: '#E4405F' },
      { href: 'https://www.linkedin.com', icon: 'fab fa-linkedin', color: 'black' },
      { href: 'https://www.twitter.com', icon: 'fab fa-twitter', color: '#1DA1F2' },
    ].map((social, idx) => (
      <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer">
        <i className={social.icon} style={{ color: social.color, fontSize: '2rem' }}></i>
      </a>
    ))}
  </Box>
</Box>


            {/* UAE Location and Map Block */}
            <Box sx={{ flex: 1, backgroundColor: 'transparent', p: 3 }}>
              <Typography variant="h4" sx={{ mb: 2, color: 'black', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                United Arab Emirates
              </Typography>
              <Typography variant="body1" sx={{ color: 'black', mb: 2 }}>
                Office Location: #Office No 904, Sama Tower Al Barsha 1, Dubai, UAE
              </Typography>
              <iframe
                width="100%"
                height="345"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28870.078164424765!2d55.161170516747926!3d25.112548720434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bcfbc1d9d83%3A0x5e8a2c03f1098f9e!2sAl%20Barsha%20First%2C%20Dubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1698660224123"
                allowFullScreen
              ></iframe>
            </Box>

            {/* Contact Us and Form Block */}
            <Box sx={{ flex: 1, backgroundColor: 'transparent', p: 3 }}>
              <Typography variant="h4" sx={{ mb: 2, color: 'black', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                Leave a Message
              </Typography>
              <form>
                <Stack spacing={3}>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
                    <TextField
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      required
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      InputLabelProps={{ style: { color: 'black' } }}
                      InputProps={{ style: { color: 'black' } }}
                    />
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      required
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      InputLabelProps={{ style: { color: 'black' } }}
                      InputProps={{ style: { color: 'black' } }}
                    />
                  </Stack>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    InputLabelProps={{ style: { color: 'black' } }}
                    InputProps={{ style: { color: 'black' } }}
                  />
                  <TextField
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    InputLabelProps={{ style: { color: 'black' } }}
                    InputProps={{ style: { color: 'black' } }}
                  />
                  <FormControl fullWidth>
                    <InputLabel sx={{ color: 'black' }}>Country</InputLabel>
                    <Select
                      label="Country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      sx={{ color: 'black' }}
                    >
                      <MenuItem value="">Select Country</MenuItem>
                      <MenuItem value="Dubai">Dubai</MenuItem>
                      <MenuItem value="Non Dubai">Non Dubai</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    InputLabelProps={{ style: { color: 'black' } }}
                    InputProps={{ style: { color: 'black' } }}
                  />
                  <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Box>
          </Stack>
        </Container>
      </section>

      <Box sx={{ backgroundColor: 'black', color: 'white', py: 3, textAlign: 'center' }}>
        <Typography variant="body2">© 2025 info@business-setup-uae.com. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
