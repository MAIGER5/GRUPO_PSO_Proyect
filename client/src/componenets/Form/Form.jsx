import styles from './Dhs.module.css'
import { useState } from 'react'

export const Form = () => {
    const [recipe, setRecipe] = useState({
        name:'',
        image:'',
        steps:[],
        diets:[],
        summary:'',
        healthScore:0
    })
    
    const [errors, setErrors] = useState({
        name:'',
        image:'',
        steps:'',
        diets:'',
        summary:'',
        healthScore:''
    })
    
    const dietHandler =(e)=>{
        if(e.target.checked){
            setRecipe({...recipe,diets:[...recipe.diets,e.target.value]})
        }else setRecipe({...recipe,diets:recipe.diets.filter(diet=>diet!==e.target.value)})
    }
    
    const changeHandler =(e)=>{
        setRecipe({...recipe,[e.target.name]:e.target.value})
        setErrors(validate(recipe))
    }
    
    const submitHandler=(e)=>{
        e.preventDefault()
    }
    
    
     let [inputCounter,setInputCounter] = useState(0);
    
    // const [steps,setSteps] = useState({})
    
    // const stepsHandler=(e)=>{
    
    //     setSteps({...steps,[e.target.name]:e.target.value}) 
        
    // }
    
    
    // const [input,setInput] = useState([<input  type='text' onChange={stepsHandler} key={0} name={0} value={steps[0]}/>])
    
    // const addInput =()=>{
        // setInputCounter(inputCounter+1)
    //     console.log(inputCounter)
    //     setInput([...input,<input   type='text' onChange={stepsHandler} key={inputCounter} name={inputCounter} value={steps[inputCounter]}/>])
    // }
    
    const [inputPasosReceta, setInputPasosReceta] = useState([{ value: '' }]);
    
    const addInput = () => {
      setInputPasosReceta([...inputPasosReceta, { value: '' }]);
    
    };
    
    const handleInputChange = (index, event) => {
      const newInpustPasos = [...inputPasosReceta];
      newInpustPasos[index].value = event.target.value;
      setInputPasosReceta(newInpustPasos);
    
    };
    
    return(
        <div className={styles.formContainer}>
        
        <form onSubmit={submitHandler} className={styles.form}>
            <h1>New Recipe</h1>
            {/* Nombre, imagen, paso a paso, dietas,resumen */}
            <label htmlFor='name'>Name: </label>
            <input placeholder="Here goes your recipe's name" name='name' onChange={changeHandler}/>
            {errors.name&&<p>{errors.name}</p>}
    
            <label htmlFor='Image'>Image(url): </label>
            <input type="text" placeholder='httsp://yourimage.com' name='image' onChange={changeHandler} />
            {errors.image&&<p>{errors.image}</p>}
    
            <label htmlFor='steps'>Step by step proccess:<button onClick={addInput}>+</button> </label> 
            <div>
            {inputPasosReceta.map((input, index) => (
              <input
                type="text"
                key={index}
                value={input.value}
                onChange={(event) => handleInputChange(index, event)}
              />
            ))}
          </div>
            <button onClick={()=>console.log(steps)} >Check Steps</button>
       
            
            {errors.steps&&<p>{errors.steps}</p>}
    
            <label htmlFor='summary'>Summary: </label>
            <input type="text" name='summary' onChange={changeHandler}/>
            {errors.summary&&<p>{errors.summary}</p>}
    
            <label htmlFor='healtScore'>Health Score: </label>
            <input type="text" name='healthScore' onChange={changeHandler}/>
            {errors.healthScore&&<p>{errors.healthScore}</p>}
    
             {/* dietas */}
            <label htmlFor='vegan'>Vegan</label>
            <input type="checkbox" onChange={dietHandler}name='vegan' value={5} />
    
            <label htmlFor='gluten free'>Gluten free</label>
            <input  type="checkbox" onChange={dietHandler} name='gluten free' value={2} />
    
            <label htmlFor='dairy free'>Dairy free</label>
            <input  type="checkbox" onChange={dietHandler} name='dairy free' value={3} />
    
            <label htmlFor='lacto ovo vegetarian'>Lacto ovo vegetarian</label>
            <input type="checkbox" onChange={dietHandler} name='lacto ovo vegetarian' value={4} />
    
            <label htmlFor='vegetarian'>Vegan</label>
            <input type="checkbox" onChange={dietHandler} name='vegetarian' value={1} />
    
            <label htmlFor='paleolithic'>Paleolithic</label>
            <input type="checkbox" onChange={dietHandler} name='paleolithic' value={6} />
    
            <label htmlFor='primal'>Primal</label>
            <input type="checkbox" onChange={dietHandler} name='primal' value={7} />
    
            <label htmlFor='whole 30'>Whole 30</label>
            <input type="checkbox" onChange={dietHandler} name='whole 30' value={8} />
    
            <label htmlFor='pescatarian'>Pescatarian</label>
            <input type="checkbox" onChange={dietHandler} name='pescatarian' value={9} />
    
            <label htmlFor='ketogenic'>Ketogenic</label>
            <input type="checkbox" onChange={dietHandler} name='ketogenic' value={10} />
    
            <label htmlFor='fodmap friendly'>Fodmap friendly</label>
            <input type="checkbox" onChange={dietHandler} name='fodmap friendly' value={11} />
            {errors.diets&&<p>{errors.diets}</p>}
    
            <button  className={styles.submit}type='submit' onClick={()=>console.log('submiteado')}>Submit: </button>
        </form>
        </div>
    )
}
