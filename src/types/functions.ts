import {
  Selection,
  BaseType
} from 'd3'

export type RenderFunc = (selection: Selection<BaseType, void, null, undefined>) => void
export type SelectedNode = Selection<BaseType, void, null, undefined>
