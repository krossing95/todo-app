import * as React from 'react'

const TodoForm = ({setList}) => {
    const [item, setItem] = React.useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const newItem = item.trim()
        if (!newItem) {
            setItem(newItem)
            return alert('Please enter an item')
        }
        setItem('')
        return setList(prev => [{ id: (new Date()).getTime(), item: newItem, completed: false }, ...prev])
    }
    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            <input value={item} type='text' onChange={(e) => setItem(e.target.value)} placeholder='Enter an item .......' />
            <button type='submit'>Save</button>
        </form>
    )
}
export default TodoForm