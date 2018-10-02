export const hasMark= value => value.marks.some(mark => mark.type === "font-size")
export const getMark= value => value.marks.filter(mark => mark.type === "font-size").first()

export const createMark = fontSize => ({ 
    type:"font-size", 
    data: {fontSize}
})


/**
 * fontSize plugin strategy
 * 
 * @param {Object}
 *      @property {Value} value
 *      @property {int} fontSize
 *      @property {function} changeState
 */
export const fontSizeStrategy = ({ change, changeState, fontSize }) => { 
    const {value} = change
    if(hasMark(value)){ 
        if(value.isExpanded){ 
            changeState({fontSize})
            return change 
                .removeMark(getMark(value))
                .addMark(createMark(fontSize))
        }else console.info("font-size: selection collapsed")
    }else{ 
        if(value.isExpanded){ 
            changeState({fontSize}) 
            return change
            .addMark(createMark(fontSize))
        } else console.info("font-size: selection collapsed")
    }
    return change 
}

const fontSizeCurrentValue  = ({ change, fontSize}) => hasMark(change.value) ? 
    Number(getMark(change.value).data.get("fontSize")) :
    Number(fontSize)
export const fontSizeIncrease= ({change, fontSize, changeState }) => ( 
    fontSizeStrategy({ 
        change,
        changeState,
        fontSize: fontSizeCurrentValue({change,fontSize}) +1
    })
)
export const fontSizeDecrease= ({change, fontSize, changeState }) => ( 
    fontSizeStrategy({ 
        change,
        changeState,
        fontSize: fontSizeCurrentValue({change,fontSize}) +1
    })
)