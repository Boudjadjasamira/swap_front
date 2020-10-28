import React, { Component } from 'react';


export default class Avis extends Component {

    render() {
        return (
            <div > 
                
                <div className="row justify-content-start">
                                        <div className="col-12">
                                            <div className="media border p-3 flex-column flex-md-row">
                                                <div className="media-body align-self-center">
                                                    <h5>Avis posté le 00/00/0000 </h5>
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="rating">
                                                                <input
                                                                    type="radio"
                                                                    id="star5"
                                                                    name="rating"
                                                                    defaultValue={5}
                                                                />
                                                                <label htmlFor="star5" title="Super !">
                                                                    5 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star4"
                                                                    name="rating"
                                                                    defaultValue={4}
                                                                />
                                                                <label htmlFor="star4" title="Satisfaisant">
                                                                    4 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star3"
                                                                    name="rating"
                                                                    defaultValue={3}
                                                                />
                                                                <label htmlFor="star3" title="Moyen">
                                                                    3 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star2"
                                                                    name="rating"
                                                                    defaultValue={2}
                                                                />
                                                                <label htmlFor="star2" title="Acceptable">
                                                                    2 stars
                        </label>
                                                                <input
                                                                    type="radio"
                                                                    id="star1"
                                                                    name="rating"
                                                                    defaultValue={1}
                                                                />
                                                                <label htmlFor="star1" title="Bof">
                                                                    1 star
                        </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="text-justify">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                                        vel ipsum aliquam metus facilisis scelerisque. Quisque vitae
                                                        condimentum nulla. Vestibulum lobortis ullamcorper augue id
                                                        consequat. Orci varius natoque penatibus et magnis dis
                                                        parturient montes
                  </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    </div>

)
}
};