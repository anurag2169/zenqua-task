import React from "react";
import { Box, TextField, Button, InputAdornment } from "@mui/material";
import { Search, FilterList } from "@mui/icons-material";
import { DealFilter } from "../../types/deal";

interface DealsFilterProps {
  filter: DealFilter;
  onFilterChange: (filter: DealFilter) => void;
}

const DealsFilter: React.FC<DealsFilterProps> = ({
  filter,
  onFilterChange,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
      }}
    >
      <TextField
        placeholder="Search deals..."
        value={filter.search || ""}
        onChange={(e) => onFilterChange({ ...filter, search: e.target.value })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{
          minWidth: { xs: "100%", md: 300 },
          "& .MuiOutlinedInput-root": {
            borderRadius: 3,
            height: 42,
          },
        }}
      />

      <TextField
        type="date"
        label="From"
        value={filter.dateFrom || ""}
        onChange={(e) =>
          onFilterChange({ ...filter, dateFrom: e.target.value })
        }
        InputLabelProps={{
          shrink: true,
        }}
        sx={{
          minWidth: 140,
          "& .MuiOutlinedInput-root": {
            borderRadius: 3,
            height: 42,
          },
        }}
      />

      <TextField
        type="date"
        label="To"
        value={filter.dateTo || ""}
        onChange={(e) => onFilterChange({ ...filter, dateTo: e.target.value })}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{
          minWidth: 140,
          "& .MuiOutlinedInput-root": {
            borderRadius: 3,
            height: 42,
          },
        }}
      />

      <Button
        variant="outlined"
        startIcon={<FilterList />}
        onClick={() => onFilterChange({})}
        sx={{ minWidth: "fit-content", height: 42 }}
      >
        Clear
      </Button>
    </Box>
  );
};

export default DealsFilter;
