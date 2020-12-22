interface OutwardIssue {
  id: string
  key: string
  self: string
  fields: {
    status: {
      iconUrl: string
      name: string
    }
  }
}

export default OutwardIssue
