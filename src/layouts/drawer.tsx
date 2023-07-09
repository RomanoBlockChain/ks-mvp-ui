import React from 'react'

import Modal from '@/components/commons/modal'
import { useModalContext } from '@/hooks/use-modal-context'
import PostProject from '@/modules/project/postproject'
import DetailProject from '@/modules/project/detailproject'
import PostBind from '@/modules/bind/postbind'
import FormSubmissionInformation from '@/modules/project/component/formsubmissioninformation'
import EditProject from '@/modules/project/editproject'
import EditBind from '@/modules/bind/editbind'

const Drawer = () => {
  const {
    open,
    setOpen,
    openDetailProject,
    setOpenDetailProject,
    openBind,
    setOpenBind,
    openSubmissionFile,
    setOpenSubmissionFile,
    openEditProject,
    setOpenEditProject,
    openEditBid,
    setOpenEditBid,
  } = useModalContext()

  return (
    <>
      <Modal
        header="Post a project"
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <PostProject />
      </Modal>
      <Modal
        header="Project detail"
        isOpen={openDetailProject}
        onClose={() => setOpenDetailProject(false)}
      >
        <DetailProject />
      </Modal>
      <Modal
        header="Bid submission information"
        isOpen={openBind}
        onClose={() => setOpenBind(false)}
      >
        <PostBind />
      </Modal>
      <Modal
        header="Submission information"
        isOpen={openSubmissionFile}
        onClose={() => setOpenSubmissionFile(false)}
      >
        <FormSubmissionInformation />
      </Modal>

      <Modal
        header="Edit Project"
        isOpen={openEditProject}
        onClose={() => setOpenEditProject(false)}
      >
        <EditProject />
      </Modal>
      <Modal
        header="Edit Bid"
        isOpen={openEditBid}
        onClose={() => setOpenEditBid(false)}
      >
        <EditBind />
      </Modal>
    </>
  )
}

export default Drawer
