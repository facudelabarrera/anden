export default function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="relative flex h-4 w-5">
        <span className="absolute inset-0 rounded-sm bg-orange-brand" />
        <span className="absolute left-1/2 top-1/2 h-3 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-brown-dark" />
      </span>
      <span className="font-sans text-sm uppercase text-brown-dark">
        {text}
      </span>
    </div>
  )
}
