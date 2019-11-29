import { SET_ITEM_TYPE_MOVIE, SET_ITEM_TYPE_TV } from './types';

const setItemTypeMovie = type => ({
  type: type === 'TV' ? SET_ITEM_TYPE_TV : SET_ITEM_TYPE_MOVIE
});

export default setItemTypeMovie;
