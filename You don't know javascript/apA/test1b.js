dayStart = "07:30";
dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes){
    var convert = (time)=>{
        const [hours, minutes] = time.split(":").map(Number);
        return hours *60 + minutes
    }

    const meetingStart = convert(startTime);
    const meetingEnd = meetingStart + durationMinutes;

    const dayStartTime = convert(dayStart)
    const dayEndTime = convert(dayEnd)

    if (meetingStart < dayStartTime || meetingEnd > dayEndTime){
        return false
    }
    else {
        return true
    }

}

var check = scheduleMeeting("7:00", 15)
console.log(check)