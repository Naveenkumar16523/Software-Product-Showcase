const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
    credentials: "include", // This ensures HttpOnly cookies are sent with the request
  });

  if (response.status === 401 || response.status === 403) {
    if (typeof window !== "undefined" && endpoint !== "/api/auth/login" && window.location.pathname !== "/admin/login") {
      window.location.href = "/admin/login";
    }
    throw new Error("Unauthorized");
  }

  return response;
}
