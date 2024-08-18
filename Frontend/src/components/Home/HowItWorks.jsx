import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How Job Seeking Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                earum necessitatibus, est sunt ab ipsa voluptatem fugit officiis
                tempore quaerat eligendi, eveniet natus qui quasi iste ad quos
                aut veniam.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a job/ Post a Job</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                earum necessitatibus, est sunt ab ipsa voluptatem fugit officiis
                tempore quaerat eligendi, eveniet natus qui quasi iste ad quos
                aut veniam.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Create Account</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                earum necessitatibus, est sunt ab ipsa voluptatem fugit officiis
                tempore quaerat eligendi, eveniet natus qui quasi iste ad quos
                aut veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default HowItWorks;
