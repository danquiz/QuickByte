import { Icon } from '@iconify-icon/react'
import { Box, Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Cards from './Cards'
import { useEffect, useRef, useState } from 'react';
import SalesCloud from '../assets/Icons/salesforce/Salesforce.svg'
// import ServiceCloud from '../assets/Icons/salesforce/service-cloud.png'
// import MarketingCloud from '../assets/Icons/salesforce/marketing-cloud.png'
// import CommerceCloud from '../assets/Icons/salesforce/commerce-cloud.jfif'
// import ExperienceCloud from '../assets/Icons/salesforce/expericence-cloud.png'

const industries = [
  { description: "We help businesses increase sales productivity with lead and opportunity management, sales forecasting, automation, and reporting, ensuring effective sales processes and customer relationship management (CRM).", title: 'Sales Cloud', image: SalesCloud },

  { description: "We provide solutions that enhance customer service, including case management, knowledge base, chatbots, and multi-channel support, driving faster resolution and superior customer experiences.", title: 'Service Cloud', image: SalesCloud },

  { description: "Our services include email marketing, automation, customer journey mapping, and data analysis, helping businesses deliver personalized marketing campaigns and improve customer engagement.", title: 'Marketing Cloud', image: SalesCloud },

  { description: "We enable businesses to build seamless online shopping experiences with personalized e-commerce solutions, integrating storefronts, payment processing, and order management for better customer satisfaction.", title: 'Commerce Cloud', image: SalesCloud },

  { description: "We create customized community portals and web experiences for customers, partners, and employees, enhancing collaboration, knowledge sharing, and engagement with a branded, unified platform.", title: 'Experience Cloud', image: SalesCloud },

  { description: "We provide data analytics solutions, turning raw data into meaningful insights through visualizations, dashboards, and reporting, helping businesses make informed decisions based on real-time analytics.", title: 'Analytics Cloud (Tableau CRM)', image: SalesCloud },

  { description: "Our team helps integrate Salesforce with third-party applications and systems, streamlining data flow and enhancing workflow efficiency, providing a unified platform across cloud services.", title: 'Integration Cloud', image: SalesCloud },

  { description: "We specialize in providing healthcare-specific solutions, enhancing patient care, managing data, and improving communication between healthcare providers, patients, and administrative staff for better outcomes.", title: 'Health Cloud', image: SalesCloud },

  { description: "We offer tailored solutions for financial institutions, including wealth management, client servicing, and financial planning tools, enabling advisors to offer personalized services and drive business growth.", title: 'Financial Services Cloud', image: SalesCloud },

  { description: "We provide comprehensive solutions for educational institutions, managing student data, improving engagement, and delivering personalized learning experiences, empowering educators to drive academic success.", title: 'Education  Cloud', image: SalesCloud },

  { description: "We offer MuleSoft integration solutions, enabling businesses to connect applications, data, and devices across cloud and on-premises environments, driving seamless communication and automation across systems.", title: 'MuleSoft', image: SalesCloud },

  { description: "We provide CPQ solutions to streamline the quote-to-cash process, allowing businesses to configure products, accurately price, and generate quotes quickly, improving sales efficiency and reducing errors.", title: 'CPQ (Configure, Price, Quote)', image: SalesCloud },

  { description: "We deliver industry-specific solutions through Salesforce Velocity, enabling faster implementation and customized solutions for sectors like telecommunications, insurance, healthcare, and more, driving operational efficiency and innovation.", title: 'Velocity (Salesforce Industries)', image: SalesCloud },
]

export default function Industries() {

  const contentRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const maxScrollWidth = contentRef.current ? contentRef.current.scrollWidth - contentRef.current.clientWidth : 0;

  const scrollTo = (offset) => {
    if (contentRef.current) {
      contentRef.current.scrollBy({
        left: offset,
        behavior: 'smooth',
      });
    }
  };

  const handleNextClick = () => {
    scrollTo(contentRef.current.clientWidth / 2);
  };

  const handlePrevClick = () => {
    scrollTo(-contentRef.current.clientWidth / 2);
  };

  const updateScrollPosition = () => {
    if (contentRef.current) {
      setScrollPosition(contentRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef?.current?.addEventListener('scroll', updateScrollPosition);
      return () => {
        contentRef?.current?.removeEventListener('scroll', updateScrollPosition);
      };
    }
  }, []);


  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl" style={{
        // background: '#e6ffffa1',
        color: '#000',
        paddingTop: '18px',
        paddingBottom: '18px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography sx={{
             fontWeight: 600, mb: 3, mt: 2, fontSize: {
              // textAlign: 'center',
              xs: "1.5rem",
              sm: "1.8rem",
              md: "2rem",
            }, }}>
            Cloud Management Services
          </Typography>
          <div className="carousel">
            <div className="carousel__wrapper">

<div style={{
              position: 'absolute',
              top: '80%',
              left: '-20px',
              zIndex: 1500,
              // background: 'grey',
              border: '1px solid grey',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '4px',
              borderRadius: '50%',
              cursor: 'pointer'
            }}
            onClick={handlePrevClick}
            ref={prevButtonRef}
>
          <Icon 
            icon="iconamoon:arrow-left-2-light" 
            width="32"
            height="32"
            className={`${scrollPosition >= maxScrollWidth - 10 ? 'disabled' : ''}`}
          />
</div>

              <ul className="carousel__content" ref={contentRef}>
                  {industries.map((industry, index) => (
                    <Cards key={index} content={industry}  />
                  ))}
              </ul>

            <div style={{
              position: 'absolute',
              top: '80%',
              right: '-20px',
              zIndex: 1500,
              // background: 'grey',
              border: '1px solid grey',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '4px',
              borderRadius: '50%',
              cursor: 'pointer'
            }}
            onClick={handleNextClick}
            ref={nextButtonRef}
>
          <Icon 
            icon="iconamoon:arrow-right-2-light" 
            width="32"
            height="32"
            className={`${scrollPosition >= maxScrollWidth - 10 ? 'disabled' : ''}`}
          />
</div>
            </div>  
          </div>

         

        </motion.div>
      </Container>
    </Box>
  )
}

