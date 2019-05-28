import React from 'react';
import PillTable from './pill-table';
import PillForm from './pill-form';
import axios from 'axios';

class PillWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pills: [

            ]
        };
    }

    handleSubmit = (pill) => async (event) => {
        axios.post("http://localhost:8000/add-pill", {})
            .then((err, res) => {
                console.log("test");
            })
        let pills = this.state.pills;
        pills[pills.length] = pill;
        this.setState({ pills: pills });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <PillForm submit={this.handleSubmit} />
                <PillTable pills={this.state.pills} />
            </div>
        );
    }
};

export default PillWrapper;