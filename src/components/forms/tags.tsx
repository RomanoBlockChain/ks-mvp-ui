import React, { ChangeEvent, useEffect } from 'react'

import ExitIcon from '@/icons/exit-icon'

type TagsPropsType = {
  tags: string[]
  onChange: (value: string[]) => void
}

const Tags = ({ onChange, tags }: TagsPropsType) => {
  const addTags = (event: any) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      onChange([...tags, event.target.value])
      event.target.value = ''
    }
  }

  useEffect(() => {
    onChange(tags)
  }, [onChange, tags])

  const removeTags = (index: number) => {
    onChange([...tags.filter((tag) => tags.indexOf(tag) !== index)])
  }
  return (
    <div className="border-[1.5px] flex gap-2 rounded w-full  border-[#022DB0] p-[10px]">
      <div
        className={
          !!tags?.length
            ? 'text-[#0D0434] text-sm font-normal'
            : 'text-[#B6B6B6] text-sm font-normal'
        }
      >
        Skill
      </div>
      <div>
        <ul className="flex  flex-wrap gap-3 mb-2">
          {tags?.map((tag, index) => (
            <li
              key={index}
              className="flex gap-1 items-center bg-[#E6EAF8] rounded-full py-2 px-3"
            >
              <span className="text-[#022DB0] font-medium text-xs">{tag}</span>
              <div className="cursor-pointer" onClick={() => removeTags(index)}>
                <ExitIcon />
              </div>
            </li>
          ))}
        </ul>
        <input type="text" className="outline-none" onKeyUp={addTags} />
      </div>
    </div>
  )
}

export default Tags
