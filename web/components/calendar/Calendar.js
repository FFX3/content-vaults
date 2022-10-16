import React from "react"
import styles from "./calendar.module.css"

export default function Calendar({ currentMonth, currentYear, schedualedItems }){
  currentMonth = 1
  currentYear = 2022

  schedualedItems = {
    "2022-02-07": <h1>It's Justin's birth day!</h1>
  }
  
  const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const firstOfTheMonth = new Date(currentYear, currentMonth, 1)
  const firstOfTheMonthWeekDay = firstOfTheMonth.toLocaleString(
    'default', {weekday: 'long'}
  );
  const dateOfSet = daysOfTheWeek.indexOf(firstOfTheMonthWeekDay)
  const currentDateIteration = new Date(currentYear, currentMonth, 1)
  currentDateIteration.setDate(firstOfTheMonth.getDate() - dateOfSet)

  return (
    <div>
      <h1>{month[currentMonth]}</h1>
      <div className={styles.calendar}>
          {(()=>{
            return daysOfTheWeek.map((day)=>{
              return (
                <div key={`calender-header-${day}`} style={{gridColumnStart: day, gridRowStart: 'header'}} className={styles.cell}>{ day }</div>
              )
            })
          })()}
          {(() => {
            return [...Array(7).keys()].slice(1)
              .flatMap((lineCount)=>{
                return daysOfTheWeek.map((dayOfTheWeek)=>{
                  const html = <div 
                  style={{
                    gridColumnStart: dayOfTheWeek,
                    gridRowStart: 'row-' + lineCount
                  }} 
                  key={`${lineCount}-${dayOfTheWeek}`}
                  className={styles.cell}
                  >
                    {currentDateIteration.toLocaleDateString()}
                    {schedualedItems[currentDateIteration.toLocaleDateString()]}
                  </div>
                  {currentDateIteration.setDate(currentDateIteration.getDate() + 1)}
                  return html
                })
              })
          })()}
      </div>
    </div>
  )
}