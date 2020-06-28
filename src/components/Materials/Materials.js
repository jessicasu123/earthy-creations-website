import React, { Component } from 'react';
import './Materials.css';

export default class Materials extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="materialsTop">
                    <div className="paper"><div>PAPER</div></div>
                    <div className="glass"><div>GLASS</div></div>
                    <div className="plastic"><div>PLASTIC</div></div>
                </div>
                <div className="materialsBottom">
                    <div className="metal"><div>METAL</div></div>
                    <div className="wood"><div>WOOD</div></div>
                </div>
                <div className="browseParent">
                    <div className="browseMaterials">
                        BROWSE BY MATERIALS
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
