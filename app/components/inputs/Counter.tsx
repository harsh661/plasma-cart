import { useState } from "react"
import {IoMdAdd, IoMdRemove} from "react-icons/io"

const Counter = () => {
  const [count, setCount] = useState<number>(1)

  const handleChange = (change: string) => {
    if(change === 'increment') {
      setCount(prev => prev + 1)
    }
    if(change === 'decrement') {
      if(count <= 1) return
      setCount(prev => prev - 1)
    }
  } 

  return (
    <div className="flex items-center bg-light-gray/50 justify-between w-max rounded-full overflow-hidden">
      <div className="py-2 px-4 cursor-pointer" onClick={() => handleChange('decrement')}>
        <IoMdRemove />
      </div>
      <div className="p-2 w-10 text-center">{count}</div>
      <div className="py-2 px-4 cursor-pointer" onClick={() => handleChange('increment')}>
        <IoMdAdd />
      </div>
    </div>
  )
}

export default Counter
