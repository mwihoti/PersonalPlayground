/* scheduleMeeting(..) should take a start time (in 24-hour format as a string "hh:mm") and a meeting duration
 (number of minutes). It should return true if the meeting falls entirely within the work day (according 
to the times specified in dayStart and dayEnd); return false if the meeting violates the work day bounds.*/
/*Practicing comparison */

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting (startTime, durationMinutes)
{
   var [ , startHours,  startMinutes ] = startTime.match(/^(\d{1,2}):(\d{2})$/)
   durationMinutes = Number(durationMinutes)

   if (
    startHours == "string" &&
    startMinutes == "string"
   ) {
    let durationHours = durationMinutes / 60;
    let durationMinutes = durationMinutes - (durationHours*60)

    let meetingEndhr = Number(startHours) + durationHours
    let meetingEndmin = Number(startMinutes) + durationMinutes

    if (meetingEndmin >= 60){
        meetingEndhr = meetingEndhr + 1;
        meetingEndmin = meetingEndmin - 60
    }
    let meetingStart = `{startHour.padStart(2, "0)"}:{startMinutes.padStart(2,'0')}`

    let meetingEnd = `{meetingEndhr.padStart(2, '0')}: {meetingEndmin.padStart(2, '0')}`
    return (
        meetingStart >= dayStart &&
        meetingEnd <= dayEnd
    )
   }
   return false

}
var check = scheduleMeeting("7:00", 15)
console.log(check)