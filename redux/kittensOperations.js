import { getKittens } from '../services/api';
import { getDataWithNames } from '../services/helpers';
import kittensSlice from './kittensSlice';

export const getKittensOperation = () => async (dispatch) => {
  dispatch(kittensSlice.actions.setIsLoadingTrue());
  try {
    const { data } = await getKittens(40);
    const withNames = getDataWithNames(data.hits);
    dispatch(kittensSlice.actions.getKittensSuccess(withNames));
  } catch (error) {
    console.log('Error while getting data :>> ', error);
    dispatch(kittensSlice.actions.getKittensError(error));
  } finally {
    dispatch(kittensSlice.actions.setIsLoadingFalse());
  }
};
