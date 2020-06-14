import React, { Component } from 'react';
import './CheckBox.css';

export default class CheckBox extends Component {
    state = {
        isChecked: false
    }

    toggleCheckboxChange = () => {
        const { handleCheckboxChange, label} = this.props;

        this.setState(({isChecked}) => (
            {
                isChecked: !isChecked,
            }
        ));

        handleCheckboxChange(label);
    }

    simulateClick = (event) => {
        setTimeout(() => {
            try{
                event.click();
            }
            catch(e){}
        }, 500);
    }

    render() {
        const label = this.props.label;
        const {isChecked} = this.state;
        return (
            <div>
                <label>
                    {this.props.isChecked ?
                        <input
                            type="checkbox"
                            className="checkBox"
                            value={label}
                            readOnly checked={isChecked}
                            onClick={this.toggleCheckboxChange}
                            ref={this.simulateClick}
                        />
                        :
                        <input
                            type="checkbox"
                            className="checkBox"
                            value={label}
                            readOnly checked={isChecked}
                            onClick={this.toggleCheckboxChange}
                        />
                    }
                    <div className="checkBox-label">{label} </div>
                </label>

            </div>
        )
    }
}
