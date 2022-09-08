import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import axios from "axios";

// FETCHING DATA FROM TEST API
export const getData = createAsyncThunk(
  "user/getData",
  async (_, { dispatch }) => {
    const token = localStorage.getItem("token");
    try {
      const getDataRequest = await axios.get(
        "https://safetydevapis.safetytracker.be/public/api/management/information/type",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(allUser(getDataRequest.data.data.type.data));
    } catch (error) {
      alert(error);
    }
  }
);

// ADDDATA FUNCTION
export const addData = createAsyncThunk("user/addData", async (data) => {
  const token = localStorage.getItem("token");
  try {
    const getDataRequest = await axios.post(
      "https://safetydevapis.safetytracker.be/public/api/management/information/type",
      { name: data },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    alert(error);
  }
});

// REMOVE DATA FUNCTION
export const removeData = createAsyncThunk("user/removeData", async (id) => {
  const token = localStorage.getItem("token");
  try {
    const removeDataRequest = await axios.post(
      "https://safetydevapis.safetytracker.be/public/api/management/information/type",
      { _method: "delete", ids: [id] },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    alert(error);
  }
});

// UPDATE FUNCTION
export const updateData = createAsyncThunk("user/updateData", async (data) => {
  const token = localStorage.getItem("token");

  

  try {
    const updateDataRequest = await axios.post(
      "https://safetydevapis.safetytracker.be/public/api/management/information/type",
      { _method: "put",  },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    alert(error);
  }
});

const UserAdapter = createEntityAdapter({
  selectId: (user) => user.id,
});

const UserSlice = createSlice({
  name: "user",
  initialState: UserAdapter.getInitialState(),
  reducers: {
    allUser: UserAdapter.setAll,
  },
});

export const UserSelector = UserAdapter.getSelectors((state) => state.user);
export const { allUser } = UserSlice.actions;
export default UserSlice.reducer;
