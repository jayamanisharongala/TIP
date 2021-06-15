import React,{Component} from 'react'
const array={'30%-OUTSTANDING':30,'20%-GOOD':20,'15%-OK':15,'10%-BAD':10,'5%-TERRIBLE':5};
class Tipcalculator extends Component{
    
    constructor(props){
        super(props)
        this.state={
            bill:'',
            service:'',
            people :'',
            totaltip:'',
            totalbillperperson:''

        }

    }


    
    handleBillChange= (event) => {
        this.setState({
            bill:event.target.value
        })

    }
    handleServiceChange=(event) => {
        this.setState({
            service:event.target.value
        })
    }
    handlePeopleChange=(event) => {
        this.setState({
            people:event.target.value
        })
    }
   
    calculator=(event) =>{
        const{service,bill,people}=this.state;
        this.setState({
            totaltip:(service*bill)/100,
            totalbillperperson:Number(bill)+(service*bill/100)/(people)
        })
    }

    render(){
        const{totaltip,totalbillperperson,service,bill,people}=this.state;
        return(
            
                <div> 
                    <h2>TIP CALCULATOR</h2>
                    <p>How much was your bill ?</p>
                <div>
                    <label>${" "}</label> <input  type="text" value={bill} onChange={this.handleBillChange}/>
                </div>
                <p>How was your service ?</p>
                <select value={service} onChange={this.handleServiceChange}>
                    {Object.entries(this.state.array).map(([key,value]) =>(
                        <option value={value}>{key}</option>
                    ))}
                </select>
                <p>How many people are sharing ?</p>
                <div> <input  type="text" value={people} onChange={this.handlePeopleChange}/><label>people</label></div>
               
               <div>
                <button onClick={this.calculator}>CALCULATE</button>
                </div>
                <div>
                <p>TotalTip:${totaltip}</p>
                </div>
                <div>
                   <p>TotalBillperperson:${totalbillperperson}</p> 
                </div>
    
               </div> 
               

                

            

        )
    }
   
}
export default Tipcalculator