import { Outlet } from "react-router-dom"
import AvailableCourses from "./AvailableCourses"
import AddCourse from "./AddCourse"
import UpdateCourse from "./UpdateCourse"

const OurCourses = () => {
  return (
    <>
        <Outlet>
            <AvailableCourses/>
            <AddCourse/>
            <UpdateCourse/>
        </Outlet>
    </>
  )
}

export default OurCourses
