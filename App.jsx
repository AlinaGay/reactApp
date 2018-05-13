import React from 'react';

var letters=["a","c","kln","kdnc","jh","jh","jh","l[","lk"];

class App extends React.Component {
    render() {
        return <Board />;
    }
}
export default App;

/*class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}*/

function Square(props) {
    return (<button className="square">{props.value}</button>);
}

class Row extends React.Component {
    render() {
        return(
        <div className="board-row">
            <Square value={letters[this.props.startindex]}/>
            <Square value={letters[Number(this.props.startindex)+1]}/>
            <Square value={letters[Number(this.props.startindex)+2]}/>
        </div>
    );
}

}

/*Row.propTypes = {
    startindex: PropTypes.number
};*/

class Board extends React.Component {
    renderSquare(i) {
        return <Square />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <Row startindex="0"/>
                <Row startindex="3"/>
                <Row startindex="6"/>
            </div>
        );
    }
}





