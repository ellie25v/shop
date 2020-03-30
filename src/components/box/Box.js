import React from 'react'
import styles from './box.module.css'

const Box = (props) => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
        
    );
}

export default Box;