import { v4 as uuidv4 } from 'uuid'

import ReloadIcon from '@/icons/reload-icon'
import UploadIcon from '@/icons/upload-icon'
import clsx from 'clsx'
import { useRef } from 'react'
import Button from '../forms/button'
type UploadFilePropsType = {
  file: any
  onChange: (value: any[]) => void
  limit?: number
}

const UploadButton = ({ file, onChange, limit }: UploadFilePropsType) => {
  const handleFileUpload = async (event: any) => {
    const file = event.target.files[0]
    onChange(file)
  }

  const handleButtonClick = () => {
    inputFileRef.current.click()
  }

  const inputFileRef = useRef(null as any)
  return (
    <div className='w-full flex justify-end'>
      <div>
        <div
          onClick={handleButtonClick}
          key={uuidv4()}
          className={clsx(
            !file ? 'hidden' : '',
            'flex items-center justify-end break-all'
          )}
        >
          <div className='text-sm'>{file?.name}</div>
          <ReloadIcon className='ml-5'/>
          <input
            ref={inputFileRef}
            id='file-upload'
            hidden
            type='file'
            accept='.doc,.docx,.pdf'
            onChange={handleFileUpload}
            multiple
          />
        </div>
      </div>
      <Button
        onClick={handleButtonClick}
        className={clsx(
          'bg-[#E6EAF8] w-[150px] text-[#022DB0]  h-[44px] text-sm rounded-full flex items-center',
          file ? 'hidden' : ''
        )}
        size='large'
        rounded='default'
        variant='outline'
        type='button'
      >
        <UploadIcon className='w-[20px] h-[20px]  inline-block mr-1 mb-1' />{' '}
        Upload
      </Button>
      <input
        ref={inputFileRef}
        id='file-upload'
        hidden
        type='file'
        accept='.doc,.docx,.pdf'
        onChange={handleFileUpload}
        multiple
      />
    </div>
  )
}

export default UploadButton
