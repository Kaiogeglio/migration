import styles from '../../styles/components/CardCourse.module.css';
import Link from 'next/link';

function CardCourse({ course }) {

  return(
    <div className={styles.card} >
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <Link 
        href={`/course/${course.slug}`}
      > 
        <a>
          Ver curso
        </a>
      </Link>
    </div>
    
  )
}

export default CardCourse;