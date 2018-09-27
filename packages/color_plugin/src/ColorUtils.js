export const typeFilter = mark => mark.type === "color"
export const hasMark = value => value.marks.some(typeFilter)
export const getMarks = value => value.marks.filter(typeFilter)
export const getMark = value => value.marks.filter(typeFilter).first()

export const createMark = rgba => ({ 
    type: "color",
    data: {rgba}
})

export const reapplyMark = ({ change,rgba}) => { 
    getMarks(change.value).map(mark=> change.removeMark(mark))

    return change 
    .addMark(createMark(rgba))
}

export const applyMark= ({change,rgba}) => change.addMark(createMark(rgba))


/**
 *  schema to apply color mark plugin
 * 
 * @param {Object} attributes
 *      @property {Value} value
 *      @property {Object} rgba 
 *          @property {int} r
 *          @property {int} g
 *          @property {int} b
 *          @property {int} a
 */
export const colorMarkStrategy = attributes => { 
    const {value, rgba}= attributes

    if(hasMark(value)){ 
        if(value.isExpanded){ 
            return reapplyMark({change: value.change(), rgba})
        }   else console.info("selection collapse, Mark exists")
    } else { 
        if(value.isExpanded){ 
            return applyMark({ change: value.change(), rgba})
        } else console.info("selection collapse, Mark exists")
    }

    return value.change(); 
}; 