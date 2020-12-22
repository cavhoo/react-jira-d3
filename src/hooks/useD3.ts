import {
  useRef,
  useEffect
} from 'react'

import {
  select,
  BaseType
} from 'd3'
import {
  RenderFunc
} from '../types'

export const useD3 = <T>(renderFunction: RenderFunc, deps: any[]) => {
  const ref = useRef<T>()

  useEffect(() => {
    if (ref.current) {
      renderFunction(select(ref.current as any as BaseType))
    }
  }, deps)

  return ref
}
