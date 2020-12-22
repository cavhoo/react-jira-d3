interface Description {
  type: string
  version: number
  content: Record<string, string>[]
  project: Record<string, string>
  comment: Record<string, string>
  issuelinks: Record<string, string>[]
  worklog: Record<string, string>[]
  updated: number
  timetracking: Record<string, any>
}

export default Description
