// import { useEffect, useState } from "react";
// import {
//     motion,
//     useMotionValue,
//     useTransform,
//     AnimatePresence
// } from "framer-motion";
import propTypes from 'prop-types';

// const Card = ({ frontCard, drag, index, setIndex }) => {
//     const [exitX, setExitX] = useState(0);
//     const [lastInteraction, setLastInteraction] = useState(Date.now());

//     const x = useMotionValue(0);
//     const scale = useTransform(x, [-400, 0, 400], [0.5, 1, 0.5]);
//     const rotate = useTransform(x, [-400, 0, 400], [-45, 0, 45], { clamp: false });

//     const variantsFrontCard = {
//         animate: { scale: 1, y: 0, opacity: 1 },
//         exit: (custom) => ({
//             x: custom,
//             opacity: 0,
//             scale: 0.5,
//             transition: { duration: 0.5 },
//         }),
//     };
//     const variantsBackCard = {
//         initial: { scale: 0, y: 360, opacity: 0 },
//         animate: { scale: 0.75, y: 80, opacity: 0.5 },
//     };

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             if (Date.now() - lastInteraction > 5000) {
//                 // If no interaction for 5 seconds, trigger drag to next card
//                 setExitX(index % 2 === 0 ? -550 : 550);
//                 setIndex(index + 1);
//             }
//         }, 1000);

//         return () => clearInterval(intervalId);
//     }, [index, lastInteraction]);

//     function handleDragEnd(_, info) {
//         setLastInteraction(Date.now()); // Update last interaction time

//         if (info.offset.x < -350) {
//             setExitX(-550);
//             setIndex(index + 1);
//         } else if (info.offset.x > 350) {
//             setExitX(550);
//             setIndex(index + 1);
//         }
//     }

//     return (
//         <motion.div
//             style={{
//                 width: 400,
//                 height: 400,
//                 position: 'absolute',
//                 top: 0,
//                 x,
//                 rotate,
//                 cursor: 'grab',
//             }}
//             whileTap={{ cursor: 'grabbing' }}
//             drag={drag}
//             dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
//             onDragEnd={handleDragEnd}
//             variants={frontCard ? variantsFrontCard : variantsBackCard}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             custom={exitX}
//             transition={
//                 frontCard
//                     ? { type: 'spring', stiffness: 300, damping: 20 }
//                     : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
//             }
//         >
//             <motion.div
//                 style={{
//                     width: 400,
//                     height: 400,
//                     backgroundColor: 'green',
//                     borderRadius: 30,
//                     scale,
//                 }}
//             />
//         </motion.div>
//     );
// }

// Card.propTypes = {
//     frontCard: propTypes.any,
//     drag: propTypes.any,
//     index: propTypes.any,
//     setIndex: propTypes.any,
// }



// export function Cards2() {
//     const [index, setIndex] = useState(0);

//     return (
//         <motion.div style={{ width: 150, height: 150, position: "relative" }}>
//             <AnimatePresence initial={false}>
//                 <Card key={index + 1} frontCard={false} />
//                 <Card
//                     key={index}
//                     frontCard={true}
//                     index={index}
//                     setIndex={setIndex}
//                     drag="x"
//                 />
//             </AnimatePresence>
//         </motion.div>
//     );
// }

// import { motion } from "framer-motion";
// import './styles.css'
// import { useState } from 'react';

// export default function Cards2() {
//     const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
//     return (
//         <div className="App">
//             {items.map((item, i) => (
//                 <Card key={i} text={item} index={i} />
//             ))}
//         </div>
//     );
// }

// function Card({ text, index }) {
//     const [hovered, setHovered] = useState(false);

//     const containerVariants = {
//         hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
//         visible: { opacity: 1, x: 0 },
//     };

//     const overlayVariants = {
//         hidden: { opacity: 0 },
//         visible: { opacity: 1 },
//     };

//     const imageVariants = {
//         hover: { opacity: 0.2 },
//         unhover: { opacity: 1 },
//     };

//     return (
//         <motion.div
//             className="card"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             viewport={{ once: true }}
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//         >
//             <motion.div
//                 className="card-image"
//                 variants={imageVariants}
//                 custom={hovered ? 'hover' : 'unhover'}
//             />
//             <motion.div
//                 className="card-overlay"
//                 variants={overlayVariants}
//                 custom={hovered ? 'visible' : 'hidden'}
//             >
//                 <p className="card-text">{text}</p>
//             </motion.div>
//         </motion.div>
//     );
// }

import { motion } from "framer-motion";
import { useState } from 'react';
import { Card, CardContent, Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/system';
import ran_image from '../assets/hero-image.jpg';
import pic1 from '../assets/pic-1.jpg';
import pic2 from '../assets/pic-2.jpg';
import pic3 from '../assets/pic-3.jpg';

const StyledCard = styled(Card)(({ theme }) => ({
    // width: '50%',
    height: '100%',
    margin: theme.spacing(2),
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.02)',
    },
}));

const ImageWrapper = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
});

const TextOverlay = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 140, 140, 0.65)',
});

export default function Cards2() {
    const items = [
        { text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ad natus illo voluptates optio tenetur tempora provident deserunt officia beatae quibusdam commodi exercitationem eveniet molestias deleniti placeat vitae, odio omnis?", image: ran_image },
        { text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ad natus illo voluptates optio tenetur tempora provident deserunt officia beatae quibusdam commodi exercitationem eveniet molestias deleniti placeat vitae, odio omnis?", image: pic1 },
        { text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ad natus illo voluptates optio tenetur tempora provident deserunt officia beatae quibusdam commodi exercitationem eveniet molestias deleniti placeat vitae, odio omnis?", image: pic2 },
        { text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ad natus illo voluptates optio tenetur tempora provident deserunt officia beatae quibusdam commodi exercitationem eveniet molestias deleniti placeat vitae, odio omnis?", image: pic3 }
    ];

    return (
        <Container maxWidth='xl'>
            <Box sx={{ display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: '1fr 1fr',
                        md: '1fr 1fr 1fr',
                        lg: '1fr 1fr 1fr 1fr'
                    },
                    // minHeight: '480px',
                    marginBottom: '4rem',
                    gap: '1rem'
                }}>
                {items.map((item, i) => (
                    <AnimatedCard key={i} text={item.text} image={item.image} index={i} />
                ))}
            </Box>
        </Container>
    );
}

function AnimatedCard({ text, image, index }) {
    const [hovered, setHovered] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        },
    };

    const imageVariants = {
        hover: { opacity: 0.2 },
        unhover: { opacity: 1 },
    };

    const textVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ minHeight: '480px' }}
        >
            <StyledCard
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <CardContent sx={{ padding: 0, height: '100%' }}>
                    <ImageWrapper>
                        <motion.div
                            variants={imageVariants}
                            animate={hovered ? 'hover' : 'unhover'}
                            style={{ width: '100%', height: '100%' }}
                        >
                            <img
                                src={image}
                                alt={text}
                                width="100%"
                                height={"100%"}
                                style={{
                                    layout: 'fill',
                                    objectFit: 'cover',
                                }}
                            />
                        </motion.div>
                    </ImageWrapper>
                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        animate={hovered ? 'visible' : 'hidden'}
                    >
                        {hovered && (
                            <TextOverlay>
                                <Box>
                                <Typography variant="h6" component="div" sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center', padding: '0.5rem 0.5rem' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, maiores.
                                </Typography>

                                <Typography component="div" sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center', padding: '0.5rem 0.5rem', fontSize: '16px' }}>
                                    {text}
                                </Typography>
                                </Box>
                            </TextOverlay>
                        )}
                    </motion.div>
                </CardContent>
            </StyledCard>
        </motion.div>
    );
}

AnimatedCard.propTypes = {
    text: propTypes.any,
    index: propTypes.any,
    image: propTypes.any
}