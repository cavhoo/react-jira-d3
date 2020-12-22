import React from 'react'
import * as d3 from 'd3'

import {useD3} from '../../hooks/useD3'
import { SelectedNode } from '../../types'

const renderGraph = (data: {day:string, amount:number}[]) => (svg: SelectedNode) => {
  const height = 500
  const width = 500
  const margin = { top: 20, right: 30, bottom: 30, left: 40 }

  const x = d3.scaleBand()
        .domain(data.map((d) => d.day))
        .rangeRound([margin.left, width - margin.right])
        .padding(.1)

  const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d:{day: string, amount: number}) => d.amount) ?? 0])
        .rangeRound([height - margin.bottom, margin.top])

  const xAxis = (g: any) =>
        g.attr('transform', `translate(0, ${height - margin.bottom})`).call(
          d3
            .axisBottom(x)
            .tickValues(x.domain())
        )

  const yAxis = (g: any) =>
        g
        .attr('transform', `translate(${margin.left}, 0)`)
        .style('color', 'steelblue')
        .call(d3.axisLeft(y).ticks(null, 's'))
        .call((g: any) => g.select('.domain').remove())
        .call((g: any) =>
          g.append('text')
           .attr('x', -margin.left)
           .attr('y', 10)
           .attr('fill', 'currentColor')
           .attr('text-anchor', 'start')
           .text(y)
        )

  svg.select('.x-axis').call(xAxis)
  svg.select('.y-axis').call(yAxis)

  svg
    .select('.plot-area')
    .attr('fill', 'steelblue')
    .selectAll('.bar')
    .data(data)
    .join('rect')
    .attr('class', 'bar')
    .attr('x', (d) => x(d.day) )
    .attr('width', x.bandwidth())
    .attr('y', (d) => y(d.amount))
    .attr('height', (d) => y(0) - y(d.amount))
}

export interface IssuesByDayProps {
  data: {day: string, amount: number}[]
}

const IssuesByDay = ({data}:IssuesByDayProps) => {
  const ref = useD3<SVGSVGElement>(renderGraph(data), [data.length])
  return (
    <svg
      ref={ref as any}
      style={{
        height: 500,
        width: '100%',
        marginRight: '0px',
        marginLeft: '0px'
      }}
    >
      <g className='plot-area'/>
      <g className='x-axis'/>
      <g className='y-axis'/>
    </svg>
  )
}


export default IssuesByDay
