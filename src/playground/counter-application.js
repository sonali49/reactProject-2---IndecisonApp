
class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state={
            count:0
        };
     }
    handleAddOne(){
        //console.log("handleAddOne");
        this.setState((prevState) => {
            return {
                count: prevState.count+1 
            };
        });
    }
    handleMinusOne(){
        //console.log("handleMinusONe");
        this.setState((prevState)=>{
            return {
                count: prevState.count-1
            };
        });
    }
    handleReset(){
        //console.log("handleReset");
        this.setState((prevState)=>{
            return {
                count: 0
            };
        })
    }
    componentDidMount(){
        const count = localStorage.getItem("count");
        const final = parseInt(count,10);        
        if(!isNaN(final)){
            this.setState(()=>({count: final}));
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
        const count = this.state.count;
        const final = localStorage.setItem("count",count);
        }
    }
    render(){
        return(
        <div>
            <h1>Count:{this.state.count} </h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
        </div>
        );
    }
}
ReactDOM.render(<Counter />,document.getElementById('app'));

/*let count=0;
const addOne = () => {
    count++;
    renderPageTemplate();
};
const minusOne = () => {
    count--;
    renderPageTemplate();
};
const reset = () => {
    count=0;
    renderPageTemplate();
};
const renderPageTemplate = () => {
    const templateTwo = (
        <div>
            <h1>Count:{count}</h1>
            <button type="button" onClick={addOne}>+1</button>
            <button type="button" onClick={minusOne}>-1</button>
            <button type="button" onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo,rootApp);
}

const appRoot = document.getElementById("app");
renderPageTemplate();*/