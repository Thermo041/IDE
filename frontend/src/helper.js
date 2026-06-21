// In production (single-service deploy) the frontend is served by the backend,
// so API calls are same-origin (""). In dev they hit the local backend.
export const api_base_url = import.meta.env.VITE_API_BASE_URL || (import.meta.env.PROD ? "" : "http://localhost:3000");