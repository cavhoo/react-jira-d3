import Author from './Author.model'

interface Attachment {
  id: number
  self: string
  filename: string
  author: Author
  created: string
  size: number
  mimeType: string
  content: string
  thumbnail: string
}

export default Attachment
