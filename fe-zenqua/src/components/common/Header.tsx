import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { NotificationAddOutlined } from "@mui/icons-material";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = [
    { label: "Dashboard" },
    { label: "Roster" },
    { label: "Communications" },
    { label: "CRM", active: true },
    { label: "Contacts" },
    { label: "Settings" },
    { label: "More" },
  ];

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#ffffff",
        borderBottom: 1,
        borderColor: "divider",
        color: "text.primary",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "text.primary" }}
          >
            ROSTER
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "primary.main", fontWeight: 600 }}
          >
            GRID
          </Typography>
        </Box>

        {!isMobile && (
          <Box
            className="bg-gray-200 p-1 rounded-full"
            sx={{ display: "flex", gap: 1 }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                sx={{
                  color: item.active ? "#ffffff" : "#666666",
                  bgcolor: item.active ? "primary.main" : "transparent",
                  borderRadius: 5,
                  px: 2,

                  minWidth: "auto",
                  fontWeight: item.active ? 600 : 400,
                  fontSize: "0.875rem",
                  boxShadow: item.active ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <div className="mr-1">
            <NotificationAddOutlined className="w-2 text-gray-600" />
          </div>
          <Typography variant="body2">Michael</Typography>
          <Avatar sx={{ width: 32, height: 32, bgcolor: "error.main" }}>
            M
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
