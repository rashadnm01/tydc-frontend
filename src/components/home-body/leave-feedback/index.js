import React from "react";
import "./_leave-feedback.scss";
export const LeaveFeedback = () => {
  return (
    <div className="leave-feedback-wrapper">
      <div className="leave-feedback-header">Leave Us Feedback!</div>
      <div className="leave-feedback-body">
        <form type="submit">
          <div className="input-wrapper">
            <div className="label">Name: </div>
            <input type="text" name="name" />
          </div>
          <div className="input-wrapper">
            <div className="label">Email: </div>
            <input type="text" name="name" />
          </div>
          <div className="feedback-input-wrapper">
            <div className="label">Feedback: </div>
            <input type="text" name="name" />
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
