export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://grab2-server.herokuapp.com"
    : "http://localhost:8080";
