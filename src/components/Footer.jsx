
// import { useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  // Button,
  Container,
  Grid,
  // TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Icon } from '@iconify-icon/react'

export default function Footer() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  // const [email, setEmail] = useState('')
  // const [name, setName] = useState('')

  const services = [
    { title: 'Salesforce', items: ['Item 1', 'Item 2', 'Item 3'] },
    { title: 'Cloud', items: ['Item 1', 'Item 2', 'Item 3'] },
    { title: 'AWS', items: ['Item 1', 'Item 2', 'Item 3'] },
    { title: 'GCP', items: ['Item 1', 'Item 2', 'Item 3'] },
    { title: 'ServiceNow', items: ['Item 1', 'Item 2', 'Item 3'] },
    { title: 'Additional', items: ['Item 1', 'Item 2', 'Item 3'] },
  ]

  // const products = [
  //   'ChargeOn',
  //   'Aarch Merchant Tool',
  //   'Easy Incentivizer',
  //   'Easy Rollup',
  // ]

  const resources = [
    'Blogs',
    'Webinar',
    'Customer Success Story',
    'Case Studies',
    'Podcast',
    'Press Release',
    'Salesforce ROI Calculator',
  ]

  const socialLinks = [
    { icon: 'mdi:facebook', url: '#' },
    // { icon: 'mdi:twitter', url: '#' },
    { icon: 'mdi:instagram', url: 'https://www.instagram.com/quickbytesolutions?igsh=MXVqZHp6cWY2ajlvcg%3D%3D&utm_source=qr' },
    { icon: 'mdi:linkedin', url: 'https://www.linkedin.com/company/quick-byte-consulting/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B0S8s%2BAIRRy%2BeIa7IK329%2FA%3D%3D' },
    { icon: 'mdi:youtube', url: 'https://www.youtube.com/@DEVAALLIN1' },
    { icon: 'simple-icons:snapchat', url: '#' },
  ]

  // const certifications = [
  //   '/placeholder.svg?height=60&width=60',
  //   '/placeholder.svg?height=60&width=60',
  //   '/placeholder.svg?height=60&width=60',
  //   '/placeholder.svg?height=60&width=60',
  //   '/placeholder.svg?height=60&width=60',
  // ]

  return (
    <Box sx={{ bgcolor: '#1A0B2E', color: 'white', py: 4, mt: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
            QuickByte.
            </Typography>
            <Box sx={{ mb: 4, textAlign: 'center' }}>
              <Typography variant="body2" sx={{ mb: 1 }}>About Us</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>Events</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>Careers</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>Contact Us</Typography>
            </Box>
          </Grid>

          {/* Middle Column - Services */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>Services</Typography>
            {isMobile ? (
              // Accordion view for mobile
              <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                {services.map((service) => (
                  <Accordion
                    key={service.title}
                    sx={{
                      bgcolor: 'transparent',
                      width: 'fit-content',
                      color: 'white',
                      boxShadow: 'none',
                      '&:before': { display: 'none' },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                    <Icon icon="si:expand-more-line" width="16" height="16" style={{color: '#fff'}} />
                    }
                      sx={{ p: 0 }}
                    >
                      <Typography>{service.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: 0 }}>
                      {service.items.map((item) => (
                        <Typography key={item} variant="body2" sx={{ mb: 1, textAlign: 'center' }}>
                          {item}
                        </Typography>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            ) : (
              // Regular list view for desktop
              <Box>
                {services.map((service) => (
                  <Typography key={service.title} variant="body2" sx={{ mb: 1, textAlign: 'center' }}>
                    {service.title}
                  </Typography>
                ))}
              </Box>
            )}
          </Grid>

          {/* Products Column */}
          {/* <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>Products</Typography>
            {products.map((product) => (
              <Typography key={product} variant="body2" sx={{ mb: 1 }}>
                {product}
              </Typography>
            ))}
          </Grid> */}

          {/* Resources and Certifications Column */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>Resources</Typography>
            <Box sx={{ mb: 4, textAlign: 'center' }}>
              {resources.map((resource) => (
                <Typography key={resource} variant="body2" sx={{ mb: 1 }}>
                  {resource}
                </Typography>
              ))}
            </Box>
            {/* <Grid container spacing={1}>
              {certifications.map((cert, index) => (
                <Grid item key={index} xs={4}>
                  <img
                    src={cert}
                    alt={`Certification ${index + 1}`}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Grid>
              ))}
            </Grid> */}
          </Grid>
        </Grid>

        {/* Social Links */}
        <Box sx={{ mt: 0, display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
          {socialLinks.map((social) => (
            <a
              key={social.icon}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white' }}
            >
              <Icon icon={social.icon} width="24" height="24" />
            </a>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

