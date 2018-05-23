import React from 'react';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const AddExpensePage = (props) => (
  <div>
    <p>Add Expense!!</p>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense({ ...expense }));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
