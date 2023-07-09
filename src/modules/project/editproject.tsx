import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Input from '@/components/forms/input'
import Checkbox from '@/components/forms/checkbox'
import InformationIcon from '@/icons/information-icon'
import Textarea from '@/components/forms/textarea'
import Select from '@/components/forms/select'
import Tags from '@/components/forms/tags'
import UploadFile from '@/components/commons/uploadfile'
import Radio from '@/components/forms/radio'
import { timeline } from './constants'
import Calendar from '@/components/forms/calendar'
import Button from '@/components/forms/button'
import ModalSuccess from '@/components/commons/modalsuccess'
import { useModalContext } from '@/hooks/use-modal-context'

const people = [
  { name: 'Wade Cooper', value: '' },
  { name: 'Arlene Mccoy', value: '' },
  { name: 'Devon Webb', value: '' },
  { name: 'Tom Cook', value: '' },
  { name: 'Tanya Fox', value: '' },
  { name: 'Hellen Schmidt', value: '' },
]

const EditProject = () => {
  const [files, setFiles] = useState<any[]>([])
  const [checked, setChecked] = useState<any[]>(timeline)
  const [openSuccess, setOpenSuccess] = useState<boolean>(false)
  const { setOpenEditProject } = useModalContext()
  const [tags, setTags] = useState<string[]>([
    'Design',
    'Illustration',
    '3D',
    'AutoCad',
    'Canva',
    'Figma',
  ])

  const onChangeDropdown = () => {}
  const onSelect = () => {}

  const onTags = () => {}

  const handleFiles = (files: any[]) => {
    setFiles(files)
  }
  const onHandleChecked = (check: boolean, idx: number) => {
    const find = checked.map((item) => {
      console.log(checked.indexOf(item) === idx)

      if (checked.indexOf(item) === idx) {
        return { ...item, checked: check }
      }
      return item
    })
    setChecked(find)
  }

  const onPost = () => {
    setOpenSuccess(true)
    setOpenEditProject(false)
  }

  return (
    <div className="overflow-y-auto h-[650px]">
      <div className="px-[50px] grid grid-cols-1 lg:grid-cols-2 gap-[50px] ">
        <div>
          <div className="text-[#022DB0] font-medium text-[20px] leading-[30px]">
            Brief
          </div>
          <div className="mb-[20px]">
            <Input
              placeholder="Project tittle"
              id="project_tittle"
              defaultValue="Graphics & Icons for simpleshow videos & PowerPoint"
            />
          </div>
          <div>
            <div className="mb-1">
              <Checkbox
                onChange={() => {}}
                title="Post a as prioritize project"
                checked={true}
              />
            </div>
            <div className="flex gap-1 items-center">
              <InformationIcon />
              <div className="text-[#0D0434] text-[10px] leading-5 font-normal">
                Prioritize project is bla bla bla bla bla bla bla bla, expense
              </div>
            </div>
          </div>
          <div className="mb-[20px]">
            <Textarea
              placeholder="Description"
              id="description"
              rows={8}
              defaultValue="Hi, we are looking for graphics to use for Simpleshow videos & PowerPoints among others.The graphics should illustrate the following themes:
- Roof/house with PV system & once the house with scaffolding and an advertising banner with our logo.
- PV module- inverter
- PV The graphics should be based on the style of Simpleshow. Ideally, however, it can also be used as a PowerPoint icon at the same time."
            />
          </div>
          <div className="mb-[20px]">
            <Select
              options={people}
              selected={people[0]}
              placeholder="Category"
              onChange={onSelect}
            />
          </div>
          <div className="mb-[20px]">
            <Tags onChange={onTags} tags={tags} />
          </div>
          <div className="mb-[20px]">
            <Select
              options={people}
              selected={people[0]}
              placeholder="Level"
              onChange={onSelect}
            />
          </div>
          <div>
            <UploadFile files={files} onChange={handleFiles} />
          </div>
        </div>
        <div>
          <div className="text-[#022DB0] font-medium text-[20px] leading-[30px] mb-[20px]">
            Timeline
          </div>
          <div className="grid grid-cols-2">
            <div>
              {checked?.map((item, idx) => {
                return (
                  <div key={uuidv4()} className="mb-[42px]">
                    <Radio
                      checked={item?.checked}
                      onChange={(checked) => onHandleChecked(checked, idx)}
                      title={item?.name}
                    />
                  </div>
                )
              })}
            </div>
            <div>
              <div className="mt-[-25px] mb-[20px]">
                <Input placeholder="Input duration" id="input_duration" />
              </div>
              <Calendar />
            </div>
          </div>
          <div>
            <div className="text-[#022DB0] font-medium text-[20px] leading-[30px] mb-[20px]">
              Budget
            </div>
            <div className="grid grid-cols-3 gap-5">
              <Select
                options={people}
                selected={people[0]}
                placeholder="Type"
                onChange={onSelect}
              />
              <Select
                options={people}
                selected={people[0]}
                placeholder="Amount"
                onChange={onSelect}
              />
              <Select
                options={people}
                selected={people[0]}
                placeholder="Unit"
                onChange={onSelect}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end px-[50px] mb-[50px]" onClick={onPost}>
        <Button rounded="default" className="w-[282px] h-[56px]">
          Update
        </Button>
      </div>
      <ModalSuccess
        active="update"
        title="Update project successfully!"
        isOpen={openSuccess}
        onClose={() => setOpenSuccess(false)}
      />
    </div>
  )
}

export default EditProject
