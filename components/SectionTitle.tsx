type SectionTitleProps = {
  children: React.ReactNode
  className?: string
}

export default function SectionTitle({
  children,
  className = '',
}: SectionTitleProps) {
  return (
    <h2
      className={`break-words font-alfarn text-2xl uppercase leading-tight md:text-3xl lg:text-4xl ${className}`.trim()}
    >
      {children}
    </h2>
  )
}
