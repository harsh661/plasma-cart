interface HeadingProps {
    title: string
    subtitle?: string
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle
}) => {
  return (
    <div className="py-5">
    <div className="text-2xl font-semibold text-black">
        {title}
    </div>
    <p className="text-lg">{subtitle}</p>
    </div>
  )
}

export default Heading