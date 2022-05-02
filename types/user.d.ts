type User = {
  userId: string;
  password: string;
  name: string;
  type: "manager" | "user";
  email?: string;
};
