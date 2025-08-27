import { Deal } from "../types/deal";

export const mockDeals: Deal[] = [
  {
    id: "1",
    client: {
      name: "Chandan Kalita",
      avatar: "",
      initials: "CK",
    },
    dealName: "Chandan Deal",
    budget: 5000,
    assignee: {
      name: "Michael Speed",
      initials: "MS",
    },
    status: "Negotiating",
    createdDate: "2024-01-15",
    category: "Enterprise",
  },
  {
    id: "2",
    client: {
      name: "Michael Speed",
      avatar: "",
      initials: "MS",
    },
    dealName: "some deal 4",
    budget: 7000,
    assignee: {
      name: "Michael Speed",
      initials: "MS",
    },
    status: "Negotiating",
    createdDate: "2024-01-20",
    category: "SMB",
  },
  {
    id: "3",
    client: {
      name: "Sarah Johnson",
      avatar: "",
      initials: "SJ",
    },
    dealName: "Digital Transformation",
    budget: 15000,
    assignee: {
      name: "Alex Chen",
      initials: "AC",
    },
    status: "Negotiating",
    createdDate: "2024-02-01",
    category: "Enterprise",
  },
  {
    id: "4",
    client: {
      name: "Robert Wilson",
      avatar: "",
      initials: "RW",
    },
    dealName: "Cloud Migration",
    budget: 25000,
    assignee: {
      name: "Emily Davis",
      initials: "ED",
    },
    status: "Kickedback",
    createdDate: "2024-01-25",
    category: "Enterprise",
  },
  {
    id: "5",
    client: {
      name: "Lisa Anderson",
      avatar: "",
      initials: "LA",
    },
    dealName: "Marketing Platform",
    budget: 8500,
    assignee: {
      name: "John Smith",
      initials: "JS",
    },
    status: "Negotiating",
    createdDate: "2024-02-10",
    category: "SMB",
  },
  {
    id: "6",
    client: {
      name: "David Brown",
      avatar: "",
      initials: "DB",
    },
    dealName: "E-commerce Solution",
    budget: 12000,
    assignee: {
      name: "Michael Speed",
      initials: "MS",
    },
    status: "Kickedback",
    createdDate: "2024-02-05",
    category: "Mid-Market",
  },
];
