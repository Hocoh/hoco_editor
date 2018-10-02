const initialEditorState = { 
    document: { 
        nodes: [ 
            { 
                object: "block", 
                type: "paragraph",
                nodes: [ 
                    { object: "text", leaves: [{text: "initial text loaded"}]}
                ]
            }
        ]
    }
}

export default initialEditorState 