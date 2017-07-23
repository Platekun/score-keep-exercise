import React, { Component } from 'react';

export default class Player extends Component {
    renderPosition(pos) {
        switch(pos + 1) {
            case 1: return "item--first";
            case 2: return "item--second";
            case 3: return "item--third";
            default: return '';
        }
    }

    render() {
        const { props, renderPosition } = this;

        return (
            <li className={`item ${renderPosition(props.position)}`}>
                <div className="player">
                    <h3 className="player__name">
                        {`${props.position + 1}. ${props.name}`}
                        <p className="player__stats">{props.score} point(s)</p>
                    </h3>
                    <div className="player__actions">
                        <button
                            className="button button--round"
                            onClick={(evt) => props.onPointAdded(props._id, props.score)}>
                            +1
                        </button>
                        <button
                            className="button button--round"
                            onClick={(evt) => props.onPointReduced(props._id, props.score)}>
                            -1
                        </button>
                        <button
                            className="button button--round"
                            onClick={(evt) => props.onDeletePlayer(props._id)}>
                            x
                        </button>
                    </div>
                </div>
            </li>
        );
    }
}