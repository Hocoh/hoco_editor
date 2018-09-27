const ValidatePluginOptions = options => { 
    const sign="font-size_plugin"

    if(!options){ 
        throw new Error(` Fontsize plgin - you must supply an option `)
    }

    if(!options.initialFontSize){ 
        throw new Error(` Fontsize plgin - you must supply an initialFontSize `)
    }

}

export default ValidatePluginOptions