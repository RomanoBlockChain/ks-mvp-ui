import React from 'react'

import dynamic from 'next/dynamic'
import Layout from '@/layouts/Layout'

const ProjectDetailModule = dynamic(
  () => {
    return import('@/modules/project')
  },
  { ssr: false }
)

const ProjectDetailPage = () => {
  return (
    <Layout>
      <ProjectDetailModule />
    </Layout>
  )
}

export default ProjectDetailPage
