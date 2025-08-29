export default function ImageCompare({ leftSrc, rightSrc, leftCaption, rightCaption }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <figure>
        <img src={leftSrc} alt={leftCaption} className="w-full object-cover" />
        <figcaption className="text-sm text-gray-600 mt-1">{leftCaption}</figcaption>
      </figure>
      <figure>
        <img src={rightSrc} alt={rightCaption} className="w-full object-cover" />
        <figcaption className="text-sm text-gray-600 mt-1">{rightCaption}</figcaption>
      </figure>
    </div>
  )
}
