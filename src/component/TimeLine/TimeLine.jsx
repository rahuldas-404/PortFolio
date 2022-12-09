import React from "react";
import TimelineData from "./data";
import TimeLineItem from "./TimeLineItem";
const TimeLine =()=> TimelineData.length>0 &&(
    <div className="timeline-container">
        {TimelineData.map((data,idx)=>(
            <TimeLineItem data={data} key = {idx}/>
        ))}
    </div>
);

export default TimeLine;