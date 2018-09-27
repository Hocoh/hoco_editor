export const hasMark = value => value.marks.some(mark => mark.type ==="font-family")
export const getMark = value => value.marks.filter(mark =>mark.type === "font-family").first()

export const createMark = fontFamilyIndex => ({ 
    type:"font-family",
    data: {fontFamilyIndex}
})

export const reapplyMark= ({ change, fontFamilyIndex}) => change 
        .removeMark(getMark(change.value))
        .addMark(createMark(fontFamilyIndex))

export const applyMark= ({ change, fontFamilyIndex}) => change 
        .addMark(createMark(fontFamilyIndex))


/**
 * family mark plugin strategy
 * 
 * @param {Object } attributes 
 *      @property {Value} value 
 *      @property {int} fontFamilyIndex
 */
export const fontFamilyMarkStrategy= attributes => { 
    const {value, fontFamilyIndex} = attributes 

    if(hasMark(value)){ 
        if (value.isExpanded){ 
            return reapplyMark({change:value.change(), fontFamilyIndex})
        } else console.info("selection exists")
    } else { 
        if(value.isExpanded){ 
            return applyMark({change:value.change(), fontFamilyIndex})
        } else console.info("selection exists")
        
        return value.change()
    }
}