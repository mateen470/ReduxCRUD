import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { UserSelector, getData } from "../Redux/MainSlice";
import { useSelector, useDispatch } from "react-redux";

import "./Main.css"

const Home = () => {
  const dispatch = useDispatch();

  const getAllUser = useSelector(UserSelector.selectAll);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch, getAllUser]);
  return (
    <div className="Home_root_div">
      <div className="addUser_btn_homePage">
        <Link to="/add-user">Add User</Link>
      </div>

      {getAllUser.map((item, index) => (
        <div key={index} className="data_box">
          <span>ID: {item.id}</span>
          <h1>NAME: {item.name}</h1>
          <Link to={`/view/${item.id}`}>VIEW</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
