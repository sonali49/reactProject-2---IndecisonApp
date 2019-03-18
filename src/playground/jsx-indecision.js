console.log("app.js is running !!");
//


const rootApp = document.getElementById("app");

const app = {
   title: "Indecision App",
   subtitle: "This is some info about app." ,
   options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value="";
        renderPageContext();
    }
   
}
const removeAll = () => {
    app.options = [];
    renderPageContext();
}
const renderPageContext=()=>{
    const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <p>{(app.options.length> 0 ) ? 'Here are the options' : 'No options!!'}</p>
        <p>{app.options.length}</p>
        <button type="button" onClick={removeAll}>remove all</button>
        <ul>
            {
                app.options.map((option) =>{
                    return <li key="option">{option}</li>;
                })
            }
        </ul>
        <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add option</button>
        </form>
    </div>
    
    );
     
    ReactDOM.render(template,rootApp);
}
renderPageContext();
const user = {
    //name: "Sonali",
    age: 27,
    //location: "Mumbaiiiiiiiiii"
};
function userLocation(location){
if(user.location){
    return <p>Location would be: {user.location}</p>;
}else{
    return "undefined";
}
}

const templateNotUsed = (
<div>
    <h1>{user.name ? user.name : "Anoymous"}</h1>
    {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
    {userLocation(user.location)}
</div>

);

//ReactDOM.render(template,rootApp);

//ReactDOM.render(templateTwo,appRoot);
