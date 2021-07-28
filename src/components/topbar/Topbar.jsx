import { Badge, Avatar, Button } from "@material-ui/core";
import { NotificationsNone, Settings } from "@material-ui/icons";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { storeCtx } from "../../pages/login/reducer";

import "./topbar.css";

export default function Topbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const { dispatch } = useContext(storeCtx);
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <div className="topbarLogo">#HASH</div>
        </div>
        <div className="topbarRight">
          <Badge className="topbarIcon" badgeContent={4}>
            <NotificationsNone />
          </Badge>
          <Badge className="topbarIcon" badgeContent={0}>
            <Settings />
          </Badge>
          <Avatar
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "white",
              color: "black",
            }}
            className="topbarAvatar"
            alt={user.result?.name}
          >
            {user.message?.fullname[0]}
          </Avatar>
          <Button onClick={logout} className="logout">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
