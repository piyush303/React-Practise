import React, {Component} from 'react';
import App from '../../App';

export class Home extends Component {
    constructor(props) {
        super(props);
    }

    changeInput(event) {
        //console.log(event.target.value)
        this.props.parentMethod(event.target.value)
    }

    render() {
        return (
            <div>
                <h2>Home</h2>
                <input type="text" onChange={this.changeInput.bind(this)} />
            </div>
        );
    }
}