import React from 'react'

const NotefulContext = React.createContext({
  folders: [],
  notes: [],
  addFolder: () => {},
  addNote: () => {},
  deleteFolder: () => {},
  deleteNote: () => {},
})

export default NotefulContext;