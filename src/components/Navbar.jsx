import * as React from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Popper,
  Paper,
  Grid,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  useMediaQuery,
  Dialog,
  // DialogTitle,
  // DialogContent,
  // DialogContentText,
  // DialogActions,
  TextField,
  MenuItem,
} from '@mui/material'
import { Icon } from '@iconify-icon/react'
import { styled, useTheme } from '@mui/material/styles'
import CompanyLogo from '../assets/platform-logo.png'
import { useLocation, useNavigate } from 'react-router-dom'

// Styled components
const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: 'white',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
}))

const NavLink = styled(Link)(({ theme }) => ({
  color: 'rgba(0, 0, 0, 0.87)',
  textDecoration: 'none',
  padding: '8px 16px',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}))

const ConsultationButton = styled(Button)(({ theme }) => ({
  borderRadius: '20px',
  padding: '8px 24px',
  '&:hover': {
    color: 'white',
    backgroundColor: theme.palette.primary.dark,
  },
}))

// Navigation data
const navigationData = {
  salesforce: {
    title: 'Salesforce',
    items: [
      'Salesforce Development',
      'Salesforce Implementation',
      'Salesforce Integration',
      'AppExchange App Development',
      'Salesforce Consulting',
      // 'Hire a Salesforce Developer',
      // 'Salesforce Managed Services',

    ],
  },

  cloud: {
    title: 'Cloud',
    items: [
      'Cloud Consulting Services',
      'Cloud Migration Services',
      'Cloud Application Development',
      'Cloud Security Solutions',
      'Cloud Managed Services',
    ],
  },
  aws: {
    title: 'AWS',
    items: [
      'AWS Managed Services',
      'AWS Application Development'
    ],
  },
  // additional: {
  //   title: 'Additional',
  //   items: [
  //     'UI/UX designing',
  //     'Machine Learning',
  //     'Website Development',
  //     'Appian',
  //     'Power Platform'
  //   ],
  // },

  internships: {
    title: 'Internships and Certifications',
    items: [],
  },
}

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [openMenu, setOpenMenu] = React.useState(null)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = React.useState(null)
  const navigate = useNavigate();
  const path = useLocation();

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  console.log(isMobile)

  const [openCarrer, setOpenCarrer] = React.useState(false);

    const [formData, setFormData] = React.useState({
      fullName: '',
      email: '',
      phoneCode: '+1',
      phoneNumber: '',
      lookingFor: '',
      message: ''
    })
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('Form submitted:', formData)
    }

  const handleClose = () => {
    setOpenCarrer(false)
  }

  const handleMouseEnter = (event, menu) => {
    if (!isMobile) {
      setAnchorEl(event.currentTarget)
      setOpenMenu(menu)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setOpenMenu(null)
      setAnchorEl(null)
    }
  }

  const handleMobileMenuToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleMobileSubmenuToggle = (menu) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === menu ? null : menu)
  }

  const renderMobileMenu = (
    <Drawer
      anchor="right"
      open={mobileOpen}
      onClose={handleMobileMenuToggle}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          <ListItem sx={{ color: '#000' }} button component="a" href="/">
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={() => handleMobileSubmenuToggle('services')}>
            <ListItemText primary="Services" />
            <Icon icon={mobileSubmenuOpen === 'services' ? 'material-symbols:keyboard-arrow-up' : 'material-symbols:keyboard-arrow-down'} />
          </ListItem>
          <Collapse in={mobileSubmenuOpen === 'services'} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {Object.entries(navigationData).map(([key, section]) => (
                <React.Fragment key={key}>
                  <ListItem sx={{ pl: 4 }}>
                    <ListItemText primary={section.title} primaryTypographyProps={{ fontWeight: 'bold' }} />
                  </ListItem>
                  {section.items.map((item) => (
                    <ListItem button key={item} sx={{ pl: 6 }}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </React.Fragment>
              ))}
            </List>
          </Collapse>
          <ListItem sx={{color: '#000'}} button component="a" 
          onClick={() => {
            handleMobileMenuToggle();
            navigate('/careers');
          }}
          >
            <ListItemText primary="Careers" />
          </ListItem>
          <ListItem sx={{ color: '#000' }} button 
          onClick={() => {
            document.getElementById('contact-us-section').scrollIntoView({ behavior: 'smooth' });
            handleMobileMenuToggle();
          }}
          >
            <ListItemText primary="Contact Us" />
          </ListItem>
        </List>
        <Box sx={{ p: 2 }}>
          <ConsultationButton fullWidth variant="outlined"
            onClick={() => {
              document.getElementById('contact-us-section').scrollIntoView({ behavior: 'smooth' });
              handleMobileMenuToggle();
            }}
          >
            Claim your Free Consultation
          </ConsultationButton>
        </Box>
      </Box>
    </Drawer>
  )

  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="xxl">
        <Toolbar disableGutters sx={{justifyContent: 'space-between'}}>
          {/* Logo */}
          <Typography
            variant="h6"
            component="a"
            // href="/"
            onClick={()=> navigate('/')}
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            <img src={CompanyLogo} alt="" height='40px' />
          </Typography>

          {/* Navigation Links */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mr: 4, }}>
              <NavLink href="/">About</NavLink>

              <NavLink
                onMouseEnter={(e) => handleMouseEnter(e, 'services')}
                href="/"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                Services
                <Icon icon="material-symbols:keyboard-arrow-down" />
              </NavLink>
              <NavLink
              sx={{cursor: 'pointer', color: () => path?.pathname === '/careers'? 'primary.main' : '#000'}}
              // onClick={() => {
              //   setOpenCarrer(true);
              // }}
              onClick={()=> navigate('/careers')}
              // href='/careers'
              >Careers</NavLink>
              <NavLink sx={{cursor: 'pointer'}}
              onClick={() => {
                document.getElementById('contact-us-section').scrollIntoView({ behavior: 'smooth' });
              }}
              >Contact Us</NavLink>
            </Box>
          )}

          {/* CTA Button and Mobile Menu Toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifySelf: 'flex-end' }}>
            {!isMobile && (
              <ConsultationButton 
                variant="outlined"
                onClick={() => {
                  document.getElementById('contact-us-section').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span style={{color: 'grey'}}>Claim</span><span style={{paddingLeft: '4px'}}>Your Free Consultation</span>
              </ConsultationButton>
            )}
            {isMobile && (
              <IconButton
                size="large"
                edge="end"
                // color="inherit"
                aria-label="menu"
                onClick={handleMobileMenuToggle}
              >
                <Icon icon="material-symbols:menu" />
              </IconButton>
            )}
          </Box>

          {/* Mega Menu */}
          {!isMobile && (
            <Popper
              open={Boolean(openMenu === 'services')}
              anchorEl={anchorEl}
              placement="bottom"
              onMouseLeave={handleMouseLeave}
              sx={{
                zIndex: 1300,
                width: '100vw',
                left: '0 !important',
                right: '0 !important',
                maxWidth: 'none',
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  mt: 2,
                  py: 4,
                  width: '100%',
                  backgroundColor: 'white',
                }}
              >
                <Container maxWidth="xl">
                  <Grid container spacing={4}>
                    {Object.entries(navigationData).map(([key, section]) => (
                      <Grid item xs={12} sm={6} md={3} key={key}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: 'primary.main',
                            fontWeight: 600,
                            mb: 2,
                          }}
                        >
                          {section.title}
                        </Typography>
                        {section.items.map((item) => (
                          <Typography
                            key={item}
                            component={Link}
                            href="#"
                            sx={{
                              display: 'block',
                              color: 'text.primary',
                              textDecoration: 'none',
                              py: 0.5,
                              '&:hover': {
                                color: 'primary.main',
                              },
                            }}
                          >
                            {item}
                          </Typography>
                        ))}
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </Paper>
            </Popper>
          )}
        </Toolbar>

        <Dialog
          open={openCarrer}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{ style: { borderRadius: '16px' } }}
        >
          <Box sx={{maxWidth: '890px', margin: 'auto', padding: '36px 24px', background: '#e2e2e2' }}>
            <Box component="form" onSubmit={handleSubmit}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', paddingBottom: '2rem', textAlign: 'center', margin: 'auto'}}>{"If you are the right match, We are always hiring get in touch with us"}</Typography>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    size='small'
                    variant="standard"
                    label="Full Name"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    size='small'
                    variant="standard"
                    label="Company Email"
                    type="email"
                    required
                    value={formData.companyEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, companyEmail: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    select
                    size='small'
                    variant="standard"
                    fullWidth
                    label="Code"
                    value={formData.phoneCode}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneCode: e.target.value })
                    }
                  >
                    <MenuItem value="+1">+1</MenuItem>
                    <MenuItem value="+91">+91</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    fullWidth
                    size='small'
                    variant="standard"
                    label="Phone Number"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size='small'
                    variant="standard"
                    label="Company Name"
                    required
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    select
                    fullWidth
                    size='small'
                    variant="standard"
                    label="What Are You Looking For?"
                    required
                    value={formData.lookingFor}
                    onChange={(e) =>
                      setFormData({ ...formData, lookingFor: e.target.value })
                    }
                  >
                    <MenuItem value="consulting">Consulting</MenuItem>
                    <MenuItem value="development">Development</MenuItem>
                    <MenuItem value="design">Design</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size='small'
                    variant="standard"
                    label="Your Message"
                    multiline
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: 'purple',
                      '&:hover': {
                        bgcolor: 'darkpurple',
                      },
                    }}
                  >
                    Submit Now
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Dialog>
      </Container>
      {renderMobileMenu}
    </StyledAppBar>
  )
}