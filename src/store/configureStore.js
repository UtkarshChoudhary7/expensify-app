import { createStore, combineReducers, applyMiddleware } from 'redux';
import expensesReducer from '../reducers/expensesReducer';
import filtersReducer from '../reducers/filtersReducer';
import thunk from 'redux-thunk';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    applyMiddleware(thunk)
  );

  return store;
};
