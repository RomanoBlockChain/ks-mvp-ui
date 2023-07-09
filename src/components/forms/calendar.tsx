import CalendarIcon from '@/icons/calendar-icon'
import React from 'react'

interface IInputProps extends React.HTMLProps<HTMLInputElement> {}

const Calendar = ({ placeholder, ...rest }: IInputProps) => {
  return (
    <div>
      <div className="sd-container border-[1.5px] rounded border-[#022DB0] p-[15px]">
        <input
          className="sd outline-none placeholder:text-[#B6B6B6] text-sm"
          type="date"
          placeholder={placeholder}
          {...rest}
        />
        <span className="open-button">
          <button type="button">
            <CalendarIcon />
          </button>
        </span>
      </div>
    </div>
  )
}

export default Calendar
