import React, {Component} from "react"

// import { PropTypes } from 'prop-types'
import classnames from "classnames"
import {extendsComponent} from "@hoco_editor/utils"

import {Value} from "slate" 
import initialEditorState from "./initialEditorState"

class HocoEditor extends Component { 

    state= {
            value: Value.fromJSON(this.props.initialState || initialEditorState),
            readOnly: false, 
            uid : new Date().getUTCMilliseconds()
    }

    // update the editor interface value
    onChange = (change) => { 
        const value = change.value 
        this.setState({value}); 
    }

    // set the editor state 
    changeState (state){ 
        this.setState(state)
    }

    render(){ 

        // extract some values from this.props
        const{ 
            children,
            style,
            className,
            plugins
        } = this.props 

        // package plugins _ state_ onChange functions 
        // in childProps variable
        const childProps= { 
            plugins,
            value: this.state.value,
            contextState: this.state,
            onChange: this.onChange.bind(this),
            changeState: this.changeState.bind(this)
        }

        return (
            <div className={classnames("editor--root", className)} style={style}> 
                {extendsComponent(children, childProps)}
            </div>
        )
    }

}

export default HocoEditor