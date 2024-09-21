import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const billStore = createSlice({
  name: "bill",
  // 数据状态state
  initialState: {
    billList: [],
  },
  reducers: {
    // 同步修改方法
    setBillList: (state, action) => {
      console.log(action)  // { payload: Array(3), type: "bill/setBillList" }
      state.billList = action.payload;
    },
  },
});
// 解构actionCreater函数
const { setBillList } = billStore.actions;
// 编写异步函数
const getBillList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3001/1");
    dispatch(setBillList(res.data));
  };
};
// 导出reducer
const reducer = billStore.reducer;
export { getBillList };
export default reducer;
