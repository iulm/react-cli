import React, {useState,useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {actionsAdd} from '@/stores/Actions.ts';
const View = (props)=>{
    const state = useSelector((state)=>state);
    const add = useSelector((state)=>state.addReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        // dispatch(actionsAdd.add())
        // dispatch({
        //     type:"ADD_TODO"
        // })
    },[])
    return(
        <div>{add.length}</div>
    )
}
export default View;
