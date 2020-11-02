import React, { Component } from 'react';
import $ from 'jquery';

export default class Search extends Component {
 
    componentDidMount(){
      $("#inputSearchHome").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".resulted > .row > .col-12").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    }

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
                            id="inputSearchHome"
                        />
                    </div>
                </div>
            </div>

        )
    }
};
