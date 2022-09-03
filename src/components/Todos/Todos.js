import * as React from 'react'
import { motion } from 'framer-motion'
import TodoForm from './Form'
import List from './List'

const Todos = () => {
    const [list, setList] = React.useState([])
    return (
        <React.Fragment>
            <motion.div className='header'
                initial={{ x: '-100vw' }} animate={{ x: '0vw', transition: { duration: 1 } }}
            >
                <h2>todo list application</h2>
            </motion.div>
            <br />
            <div style={{ marginTop: '8%' }}>
                <div className='form'>
                    <TodoForm setList={setList} />
                </div>
                <div className='todos'>
                    <List list={list} setList={setList} />
                </div>
            </div>
        </React.Fragment>
    )
}
export default Todos