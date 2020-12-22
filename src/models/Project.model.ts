interface Project {
  self: string
  id: string
  key: string
  name: string
  projectTypeKey: string
  simplified: boolean
  avatarUrls: Record<string, string>
}

export default Project
