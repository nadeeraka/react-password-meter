import {useEffect} from 'react'
import {Main} from './core'
// import {initialStateType} from '../interfaces'

export const useMeter = (str:string) => {
    // const init:initialStateType = {score:0,massage:'',error:''}
    const ob = new Main()

    // const [state, setState] = useState(init)

   const  getData =():number=>
   {
    const data = ob.simple(str)
    return data;
   }

    useEffect(() => {
       
     getData()
      
    }, [str])
    
}


// export const ExampleComponent = ({ text }: Props) => {
//   return <div className={styles.test}>Example Component: {text}</div>
// }
