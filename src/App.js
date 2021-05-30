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
            <div className="app">
                <div className="card">
                <h3 className="heading">{advice}</h3>
                <button onClick={this.fetchAdvice} className="button">
                    <span>
                        GIVE SOME ADVICE! 
                    </span>
                </button>
                </div>
            </div>
        );
    }
}


export default App;