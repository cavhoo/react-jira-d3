import {
  issueByAssignee,
    issueByClosedDate,
  issueByProject,
  issuesByCreatedDate,
  issuesByStatus,
} from '../Issue.filters'

import jiraResponse from '../../../__mocks__/searchResponse.mock'

describe('Issue.filters Test Suite', () => {
  const issues: any[] = []

  beforeAll(() => {
    issues.push(
      ...jiraResponse.issues,
    )
  })

  it('Should group issues by date', () => {
    const map = issuesByCreatedDate(issues)

    expect(Object.keys(map)).toHaveLength(62)
    expect(map['2020-06-25']).toHaveLength(1)
  })

  it('Should group issues by status', () => {
    const map = issuesByStatus(issues)

    expect(Object.keys(map)).toHaveLength(2)
    expect(map['Developer Backlog']).toHaveLength(76)
  })

  it('Should group issues by project', () => {
    const map = issueByProject(issues)

    expect(Object.keys(map)).toHaveLength(12)
    expect(map['Neo Pro']).toHaveLength(2)
  })

  it('Should group issues by assignee', () => {
    const map = issueByAssignee(issues)

    expect(Object.keys(map)).toHaveLength(17)
  })

  it('Should group issues by closed date', () => {
    const map = issueByClosedDate(issues)

    expect(Object.keys(map)).toHaveLength(1)
  })
})
