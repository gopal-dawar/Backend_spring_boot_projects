import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const formhandling = async (e) => {
    e.preventDefault();

    try {
      const re = await axios.post(`http://localhost:8080/login`, userInfo);
      sessionStorage.setItem("authToken", re.data.authToken);
      console.log(re.data);

      setUserInfo({
        username: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="h-screen bg-gray-200  py-20 w-full flex justify-center items-center">
        <form onSubmit={formhandling} className="w-90  bg-white p-5 rounded">
          <h1 className="text-center py-5 text-2xl font-bold">Login Form</h1>

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

          <button className="w-full bg-blue-700 py-2 rounded mt-3 text-white">
            Login
          </button>

          <p className="text-[14px] py-2">
            New User?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-blue-700 font-bold cursor-pointer"
            >
              Register Here
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
