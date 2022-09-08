import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../Redux/MainSlice";
import { useNavigate } from "react-router-dom";

import "./Main.css";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addDataValue, setAddDataValue] = useState("");

  const handleAdd = () => {
    dispatch(addData(addDataValue));
    navigate("/home");
  };

  return (
    <div className="add_DataRoot_div">
      <h1>ADD DATA</h1>
      <input
        value={addDataValue}
        onChange={(e) => setAddDataValue(e.target.value)}
        placeholder="ENTER NAME"
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default AddUser;
