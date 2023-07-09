import { instance } from '.'

export const signupAPI = ({ email, password, username }: any) => {
  return instance.post('/Register', {
    username: email,
    password,
    email,
    avatar: '',
    facebook: '',
    gmail: '',
    typeUser: '',
    status: '',
    token: '',
  })
}

export const signinAPI = ({ email, password }: any) => {
  return instance.post(`/Login?email=${email}&password=${password}`, {})
}

export const getProfileAPI = () => {
  return instance.get(`/api/User/GetProfile`)
}
type BidType = {
  bidID: string
  title: string
  coverLetter: string
  fileUpload: string
  unit: string
  amount: string
  bugdetype: string
  timeRevise: string
  additional: string
  status: string
}

type ProjectType = {
  projectID: string
  projectTitle: string
  userid: string
  priority: string
  description: string
  fileUpload: string
  category: string
  skill: string
  level: string
  typeTimeline: string
  timeline: string
  unit: string
  budgetType: string
  amount: string
  status: string
  bidID: string
  selectedBid: string
  bids: BidType[]
}

type WalletType = {
  walletID: string
  balanceBNB: string
  balanceUSDT: string
  balanceBUSD: string
  balanceKS: string
}

type ProfileType = {
  phone: string
  language: string
  levelLanguage: string
  nation: string
  city: string
  email: string
  ocupation: string
  profileID: string
  typeProfile: string
  firstName: string
  lastName: string
  description: string
  experience: string
  education: string
  major: string
  certificate: string
  certificateOrigin: string
  addresWallet: string
  earned: string
  projectDone: string
  ratingBuyer: string
  rateDoneProjectSeller: string
  fileupload: string
  avatar: string
  createdDate: string
  rateDoneBuyer: string
  totalComon: string
}

type DataUserBodyType = {
  createdDate: string
  lastModifitedDate: string
  userId: string
  username: string
  password: string
  email: string
  facebook: string
  gmail: string
  typeUser: string
  status: string
  wallet: WalletType[]
  profile: ProfileType[]
  project: ProjectType[]
}

export const UserApi = {
  getProfile () {
    return instance.get('/api/User/GetProfile')
  },
  updateProfile (data: DataUserBodyType) {
    return instance.post('/api/User/UpdateProfile', data)
  },
}
