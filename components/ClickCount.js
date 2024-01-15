import { useCallback, useEffect, useState } from 'react'
import Button from './Button'

export default function ClickCount({ reset }) { // Pa8b9
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount((v) => v + 1)
  }, [setCount])

  useEffect(() => { // Pa8b9
    if (reset > 0) {
      setCount(0)
    }
  }, [reset, setCount])

  return <Button onClick={increment}>Clicks: {count}</Button>
}
