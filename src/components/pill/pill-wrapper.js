import React from 'react';
import PillTable from './pill-table';
import PillForm from './pill-form';
import DataAccess from '../../shared/data-access';

class PillWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pills: [

            ]
        };
        this.db = new DataAccess();
    }

    handleSubmit = (pill) => (event) => {
        this.db.writeMedication(pill);
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