import React, { Component } from 'react';
import './CheckBox.css';

/**
 * This component is responsbile for rendering a single checkbox, 
 * which will be part of a larger check box group.
 * 
 * The checkbox can either be 1) deliberately checked by user through a click
 * action or 2) automatically checked when loading the page (ex. user chooses a category 
 * on the home page & is redirected to the shop page with a checkbox automatically checked)
 * 
 * Props:
 * - label --> the text associated with the check box
 * - handleCheckBoxChange --> passed down from parent CheckBoxGroup
 */
export default class CheckBox extends Component {
    state = {
        isChecked: false
    }

    /**
     * Called when user clicks on the checkbox
     */
    toggleCheckboxChange = () => {
        const { handleCheckboxChange, label} = this.props;

        this.setState(({isChecked}) => (
            {
                isChecked: !isChecked,
            }
        ));

        handleCheckboxChange(label);
    }

    /**
     * To "automatically" click a checkbox when loading the shop page"
     */
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
