import React from 'react'
import { Issue } from '../../models'
import {issuesByCreatedDate} from '../../filters/Issue.filters'
import IssuesByDay from "./IssuesByDay"

export interface CreatedIssuesByDayProps {
  issues: Issue[]
  title: string
}

export const CreatedIssuesByDay = ({issues}: CreatedIssuesByDayProps) => {
  const mappedData = issuesByCreatedDate(issues)

  const parsedData = Object.keys(mappedData).map((day) => ({day, amount: mappedData[day].length}))

  return (
    <IssuesByDay
      data={parsedData}
    />
  )
}
