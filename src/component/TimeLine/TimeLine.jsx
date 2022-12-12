import React from "react";
import "./TimeLine.css";
import TimelineData from "./data";
import TimeLineItem from "./TimeLineItem";
const TimeLine =()=> TimelineData.length>0 &&(
    <div className="timeline-container">
        <span id="header">Time Line</span>
        <div className="timeline-const">
        {TimelineData.map((data,idx)=>(
            <TimeLineItem data={data} key = {idx}/>
        ))}
        </div>
    </div>
);

export default TimeLine;