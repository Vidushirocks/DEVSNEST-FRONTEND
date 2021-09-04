import { combineReducers } from "redux";
import PlaceReducer from './placeReducer';
import PlaceDataReducer from './placeDatareducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
    place: PlaceReducer,
    placeData: PlaceDataReducer,
    theme: themeReducer,
});
export default rootReducer;