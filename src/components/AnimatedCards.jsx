import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import { Typography, Container } from '@mui/material';
// import HeroImage from '../assets/image.jpg'
// import { Cards2 } from './Cards2';

const cards = [
  {
    id: 1,
    title: 'Collaborative Culture',
    icon: 'mdi:account-group',
    color: '#9575cd',
  },
  {
    id: 2,
    title: 'Ethical Practices',
    icon: 'mdi:handshake',
    color: '#9575cd',
  },
  {
    id: 3,
    title: 'Scalable Solutions',
    icon: 'mdi:trending-up',
    color: '#9575cd',
  },
  {
    id: 4,
    title: 'Long-term Partnerships',
    icon: 'mdi:link',
    color: '#9575cd',
  },
  {
    id: 5,
    title: 'Continuous Improvement',
    icon: 'mdi:refresh',
    color: '#9575cd',
  },
  {
    id: 6,
    title: 'Cost-effective Solutions',
    icon: 'mdi:currency-usd',
    color: '#9575cd',
  },
  {
    id: 7,
    title: 'Data-driven Decisions',
    icon: 'mdi:chart-bar',
    color: '#9575cd',
  },
];

export default function AnimatedCards() {
  const [activeCard, setActiveCard] = useState(0);
  console.log(activeCard)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        // variant="h2"
        // component="h1"
        align="center"
        gutterBottom
        sx={{ mb: 4, fontWeight: 'bold',
          fontSize: {
            xs: "1.8rem",
            sm: "2.4rem",
            md: "2.8rem",
          },
         }}
      >
        Why Choose QuickByte: Your IT Consulting Partner?
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 6 }}>
        Epowering businesses with a highly skilled team and a proven track record, we deliver expert consulting, seamless implementation, custom development, and integration of the Salesforce CRM platform—unlocking unmatched growth and efficiency for your success.
      </Typography>

      {/* <Box display="flex"  justifyContent="center" gap={1}>
        {cards.map((card, index) => (
          <AnimatePresence key={card.id}>
            <motion.div
              initial={{ width: '100%' }}
              animate={{
                width: activeCard === index ? '10rem' : '6rem',
                flexBasis: activeCard === index ? '20rem' : '10rem',
                transition: { duration: 0.5 },
              }}
            >
              <Card
                sx={{
                  bgcolor: activeCard === index ? '#fff' : card.color,
                  color: 'white',
                  height: '350px',
                  marginBottom: '2rem',
                  transition: 'background-color 0.4s ease',
                  overflowY: 'hidden'
                }}
                elevation={4}
              >
                <div>
                  <img src={HeroImage} style={{
                    objectFit: 'contain', objectPosition: '0% 100%',
                    height: '420px',
                    opacity: activeCard === index ? 1 : 0.2,
                    filter: activeCard === index ?  'none' : 'grayscale(100%) brightness(50%) sepia(1)',
                    mixBlendMode: activeCard === index ? 'none' : 'multiply'
                    }} alt="" />
                </div>
              </Card>
              <Typography
                sx={{
                  color: '#000',
                  fontSize: '14px',
                  mt: 1,
                  transition: 'all 0.3s ease',
                }}
              >
                sub-title
              </Typography>
            </motion.div>
          </AnimatePresence>
        ))}
      </Box> */}

{/* <Box sx={{minHeight: '600px'}}>

      <Cards2 />
</Box> */}
    </Container>
  );
}