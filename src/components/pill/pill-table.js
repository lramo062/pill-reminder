import React from 'react';

class PillTable extends React.Component {
    render() {
        return (
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Dosage</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.pills.map((pill, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{pill.name}</td>
                                <td>{pill.dosage + 'mg'}</td>
                                <td>{pill.qty}</td>
                                <td>{pill.date.toLocaleTimeString()}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        );
    }
};

export default PillTable;