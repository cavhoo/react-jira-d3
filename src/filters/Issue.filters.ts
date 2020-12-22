import Issue from '../models/Issue.model'
import { Unassigned, Unresolved } from '../types/generic';
import { formatDate } from '../utils/dates'

export function issuesByCreatedDate(issues: Issue[]): Record<string, Issue[]> {
  const issueMap: Record<string, Issue[]> = {}

  issues.forEach((issue) => {
    const issueCreated = formatDate(issue.fields.created ?? '', 'yyyy-MM-dd')

    if (issueMap[issueCreated]) {
      issueMap[issueCreated].push(issue)
    } else {
      issueMap[issueCreated] = []
      issueMap[issueCreated].push(issue)
    }
  })
  return issueMap
}

export function issuesByStatus(issues: Issue[]) {
  const issueMap: Record<string, Issue[]> = {}

  issues.forEach((issue) => {
    const { status } = issue.fields
    if (status) {
      if (issueMap[status.name]) {
        issueMap[status.name].push(issue)
      } else {
        issueMap[status.name] = []
        issueMap[status.name].push(issue)
      }
    }
  })

  return issueMap
}

export function issueByProject(issues: Issue[]) {
  const issueMap: Record<string, Issue[]> = {}

  issues.forEach((issue) => {
    const { project } = issue.fields
    if (project) {
      if (issueMap[project.name]) {
        issueMap[project.name].push(issue)
      } else {
        issueMap[project.name] = []
        issueMap[project.name].push(issue)
      }
    }
  })

  return issueMap
}

export function issueByAssignee(issues: Issue[]) {
  const issueMap: Record<string, Issue[]> = {}

  issues.forEach((issue) => {
    const { assignee } = issue.fields

    if (!assignee) {
      if (issueMap[Unassigned]) {
        issueMap[Unassigned].push(issue)
      } else {
        issueMap[Unassigned] = []
        issueMap[Unassigned].push(issue)
      }
    } else {
      if (issueMap[assignee.displayName]) {
        issueMap[assignee.displayName].push(issue)
      } else {
        issueMap[assignee.displayName] = []
        issueMap[assignee.displayName].push(issue)
      }
    }
  })
  return issueMap
}

export function issueByClosedDate(issues: Issue[]) {
  const issueMap: Record<string, Issue[]> = {}

  issues.forEach((issue) => {
    const { resolutionDate } = issue.fields

    if (resolutionDate) {
      const issueClosed = formatDate(resolutionDate, 'yyyy-MM-dd')
      if (issueMap[issueClosed]) {
        issueMap[issueClosed].push(issue)
      } else {
        issueMap[issueClosed] = []
        issueMap[issueClosed].push(issue)
      }
    } else {
      if (issueMap[Unresolved]) {
        issueMap[Unresolved].push(issue)
      } else {
        issueMap[Unresolved] = []
        issueMap[Unresolved].push(issue)
      }
    }
  })

  return issueMap
}
