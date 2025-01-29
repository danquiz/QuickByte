'use client'

import { Box, Button, Container, Typography } from '@mui/material'
import { Icon } from '@iconify-icon/react'

export default function PersonalisedSection() {

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          alignItems: {xs: 'left', sm: 'center'},
          borderBottom: "2px solid",
          borderImage: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%) 1',
          py: 1,
          paddingTop: 8,
          gap: 4,
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          flexDirection: {xs: 'column', sm: 'row'},
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: { xs: '80px', md: '120px' },
            aspectRatio: '1',
            borderRadius: '50%',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'left',
          }}
        >
          <Icon icon="fa6-regular:handshake" width="50" height="50" style={{ filter: 'grayscale(1)', objectFit: 'cover' }} />
        </Box>

        <Box sx={{ textAlign: { xs: 'center', md: 'left' }, display: 'flex', justifyContent: 'space-between', flex: 1, flexDirection: {xs: 'column', md: 'row'} }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 600,
              color: '#4A4A4A',
              textAlign: { xs: 'left', md: 'left' },
            }}
          >
            Start Your Personalized IT Journey Now!
          </Typography>
          <Box sx={{display: 'flex', justifyContent: 'left'}}>

          <Button
            variant="contained"
            sx={{
              width: 'fir-content',
              bgcolor: '#5D2E8C',
              '&:hover': {
                bgcolor: '#4A2570',
              },
              borderRadius: 2,
            }}
            >
            Let&apos;s Talk
          </Button>
            </Box>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            fontWeight: 600,
            fontSize: "2rem",
            color: '#333',
            position: 'relative',
            py: 3,
            marginTop: 6,
            px: 2,
            '&::before': {
              content: '""',
              position: 'absolute',
              left: 0,
              top: '20%',
              width: 4,
              height: 70,
              background: 'linear-gradient(180deg, #ff9a9e 0%, #fad0c4 100%)',
            },
          }}
        >
          Tech-Adept, Business-Centric: Get To Know Us
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: '#666',
            lineHeight: 1.8,
            mb: 8,
          }}
        >
          Cyntexa was founded in 2018, backed by the vision of driving mutual growth with cutting-edge technologies. Our belief in mutual success has been our core ethos spurring us on the upward spiral of growth. Today, we stand on top, having grown from a startup to a trusted IT consulting company for Fortune 500 companies. Yet, we&apos;ve kept our roots. We have retained a small company&apos;s agility and personal touch, ensuring personalized attention to each client. At Cyntexa, we&apos;re about people, relationships, and shared success. We&apos;re big enough to serve tech giants, and small enough to care for each client. We&apos;re here to guide your digital transformation journey, inspire you, and walk with you on your path to achieving digital resilience.
        </Typography>
      </Box>
    </Container>
  )
}

