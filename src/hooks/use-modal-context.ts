import { createContext, useContext } from 'react'

type DEFAULT_CONTEXT_TYPE = {
  open: boolean
  setOpen: (open: boolean) => void
  openDetailProject: boolean
  setOpenDetailProject: (open: boolean) => void
  openBind: boolean
  setOpenBind: (open: boolean) => void
  openDeposit: boolean
  setOpenDeposit: (open: boolean) => void
  openSubmissionFile: boolean
  setOpenSubmissionFile: (open: boolean) => void
  openEditProject: boolean
  setOpenEditProject: (open: boolean) => void
  openEditBid: boolean
  setOpenEditBid: (open: boolean) => void
}

const DEFAULT_CONTEXT: DEFAULT_CONTEXT_TYPE = {
  open: false,
  setOpen: () => {},
  openDetailProject: false,
  setOpenDetailProject: () => {},
  openBind: false,
  setOpenBind: () => {},
  openDeposit: false,
  setOpenDeposit: () => {},
  openSubmissionFile: false,
  setOpenSubmissionFile: () => {},
  openEditProject: false,
  setOpenEditProject: () => {},
  openEditBid: false,
  setOpenEditBid: () => {},
}

export const ModalContext = createContext<DEFAULT_CONTEXT_TYPE>(DEFAULT_CONTEXT)

export function useModalContext(): DEFAULT_CONTEXT_TYPE {
  return useContext(ModalContext)
}
