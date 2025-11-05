export const userProfile = {
  id: 101,
  firstName: "Jordan",
  lastName: "Reed",
  email: "jordan.reed@example.com",
  role: "Support Agent", // main role (for quick reference)
  userName: "joreed86",
  roles: [
    {
      id: 2,
      name: "Support Agent",
      description: "Handles customer support tickets and updates their statuses.",
      permissions: {
        canViewTickets: true,
        canEditTickets: true,
        canDeleteTickets: false,
        canManageUsers: false,
        canViewReports: false,
        canModifySettings: false
      }
    },
    {
      id: 3,
      name: "Manager",
      description: "Oversees ticket resolution progress and team performance.",
      permissions: {
        canViewTickets: true,
        canEditTickets: true,
        canDeleteTickets: true,
        canManageUsers: false,
        canViewReports: true,
        canModifySettings: false
      }
    }
  ],
  avatar: "https://i.pravatar.cc/150?img=12",
  department: "Customer Support",
  phone: "+1-555-234-8910",
  status: "Active", // Active, Offline, Away
  timezone: "America/New_York",
  joinedAt: "2024-04-15T09:00:00Z",
  lastLogin: "2025-11-03T11:14:00Z",
  permissions: {
    canViewTickets: true,
    canEditTickets: true,
    canDeleteTickets: false,
    canManageUsers: false,
  },
  preferences: {
    theme: "dark",
    language: "en-US",
    notifications: {
      email: true,
      sms: false,
      push: true
    }
  }
};


export const supportTickets = [
  {
    id: 1,
    customer: "Acme Corp",
    subject: "Login issue on dashboard",
    description: "Users report being unable to log in using corporate SSO credentials. Error code 401 returned.",
    status: "Open",
    priority: "High",
    assignee: "Jordan Reed",
    timestamp: "2025-11-03T09:32:00Z"
  },
  {
    id: 2,
    customer: "Beta Solutions",
    subject: "Unable to reset password",
    description: "Password reset emails are not being sent to customers. SMTP configuration may be outdated.",
    status: "In Progress",
    priority: "Medium",
    assignee: "Taylor Morgan",
    timestamp: "2025-11-02T14:21:00Z"
  },
  {
    id: 3,
    customer: "Orion Tech",
    subject: "API returning 500 errors",
    description: "The API intermittently returns 500 errors when fetching reports. Possibly related to new caching logic.",
    status: "Open",
    priority: "High",
    assignee: "Alex Chen",
    timestamp: "2025-11-01T18:45:00Z"
  },
  {
    id: 4,
    customer: "Delta Systems",
    subject: "Billing discrepancy in last invoice",
    description: "Customer reported being charged twice for the same billing cycle. Needs finance review.",
    status: "Resolved",
    priority: "Low",
    assignee: "Jordan Reed",
    timestamp: "2025-10-31T11:10:00Z"
  },
  {
    id: 5,
    customer: "Nova Retail",
    subject: "Feature request: Dark mode support",
    description: "Customer requested an optional dark theme for better usability during night shifts.",
    status: "Closed",
    priority: "Low",
    assignee: "Taylor Morgan",
    timestamp: "2025-10-30T16:55:00Z"
  },
  {
    id: 6,
    customer: "Zenith Labs",
    subject: "Dashboard widgets not loading",
    description: "Widgets on the dashboard fail to load after recent update. JS console shows network timeout errors.",
    status: "In Progress",
    priority: "High",
    assignee: "Alex Chen",
    timestamp: "2025-11-03T10:15:00Z"
  },
  {
    id: 7,
    customer: "Pioneer Data",
    subject: "Email notifications not being sent",
    description: "Some users are not receiving automated ticket updates. Possible issue with email queueing system.",
    status: "Open",
    priority: "Medium",
    assignee: "Jordan Reed",
    timestamp: "2025-11-02T09:05:00Z"
  },
  {
    id: 8,
    customer: "Horizon Media",
    subject: "User role permissions not applying",
    description: "After updating roles, users still have old access levels. Role sync function may be failing.",
    status: "In Progress",
    priority: "Medium",
    assignee: "Taylor Morgan",
    timestamp: "2025-10-29T13:20:00Z"
  },
  {
    id: 9,
    customer: "Vertex Health",
    subject: "Slow response times on mobile app",
    description: "Mobile app response times exceed 5 seconds during peak hours. Needs backend performance review.",
    status: "Open",
    priority: "High",
    assignee: "Alex Chen",
    timestamp: "2025-11-01T08:50:00Z"
  },
  {
    id: 10,
    customer: "Atlas Logistics",
    subject: "Error when exporting reports to CSV",
    description: "Exported CSV files are empty even though reports contain data. Likely due to new file writer update.",
    status: "Resolved",
    priority: "Low",
    assignee: "Jordan Reed",
    timestamp: "2025-10-28T19:30:00Z"
  }
];