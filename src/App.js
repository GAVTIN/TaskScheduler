import AddTodo from './components/addTodo';
import ListTodo from './components/listTodo';
import MyCalendar from './components/eventCalendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';


function App() {
return (
	<div className="App" style={{textAlign:"center"}}>
	<h1 >Task Scheduler</h1>
	<AddTodo></AddTodo>
	<ListTodo></ListTodo>
    <MyCalendar
    startAccessor="start"
    endAccessor="end"
    events={ListTodo}
    style={{ height: 500 }}
    
    />
	</div>
);
}

export default App;
