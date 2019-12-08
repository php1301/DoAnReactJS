import { SET_ITEM_TYPE_TV, SET_ITEM_TYPE_MOVIE  } from '../actions/types';

const initState = {
  itemType: 'MOVIE'
};

const setItemType = (state = initState, action) => {
  switch(action.type) {
    case SET_ITEM_TYPE_MOVIE:
      return {
        itemType: 'MOVIE'
      };
    case SET_ITEM_TYPE_TV:
      return {
        itemType: 'TV'
      };
    default:
      return state;
  }
};

export default setItemType;