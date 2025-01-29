import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Icon } from '@iconify-icon/react';

// Sample data for the cards
const serviceCards = [
  {
    icon: 'la:salesforce',
    title: 'Salesforce',
    description: ['We provide Salesforce implementation, customization, and integration to streamline workflows and drive growth across various clouds.'],
    color: '#E6FFE6'
  },
  {
    icon: 'material-symbols-light:linked-services',
    title: 'Servicenow',
    description: ['Our ServiceNow solutions optimize IT workflows, automate processes, and enable seamless digital transformation for businesses.'],
    color: '#FFE6FF'
  },
  {
    icon: 'carbon:analytics',
    title: 'Data Analytics',
    description: ['We offer data integration, visualization, and predictive analytics to uncover insights and drive data-driven decisions.'],
    color: '#E6FFFF'
  },
  {
    icon: 'mdi:aws',
    title: 'AWS',
    description: ['We deliver tailored AWS solutions, including migration, architecture, and management, to ensure scalability and cost-efficiency.'],
    color: '#FFF3E6'
  },
  {
    icon: 'arcticons:microsoft-power-apps',
    title: 'Power Platform',
    description: ['We provide Microsoft Power Platform solutions, streamlining processes, building apps, and enabling data-driven insights.'],
    color: '#E6FFF3'
  },
  {
    icon: 'material-symbols:full-stacked-bar-chart',
    title: 'Full Stack',
    description: ['We offer full-stack development services, providing front-end, back-end, and database solutions for scalable applications.'],
    color: '#FFE6E6'
  },
  {
    icon: 'tdesign:app',
    title: 'App Development',
    description: ['We deliver end-to-end custom app development services, creating user-friendly, scalable mobile and web applications.'],
    color: '#E6FFF3'
  },
];

const PlatformServicesCarousel = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const controls = useAnimation();

  useEffect(() => {
    const autoScroll = () => {
      if (!isHovered && containerRef.current) {
        const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
        const newIndex = (currentIndex + 1) % serviceCards.length;
        const targetScroll = (maxScroll * newIndex) / (serviceCards.length - 1);

        controls.start({
          x: -targetScroll,
          transition: { duration: 0.5, ease: "easeInOut" }
        });

        setCurrentIndex(newIndex);
      }
    };

    const intervalId = setInterval(autoScroll, 1500);

    return () => clearInterval(intervalId);
  }, [isHovered, currentIndex, controls]);

  // const calculateScale = (index) => {
  //   const distance = Math.abs(index - currentIndex);
  //   return 1 - Math.min(distance * 0.1, 0.3);
  // };

  return (
    <Box>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Technology Solutions
      </Typography>
      <Box
        ref={containerRef}
        sx={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',

        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div animate={controls}
          style={{ display: 'inline-flex', gap: '16px' }}

        >
          {serviceCards.map((card, index) => (
            <motion.div
              key={index}
              style={{
                perspective: 1000,
                // scale: calculateScale(index),
                zIndex: serviceCards.length - Math.abs(currentIndex - index),
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <Card
                sx={{
                  width: {
                    xs: 260,
                    sm: 280,
                    md: 300,
                    lg: 400,
                    xl: 450,
                  },
                  height: 320,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  whiteSpace: 'normal',
                  transition: 'all 0.3s ease',
                  background: card?.color
                }}
                elevation={5}
              >
                <CardContent>
                  <Icon icon={card.icon} style={{ fontSize: '48px', marginBottom: '16px' }} />
                  <Typography variant="h6" component="h3" gutterBottom>
                    {card.title}
                  </Typography>
                  <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                    {card.description.map((point, idx) => (
                      <li key={idx}>
                        <Typography variant="body2" color="text.secondary">
                          {point}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default PlatformServicesCarousel;
