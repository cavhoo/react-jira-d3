interface Author {
  self: string
  key: string
  accountId: string
  name: string
  avatarUrls: Record<string, string>
  displayName: string
  active: boolean
}

export default Author
