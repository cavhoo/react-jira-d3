import { Issue } from '../lib/models/Issue.model'

export function createIssue(date: string): Issue {
  return {
    expand: '',
    id: '',
    self: '',
    key: '',
    fields: {
      created: date,
      watchers: null,
      comment: [],
      issueklinks: [],
      worklog: [],
      updated: '',
      timetracking: ''
    }
  }
}
