
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import logo from './assets/image/logo.png';
import { useState } from 'react';

const pages = [
  { name: 'Home', path: '/home' },
  {
    name: 'Service', path: '/service', subPages: [
      { name: 'Sudia Arabia Visa', path: '/sudia' },
      { name: 'Oman Visa In UAE', path: '/proservices' }
    ]
  },
  {
    name: 'Family Visa in Dubai', path: '/family', subPages: [
      { name: 'Visit Visa And Tourist', path: '/Tourist' },
      { name: 'Visa Dubai', path: '/Visab' },
      { name: 'Golden Residency Visa in UAE', path: '/Residency' },
      { name: 'Abu Dhabi family visa', path: '/dhabi' },
      { name: 'Ajman Visa Services', path: '/Ajman' },
    ]
  },
  {
    name: 'PRO Services in UAE', path: '/proservices', subPages: [
      { name: 'Establishmaent Card In Dubai', path: '/establishmaent' },
    ]
  }, {
    name: 'Attestataion Service', path: '/proservices', subPages: [
      { name: 'Mofa Attestataion In UAE', path: '/mofa ' },
      { name: 'World Wide Attestataion ', path: '/wide' },
      { name: 'Certified True Copy Attestation', path: '/Certified' },
      { name: 'Business Set Up in Dubai', path: '/business' }
    ]
  },
  {
    name: 'Bussiness Set Up In Dubai', path: '/proservices', subPages: [
      { name: 'Mainland-company-setup-services In UAE', path: '/mainland ' },
      { name: 'Medical-licensing-services in UAE ', path: '/medical' },
      { name: 'Al-barsha-business-setup ', path: '/barsha' },
      { name: 'Beauty-salon-license-in-dubai', path: '/salon' },
      { name: 'Freezone-company-setup-in-dubai', path: '/freezone' },
      { name: 'Visa-work-permit-in-uae', path: '/permit' },
      { name: 'Embassy-mofa-attestation', path: '/embassy' },
    ]
  },
  { name: 'News', path: '/news' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [dropdownAnchor, setDropdownAnchor] = useState<{ [key: string]: HTMLElement | null }>({});
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null); // Manage active dropdown for mobile view

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setDropdownAnchor({});
    setActiveMobileDropdown(null);
  };

  const handleOpenMobileDropdown = (pageName: string) => {
    setActiveMobileDropdown(activeMobileDropdown === pageName ? null : pageName); // Toggle dropdown
  };

  const handleCloseDropdownMenu = (pageName: string) => {
    setDropdownAnchor({ ...dropdownAnchor, [pageName]: null });
  };

  return (
    <AppBar position="static" sx={{ fontFamily: 'Montserrat, Arial', fontSize: '16px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Hamburger menu for small screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <div key={page.name}>
                  {page.subPages ? (
                    <>
                      <MenuItem onClick={() => handleOpenMobileDropdown(page.name)} sx={{ fontWeight: 'bold' }}>
                        {page.name}
                      </MenuItem>
                      {activeMobileDropdown === page.name && (
                        page.subPages.map((subPage) => (
                          <MenuItem key={subPage.name} onClick={handleCloseNavMenu}>
                            <Link
                              to={subPage.path}
                              style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                              {subPage.name}
                            </Link>
                          </MenuItem>
                        ))
                      )}
                    </>
                  ) : (
                    <MenuItem onClick={handleCloseNavMenu} sx={{ fontWeight: 'bold' }}>
                      <Link
                        to={page.path}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        {page.name}
                      </Link>
                    </MenuItem>
                  )}
                </div>
              ))}
            </Menu>
          </Box>

          {/* Navigation buttons for medium and up screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start' }}>
            {pages.map((page) => (
              page.subPages ? (
                <Box key={page.name}>
                  <Button
                    onClick={(event) => setDropdownAnchor({ ...dropdownAnchor, [page.name]: event.currentTarget })}
                    sx={{ my: 2, color: 'white', display: 'block', fontWeight: 'bold' }} // Bold for main pages
                    aria-controls={`${page.name}-menu`}
                    aria-haspopup="true"
                  >
                    {page.name}
                  </Button>
                  <Menu
                    id={`${page.name}-menu`}
                    anchorEl={dropdownAnchor[page.name]}
                    open={Boolean(dropdownAnchor[page.name])}
                    onClose={() => handleCloseDropdownMenu(page.name)}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                  >
                    {page.subPages.map((subPage) => (
                      <MenuItem key={subPage.name} onClick={() => handleCloseDropdownMenu(page.name)}>
                        <Link
                          to={subPage.path}
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          {subPage.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', fontWeight: 'bold' }} // Bold for main pages
                >
                  <Link
                    to={page.path}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {page.name}
                  </Link>
                </Button>
              )
            ))}
          </Box>

          {/* Logo for small screens */}
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              display: { xs: 'flex', md: 'none' },
              mr: 1,
              width: 40,
              height: 40,
            }}
          />

          {/* Logo for medium and up screens (right-aligned) */}
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              display: { xs: 'none', md: 'flex' },
              ml: 'auto',
              width: 50,
              height: 50,
            }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
