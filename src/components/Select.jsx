import React, { memo, useState } from 'react'
import { AutoSizer, List } from 'react-virtualized'


const Select = props => {
    const { id, name, itemRender, onChange, items, itemId, itemLabel, searchable } = props
    const [state, setState] = useState({
        keyword: '',
        isOpen: false,
        item: null, 
        index: 0,
    })
    const { item, keyword, isOpen } = state                
    const [itemlist, setItemlist] = useState(items)

    const display = x => x ? (typeof itemLabel === 'function' ? itemLabel(x) : x[itemLabel]) : <>&nbsp;</>
    const handleOpen = () => {
        setState({ ...state, isOpen: true })
        if (searchable) {
            setTimeout(() => {
                document.getElementById('searchtext-term-' + (id || name)).focus()
            }, 100)
        }
    }
    const handleClose = () => setTimeout(() => {
        if (state.isOpen === false) {
            setState({ ...state, isOpen: false })
        }
    }, 170)    

    const handleSelected = (item, index = null) => {
        const keyword = display(item)
        if (index) {
            setState({ ...state, item, index, keyword, isOpen: false })
        } else {            
            setState({ ...state, item, keyword, isOpen: false })
        }
        onChange({target: { id, name, value:item[itemId] }})
    }

    const handleSearch = e => {
        if (e.target.value.length === 0) {
            setState({ ...state, keyword: e.target.value, isOpen: true })
        } else {
            setState({ ...state, keyword: e.target.value })
        }
        const itemFiltered = items.filter(o => display(o).toString().toLowerCase().includes(keyword.toLowerCase()))
        setItemlist(itemFiltered)
    }

    const handleArrow = e => {
        if (e.keyCode === 38) {
            e.preventDefault()
            const index = state.index === 0 ? (itemlist.length - 1) : (state.index - 1) 
            setState({ ...state, index })
        }
        
        if (e.keyCode === 40) {
            e.preventDefault()
            const index = state.index === (itemlist.length - 1) ? 0 : (state.index + 1) 
            setState({ ...state, index })
        }
        
        if (e.keyCode === 13) {                        
            const item = itemlist[state.index]            
            handleSelected(item)            
        }
    }

    // useEffect(() => {        
    //     if (value && items.length > 0) {
    //         const index = itemlist.findIndex(x => x[itemId] === value)
    //         const item = itemlist[index]
    //         setState(state => ({ ...state, item, index }))        
    //     }
    // }, [value, items, itemlist, itemId])

    return (
        <div className='dropdown inline-block relative w-full'>                        
            <button type='button' onClick={handleOpen} onBlur={handleClose} className='flex items-center w-full bg-background-form border border-border-color-primary shadow rounded outline-none text-left focus:border-green-700 p-4'>
                {itemRender && item !== null ? itemRender(item, false) : display(item)}
            </button>            
            {isOpen && <DropdownSelect { ...props } { ...{ display, state, searchable, setState, itemlist, handleSelected, handleClose, handleSearch, handleArrow, handleOpen } } />}
        </div>
    )
}

export default memo(Select, (p, n) => 
    p.value === n.value   
)


const DropdownSelect = memo(({
    id,
    name,
    onChange,    
    itemId,
    state,
    setState,
    searchable,
    display,
    itemlist,
    itemRender,
    handleSelected,
    handleOpen,
    handleClose,
    handleSearch,
    handleArrow
}) => {    

    const renderRow = ({ index, key, style }) => {
        const item = itemlist[index]                
        const isSelected = state.index === index

        return (
            <li onClick={() => {
                handleSelected(item, index)
            }} key={key} className={`flex items-center border-gray-200 py-2 px-4 block whitespace-no-wrap${isSelected ? ' bg-primary text-white': ' hover:bg-gray-200 bg-white'}`} style={style}>
                {itemRender ? itemRender(item, isSelected) : display(item)}
            </li>
        )
    } 

    return (
        <AutoSizer disableHeight>
            {({ width }) => (
                <>
                <ul className='absolute block bg-white text-gray-700 w-full cursor-pointer shadow-lg rounded-t-none z-10 p-2'>
                    {searchable && 
                    <div>
                        <input id={'searchtext-term-' + (id || name)} type='text' value={state.keyword} onChange={handleSearch} onKeyDown={handleArrow} onFocus={handleOpen} onBlur={handleClose} className='block w-full bg-background-form border border-border-color-primary rounded outline-none text-left focus:border-green-700 mb-2 p-4' />
                    </div>}
                    <List
                        width={width - 16}
                        height={itemlist.length > 7 ? 238 : (itemlist.length > 0 ? itemlist.length * 34 : 34)}
                        className='select-list'
                        rowCount={itemlist.length}
                        overscanRowCount={10}
                        rowHeight={34}
                        rowRenderer={renderRow}
                        noRowsRenderer={() => <li className='rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'>no data</li>}
                        scrollToIndex={state.index}
                    />
                </ul>
                </>
            )}
        </AutoSizer>
    )
})