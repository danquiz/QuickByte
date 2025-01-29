import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              mb: 4,
              fontSize: {
                xs: "2rem",
                sm: "2.8rem",
                md: "3.6rem",
              },
            }}
          >
            Your Journey Starts with QuickByte
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "left",
              maxWidth: "800px",
              mx: "auto",
              color: "text.secondary",
            }}
          >
            We transform the way businesses approach IT. With tailored solutions that fit your goals and challanges, our experts guide you through every step of your digital journey. Partner with us to turn obstacles into opportunities and drive sustaainable growth through innovative technology.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
