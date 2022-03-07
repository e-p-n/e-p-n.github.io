import { combineReducers } from "redux";
import navReducer from './navReducer';
import portfolioItemsReducer from './portfolioItemsReducer';
import selectPortfolioReducer from './selectPortfolioReducer';

const reducers = combineReducers({
      account: navReducer,
      selectPortfolio: selectPortfolioReducer,
      portfolio: portfolioItemsReducer,

})

export default reducers;