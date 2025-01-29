import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import HeroImage from "../assets/hero-image.jpg"

export default function Hero() {
  return (
    <Box
      sx={{
        // minHeight: "90dvh",
        display: "flex",
        alignItems: "center",
        background: {md: "linear-gradient(135deg, #ffffff 0%, #f1f1f1 100%)", sm: '#fff'},
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl" sx={{ mt: '2rem' }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" },
            gap: 4,
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "1.4rem",
                  sm: "1.8rem",
                  md: "2.4rem",
                },
                textAlign: { xs: 'center', md: 'center' },
                fontWeight: 700,
                mb: 2,
                color: '#000',
                letterSpacing: '2px'
              }}
            >
              Redefining possibilities in IT consulting and solutions.
            </Typography>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  textAlign: { xs: 'center', md: 'center' },
                  color: '#000',
                }}
              >
                Fueling innovation for a smarter tomorrow
              </Typography>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
              <Box
                component="button"
                sx={{
                  backgroundColor: "primary.main",
                  color: "#fff",
                  border: "none",
                  borderRadius: "30px",
                  padding: "12px 30px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  justifySelf: {xs: 'center', sm: 'center', md: 'left'},
                  textAlign: "center",
                  "&:hover": {
                    transform: "translateY(1px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  },
                }}
                onClick={() => {
                  document.getElementById('contact-us-section').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Now
              </Box>
            </motion.div>
          </motion.div>
          <Box sx={{display: {md: "block", xs: "none"}}}>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              position: "relative",
              height: "80vh",
            }}
          >
            <Box
              component="img"
              src={HeroImage}
              alt="VR Technology"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
                borderRadius: "20px",
              }}
            />
          </motion.div>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "80px",
          background: "linear-gradient(to top, white, transparent)",
          display: {md: "block", xs: "none"}
        }}
      />
    </Box>
  );
}
