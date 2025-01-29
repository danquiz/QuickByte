import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function WebinarBanner() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "linear-gradient(90deg, #1a237e 0%, #0288d1 100%)",
        color: "white",
        py: 2,
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography
                variant="body2"
                sx={{
                  backgroundColor: "error.main",
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                }}
              >
                LIVE WEBINAR
              </Typography>
              <Typography variant="body1">
                What Is Manufacturing Cloud & How It Works?
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Wednesday, 11th December 2024
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                7:00 AM PT | 8:30 PM IST
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ffd700",
                color: "text.primary",
                "&:hover": {
                  backgroundColor: "#ffc400",
                },
              }}
            >
              Register Now
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
