import axios from 'axios';
import './App.css';
import query from './query';

export default function App(){
	const {response} = query(
		axios.get("https://foodish-api.herokuapp.com/api")
		);
	return (
	<div>
		<img src={response.image}/>
	</div>
	);
}