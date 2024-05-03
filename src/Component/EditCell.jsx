import React, { useEffect, useState } from 'react';

const EditCell = ({getValue,row,column,table}) => {
    const initialValue = getValue()
    const [value,setValue] = useState(initialValue)

    const onBlur = () => {
        table?.options?.meta?.updateData(
            row.index,
            column.id,
            value
        )
    }

    useEffect(()=>{
        setValue(initialValue)
    },[])

    return (
       <input onBlur={onBlur} type="text" onChange={(e)=>setValue(e.target.value)} value={value} className='overflow-hidden text-ellipsis whitespace-nowrap py-1.5 px-1 focus:outline-none focus:border-purple-600 focus:border-2' />
    );
};

export default EditCell;