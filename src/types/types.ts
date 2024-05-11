// Interface for appPreferences
export interface appPreferences {
  theme: string;
}

// Interface for UserInfo
export interface userInfo {
  id: number;
  username: string;
  email: string;
  age?: number; // Optional field
  isAdmin: boolean;
}

// Example usage:
const user: userInfo = {
  id: 1,
  username: "john_doe",
  email: "john@example.com",
  isAdmin: false,
};
