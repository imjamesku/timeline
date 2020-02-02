import data from '../../data'
import TimelineItem from './TimelineItem'
import React from 'react'

const Timeline = () => {
    return (
        <div className="timeline-container">
            {data.map((itemData, idx) => (
                <TimelineItem data={itemData} key={idx} />
            ))}
        </div>
    )
}

export default Timeline;