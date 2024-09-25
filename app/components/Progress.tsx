import React, { ReactNode } from "react"

interface Props {
  value: number
  ariaLabel: string
}

const Progress = ({ value, ariaLabel }: Props) => {
  return (
    <div
      className="w-full rounded-full bg-gray-200 h-2"
      aria-label={ariaLabel}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={`bg-blue-400 h-2 rounded-full`}
        style={{
          width: `${value}%`,
        }}
      ></div>
    </div>
  )
}

export default Progress
