import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import BodyPart from './components/bodyPart/BodyPart';



function App() {
	return (
		<div className=' h-screen w-full flex flex-col justify-between items-center'>
		<Header></Header>
		<BodyPart></BodyPart>
		<Footer></Footer>
			
		</div>
	);
}

export default App;
