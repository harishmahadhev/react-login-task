import "./widgetsm.css";
import React from "react";
import { Avatar, Button } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <h3 className="widgetSmTitle">Users</h3>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <Avatar src="https://i.pinimg.com/564x/bd/3b/7a/bd3b7a1daa3b177ebebffd5275ab0ad8.jpg" />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">Harish</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <Button disableRipple className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </Button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <Avatar src="https://i.pinimg.com/564x/bd/3b/7a/bd3b7a1daa3b177ebebffd5275ab0ad8.jpg" />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">Harish</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <Button disableRipple className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </Button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <Avatar src="https://i.pinimg.com/564x/bd/3b/7a/bd3b7a1daa3b177ebebffd5275ab0ad8.jpg" />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">Harish</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <Button disableRipple className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </Button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <Avatar src="https://i.pinimg.com/564x/bd/3b/7a/bd3b7a1daa3b177ebebffd5275ab0ad8.jpg" />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">Harish</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <Button disableRipple className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </Button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <Avatar src="https://i.pinimg.com/564x/bd/3b/7a/bd3b7a1daa3b177ebebffd5275ab0ad8.jpg" />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">Harish</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <Button disableRipple className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </Button>
        </li>
      </ul>
    </div>
  );
}
