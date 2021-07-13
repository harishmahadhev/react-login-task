import "./user.css";
import React from "react";
import { Avatar, Button } from "@material-ui/core";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { userDetails } from "../../userContent";
const schema = yup.object().shape({
  userName: yup.string().required(),
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().required().min(10).positive(),
  address: yup.string().required(),
});

export default function User() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <Button className="userAddButton"> Create</Button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <Avatar src="https://i.pinimg.com/564x/38/3b/f0/383bf0ea0baa4beb7e42a74ceadd8ebd.jpg" />
            <div className="userShowTopTitle">
              <div className="userShowUsername">Vinesh Kumar</div>
              <div className="userShowUserTitle">Software Engineer</div>
            </div>
          </div>
          <div className="userShowBottom">
            <div className="userShowTitle">Account Details</div>
            <ul className="userInfo">
              <li className="userInfoItem">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">vineshmahadhev</span>
              </li>
              <li className="userInfoItem">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">26.07.2001</span>
              </li>
              <div className="userShowTitle">Contact Details</div>
              <li className="userInfoItem">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+91 8608480658</span>
              </li>
              <li className="userInfoItem">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">
                  vineshmahadhev@gmail.com
                </span>
              </li>
              <li className="userInfoItem">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">Chennai, India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="userUpdate">
          <h2 className="userUpdateTitle"> Edit</h2>
          <form
            className="userUpdateForm"
            onSubmit={handleSubmit(submitForm)}
            autoComplete="off"
          >
            <div className="userUpdateLeft">
              {userDetails.input.map((input, key) => {
                return (
                  <div key={key} className="userUpdateItem">
                    <label>{input.label}</label>
                    <input
                      type="text"
                      name={input.name}
                      placeholder={input.value}
                      className="userUpdateInput"
                      {...register(input.name)}
                    />
                    {errors.phone ? (
                      <span className="userUpdateMessage">
                        Invalid Phone Number
                      </span>
                    ) : (
                      errors[input.name] && (
                        <span className="userUpdateMessage">
                          {errors[input.name].message}
                        </span>
                      )
                    )}
                  </div>
                );
              })}
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://i.pinimg.com/564x/38/3b/f0/383bf0ea0baa4beb7e42a74ceadd8ebd.jpg"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish style={{ cursor: "pointer" }} />
                </label>
                <input type="file" style={{ display: "none" }} id="file" />
              </div>
              <Button className="userUpdateButton" type="submit">
                Update
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
