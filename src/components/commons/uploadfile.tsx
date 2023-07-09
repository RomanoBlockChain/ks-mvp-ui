import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import DeleteIcon from '@/icons/delete-icon'
import EditIcon from '@/icons/edit-icon'
import LinkIcon from '@/icons/link-icon'
import UploadFileIcon from '@/icons/up-file-icon'
import clsx from 'clsx'

type UploadFilePropsType = {
  files: any[]
  onChange: (value: any[]) => void
  limit?: number
}

const UploadFile = ({ files = [], onChange, limit }: UploadFilePropsType) => {
  const handleFileUpload = async (event: any) => {
    const file = event.target.files[0]
    onChange([...files, file])
  }

  const onRemove = (idx: number) => {
    onChange([...files?.filter((item) => files.indexOf(item) !== idx)])
  }

  const onEdit = (event: any, idx: number) => {
    const file = event.target.files[0]
    onChange([
      ...files?.map((item) => {
        if (files.indexOf(item) === idx) {
          return file
        }
        return item
      }),
    ])
  }

  return (
    <div className="w-full ">
      <div>
        {files.length > 0
          ? files?.map((item, idx) => (
              <div
                key={uuidv4()}
                className="flex items-center justify-between p-[15px] border-[1.5px] rounded border-[#022DB0] mb-[20px]"
              >
                <div className="flex gap-4 items-center">
                  <LinkIcon />
                  <div>{item?.name}</div>
                </div>
                <div className="flex items-center gap-4">
                  <label className="cursor-pointer">
                    <EditIcon />
                    <input
                      hidden
                      type="file"
                      accept=".doc,.docx,.pdf"
                      onChange={(e) => onEdit(e, idx)}
                    />
                  </label>
                  <DeleteIcon
                    onClick={() => onRemove(idx)}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            ))
          : ''}
      </div>
      <label
        className={clsx(
          files.length === limit
            ? 'hidden'
            : 'flex items-center gap-2 cursor-pointer justify-center bg-[#E6EAF8] rounded border-[1.5px] border-dashed border-[#022DB0]'
        )}
      >
        <UploadFileIcon />
        <div className="text-[ #0D0434] text-sm p-[15px] ">Attachment</div>
        <input
          hidden
          type="file"
          accept=".doc,.docx,.pdf"
          onChange={handleFileUpload}
          multiple
        />
      </label>
    </div>
  )
}

export default UploadFile
