import React, { useState, useEffect } from "react";
import { Developers } from "../../developers";
import { useNavigate } from "react-router-dom";
import { getUsers } from "./helpers";
import Spinner from "react-bootstrap/Spinner";

import "./_dev-list.scss";
export const DevList = (props) => {
  const type = props.type;
  const viewMore = !props.viewMore;
  const navigate = useNavigate();

  const [users, setUsers] = useState(null);

  useEffect(() => {
    getUsers(setUsers);
    console.log(users);
  }, []);
  return (
    <div className="dev-list-wrapper">
      <div className="dev-list-header">Hire Our {type} Developers</div>
      <div className="dev-list-body">
        {viewMore && (
          <div className="dev-list-title">
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
