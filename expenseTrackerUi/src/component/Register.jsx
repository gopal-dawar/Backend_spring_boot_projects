import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    email: "",
    fullName: "",
  });

  const formhandl = async (e) => {
    e.preventDefault();
    try {
      const re = await axios.post(`http://localhost:8080/register`, userInfo);
      alert(re.data);

      setUserInfo({
        username: "",
        password: "",
        email: "",
        fullName: "",
      });
      
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-screen bg-gray-200  py-20 w-full flex justify-center items-center">
        <form onSubmit={formhandl} className="w-90  bg-white p-5 rounded">
          <h1 className="text-center py-5 text-2xl font-bold">Register Form</h1>

          <div className="flex flex-col py-2 gap-1">
            <label>Username</label>
            <input
              value={userInfo.username}
              onChange={(e) =>
                setUserInfo({ ...userInfo, username: e.target.value })
              }
              type="text"
              className="border px-2 py-1 outline-0 rounded border-gray-300"
              required
            />
          </div>
          <div className="flex flex-col py-2 gap-1">
            <label>Password</label>
            <input
              value={userInfo.password}
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
              type="password"
              className="border px-2 py-1 outline-0 rounded border-gray-300"
              required
            />
          </div>
          <div className="flex flex-col py-2 gap-1">
            <label>Email</label>
            <input
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              type="email"
              className="border px-2 py-1 outline-0 rounded border-gray-300"
              required
            />
          </div>
          <div className="flex flex-col py-2 gap-1">
            <label>Full Name</label>
            <input
              value={userInfo.fullName}
              onChange={(e) =>
                setUserInfo({ ...userInfo, fullName: e.target.value })
              }
              type="text"
              className="border px-2 py-1 outline-0 rounded border-gray-300"
              required
            />
          </div>
          <button className="w-full outline-0 active:scale-90 bg-blue-700 py-2 rounded mt-3 text-white">
            Register
          </button>

          <p className="text-[14px] py-2">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-700 font-bold cursor-pointer"
            >
              Login Here
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
