const Choice = (props) => {
    let rand = Math.floor(Math.random() * props.length + 1)
    return props[rand]
}

const Remove = (arr, item) => {
    let food = arr.indexOf(item)
    arr.splice(food, 1)
    return arr
}

export { Choice, Remove } 
