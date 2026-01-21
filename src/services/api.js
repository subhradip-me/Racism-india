import axios from 'axios'

// Configure your API base URL here
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
})

// Request interceptor for adding auth tokens if needed
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for handling errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error status
      console.error('API Error:', error.response.data)
    } else if (error.request) {
      // Request made but no response
      console.error('Network Error:', error.message)
    } else {
      // Error in request setup
      console.error('Error:', error.message)
    }
    return Promise.reject(error)
  }
)

/**
 * Analyze text for hate speech detection
 * @param {string} text - Text to analyze
 * @returns {Promise} Analysis results
 */
export const analyzeHateSpeech = async (text) => {
  const response = await apiClient.post('/analyze', { text })
  return response.data
}

/**
 * Get model statistics
 * @returns {Promise} Model stats
 */
export const getModelStats = async () => {
  const response = await apiClient.get('/stats')
  return response.data
}

export default apiClient
