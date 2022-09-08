import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UserSelector } from "../Redux/MainSlice";

const ViewSingle = () => {
  const params = useParams();

  const id = params.id;
  const getSingleUser = useSelector((state) =>
    UserSelector.selectById(state, id)
  );

  return <div>{getSingleUser.name}</div>;
};

export default ViewSingle;
