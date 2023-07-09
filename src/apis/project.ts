import { instance } from '.'

export type BidBody = {
  projectId: string
  bidID?: string
  title: string
  coverLetter: string
  fileUpload?: string[]
  unit: string
  amount: string
  bugdetype: string
  timeRevise: string
  additional: string
  status?: string
}

export type ProjectBody = {
  projectID?: string
  projectTitle: string
  userid: string
  priority: string
  description: string
  fileUpload: any
  category: string
  skill: [
    {
      skillId: string
      title: string
    }
  ]
  level: string
  typeTimeline: string
  timeline: string
  unit: string
  budgetType: string
  amount: string
  status?: string
  bidID?: string
  selectedBid?: string
  bids?: BidBody[]
}

export const ProjectApi = {
  postProject(project: any) {
    return instance.post('/api/User/PostProject', project, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
  getDetail(projectId: string) {
    return instance.get(`/api/User/ProjectDetail?projectId=${projectId}`)
  },
  approveBid(projectId: string, bidId: string) {
    return instance.get(
      `/api/User/ApproveBid?projectId=${projectId}&bidId=${bidId}`
    )
  },
}
