import React, { ReactNode } from 'react'
import Head from 'next/head'

import { siteSettingType } from '@/types/site-settings'
import Layout from './Layout'

type Props = {
  siteSettings: siteSettingType
  children: ReactNode
}

export default function HomeLayout({ siteSettings, children }: Props) {
  const { seo } = siteSettings

  return (
    <>
      <Head>
        <link rel="icon" href={seo.favicon ?? '/favicon.ico'} />
        <meta property="og:image" content={seo.ogImage || ''} />
        <meta
          name="keywords"
          content={(Array.isArray(seo.keywords)
            ? seo.keywords
            : [seo.keywords]
          ).join(',')}
        />
      </Head>

      <Layout>{children}</Layout>
    </>
  )
}
