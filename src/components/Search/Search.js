import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {
    state = {
      query: '',
      results: []
    }
   
    getInfo = () => {
        axios.get('http://localhost:8000/api/annonces' + this.props.titreAnnonce)
          .then(({ data}) => {
            this.setState({
                results: data.data                       
            })
          })
      }
    
      handleInputChange = () => {
        this.setState({
          query: this.search.value
        }, () => {
          if (this.state.query && this.state.query.length > 1) {
            if (this.state.query.length % 2 === 0) {
              this.getInfo()
            }
          } 
        })
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
                            id="input"
                            ref={input => this.search = input}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </div>
            </div>

        )
    }
};
