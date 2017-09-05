import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Table from './components/table';

const user= {
    name: 'Pablo',
    luckyNumber: luckyNumber()

};

function luckyNumber(){
    return Math.floor(Math.random() * 1000);
}

function Greeting(user) {
    return (
        <div className="container">
            <h1> Hello {user.name}, </h1>
            <h2 className="text-muted"> Your lucky number is {user.luckyNumber}! </h2>
        </div>
    )
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

