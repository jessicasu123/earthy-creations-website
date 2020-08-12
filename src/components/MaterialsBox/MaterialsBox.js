import React, { Component } from 'react';
import './MaterialsBox.css';

export default class MaterialsBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            materialsDescription: this.props.materialsDescription,
        }
    }
    render() {
        return (
          <div className="other-materials-container">
            <div className="materials-background-box">
              <div className="other-materials-title-text">OTHER MATERIALS</div>
              <div className="other-materials-text">
                {this.state.materialsDescription.toUpperCase()}
              </div>
            </div>
          </div>
        );
    }
}
