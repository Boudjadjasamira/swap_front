import React, { Component } from 'react';

export default class Search extends Component {

    render() {
        return (
            <div>

                <div className="container">
                    <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback" />
                        <input
                            type="text"
                            className="form-control-ann"
                            placeholder="Entrez votre recherche..."
                            id="input"
                        />
                    </div>
                </div>

            </div>

        )
    }
};
