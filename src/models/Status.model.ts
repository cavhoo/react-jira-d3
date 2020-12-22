interface Status {
  self: string
  descriptions: string
  iconUrl: string
  name: string
  id: string
  statusCatergory?: Partial<{
    self: string
    id: string
    key: string
    colorName: string
    name: string
  }>
}

export default Status
