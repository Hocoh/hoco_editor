class ColorStateModel{ 

    color= { 
        showPicker: false, 
        rgba: { r: 0, g:0, b:0, a:1}
    }

    rgba(rgba){ 
        this.color.rgba= rgba 
        return this
    }

    showPicker(showPicker){ 
        this.color.showPicker=showPicker
        return this 
    }

    generate(){ return this.color}
}

export default ColorStateModel