import React, { Component } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import './CheckBoxGroup.css';

export default class CheckBoxGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCheckboxes: new Set(),
            type: this.props.type,
            items: this.props.items,
            filters: this.props.filters,
        }
    }

    componentDidMount(){
        // var checkBoxes = document.getElementsByClassName('checkBox');
        // for(var i = 0; i<checkBoxes.length; i++){
        //     if(checkBoxes[i].value === this.props.add){
        //         checkBoxes[i].checked = true;
        //     }
        //     console.log(this.props.add);
        // }
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
        // for (const checkbox of this.state.selectedCheckboxes) {
        //     console.log(checkbox);
        // }
        this.state.filters.set(this.state.type, this.state.selectedCheckboxes);
    }

    createCheckbox = (label) => (
        <div className="checkBoxContainer">
            <CheckBox
                label={label}
                handleCheckboxChange={this.toggleCheckboxSelection}
                key={label}
                isChecked={label === this.props.add}
            />
        </div>
    )



    createCheckboxes = () => (
        this.state.items.map(this.createCheckbox)
    )


    render() {
        return (
                <div onClick={this.handleCheckBoxChoice}>
                    {this.createCheckboxes()}
                </div>

        )
    }
}
