import './index.css'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="bg-container">
      <h1>
        MY JOURNEY OF <br /> CCBP 4.0
      </h1>

      <ProjectTimelineCard timelineItemsList={timelineItemsList} />
    </div>
  )
}

export default TimelineView
