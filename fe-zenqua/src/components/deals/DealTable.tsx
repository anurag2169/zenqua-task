import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Typography,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Deal } from "../../types/deal";

interface DealTableProps {
  deals: Deal[];
}

const DealTable: React.FC<DealTableProps> = ({ deals }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600 }}>Client</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Deal Name</TableCell>
            {!isMobile && (
              <TableCell sx={{ fontWeight: 600 }}>Deal Budget</TableCell>
            )}
            {!isMobile && (
              <TableCell sx={{ fontWeight: 600 }}>Assignee</TableCell>
            )}
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deals.map((deal) => (
            <TableRow
              key={deal.id}
              sx={{
                "&:hover": {
                  bgcolor: "action.hover",
                },
                cursor: "pointer",
              }}
            >
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      fontSize: "0.875rem",
                    }}
                  >
                    {deal.client.initials}
                  </Avatar>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {deal.client.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                    >
                      {deal.category}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="body2">{deal.dealName}</Typography>
              </TableCell>
              {!isMobile && (
                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    ${deal.budget.toLocaleString()}
                  </Typography>
                </TableCell>
              )}
              {!isMobile && (
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar
                      sx={{
                        width: 24,
                        height: 24,
                        fontSize: "0.75rem",
                      }}
                    >
                      {deal.assignee.initials}
                    </Avatar>
                    <Typography variant="body2">
                      {deal.assignee.name}
                    </Typography>
                  </Box>
                </TableCell>
              )}
              <TableCell align="right">
                <IconButton size="small">
                  <ExitToAppIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DealTable;
