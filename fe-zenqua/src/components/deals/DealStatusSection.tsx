import React from "react";
import { Box, Typography, Collapse, IconButton, Chip } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { Deal } from "../../types/deal";
import DealTable from "./DealTable";

interface DealStatusSectionProps {
  status: string;
  deals: Deal[];
  expanded: boolean;
  onToggle: () => void;
  totalValue: number;
}

const DealStatusSection: React.FC<DealStatusSectionProps> = ({
  status,
  deals,
  expanded,
  onToggle,
  totalValue,
}) => {
  return (
    <Box sx={{ mb: 1 }}>
      <Box
        className={`bg-blue-50 hover:bg-blue-50/50 rounded-md border border-blue-200`}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
          cursor: "pointer",
        }}
        onClick={onToggle}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton size="small">
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {status}
          </Typography>
          <Chip
            label={deals.length}
            size="small"
            sx={{
              minWidth: 32,
              height: 24,
              fontSize: "0.75rem",
            }}
          />
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            ${totalValue.toLocaleString()}
          </Typography>
        </Box>
      </Box>

      <Collapse in={expanded}>
        <Box sx={{ pl: 2 }}>
          <DealTable deals={deals} />
        </Box>
      </Collapse>
    </Box>
  );
};

export default DealStatusSection;
