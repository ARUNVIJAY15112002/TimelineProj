import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {x} = props
  const {
    id,
    categoryId,
    title,
    courseTitle,
    description,
    tagsList,
    duration,
  } = x
  return (
    <div className="main-card" key={x.id}>
      <div className="card1">
        <h1>{courseTitle}</h1>

        <div className="card-3">
          <AiFillCalendar className="img-colck" />
          <p>{duration}</p>
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <ul className="list-container">
        {tagsList.map(y => (
          <li className="list-items" key={y.title}>
            <p>{y.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
