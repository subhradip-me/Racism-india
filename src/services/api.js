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

// // Request interceptor for adding auth tokens if needed
// apiClient.interceptors.request.use(
//   (config) => {
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

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
    try {
        const response = await apiClient.post('/analyze', { text })
        return response.data
    } catch (err) {
        // normalize error for callers
        const message = err.response?.data?.message || err.message || 'Failed to analyze text'
        throw new Error(message)
    }
}

/**
 * Get model statistics
 * @returns {Promise} Model stats
 */
export const getModelStats = async () => {
  try {
    const response = await apiClient.get('/stats')
    return response.data
  } catch (err) {
    // normalize error for callers
    const message = err.response?.data?.message || err.message || 'Failed to fetch model stats'
    throw new Error(message)
  }
}

export default apiClient
