import React from "react";
import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";

const HeroSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        background: " linear-gradient(180deg, #ffffff 0%, #c4dcf2 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  fontWeight: 500,
                  letterSpacing: 0.5,
                }}
              >
                Welcome!
              </Typography>
            </Box>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                fontWeight: 600,
                color: "text.primary",
              }}
            >
              Manage your{" "}
              <span style={{ color: theme.palette.primary.main }}>Deals</span>
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
              }}
            >
              Get Started
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: { xs: 200, md: 300 },
              }}
            >
              <Box
                component="img"
                src="/client-cover.png"
                alt="CRM Dashboard Illustration"
                sx={{
                  width: { xs: "100%", md: "90%" },
                  maxWidth: 500,
                  height: "auto",
                  borderRadius: 3,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
