import { createContext, useContext, useState, useEffect, Children } from "react";

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    const storedUser = localStorage.getItem('devburguer:userData')

    if (storedUser && storedUser !== 'undefined') {
      try {
        setUserInfo(JSON.parse(storedUser))
      } catch {
        localStorage.removeItem('devburguer:userData')
      }
    }
  }, [])

  const putUserData = (user) => {
    if (!user) return

    setUserInfo(user)
    localStorage.setItem(
      'devburguer:userData',
      JSON.stringify(user))
  }

  const logout = () => {
    setUserInfo({})
    localStorage.removeItem('devburguer:userData')
    localStorage.removeItem('token')
  }

  return (
    <UserContext.Provider value={{ userInfo, putUserData, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be a valid context')
  }

  return context

}