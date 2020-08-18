import React, { Component } from 'react'
import './SearchFieldArtist.css'

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
