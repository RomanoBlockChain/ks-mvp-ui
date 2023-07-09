import Link from 'next/link'

type Props = {
  data: Array<{
    title: string
    url?: string
  }>
}

export default function Breadcrumb({ data }: Props) {
  return (
    <div className="bg-gray-100 py-2">
      <div className="container mx-auto">
        <ul className="flex gap-x-2 text-sm sm:text-base">
          {data.map((item) =>
            item.url ? (
              <li className="text-gray-400" key={item.title}>
                {<Link href={item.url}>{item.title}</Link>}
              </li>
            ) : (
              <li
                key={item.title}
                className="before:inline-block before:content-['/'] before:mr-2"
              >
                {item.title}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  )
}
