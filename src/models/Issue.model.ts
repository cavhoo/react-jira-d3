import Assignee from './Assignee';
import Project from './Project.model';
import Status from './Status.model';
import Watchers from './Watchers.model';

interface Issue {
  expand: string
  id: string
  self: string
  key: string
  fields: Partial<{
    watchers: Watchers,
    attachment: any[],
    'sub-task': any[],
    description: any,
    comment: any[],
    issueklinks: any[],
    worklog: any[],
    updated: string,
    timetracking: any,
    created: string,
    status: Status,
    project: Project,
    assignee: Assignee,
    resolutionDate: string,
  }>
}

export default Issue
