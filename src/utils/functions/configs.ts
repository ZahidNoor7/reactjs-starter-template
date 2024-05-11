import Cookies from "js-cookie";

/**
 * Retrieves the developer options from the environment variable.
 * @returns {string} The developer options.
 */
export function initializeDevMode() {
  const node_env = process.env.NODE_ENV;
  const enable_logs = process.env.REACT_APP_ENABLE_LOGS;
  const enable_debuggers = process.env.REACT_APP_ENABLE_DEBUG;
  const enable_scripts = process.env.REACT_APP_ENABLE_SCRIPTS;

  return { node_env, enable_logs, enable_debuggers, enable_scripts };
}

/**
 * Retrieves the backend host URL from the environment variable.
 * @returns {string} The backend host URL.
 */
export async function initializeBackendHost() {
  // Retrieve the backend host URL from the environment variable
  const backendHost = process.env.REACT_APP_BACKEND_HOST;

  // Return the backend host URL
  return backendHost;
}

/**
 * Generates headers for Axios requests.
 * @returns {Object} Headers object.
 */
export async function axiosHeaders() {
  // Retrieve data from cookies

  const user_id = Cookies.get("user_id");

  // Define headers object
  const headers = {
    user_id: user_id,
  };

  return headers;
}
