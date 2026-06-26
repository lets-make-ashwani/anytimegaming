import { logger } from "./logger";

interface RequestOptions extends RequestInit {
  params?: Record<string, string>;
}

export class APIError extends Error {
  status: number;
  data: unknown;

  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.name = "APIError";
    this.status = status;
    this.data = data;
  }
}

async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { params, headers, ...customConfig } = options;
  
  // Construct search parameters
  let url = endpoint;
  if (params) {
    const searchParams = new URLSearchParams(params);
    url += `?${searchParams.toString()}`;
  }

  const defaultHeaders = {
    "Content-Type": "application/json",
    ...headers,
  };

  const config: RequestInit = {
    method: "GET",
    headers: defaultHeaders,
    ...customConfig,
  };

  try {
    logger.info(`API Request to ${url}`, { method: config.method });
    
    const response = await fetch(url, config);
    
    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch {
        errorData = await response.text();
      }
      
      logger.error(`API Error on ${url} - Status: ${response.status}`, errorData);
      throw new APIError(
        `Request failed with status ${response.status}`, 
        response.status, 
        errorData
      );
    }

    // Handle empty response
    if (response.status === 204) {
      return {} as T;
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    if (error instanceof APIError) throw error;
    
    logger.error(`Network or unexpected API error on ${url}`, error);
    throw new Error(error instanceof Error ? error.message : "An unknown error occurred");
  }
}

export const apiClient = {
  get: <T>(url: string, options?: Omit<RequestOptions, "method">) => 
    request<T>(url, { ...options, method: "GET" }),
    
  post: <T>(url: string, body?: unknown, options?: Omit<RequestOptions, "method" | "body">) => 
    request<T>(url, { ...options, method: "POST", body: JSON.stringify(body) }),
    
  put: <T>(url: string, body?: unknown, options?: Omit<RequestOptions, "method" | "body">) => 
    request<T>(url, { ...options, method: "PUT", body: JSON.stringify(body) }),
    
  delete: <T>(url: string, options?: Omit<RequestOptions, "method">) => 
    request<T>(url, { ...options, method: "DELETE" }),
};
