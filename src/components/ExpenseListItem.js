import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemoveExpense } from '../actions/expenses';
import moment from 'moment';
import amFormat from './amFormat';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>&#8377;{amFormat(amount)}
        -
       {moment(createdAt).format('MMMM Do, YYYY')}</p>
    <button onClick={() => {
        dispatch(startRemoveExpense({ id }));
      }}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);
