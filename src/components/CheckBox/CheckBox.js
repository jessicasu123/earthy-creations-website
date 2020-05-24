import React, { Component } from 'react'; 
import './CheckBox.css'; 

export default class CheckBox extends Component {
    state = {
        isChecked:false,
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

    render() {
        const {label} = this.props; 
        const {isChecked} = this.state; 
        return (
            <div>
                <label>
                    <input 
                        type="checkbox"
                        className="checkBox"
                        value={label}
                        checked={isChecked}
                        onClick={this.toggleCheckboxChange}
                    />
                    <div class="checkBox-label">{label} </div>
                </label>
                
            </div>
        )
    }
}

