"use client"

import { reservationData } from "@/data"
import { useState } from "react"
import DatePicker from "react-datepicker"
import TimePicker from "react-time-picker"

import "react-datepicker/dist/react-datepicker.css"
import "react-time-picker/dist/TimePicker.css"
import "react-clock/dist/Clock.css"
import { FaCalendar, FaClock, FaUsers } from "react-icons/fa"

export const Reservation = () => {
  const { title, subtitle, btnText, modelImg } = reservationData

  const [startDate, setStartDate] = useState(new Date())
  const [startTime, setStartTime] = useState("11:00")
  const [people, setPeople] = useState(1)

  return (
    <section className="relative z-50 pb-20 lg:py-[100px]">
      <div className="container mx-auto">
        <div>text</div>
        <form className="flex flex-col gap-8">
          <div className="flex flex-col items-center justify-between gap-y-4 lg:flex-row">
            <div className="flex flex-col items-start gap-3">
              <div className="flex items-center gap-x-[10px] text-base font-semibold">
                <FaCalendar />
                <div>Choose Date</div>
              </div>
              <div>
                <DatePicker
                  className="input"
                  selected={startDate}
                  onChange={(date) => date && setStartDate(date)}
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-3">
              <div className="flex items-center gap-x-[10px] text-base font-semibold">
                <FaClock />
                <div>Choose Time</div>
              </div>
              <TimePicker
                format="HH:mm"
                className="input bg-white"
                clockIcon={false}
                clearIcon={false}
                value={startTime}
                onChange={(time) => time && setStartTime(time)}
              />
            </div>

            <div className="flex flex-col items-start gap-3">
              <div className="flex items-center gap-x-[10px] text-base font-semibold">
                <FaUsers />
                <div>How many people?</div>
              </div>
              <input
                className="input bg-white"
                type="text"
                value={people}
                onChange={(people) => setPeople(Number(people))}
              />
            </div>
          </div>

          <div className="mx-auto flex max-w-[316px] justify-center">
            <button className="btn w-full capitalize lg:w-auto">
              {btnText}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
