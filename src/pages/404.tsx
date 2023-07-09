import { withSEOTitle } from '@/utils/with-seo-title'
import Head from 'next/head'
import Link from 'next/link'

export default function SiteNotFound() {
  return (
    <>
      <Head>
        <title>{withSEOTitle('Not found')}</title>
      </Head>
      <main className="w-screen h-screen flex flex-col gap-3 justify-center items-center bg-slate-900">
        <h1 className="text-slate-600 text-2xl uppercase">Not found</h1>
        <Link className="text-lg text-slate-50" href="/">
          Back to home page
        </Link>
      </main>
    </>
  )
}
