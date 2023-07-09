import { ModalContext } from '@/hooks/use-modal-context'
import React, { ReactNode, useState } from 'react'

type AppProviderProps = {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [openDetailProject, setOpenDetailProject] = useState<boolean>(false)
  const [openBind, setOpenBind] = useState<boolean>(false)
  const [openDeposit, setOpenDeposit] = useState<boolean>(false)
  const [openSubmissionFile, setOpenSubmissionFile] = useState<boolean>(false)
  const [openEditProject, setOpenEditProject] = useState<boolean>(false)
  const [openEditBid, setOpenEditBid] = useState<boolean>(false)

  return (
    <ModalContext.Provider
      value={{
        openEditBid,
        setOpenEditBid,
        openEditProject,
        setOpenEditProject,
        open,
        setOpen,
        openDetailProject,
        setOpenDetailProject,
        openBind,
        setOpenBind,
        openDeposit,
        setOpenDeposit,
        setOpenSubmissionFile,
        openSubmissionFile,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default AppProvider
