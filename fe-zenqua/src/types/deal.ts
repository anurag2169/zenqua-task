export interface Deal {
  id: string;
  client: {
    name: string;
    avatar: string;
    initials: string;
  };
  dealName: string;
  budget: number;
  assignee: {
    name: string;
    initials: string;
  };
  status: "Negotiating" | "Kickedback";
  createdDate: string;
  category: string;
}

export interface DealFilter {
  dateFrom?: string;
  dateTo?: string;
  search?: string;
}
