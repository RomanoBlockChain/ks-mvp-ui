import { instance } from '.'
import { BidBody } from './project'

export const BidApi = {
  postBid(bid: BidBody) {
    return instance.post('/api/User/PostBid', bid)
  },
}
