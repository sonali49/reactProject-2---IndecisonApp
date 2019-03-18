console.log("Visibility running!!");
let visibility = false;
const appRoot = document.getElementById("app");
const app = {
    title : "Visibiltiy Toggle",
    subTitle:  "Here are some details to Show!!",
    buttonShowText: "Show Details",
    buttonHideText: "Hide Details"
}
const toggleDetails=()=>{
visibility = !visibility;
render();
}
const render = () =>{
const template = (
    <div>
        <h1>Visibiltiy Toggle</h1>
        <button type="button" onClick={toggleDetails}>
        {visibility ? "Hide Details" : "Show Details"}
        </button>
        {visibility && (<p>Here are the details you needed !!</p>)}
    </div>
);
ReactDOM.render(template,appRoot);
};
render();

