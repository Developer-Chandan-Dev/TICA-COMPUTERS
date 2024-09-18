import { Outlet } from "react-router-dom"
import EnrolledStudents from "./EnrolledStudents"
import StudentDetailsPage from "./StudentDetailsPage"
import EditStudentDetails from "./EditStudentDetails"

const StudentSwitcher = () => {
  return (
    <>
        <Outlet>
            <EnrolledStudents/>
            <StudentDetailsPage/>
            <EditStudentDetails/>
        </Outlet>
    </>
  )
}

export default StudentSwitcher
