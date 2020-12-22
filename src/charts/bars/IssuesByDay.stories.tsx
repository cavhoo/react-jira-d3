import React from 'react'
import { Story, Meta } from '@storybook/react'

import IssuesByDay, {IssuesByDayProps} from './IssuesByDay'

export default {
  title: 'Barcharts/Issues by day',
  component: IssuesByDay,
  argTypes: {}
} as Meta


const Template: Story<IssuesByDayProps> = (args: any) => <IssuesByDay {...args} />

export const Default = Template.bind({})
Default.args = {
  data: [
    {day: '2020-10-01', amount: Math.floor(Math.random() * 100)},
    {day: '2020-10-02', amount: Math.floor(Math.random() * 100)},
    {day: '2020-10-03', amount: Math.floor(Math.random() * 100)},
    {day: '2020-10-04', amount: Math.floor(Math.random() * 100)},
    {day: '2020-10-05', amount: Math.floor(Math.random() * 100)},
  ]
}
