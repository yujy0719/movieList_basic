import React,{useState} from "react";
import InputField from "./InputField"

const MovieInput = (props) => {
    const [title , setTitle] = useState();
    const [year , setYear] = useState();
    const [titleError , setTitleError] = useState();
    const [yearError , setYearError] = useState();

    const resetForm = () => {
        setTitle('');
        setYear('');
    }
    const validateForm = () => {
        let validated = true;
        if(!title){
            setTitleError("영화제목을 넣어주세요.")
            validated = false;
        }
        if(!year){
            setYearError("개봉년도를 넣어주세요.")
            validated = false;
        }
        return validated;
    }
    const resetErrors = () =>{
        setTitleError('');
        setYearError('');
    }
    const submitted = (e) => {
        e.preventDefault();
        resetErrors()
        if ( validateForm() ){
            props.movieData({title:title , year:year})
            alert('submitted')
            resetForm();
        }
    }
    
    return (
        <div>
            <form  onSubmit={submitted}>
                <InputField 
                    type="text"       
                    placeholder="영화제목"
                    value={title || ''} 
                    onChange={(e)=>{setTitle(e.target.value)}}
                    errorMessage={titleError}
                />
                <InputField 
                    type="number"       
                    placeholder="출시년도"
                    value={year || ''} 
                    onChange={(e)=>{setYear(e.target.value)}}
                    errorMessage={yearError}
                />    
                <button type='submit'>ADD</button>
            </form>
        </div>
    );
}

export default MovieInput ;