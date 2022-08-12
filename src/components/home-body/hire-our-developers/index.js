import React, { useEffect, useState } from "react";
import { Developers } from "../../developers";
import { useNavigate } from "react-router-dom";
import "./_hire-our-developers.scss";
import Spinner from "react-bootstrap/Spinner";

import { getUsers } from "../../hire-page/devlist/helpers";
export const HireOurDevelopers = (props) => {
  const type = props.type;
  const viewMore = !props.viewMore;
  const navigate = useNavigate();
  const [users, setUsers] = useState(null);
  useEffect(() => {
    getUsers(setUsers);
  }, []);
  return (
    <div className="hod-wrapper">
      <div className="hod-header">Hire Our {type} Developers</div>
      <div className="hod-body">
        {viewMore && (
          <div className="body-title">
            <u onClick={() => navigate("/hire")}>View more on our hire page.</u>
          </div>
        )}
        {users ? (
          <Developers developers={users} />
        ) : (
          <Spinner animation="border" variant="info" />
        )}
      </div>
    </div>
  );
};
