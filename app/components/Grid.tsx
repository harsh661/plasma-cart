interface GridProps {
  children: React.ReactNode
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className="overflow-x-auto w-full">
      <div className="flex gap-5">{children}</div>
    </div>
  )
}

export default Grid
