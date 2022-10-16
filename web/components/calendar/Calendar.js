import React from "react"
import styles from "./calendar.module.css"

export default function Calendar(){
  const currentMonth = 2
  
  const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date()
  const firstOfTheMonth = new Date(d.getFullYear(), currentMonth, 1)
  const firstOfTheMonthWeekDay = firstOfTheMonth.toLocaleString(
    'default', {weekday: 'long'}
  );
  const dateOfSet = daysOfTheWeek.indexOf(firstOfTheMonthWeekDay)
  const currentDateIteration = new Date(d.getFullYear(), currentMonth, 1)
  currentDateIteration.setDate(firstOfTheMonth.getDate() - dateOfSet)

  console.log(firstOfTheMonth, currentDateIteration)

  
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
                  >{currentDateIteration.toLocaleDateString()}</div>
                  {currentDateIteration.setDate(currentDateIteration.getDate() + 1)}
                  return html
                })
              })
          })()}
      </div>
    </div>
  )
}