import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deltodoitem } from '../redux/actions';

const ListTodo = () => {
const todos = useSelector((state) => state.todo);
const dispatch = useDispatch();
return (
	<div>
	{todos.map((todo, index) => (
		<div>
		<p style={{ display: 'inline', margin: '10px' }}>
			{todo.title}
		</p>
		<button
			onClick={() => {
			dispatch(deltodoitem(index));
			}}>
			Delete
		</button>
		</div>
	))}
	</div>
);
};

export default ListTodo;
