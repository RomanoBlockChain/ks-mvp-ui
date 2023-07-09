import { instance } from '.'

export type Register = {
  createdDate?: string
  lastModifitedDate?: string
  userId?: string
  username?: string
  password?: string
  avatar?: string
  email?: string
  facebook?: string
  gmail?: string
  typeUser?: string
  status?: string
  wallet?: [
    {
      walletID?: string
      balanceBNB?: string
      balanceUSDT?: string
      balanceBUSD?: string
      balanceKS?: string
    }
  ]
  profile?: [
    {
      profileID?: string
      typeProfile?: string
      firstName?: string
      lastName?: string
      phone?: string
      language?: string
      levelLanguage?: string
      nation?: string
      city?: string
      email?: string
      ocupation?: string
      description?: string
      experience?: string
      education?: string
      major?: string
      certificate?: string
      certificateOrigin?: string
      addresWallet?: string | undefined
      earned?: string
      projectDone?: string
      ratingBuyer?: string
      rateDoneProjectSeller?: string
      fileupload?: any
      avatar?: string
      createdDate?: string
      rateDoneBuyer?: string
      totalComon?: string
    }
  ]
  project?: [
    {
      projectID?: string
      projectTitle?: string
      userid?: string
      priority?: string
      description?: string
      fileUpload?: string
      category?: string
      skill?: [
        {
          skillId?: string
          title?: string
        }
      ]
      level?: string
      typeTimeline?: string
      timeline?: string
      unit?: string
      budgetType?: string
      amount?: string
      status?: string
      bidID?: string
      selectedBid?: string
      bids?: [
        {
          bidID?: string
          title?: string
          coverLetter?: string
          fileUpload?: string
          unit?: string
          amount?: string
          bugdetype?: string
          timeRevise?: string
          additional?: string
          status?: string
        }
      ]
    }
  ]
}

export const RegisterAPI = {
  getOTP (email: string) {
    return instance.post(`/GetOtp?email=${email}`)
  },
  register (user: any) {
    return instance.post(`api/User/UpdateProfile`, user, {
      // headers: {
      //   'Content-Type': 'multipart/form-data', // do not forget this
      // },
    })
  },
}
