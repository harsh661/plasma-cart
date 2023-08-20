import { useState } from "react"
import {IoMdAdd, IoMdRemove} from "react-icons/io"

const Counter = () => {
  const [count, setCount] = useState<number>(1)
  return (
    <div className="flex items-center bg-light-gray/50 justify-between w-max rounded-full overflow-hidden">
      <div className="py-2 px-4 cursor-pointer" onClick={() => setCount((prev) => prev - 1)}>
        <IoMdRemove />
      </div>
      <div className="p-2 w-10 text-center">{count}</div>
      <div className="py-2 px-4 cursor-pointer" onClick={() => setCount((prev) => prev + 1)}>
        <IoMdAdd />
      </div>
    </div>
  )
}

export default Counter
