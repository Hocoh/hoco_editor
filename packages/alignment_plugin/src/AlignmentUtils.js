export const hasMark= value => value.block.some(node => node.type === "alignment")
export const getMark= value => value.blocks.filter(node => node.type === "alignment").first()
export const getType= value => value.blocks.first().type

export const alignmentMarkStrategy = (change, align) =>{ 
   
    return (change.setBlock({ 
        type:"alignment",
        // get the currentBlockType in order to appreciate
        // if we are in presence of a grid-cell node type
        data: {align, currentBlockType:getType(change.value)}
      })
      .focus()
    )
} 
    
export const alignLeft = change => alignmentMarkStrategy(change, "left")
export const alignCenter = change => alignmentMarkStrategy(change, "center")
export const alignRight = change => alignmentMarkStrategy(change, "right")