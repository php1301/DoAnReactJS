import { SET_ITEM_TYPE_MOVIE, SET_ITEM_TYPE_TV } from '../actions/types';

const initState = {
  itemType: 'MOVIE'
};

const setItemType = (state = initState, action) => {
  switch(action.type) {
    case SET_ITEM_TYPE_MOVIE:
      return {
        itemType: 'MOVIE'
      };
    default:
      return state;
  }
};

export default setItemType;
