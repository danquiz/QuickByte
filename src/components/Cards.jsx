import { useState } from "react";
import { motion, useSpring, transform } from "framer-motion";
import { Typography } from "@mui/material";
// import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
// import "./styles.css";
import propTypes from 'prop-types';

export default function Cards({ content }) {
    /* State */
    const [frame, setFrame] = useState({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    });

    /* Constants */
    /* Customize these to change the intensity of the
    transforms and the bounciness of the animations. */
    const rotateValue = 10;
    const transformValue = rotateValue * 2;
    const springValue = { stiffness: 200, damping: 15 };

    /* UseSpring MotionValues */
    const rotateX = useSpring(0, springValue);
    const rotateY = useSpring(0, springValue);
    const x = useSpring(0, springValue);
    const y = useSpring(0, springValue);
    // const shadowX = useSpring(0, springValue);
    // const shadowY = useSpring(30, springValue);

    /* MotionTemplate for shadow property */
    /* With useMotionTemplate, you can use MotionValues (and thus, useSpring) within strings. This is useful for animating and interpolating properties like Drop Shadow, Box Shadow, Gradients, and many more. */
    // const filter = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0, 0, 68, 0.25))`;

    /* Convert cursor position values */
    const convertCursorPosition = e => {
        const objectX = (e.nativeEvent.clientX - frame.left) / frame.width;
        const objectY = (e.nativeEvent.clientY - frame.top) / frame.height;

        rotateX.set(transform(objectY, [0, 1], [rotateValue, -rotateValue]));
        rotateY.set(transform(objectX, [0, 1], [-rotateValue, rotateValue]));
        x.set(transform(objectX, [0, 1], [-transformValue, transformValue]));
        y.set(transform(objectY, [0, 1], [-transformValue, transformValue]));

        // shadowX.set(transform(objectX, [0, 1], [10, -10]));
        // shadowY.set(transform(objectY, [0, 1], [30, 10]));
    };

    /* On Mouse Enter, get object frame and convert values */
    const handleMouseEnter = e => {
        const currentElement = e.target.getBoundingClientRect();

        setFrame({
            width: currentElement.width,
            height: currentElement.height,
            top: currentElement.top,
            left: currentElement.left
        });

        convertCursorPosition(e);
    };

    /* On Mouse Move, convert values */
    const handleMouseMove = e => {
        convertCursorPosition(e);
    };

    /* On Mouse Leave, reset */
    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
        x.set(0);
        y.set(0);
        // shadowX.set(0);
        // shadowY.set(40);
    };

    return (
        <motion.div
            style={{
                display: "flex",
                perspective: 1200,
            }}
        >
            <motion.div
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    // width: 400,
                    // height: 400,
                    cursor: "pointer"
                }}
            >
                <motion.div
                    style={{
                        borderRadius: 4,
                        rotateX,
                        rotateY,
                        display: "flex",
                        
                minHeight: '350px',
                        flexDirection: 'column',
                        // placeItems: "center",
                        padding: '1rem',
                        // placeContent: "center",
                        background: "#fff",
                        border: '2px solid #f1f1f1'
                        // boxShadow: "rgba(145, 158, 171, 0.8) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                    }}
                    className="card-responsive-width"
                >
                    <motion.img
                        src={content?.image}
                        style={{
                            // x,
                            // y,
                            // filter
                            borderRadius: '50%'
                        }}
                        height="70" width='120'
                        alt=""
                    />

                    <Typography sx={{ mt: '2rem', mb: '1rem', color: '#000', fontWeight: 600 }}>{content?.title}</Typography>
                    <Typography sx={{ color: '#000' }}>{content?.description}</Typography>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

Cards.propTypes = {
    content: propTypes.any
}