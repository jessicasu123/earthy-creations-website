import React, { Component } from 'react'; 
import CheckBox from '../components/CheckBox'; 

export default class CheckBoxGroup extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            selectedCheckboxes: new Set(), 
            items: this.props.items
        }
    }

    toggleCheckboxSelection = label => {
        if (this.state.selectedCheckboxes.has(label)) {
            /* when user unclicks */ 
            this.state.selectedCheckboxes.delete(label); 
        } else {
            this.state.selectedCheckboxes.add(label); 
        }
    }

    handleCheckBoxChoice = () => {
        for (const checkbox of this.state.selectedCheckboxes) {
            console.log(checkbox); 
        }
    }

    createCheckbox = label => (
        <div class="checkBoxContainer">
            <CheckBox 
                label={label}
                handleCheckboxChange={this.toggleCheckboxSelection}
                key={label}
            />
        </div>
    )

    createCheckboxes = () => (
        this.state.items.map(this.createCheckbox)
    )

    
    render() {
        return (
            <div>
                <div onClick={this.handleCheckBoxChoice}>
                    {this.createCheckboxes()}
                </div>
            </div>
        )
    }
}
