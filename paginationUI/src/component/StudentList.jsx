import axios from "axios";
import UserCard from "./UserCard";
import { useEffect, useState } from "react";

const StudentList = () => {
  const [student, setStudent] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    loadData();
  }, [page]);

  const loadData = async () => {
    const res = await axios.get(
      `http://localhost:8080/student?page=${page}&size=${20}`,
    );
    const response = await res.data;
    setStudent(response.content);
    setTotalPage(response.totalPages);
    console.log(student);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4    gap-4">
        {student.map((students) => {
          return (
            <UserCard
              key={students.id}
              firstName={students.firstName}
              lastName={students.lastName}
              email={students.email}
              gender={students.gender}
            />
          );
        })}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-6 gap-3">
        <button className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400">
          Prev
        </button>

        <span className="px-4 py-2">
          {page + 1} of {totalPage}
        </span>

        <button
          disabled={page + 1 === totalPage}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentList;
