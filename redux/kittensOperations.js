import { getKittens } from '../services/api';
import kittensSlice from './kittensSlice';

export const getKittensOperation = (perPage) => async (dispatch) => {
  dispatch(kittensSlice.actions.setIsLoadingTrue());
  try {
    const { data } = await getKittens(perPage);
    dispatch(kittensSlice.actions.getKittensSuccess(data.hits));
  } catch (error) {
    console.log('Error while getting data :>> ', error);
    dispatch(kittensSlice.actions.getKittensError(error));
  }
  dispatch(kittensSlice.actions.setIsLoadingFalse);
};
