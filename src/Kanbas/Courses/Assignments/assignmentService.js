import axios from "axios";
const COURSES_URL = "http://localhost:4000/api/courses";

const ASSIGNMENTS_URL = "http://localhost:4000/api/assignments";

export const findAssignmentsForCourse = async (courseId) => {
    const response = await axios
      .get(`${COURSES_URL}/${courseId}/assignments`);
    return response.data;
  };