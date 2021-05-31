import React from  'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
    state={
        advice:''
    };
     componentDidMount() {
        this.fetchAdvice();
     }

     fetchAdvice = () => {
         axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const {advice} = response.data.slip;
                console.log(advice);
                this.setState({advice:advice});
            }).catch((error ) => {
                console.log(error);
            });
     }
    render() {
        const {advice} =this.state;
        return (
            <>
            <header>
		    <a href="#" id="logo" className="logo">Fun Advice</a>
	        </header>
            <div className="app">
            
                <div className="card">
                <h3 className="heading">{advice}</h3>
                <button onClick={this.fetchAdvice} className="btn">
                <span className="noselect">GIVE ME ADVICE</span>
                </button>
                </div>
            </div>
            <footer>
            <ul>
            <li><a href="https://www.facebook.com/arya.sah.98892"><i class="fa  fa-1x fa-facebook-official" aria-hidden="true"></i></a></li>
			<li><a href="https://www.instagram.com/aryasah30/"><i class="fa fa-1x fa-linkedin" aria-hidden="true"></i></a></li>
			<li><a href="https://www.linkedin.com/in/arya-sah-5100121b3/"><i class="fa fa-1x fa-instagram" aria-hidden="true"></i></a></li>
		    </ul>
            <ul id="second">
			<li><a href="#">Made With ❤️</a></li>
			<li><a href="#">&copy; Arya Sah</a></li>
		    </ul>
            </footer>
            </>

        );
    }
}


export default App;
