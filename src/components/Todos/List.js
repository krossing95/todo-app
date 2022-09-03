import * as React from 'react'
import { motion } from 'framer-motion'

const List = ({ list, setList }) => {
    const [updating, setUpdating] = React.useState(false)
    const [value, setValue] = React.useState('')
    const [tid, setTid] = React.useState('')
    const handleCompletion = (id) => {
        const item = list.filter(ent => ent?.id === id)?.[0]
        item['completed'] = !item?.completed
        return setList([...list])
    }
    const handleDeletion = (id) => {
        return setList([...list.filter(entity => entity?.id !== id)])
    }
    const handleSelection = (id) => {
        const item = list.filter(ent => ent?.id === id)?.[0]
        setValue(item?.item)
        if (value) {
            setTid(item?.id)
            setUpdating(prev => !prev)
        }
        return
    }
    const handleUpdation = (e) => {
        if (e.key === 'Enter') {
            if (!value) {
                setUpdating(false)
                return handleDeletion(tid)
            }
            const item = list.filter(ent => ent?.id === tid)?.[0]
            item.item = value
            setList([...list])
            return setUpdating(false)
        }
    }
    return (
        <React.Fragment>
            {
                list?.length === 0 ? (
                    <motion.img initial={{ scale: 0.7 }} animate={{
                        scale: 1,
                        transition: { duration: 1 },
                    }} whileHover={{
                        scale: 0.7,
                        transition: { duration: 1 },
                    }} src='/nodata.svg' alt='No records found' style={{ display: 'block', margin: '0 auto', marginTop: '30px' }} width='250' />
                ) : (
                    <div style={{ overflowX: 'auto', marginBottom: '130px' }}>
                        {
                            updating && (
                                <React.Fragment>
                                    <span>Edit item and press enter to update</span>
                                    <br />
                                    <input className='updateField' onKeyDown={handleUpdation} value={value} onChange={(e) => setValue(e.target.value)} />
                                </React.Fragment>
                            )
                        }
                        <table>
                            <thead>
                                <tr>
                                    <th>Items</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list?.length > 0 && list?.map((item, i) => (
                                        <tr key={i + 1}>
                                            <td className={item?.completed ? 'completed' : ''}>{item?.item}
                                            </td>
                                            <td>
                                                <button onClick={() => handleSelection(item?.id)} style={{ marginRight: '5px', backgroundColor: '#00ff00' }}><i className='fa fa-edit' /></button>
                                                <button onClick={() => handleDeletion(item?.id)} style={{ marginRight: '5px', backgroundColor: '#ff0000' }}><i className='fa fa-trash' /></button>
                                                <button onClick={() => handleCompletion(item?.id)} style={{ backgroundColor: '#7CB9E8' }}><i className={item?.completed ? 'fa fa-times' : 'fa fa-check'} /></button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }
        </React.Fragment>
    )
}
export default List