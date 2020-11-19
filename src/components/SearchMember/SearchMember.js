import React, { Component } from 'react';
import $ from 'jquery';

export default class SearchMember extends Component {
 
    componentDidMount(){
      $("#inputSearchMember").on("keyup", function() {
        var value = $(this).val().toLowerCase();

        $(".d-inline-flex > .content").filter(function() {
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
                            id="inputSearchMember"
                        />
                    </div>
                </div>
            </div>

        )
    }
};
