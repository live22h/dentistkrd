import React from 'react'
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

export default class Services extends React.Component {
    render() {
        return (

            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionLeaveTimeout={500}
                transitionEnterTimeout={500}
                className="services"
                transitionName="page-animation">
                <div className="services page">
                    <h2>Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor modi obcaecati veritatis tempora voluptatibus explicabo soluta at, dicta accusantium, provident, magnam repellat! Fuga aliquam tenetur a exercitationem ducimus rem quibusdam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor modi obcaecati veritatis tempora voluptatibus explicabo soluta at, dicta accusantium, provident, magnam repellat! Fuga aliquam tenetur a exercitationem ducimus rem quibusdam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor modi obcaecati veritatis tempora voluptatibus explicabo soluta at, dicta accusantium, provident, magnam repellat! Fuga aliquam tenetur a exercitationem ducimus rem quibusdam.</p>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}