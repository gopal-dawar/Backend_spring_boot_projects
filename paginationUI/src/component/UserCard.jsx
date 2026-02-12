import React from "react";

const UserCard = ({ firstName, lastName, email, gender }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">
      {/* User Info */}
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">
          {firstName} {lastName}
        </h2>

        <p className="text-gray-600 text-sm">📧 {email}</p>

        <p className="text-gray-500 text-sm">
          Gender: <span className="font-medium">{gender}</span>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
