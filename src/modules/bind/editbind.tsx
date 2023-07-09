import UploadFile from '@/components/commons/uploadfile'
import Input from '@/components/forms/input'
import Select from '@/components/forms/select'
import Textarea from '@/components/forms/textarea'
import React, { useState } from 'react'
import { type, unit } from './constants'
import Button from '@/components/forms/button'
import ModalSuccess from '@/components/commons/modalsuccess'
import { useModalContext } from '@/hooks/use-modal-context'

const EditBind = () => {
  const [files, setFile] = useState<any[]>([])
  const [openMessage, setOpenMessage] = useState<boolean>(false)
  const { setOpenEditBid } = useModalContext()

  const handleFile = (files: any) => {
    setFile([...files])
  }

  const onSelect = () => {}

  const onSend = () => {
    setOpenEditBid(false)
    setOpenMessage(true)
  }

  return (
    <div className="grid grid-cols-2 gap-10 p-[50px]">
      <div>
        <div className="text-[#022DB0] mb-[20px] font-medium text-[20px] leading-[30px]">
          Bid information
        </div>
        <div>
          <div className="mb-[20px]">
            <Input
              placeholder="Title"
              defaultValue="Venom logo design proposal"
            />
          </div>
          <div className="mb-[20px]">
            <Textarea
              placeholder="Cover leter"
              rows={5}
              defaultValue="Build the website for an angel investment company. Scope includes Website design. I will provide the content, logo etc"
            />
          </div>
          <div className="mb-[20px]">
            <UploadFile files={files} onChange={handleFile} />
          </div>
        </div>
      </div>
      <div>
        <div className="text-[#022DB0] mb-[35px] font-medium text-[20px] leading-[30px]">
          Price
        </div>
        <div className="grid grid-cols-3 gap-5 mb-[50px]">
          <Select
            options={type}
            selected={type[0]}
            placeholder="Type"
            onChange={onSelect}
          />
          <Input placeholder="Amount" />
          <Select
            options={unit}
            selected={unit[0]}
            placeholder="Unit"
            onChange={onSelect}
          />
        </div>
        <div>
          <div className="text-[#022DB0] mb-[20px] font-medium text-[20px] leading-[30px]">
            Revise
          </div>
          <div className="mb-[20px]">
            <Input placeholder="Times" defaultValue="03" />
          </div>
          <div className="mb-[20px]">
            <Input placeholder="Additional" defaultValue="$300" />
          </div>
        </div>
        <div className="flex justify-end" onClick={onSend}>
          <Button rounded="default" className="h-[56px] w-[282px]">
            Update
          </Button>
        </div>
      </div>
      <ModalSuccess
        active="update"
        isOpen={openMessage}
        onClose={() => setOpenMessage(false)}
        title="Update bid successfully!"
      />
    </div>
  )
}

export default EditBind
