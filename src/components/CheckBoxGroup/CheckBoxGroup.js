import React, { Component } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import './CheckBoxGroup.css';

/**
 * This component is responsbile for maintaining a group
 * of CheckBox components and knowing which
 * CheckBoxes have been selected in the group.
 * 
 * Props: 
 * - type: the type of CheckBox group (eg. Categories, Materials)
 * - items: the items within the "type" (eg. for Categories, the items could be ["Sculpture", "Paintings"])
 * - filters: a Map from the parent that links the type (key) to the selectedCheckboxes (value)
 */
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

    /**
     * To reflect changes in the selectedCheckboxes when 
     * the user either clicks or unclicks a CheckBox.
     */
    toggleCheckboxSelection = label => {
        if (this.state.selectedCheckboxes.has(label)) {
            /* when user unclicks */
            this.state.selectedCheckboxes.delete(label);
        } else {
            this.state.selectedCheckboxes.add(label);
        }
    }

    /**
     * When user clicks on a Checkbox in a group, the name of the checkbox group (ex. Categories, Materials),
     * as well as the checkboxes selected within that group will be sent to the parent, which maintains 
     * a map called "filters" that stores the type as a key and the selectedCheckboxes as the value
     */
    handleCheckBoxChoice = () => {
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
