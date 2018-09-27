
// how it possible 
    data.get() ° think in SlateJS source code° 
    first()
    attributes 
      change colorPicker default position
    add embed plugin

// patterns reverse engineering 

  decorator strategy 
  .data.get('fontSize')

// refactoring 
  reapply() => replace()
  ColorStateModel => include a reactjs state 
  
// fontfamily plugin => strategy _ dropdown_ fontfamilyindex


// expanded 
A range is considered "expanded" when the anchor point and focus point of the range are differents.

// ui => u-el

// where come from °...args° 


// include NODE
  > image
  > emojies 
  > checkable
  > embed
  > link 

# render editor in another editor 

# type _ style >> from editor higher order entities

# pages _ 
    // /profile
    // /dashboard 
    // /createpost
    // login _ logout ° n°client usable one time only °


############################################

  # export const colorMarkStrategy = attributes => {
  const { value, rgba } = attributes

  if (hasMark(value)) {
    if (value.isExpanded) {
      return reapplyMark({change: value.change(), rgba})
    }
    else console.info('[SlateJS][ColorPlugin] selection collapsed, w/ mark exists')
  }

  else {
    if (value.isExpanded) {
      return applyMark({change: value.change(), rgba})
    }
    else console.info('[SlateJS][ColorPlugin] selection collapsed, w/o mark')
  }

  return value.change()
}

###################     ######################


#  style={{ color: `rgba(${r}, ${g}, ${b}, ${a})` }}


# shortcuts functionnalities 


####################################################


const SelectionUpdateInputValue = (event, change, editor, options) => {
  const { value } = change
  const { changeState } = editor.props
  const { initialFontSize } = options

  // If do not have font-size mark in selection, update input with initial font size.
  if (!hasMark(value)) changeState({ fontSize: initialFontSize })

  // If it have font-size mark in selection, update input with mark data font size.
  if (hasMark(value)) changeState({ fontSize: getMark(value).data.get('fontSize') })
}

###################     ######################

 # value.marks



