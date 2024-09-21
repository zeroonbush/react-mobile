import { Button } from "antd-mobile";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBillList } from "@/store/modules/billStore";
const Home = () => {
  // 获取数据
  const billList = useSelector((state) => state.bill.billList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBillList());
  }, []);
  const getList = () => {
    dispatch(getBillList());
  };

  return (
    <>
      <Button color="primary" onClick={getList}>
        获取最新数据
      </Button>
      <ul>
        {billList.map((item) => (
          <li key={item.id}>
            Id: {item.id} Name:{item.name}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Home;
