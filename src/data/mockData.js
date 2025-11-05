// src/data/mockData.js
export const userProfile = {
  id: 101,
  firstName: "Jordan",
  lastName: "Reed",
  email: "jordan.reed@example.com",
  role: "Support Agent",
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
  status: "Active",
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
  // … resten av ticket-objektene her …
];
