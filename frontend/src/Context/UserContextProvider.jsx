// import React from 'react'
// import userContext from './userCntext'

// const UserContextProvider = ({ children }) => {

//   const [user, setUser] = React.useState(null);

//   return (
//     <userContext.Provider value={{ user, setUser }}>
//       {children}
//     </userContext.Provider>
//   )
// }

// export default UserContextProvider;

import React, { useEffect, useState } from 'react'
import userContext from './userCntext'

const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  // 🔥 Load user on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 🔥 Save user whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  )
}

export default UserContextProvider;