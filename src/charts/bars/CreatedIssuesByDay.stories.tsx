import React from 'react'
import { Story, Meta } from '@storybook/react'

import {
  CreatedIssuesByDay, CreatedIssuesByDayProps
} from './CreatedIssuesByDay'

export default {
  title: 'Barcharts/Created issues by day',
  component: CreatedIssuesByDay,
  argTypes: {}
} as Meta


const Template: Story<CreatedIssuesByDayProps> = (args: any) => <CreatedIssuesByDay {...args} />

export const Default = Template.bind({})
Default.args = {
  issues: []
}
