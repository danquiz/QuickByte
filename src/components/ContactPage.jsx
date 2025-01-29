'use client'

import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  TextField,
  MenuItem,
  Checkbox,
  Button,
  FormControlLabel,
  Grid,
  // useTheme,
  // useMediaQuery,
} from '@mui/material'
// import { Icon } from '@iconify-icon/react'

export default function ContactPage() {
  // const theme = useTheme()
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [formData, setFormData] = useState({
    fullName: '',
    companyEmail: '',
    phoneCode: '+1',
    phoneNumber: '',
    companyName: '',
    lookingFor: '',
    message: '',
    nda: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <Container id='contact-us-section' maxWidth="lg" sx={{ py: 4, background: '#f1f1f1', borderRadius: '16px' }}>
      <Typography
        // variant="h2"
        align="center"
        gutterBottom
        sx={{
          mb: 1, fontWeight: 500, fontSize: {
            xs: "1.05rem",
            sm: "1.2rem",
            md: "1.6rem",
          }, }}
      >
        Let&apos;s Get In Touch
      </Typography>

      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Our expert consultants will reach out within 24 hours.
      </Typography>

      <Box sx={{maxWidth: '600px', margin: 'auto'}}>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
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
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.nda}
                    onChange={(e) =>
                      setFormData({ ...formData, nda: e.target.checked })
                    }
                  />
                }
                label="Yes, send me a Mutual NDA (Non-Disclosure Agreement)"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                // size="large"
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
        {/* <Box sx={{ mt: 4 }}>
          <Typography>
            Drop us a line at{' '}
            <a
              href="mailto:hello@cyntexa.com"
              style={{ color: 'purple', textDecoration: 'none' }}
            >
              hello@cyntexa.com
            </a>
          </Typography>
          <Typography>
            Career related enquiries at{' '}
            <a
              href="mailto:careers@cyntexa.com"
              style={{ color: 'purple', textDecoration: 'none' }}
            >
              careers@cyntexa.com
            </a>{' '}
            /{' '}
            <a
              href="tel:+919610098885"
              style={{ color: 'purple', textDecoration: 'none' }}
            >
              +91 96100 98885
            </a>
          </Typography>
        </Box> */}
      </Box>
    </Container>
  )
}

