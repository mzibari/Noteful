
export const findFolder = (folders = [], folderId) =>
  folders.find(folder => folder.id === folderId)

export const findNote = (notes = [], noteId) =>
  notes.find(note => note.id === noteId)

export const getNotesForFolder = (notes = [], folderId) => (
  (!folderId)
    ? notes
    : notes.filter(note => note.folderId === folderId)
)

export const getOptions = {
  method: 'GET',
  headers: {
    'content-type': 'application/json'
  }
}

export const deleteOptions = {
  method: 'DELETE',
  headers: {
    'content-type': 'application/json'
  }
}

export const apiUrl = {
  notes: 'http://localhost:9090/notes',
  folders: 'http://localhost:9090/folders'
}

export const countNotesForFolder = (notes = [], folderId) =>
  notes.filter(note => note.folderId === folderId).length;


