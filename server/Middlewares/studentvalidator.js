import validator from 'validator';


const nameValidation = (textName)=>{
    return (validator.isEmpty(textName) || !validator.isLength(textName,{min:2 , max:30}))?false:true;
}

const dobValidation = (textDob)=>{
    return (validator.isEmpty(textDob) || !validator.isDate(textDob)) ?false:true;
}


export{
    nameValidation,
    dobValidation
   
}