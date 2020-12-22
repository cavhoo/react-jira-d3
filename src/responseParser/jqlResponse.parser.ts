import {Issue} from '../models/Issue.model'

export function getIssuesFromResponse(response: Record<string, any>):Issue[] {
  return response.issues ?? []
}
