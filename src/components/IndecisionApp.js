import React from 'react';
import AddOptions from './AddOptions';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';
export default class IndecisionApp extends React.Component{
    state={
        options:[],
        selectedContent : undefined
    }
    handleCloseOptionModal=()=>{
    this.setState(()=>({selectedContent:undefined}))
    }
    handleDeleteOptions=() =>{
        this.setState(()=>({options:[]}));
    }
    handleDeleteOption=(optionToRemove)=>{
        console.log("hdo",optionToRemove);
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>optionToRemove !==option )}));
    }
        
    handleAddOption=(option)=>{
    if(!option){
        return "Enter valid value to add item.";
    }
    else if(this.state.options.indexOf(option)>-1){
        return "Item already exists.";
    }
    this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }
    
    handlePick=()=>{
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        //alert(option);
        this.setState (()=>({
            selectedContent:option
        }))
    }
    componentDidMount(){
        try{
            console.log("fetching data");
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
			if (options) {
            this.setState(()=>({options}));
			}
        }
        catch(e){}
        
    }
    componentDidUpdate(prevPops,prevState){
       // console.log("saving data");
       if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem("options",json);
       }
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    render(){
        const title="Indecision";
        const subtitle ="Put you life in hands of Computer!!";
       // const options = ['thing one','thing two', 'thing four'];
        return(
            <div className="body-conatiner">
                <Header subtitle={subtitle} />
                <div className="container">
                <Action 
                    hasOptions={this.state.options.length>0}
                    handlePick={this.handlePick}    
                />
                <div className="widget">
                    <Options 
                        options={this.state.options} 
                        handleDeleteOptions={this.handleDeleteOptions}  
                        handleDeleteOption={this.handleDeleteOption}  
                    />
                    <AddOptions handleAddOption={this.handleAddOption}/>
                    <OptionModal 
                    selectedContent = {this.state.selectedContent}
                    handleCloseOptionModal = {this.handleCloseOptionModal}
                    />
                </div>
                
                </div>
                
            </div>
        );
    }
}

IndecisionApp.defaultProps={
    options :[]
}
