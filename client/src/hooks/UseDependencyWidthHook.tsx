import React from 'react'
import { useGlobalStore } from '@store/global'

export const UseDependencyWidthHook = () => {
    const flexRef = React.useRef<HTMLDivElement | null>(null)
    const setWidth = useGlobalStore((state) => state.setWidth)
    React.useEffect(() => {
      const updateWidth = () => {
        if (flexRef.current) {
          setWidth(flexRef.current.offsetWidth)
        }
      }

      updateWidth()
      const resizeObserver = new ResizeObserver(updateWidth)
      if (flexRef.current) {
        resizeObserver.observe(flexRef.current)
      }
      return () => {
        if (flexRef.current) {
          resizeObserver.unobserve(flexRef.current)
        }
      }
    }, [setWidth])
    return { flexRef }
};
