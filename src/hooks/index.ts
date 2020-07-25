import React,{useEffect,useState} from 'react'
import {Main} from '../core'

export const useMeter = (str:string) => {
    
    const [state, setState] = useState({score:0,massage:'',errors:[]})

    useEffect(() => {
       const ob = new Main()
       ob.simple(str)
    }, [str])
    
}
