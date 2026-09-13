const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

async function apiRequest(endpoint, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  }

  const token = localStorage.getItem('learnreach_token')
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  })

  const contentType = response.headers.get('content-type') || ''
  const data = contentType.includes('application/json') ? await response.json() : await response.text()

  if (!response.ok) {
    const message = typeof data === 'string' ? data : (data?.message || 'Request failed')
    throw new Error(message)
  }

  return data
}

export const authApi = {
  signup: (payload) =>
    apiRequest('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
  login: (payload) =>
    apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
  me: () => apiRequest('/auth/me'),
}

export const contentApi = {
  getGrades: () => apiRequest('/content/grades'),
  getSubjectsByGrade: (gradeId) => apiRequest(`/content/grades/${gradeId}/subjects`),
  getTopicsBySubject: (subjectId) => apiRequest(`/content/subjects/${subjectId}/topics`),
  getLessonsByTopic: (topicId) => apiRequest(`/content/topics/${topicId}/lessons`),
}

export const quizApi = {
  getByTopic: (topicId) => apiRequest(`/quizzes/topic/${topicId}`),
}

export const assignmentApi = {
  getByTopic: (topicId) => apiRequest(`/assignments/topic/${topicId}`),
}

export const progressApi = {
  getByUser: (userId) => apiRequest(`/progress/user/${userId}`),
}

export default apiRequest
