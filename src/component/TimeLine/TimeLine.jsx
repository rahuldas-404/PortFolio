import React from "react";
import data from "./Data";
import TimelineData from './Data';
import TimeLineItem from "./TimeLineItem";
const TimeLine =()=> data.length>0 &&(
    <div className="timeline-container">
        {TimelineData.map((data,idx)=>{
            <TimeLineItem data={data} key = {idx}/>
        })}
    </div>
)

export default TimeLine;