type Props = {
  error?: Error | string
}

export default function FormError({ error }: Props) {
  const style = 'text-sm leading-5 font-normal text-red-500'

  if (!error) return null

  if (error instanceof Error) {
    return <p className={style}>{error.message}</p>
  }

  if (error.trim().length === 0) {
    return null
  }

  return <p className={style}>{error}</p>
}
