interface InputButtonProps {
  fill?: boolean
  label: string
  onClick: () => void
}
const InputButton: React.FC<InputButtonProps> = ({ fill, label, onClick }) => {
  return (
    <div
      className={`py-2 px-5 cursor-pointer font-bold border-2 border-accent rounded-full w-full flex items-center justify-center ${
        fill ? "bg-accent text-white" : "text-accent"
      }`}
    >
      {label}
    </div>
  )
}

export default InputButton
