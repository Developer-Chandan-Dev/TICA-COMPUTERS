import CourseForm from "./CourseForm";

const EnrollCourse = () => {
  return (
    <>
      <section
        className="w-full sm:w-11/12 lg:w-4/5 h-auto px-3 py-14 mx-auto my-4 flex items-center justify-center"
        style={{
          background: "repeating-linear-gradient(#ebebeb, transparent 100px)",
        }}
      >
        <CourseForm />
      </section>
    </>
  );
};

export default EnrollCourse;
