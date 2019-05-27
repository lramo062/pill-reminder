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
                        <span className="badge badge-dark">Unit: </span>
                        <select className="form-control-md" name="unit" onChange={this.handleChange}>
                            <option>---</option>
                            <option>mg</option>
                            <option>g</option>
                        </select>
                        <span className="badge badge-dark">Qty: </span>
                        <select className="form-control-md" name="qty" onChange={this.handleChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
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