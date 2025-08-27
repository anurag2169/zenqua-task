import React, { useState, useMemo, useEffect } from "react";
import { Box, Typography, Tabs, Tab, Button } from "@mui/material";
import { Deal, DealFilter } from "../../types/deal";
import DealsFilter from "./DealsFilter";
import DealStatusSection from "./DealStatusSection";

const DealsDashboard: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [filter, setFilter] = useState<DealFilter>({});
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    Negotiating: true,
    Kickedback: true,
  });
  const [mockDeals, setMockDeals] = useState<Deal[]>([]);

  const fetchData = async () => {
    const url = "http://localhost:5000/api/deals";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch deals");
    }
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    const loadData = async () => {
      const deals = await fetchData();
      if (Array.isArray(deals)) {
        setMockDeals(deals);
      }
    };
    loadData();
  }, []);

  const filteredDeals = useMemo(() => {
    return mockDeals.filter((deal) => {
      if (
        filter.search &&
        !deal.dealName.toLowerCase().includes(filter.search.toLowerCase()) &&
        !deal.client.name.toLowerCase().includes(filter.search.toLowerCase())
      ) {
        return false;
      }
      if (filter.dateFrom && deal.createdDate < filter.dateFrom) {
        return false;
      }
      if (filter.dateTo && deal.createdDate > filter.dateTo) {
        return false;
      }
      return true;
    });
  }, [filter, mockDeals]);

  const groupedDeals = useMemo(() => {
    const groups: { [key: string]: Deal[] } = {};
    filteredDeals.forEach((deal) => {
      if (!groups[deal.status]) {
        groups[deal.status] = [];
      }
      groups[deal.status].push(deal);
    });
    return groups;
  }, [filteredDeals]);

  const totalRevenue = useMemo(() => {
    return filteredDeals.reduce((sum, deal) => sum + deal.budget, 0);
  }, [filteredDeals]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const toggleSection = (status: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [status]: !prev[status],
    }));
  };

  const STATUS_ORDER = ["Negotiating", "Kickedback"];

  const sortedDeals = useMemo(() => {
    return Object.entries(groupedDeals)
      .filter(([status]) => STATUS_ORDER.includes(status)) // only keep desired statuses
      .sort(([a], [b]) => STATUS_ORDER.indexOf(a) - STATUS_ORDER.indexOf(b));
  }, [groupedDeals]);

  return (
    <section className="m-4 rounded-xl bg-white p-4">
      <Box className="z-50" sx={{ mb: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Box>
            <Tabs value={tabValue} onChange={handleTabChange}>
              <Tab label="My Deals" />
              <Tab label="All Clients" />
            </Tabs>
          </Box>
        </Box>

        <div className="flex flex-col lg:flex-row justify-start lg:justify-between pb-6">
          <Box sx={{ mb: 2, display: "flex", gap: 1, alignItems: "center" }}>
            <Button variant="text" size="small" color="inherit">
              Pipeline
            </Button>
            <Button variant="outlined" size="small">
              List
            </Button>
            <Typography
              variant="body2"
              sx={{ ml: 2, color: "text.secondary", fontWeight: 500 }}
            >
              Total Deals: {filteredDeals.length} | Total Revenue in Pipeline: $
              {totalRevenue.toLocaleString()}
            </Typography>
          </Box>
          <DealsFilter filter={filter} onFilterChange={setFilter} />
        </div>
        <div className="border border-gray-200 mb-4"></div>
        <div>
          {sortedDeals.map(([status, deals]) => {
            const totalValue = deals.reduce(
              (sum, deal) => sum + deal.budget,
              0
            );

            return (
              <DealStatusSection
                key={status}
                status={status}
                deals={deals}
                expanded={!!expandedSections[status]}
                onToggle={() => toggleSection(status)}
                totalValue={totalValue}
              />
            );
          })}
        </div>
      </Box>
    </section>
  );
};

export default DealsDashboard;
