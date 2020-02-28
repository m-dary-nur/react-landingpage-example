import React, { memo, useState, useEffect } from 'react'
import { AutoSizer, List } from 'react-virtualized'


const Select = props => {
    const { value, items, itemId, itemLabel } = props
    const [selected, setSelected] = useState({item: null, index: -1})
    const [isOpen, setIsOpen] = useState(false)
    
    const display = x => x ? (typeof itemLabel === 'function' ? itemLabel(x) : x[itemLabel]) : <>&nbsp;</>
    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setTimeout(() => setIsOpen(false), 170)

    useEffect(() => {
        if (value && items.length > 0) {
            const index = items.findIndex(x => x[itemId] === value)
            setSelected({ item: items[index], index })
        }
    }, [value, items, itemId])

    return (
        <div className='dropdown inline-block relative w-full'>            
            <button type='button' onClick={handleOpen} onBlur={handleClose} className='bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-left leading-tight focus:outline-none focus:shadow-outline border-blue-300'>
                <span>{display(selected.item)}</span>
            </button>
            {isOpen && <DropdownSelect { ...props } { ...{ display, selected, setSelected } } />}
        </div>
    )
}

export default memo(Select, (p, n) => 
    p.value === n.value
)


const DropdownSelect = ({
    id,
    name,
    value,
    onChange,
    items,
    itemId,
    itemLabel,
    selected,
    setSelected,
    display,
}) => {      
    const handleSelected = (item, index) => {
        onChange({target: { id, name, value:item[itemId] }})
        setSelected({ item, index })
    }

    const renderRow = ({ index, key, style }) => {
        const item = items[index]                

        return (
            <li onClick={() => handleSelected(item, index)} key={key} className='border-gray-200 bg-white hover:bg-blue-400 hover:text-white py-2 px-4 block whitespace-no-wrap' style={style}>
                {display(item)}
            </li>
        )
    } 

    return (
        <AutoSizer disableHeight>
            {({ width }) => (
                <ul className='absolute block bg-white text-gray-700 w-full cursor-pointer shadow-md rounded-t-none z-10'>
                    <List
                        width={width}
                        height={items.length > 7 ? 238 : (items.length > 0 ? items.length * 34 : 34)}
                        className='select-list'
                        rowCount={items.length}
                        overscanRowCount={10}
                        rowHeight={34}
                        rowRenderer={renderRow}
                        noRowsRenderer={() => <li className='rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'>no data</li>}
                        scrollToIndex={0}
                    />
                </ul>
            )}
        </AutoSizer>
    )
}