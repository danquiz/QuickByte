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
//   useTheme,
//   useMediaQuery,
} from '@mui/material'
import CareerImage from '../assets/career-image.jpeg'

const CareersPage = () => {
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
    // <Container maxWidth={'lg'} sx={{mt: 4, mb: 4, minHeight: '60vh'}}>
        
    // </Container>
    <>
    {/* <Box sx={{width: '100%', height: '40vh'}}>
        <img src={CareerImage} alt="" style={{objectFit: 'cover', width: 'auto'}} />
    </Box> */}
    <Container id='contact-us-section' maxWidth="lg" sx={{ py: 8, background: '#f1f1f1', borderRadius: '16px', mb: '2rem', mt: '2rem' }}>

    <Box component="form" onSubmit={handleSubmit}>
    <Typography variant='h5' sx={{ fontWeight: 'bold', paddingBottom: '3rem', textAlign: 'center', margin: 'auto'}}>{"If you are the right match, We are always hiring get in touch with us"}</Typography>
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
  </Container>
    </>
  )
}

export default CareersPage