import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { UserSelector, removeData, updateData } from "../Redux/MainSlice";

const ViewSingle = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const id = params.id;
  const getSingleUser = useSelector((state) =>
    UserSelector.selectById(state, id)
  );

  const [updatedValue, setUpdateValue] = useState(getSingleUser.name);

  const handleDelete = (id) => {
    dispatch(removeData(id));
    navigate("/home");
  };

  const handleUpdate = () => {
    const id = params.id;
    const name = updatedValue;

    const data = { id, name };

    dispatch(updateData(data));

    navigate("/home");
  };
  return (
    <div className="viewSingleUser_root_div">
      <div className="removeData_rootDiv">
        <h1>{getSingleUser.name}</h1>
        <button onClick={() => handleDelete(params.id)}>REMOVE</button>
      </div>
      <div className="updateData_root_div">
        <input
          value={updatedValue}
          onChange={(e) => setUpdateValue(e.target.value)}
          placeholder="ENTER NEW NAME"
        />
        <button onClick={handleUpdate}>UPDATE</button>
      </div>
    </div>
  );
};

export default ViewSingle;
