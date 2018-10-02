import React from "react"
import  {EditorContext, EditorToolbar, EditorInterface} from "@hoco_editor/editor_implementation"
import {BoldPlugin, BoldButton} from "@hoco_editor/bold_plugin"
import {ItalicPlugin, ItalicButton} from "@hoco_editor/italic_plugin"
import {FontFamilyPlugin, FontFamilyDropdown} from "@hoco_editor/font_family_plugin"
import { FontSizePlugin, FontSizeInput} from "@hoco_editor/font_size_plugin"

// import "./Editor.css"

const fontSizePluginOptions= {initialFontSize: 12}
// const colorPluginOptions= new ColorStateModel().rgba({ r: 100, g: 100, b: 100, a: 1 }).gen()

const plugins= [ 
    BoldPlugin(),
    ItalicPlugin(),
    // FontFamilyPlugin(),
    FontSizePlugin(fontSizePluginOptions)
]

const Editor= () => { 
    return(<div>
            <p> Hoco_editor</p>

            <EditorContext plugins={plugins}> 
                <EditorToolbar>
                <BoldButton  />
                <ItalicButton />
                </EditorToolbar>
                <FontFamilyDropdown />
                <FontSizeInput
                    {...fontSizePluginOptions}
                /> 

                <EditorInterface/>
            </EditorContext>
        </div>
    )
}

export default Editor