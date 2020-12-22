import { Type } from './Type.model'
import OutwardIssue from './OutwardIssue.model'

interface SubTask {
  id: string
  type: Type
  outwardIssue: OutwardIssue
}

export default SubTask
