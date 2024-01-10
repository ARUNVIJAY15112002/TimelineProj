import {Chrono} from 'react-chrono'
import {AiFillClockCircle} from 'react-icons/ai'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const ProjectTimelineCard = props => {
  const {timelineItemsList} = props

  const renderList = x => {
    const {
      id,
      categoryId,
      title,
      projectTitle,
      description,

      imageUrl,
      duration,
      projectUrl,
    } = x

    if (categoryId === 'PROJECT') {
      return (
        <div key={x.id}>
          <img src={imageUrl} className="img-width" alt="project" />

          <div className="card1">
            <h1>{projectTitle}</h1>
            <div className="card-3">
              <AiFillClockCircle className="img-colck" color="#171f46" />

              <p>{duration}</p>
            </div>
          </div>
          <p>{description}</p>
          <a href={projectUrl}>Visit</a>
        </div>
      )
    }
    return <CourseTimelineCard x={x} />
  }

  return (
    <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
      {timelineItemsList.map(x => renderList(x))}
    </Chrono>
  )
}

export default ProjectTimelineCard
