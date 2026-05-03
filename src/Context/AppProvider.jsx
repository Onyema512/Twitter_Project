import React, { useState } from 'react'
import { AppContext } from './AppContext'

const AppProvider = ({children}) => {
     const [posts, setPosts] = useState([]);

      const addPost = (text, image) => {
        const newPost ={
            id: Date.now(),
            user: "You",
            text,
            image,
            type: "forYou"
        };
        setPosts(prev => [newPost, ...prev]);
      }

  return (
    <AppContext.Provider value ={{ posts, addPost }}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider
