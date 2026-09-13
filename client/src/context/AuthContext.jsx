import { useCallback, useEffect, useMemo, useState } from 'react'
import { AuthContext } from './authContext'
import { authApi } from '../services/api'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('learnreach_user')
    return savedUser ? JSON.parse(savedUser) : null
  })
  const [token, setToken] = useState(() => localStorage.getItem('learnreach_token') || '')
  const [loading, setLoading] = useState(Boolean(localStorage.getItem('learnreach_token')))

  const persistAuth = useCallback((newToken, newUser) => {
    if (newToken) {
      localStorage.setItem('learnreach_token', newToken)
    } else {
      localStorage.removeItem('learnreach_token')
    }

    if (newUser) {
      localStorage.setItem('learnreach_user', JSON.stringify(newUser))
    } else {
      localStorage.removeItem('learnreach_user')
    }
  }, [])

  const login = useCallback(async (credentials) => {
    const response = await authApi.login(credentials)
    setToken(response.token)
    setUser(response.user)
    persistAuth(response.token, response.user)
    return response
  }, [persistAuth])

  const signup = useCallback(async (payload) => {
    const response = await authApi.signup(payload)
    return response
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    setToken('')
    persistAuth('', null)
  }, [persistAuth])

  const refreshUser = useCallback(async () => {
    if (!token) {
      return null
    }

    try {
      const response = await authApi.me()
      setUser(response.user)
      persistAuth(token, response.user)
      return response.user
    } catch (error) {
      logout()
      throw error
    }
  }, [logout, persistAuth, token])

  useEffect(() => {
    let isMounted = true

    const restoreSession = async () => {
      if (!token) {
        setLoading(false)
        return
      }

      try {
        await refreshUser()
      } catch {
        if (isMounted) {
          setUser(null)
          setToken('')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    restoreSession()

    return () => {
      isMounted = false
    }
  }, [refreshUser, token])

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      isAuthenticated: Boolean(token && user),
      login,
      signup,
      logout,
      refreshUser,
      setUser,
    }),
    [user, token, loading, login, logout, refreshUser, signup],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

