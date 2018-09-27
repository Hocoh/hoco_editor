import React from "react"; 
import classnames from "classnames"; 
import {Editor} from "slate-react"


// Nodes

// import  {AlignmentNode} from "@hoco_editor/alignment-plugin"
// import  {EmbedNode} from "@hoco_editor/embed-plugin"
// import  {GridNode, GridRowNode, GridCellNode} from "@hoco_editor/grid-plugin"
// import  {ImageNode, ImageLinkNode} from "@hoco_editor/image-plugin"
// import  {LinkNode} from "@hoco_editor/link-plugin"
// import  {ListItemNode, OrderedListNode, UnorderedListNode} from "@hoco_editor/list-plugin"



// Marks

import { BoldMark} from "@hoco_editor/bold-plugin"
import { ColorMark} from "@hoco_editor/color-plugin"
import { FontFamilyMark} from "@hoco_editor/font-family-plugin"
import { FontSizeMark} from "@hoco_editor/font-size-plugin"
import { ItalicMark} from "@hoco_editor/italic-plugin"

// all node cases are proposed in the switch function 

// export const renderNode= props => { 

//     switch(process.node.type) { 
//         case "alignment": return <AlignmentNode {...props} />
//         case "embed": return <EmbedNode {...props} />
//         case "grid": return <GridNode {...props} />
//         case "grid-row": return <GridRowNode {...props} />
//         case "grid-cell": return <GridCellNode {...props} />
//         case "image": return <ImageNode {...props} />
//         case "imageLink": return <ImageLinkNode {...props} />
//         case "link": return <LinkNode {...props} />
//         case "list-item": return <ListItemNode {...props} />
//         case "ordered-list": return <OrderedListNode {...props} />
//         case "unordered-list": return <UnorderedListNode {...props} />
//     }
// }

export const renderMark = props => { 
    switch(props.mark.type){ 
        case "bold": return <BoldMark {...props} /> 
        case "color": return <ColorMark {...props} />
        case "font-family": return <FontFamilyMark {...props} />
        case "font-size": return <FontSizeMark {...props} />
        case "italic": return <ItalicMark {...props} />
    }
}

export default ({ 
    className, 
    style, 
    value, 
    contextState, 
    plugins,
    onChange,
    children,
    ... rest 
}) => { 
    const { readOnly } = contextState

    return( 
        <div
        className={classnames("editor--content", className)}>
            <Editor
                plugins={plugins}

                value= {value}
                contextState={contextState}

                onChange={onChange}
                renderNode={renderNode}
                renderMark={renderMark}

                readOnly={readOnly}
                style={style}
                {...rest}                
            />
            {children}
        </div>
    )
}