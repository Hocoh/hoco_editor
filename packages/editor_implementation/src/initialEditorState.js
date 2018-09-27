const initialeEditorState = { 
    document: { 
        nodes: [ 
            { 
                kind: "block", 
                type: "paragraph",
                nodes: [ 
                    { kind: "text", leaves: [{text: "initial text loaded"}]}
                ]
            }
        ]
    }
}

export default initialEditorState 