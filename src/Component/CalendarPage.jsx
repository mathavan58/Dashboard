import { MdCalendarMonth } from "react-icons/md";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const CalendarPage = () => {

  //   const events = [
  //   {
  //     title: 'Sample Event',
  //     start: new Date(),
  //     end: new Date(),
  //   },
  // ]

  const events = [
    {
      title: 'Team Meeting',
      start: new Date(),
      end: new Date(new Date().getTime() + 2 * 60 * 60 * 1000), // 2 hours duration
    },
    {
      title: 'Project Review',
      start: new Date(new Date().setDate(new Date().getDate() + 2)), // 2 days from now
      end: new Date(new Date().setDate(new Date().getDate() + 2) + 3 * 60 * 60 * 1000), // 3 hours duration
    },
    {
      title: 'Sprint Planning',
      start: new Date(new Date().setDate(new Date().getDate() + 5)), // 5 days from now
      end: new Date(new Date().setDate(new Date().getDate() + 5) + 1.5 * 60 * 60 * 1000), // 1.5 hours duration
    }
  ];


  return (

        <div className="container-fluid p-3 pt-0">
            <div className="row">
               <div className="col-12">
                    <div className="calendar-box">
                        <div className="calendar-header border-bottom border-success d-flex align-items-center p-3">
                            <h5 className='calender-text fs-5 m-0 d-flex align-items-center gap-2 fw-semibold'>
                                <MdCalendarMonth className='svg-color'/>
                                Calendar
                            </h5>
                        </div>
                        <div className="calendar-wrapper p-3 pt-0 " style={{ height: '39vh' }}>
                            <Calendar
                                localizer={localizer}
                                events={events}
                                startAccessor="start"
                                endAccessor="end"
                                // style={{ height: 'calc(100vh - 200px)' }}
                                views={['month', 'week', 'day', 'agenda']}
                                defaultView="month"
                            />
                        </div>
                    </div>
               </div>
            </div>
        </div>

    
  )
}

export default CalendarPage