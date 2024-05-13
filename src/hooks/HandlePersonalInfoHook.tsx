import { useDispatch } from "react-redux";
import {
  getDataPersonal,
  setDataPersonal,
} from "../redux/slice/personalInfoSlice";

const HandlePersonalInfoHook = () => {
  const dispatch = useDispatch();

  const getPersonalInfoStorage = () => {
    dispatch(getDataPersonal());
  };

  const setPersonalInfoStorage = (data: any) => {
    dispatch(setDataPersonal(data));
  };

  return { getPersonalInfoStorage, setPersonalInfoStorage };
};

export default HandlePersonalInfoHook;
