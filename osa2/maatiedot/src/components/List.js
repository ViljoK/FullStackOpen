import React from 'react'

const List = ({items, ordered}) => {
    const rows = items.map((item, i) => <li key={i}>{item.name}</li>)
    if (ordered) {
        return <><ol>{rows}</ol></>
    }
    else {
        return <><ul>{rows}</ul></>
    }
}

export default List