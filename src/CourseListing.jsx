import { useContext } from "react";
import { LevelContext } from "./LevelContext";


//returns formatted information about each course in a table format
export default function CourseListing(props) {
  //uses course and context to store information about the specific courses
  let course = props.details;
  let context = useContext(LevelContext);
  let toggleSelected = context.toggleSelected;

  return (
    <tr className="centered">
      <td>{course.rewarding_institution}</td>
      <td>{course.ri_courseTitle}</td>
      <td>{course.centre_courseTitle}</td>
      <td>{course.centre_course_credits}</td>
      <td className="checkbox-col form-item">
        <input
        // creates a checkbox that toggles whether the course is checked
        //(and therefore added to the saved courses list)
          type="checkbox"
          id={course.ri_courseTitle}
          name={'checkbox[' + course.ri_courseTitle + ']'}
          checked={course.checked}
          onChange={(e) => toggleSelected(course, e.target.checked)}
        />
         <label for={course.ri_courseTitle} dangerouslySetInnerHTML={{__html: '&nbsp;'}}></label>
      </td>
    </tr>
  );
}
