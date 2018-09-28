export const hasMark = value => value.marks.some(mark => mark.type === "bold")

export const boldMarkStrategy = change => { 
    return change
    .toggleMark("bold")
    .focus()
}