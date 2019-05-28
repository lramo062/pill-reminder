import React from 'react';

class PillForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pill: { date: new Date() }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ pill: { ...this.state.pill, [event.target.name]: event.target.value } });
    }

    handleSubmit = (event) => {
        this.setState({ pill: { date: new Date() } });
    }

    render() {
        return (
            <div className="form-group">
                <br></br>
                <form className="form-horizontal">

                    <div className="form-group">
                        <input type="text" className="form-control-lg"
                            placeholder="Name" name="name" onChange={this.handleChange} />

                    </div>
                    <br></br>

                    <div className="form-group">
                        <input type="text" className="form-control-lg"
                            placeholder="Dosage" name="dosage" onChange={this.handleChange} />
                        <br></br>
                        <br></br>
                        <span className="badge badge-dark">Qty: </span>
                        <select className="form-control-sm" name="qty" value="-" onChange={this.handleChange}>
                            <option value="0">-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-info" onClick={this.props.submit(this.state.pill)}> Submit</button>
                    </div>

                </form>
            </div >
        )
    }
};

export default PillForm;