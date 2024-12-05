let resume={
    personal_details:{},
    additional:{},
    hobbies:[],
    skills:[],
    personal_interest:[]
}

function add(e,key,p_key){
    if(p_key){
        resume[p_key][key]=e.value
    }else{
        resume[key]=e.value;
    }
    output()
}

function addarrayvalue(key){
    let value= document.getElementById(key).value;
    resume[key].push(value)
    document.getElementById(key).value= "";
    output()
}

function output(){
    document.getElementById('output').innerHTML=JSON.stringify(resume)
}