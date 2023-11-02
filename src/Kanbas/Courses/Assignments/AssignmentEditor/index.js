import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";




function AssignmentEditor() {
  const { assignmentId } = useParams();
  const initialAssignmentData = useSelector((state) => state.assignmentsReducer.assignment);
  const [assignment, setAssignment] = useState(initialAssignmentData);

    // const courseAssignments = useSelector((state) => state.assignmentsReducer.assignments);
    // const assignment = useSelector((state) => state.assignmentsReducer.assignment);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAssignment({
          ...assignment,
          [name]: value,
        });
      };


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="container mt-5">

        <h2 className="mb-3">Assignment Name</h2>
        <input 
            value={assignment.name}
            className="form-control mb-3"
            placeholder="Assignment Name"
            onChange={handleChange}
        />

        <textarea 
            value={assignment.description}
            className="form-control mb-3"
            rows="5"
            placeholder="Assignment description"
            onChange={handleChange}
        ></textarea>

        <h2 className="mb-2">Points</h2>
        <input 
            value={assignment.points}
            className="form-control mb-3"
            placeholder="Points"
            onChange={handleChange}
        />

        <h2 className="mb-2">Assignment Group</h2>
        <select 
            name="assignmentGroup" 
            id="assignmentGroup"
            className="form-control mb-3"
            onChange={handleChange}
        >
            <option value="group1">ASSIGNMENTS</option>
        </select>

        <h2 className="mb-2">Display Grade as</h2>
        <select 
            name="displayGradeAs" 
            id="displayGradeAs"
            className="form-control mb-3"
            onChange={handleChange}
        >
            <option value="percentage">Percentage</option>
        </select>

        <div className="mb-3">
            <input type="checkbox" id="countCheckbox" />
            <label className="ms-2" htmlFor="countCheckbox">Do not count this assignment towards the final grade</label>
        </div>

        <div>
            <Link 
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger mr-2"
            >
                Cancel
            </Link>
            <button 
                onClick={handleSave} 
                className="btn btn-success"
            >
                Save
            </button>
        </div>
    </div>
);

}


export default AssignmentEditor;

