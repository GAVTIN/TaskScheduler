import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtodoitem } from '../redux/actions/index';
// import { DatePicker } from 'react-datepicker';

const AddTodo = () => {

const [todo, setTodo] = useState('');
const dispatch = useDispatch();
return (
	<div>
	<h2>Enter your task scheduled tasks here...</h2>
	<label htmlFor="todoitem" />
	<input
		type="text"
		id="todoitem"
		value={todo}
		onChange={(e) => {
		setTodo(e.target.value);
		}}
	/>
    <button
		onClick={() => {
		dispatch(
			addtodoitem({
			title: todo,
			done: false,
			}),
		);
		setTodo('');
		}}>
		Add Event
	</button>
	</div>
);
};

export default AddTodo;
