import { GET_DATA } from "./actionTypes";
import { getData } from "../../network/queries";

function actionCreator(type, payload) {
  return {
    type,
    payload,
  };
}

export const getDataAction = (data) => actionCreator(GET_DATA, data);

export const getDataQuery = (keyword) => {
  return async (dispatch) => {
    return new Promise(async (resolve, reject) => {
      getData(keyword)
        .then((res) => {
          dispatch(getDataAction(res));
          return resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};
