import React from 'react'
import { createPortal } from "react-dom";
import { IoCloseCircle } from "react-icons/io5";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div  className="absolute top-0 z-40  grid h-screen w-screen place-items-center backdrop-blur">
          <div className="relative z-50 m-auto min-h-[200px] min-w-[50%] bg-white p-4">
            <div  className='flex justify-end'>
              <IoCloseCircle  onClick={onClose}  className='text-2xl cursor-pointer ' />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")



  );
};

export default Modal