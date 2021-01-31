import { GET_DATA } from "./actionTypes";
import { getData } from "../../network/queries";

function actionCreator(type, payload) {
  return {
    type,
    payload,
  };
}

export const getDatas = (data) => actionCreator(GET_DATA, data);

export const getDataQuery = () => {
  return async (dispatch) => {
    return new Promise(async (resolve, reject) => {
      getData()
        .then((res) => {
          dispatch(getDatas(res));
          return resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};
