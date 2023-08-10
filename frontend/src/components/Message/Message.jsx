import React from "react";

const Message = ({ message }) => {
  return (
    <div
      className='mb-4 rounded-lg px-6 py-5 text-base bg-red-100 text-red-700 border border-red-700 max-w-xl mx-auto'
      role='alert'
    >
      {message}
    </div>
  );
};

export default Message;
