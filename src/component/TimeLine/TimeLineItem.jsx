import React from "react";
const TimeLineItem=({data})=>(
    <div className="timelineitem">
        <div className="time-line-item-content">
            <span className="tag" style={{background: data.category.color}}>
            {data.category.tag}    
            </span> 
            <time>{data.time}</time>
            <p>{data.text}</p>

            {data.link && (
            <a href={data.link.url} target="_blank" rel ='noopener noreferrer'>
                {data.link.text}
            </a>
            )}

<span className="circle"></span>
        </div>
    </div>
    
);

export default TimeLineItem;