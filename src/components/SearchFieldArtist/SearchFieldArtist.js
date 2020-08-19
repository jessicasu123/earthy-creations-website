import React, { Component } from 'react'
import './SearchFieldArtist.css'

/**
 * This component is responsible for displaying a Search Field,
 * where the user can type various inputs to execute a search.
 * 
 * This is almost the same as the SearchField component, but has slightly different CSS with width 100%
 * 
 * Props: 
 * - processSearch: the function to be called when user types text
 * - placeholder: the placeholder to be displayed on the input field
 */

export default class SearchFieldArtist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {processSearch} = this.props;
        let text = event.target.value
        this.setState({value: text});

        processSearch(text);
    }
    render() {
        return (
            <div className="search-field-artist">
                <input type="text1"  placeholder={this.props.placeholder} onChange={this.handleChange}/>
            </div>
        )
    }
}
