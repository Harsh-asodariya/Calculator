import React, {Component} from 'react';
import Button from './Button';
import './Layout.css';

class Layout extends Component{

    state = {
        screenvalue : '',
        ans : ''
    }

    createTextHandler = (event) =>{
        this.setState({screenvalue :event.target.value})
      }


    stringButtonHandler = (event) =>{
        let val=event.target.innerText
        let text = this.state.screenvalue
        text += val
        this.setState({screenvalue : text})
        
    }
    clearButtonHandler = () =>{
        this.setState({screenvalue : '', ans : ''})
        document.getElementById('screen').value = ''
    }

    equalButtonHandler = () =>{
        if (this.state.screenvalue!=='') { 
            var answer=''; 
            answer = eval(this.state.screenvalue); 
            this.setState({screenvalue : '', ans : answer});
        }
    }

    squareButtonHandler = () =>{
        var answer='';
        answer =eval(this.state.screenvalue)*eval(this.state.screenvalue);
        this.setState({screenvalue : '', ans : answer});
    }


    render(){
        return(
            <div className='Container'>
            <h1>Calculator</h1>
            <div className="calculator">
                <input type="text" name="screen" id='screen' value={this.state.screenvalue} onChange={this.createTextHandler}/>
                <input type="text" name="ans" defaultValue={this.state.ans}/>
                <table>
                    <tbody>
                    <tr>
                        <td><Button clicked={this.stringButtonHandler}>(</Button></td>
                        <td><Button clicked={this.stringButtonHandler}>)</Button></td>
                        <td><Button clicked={this.squareButtonHandler}>X²</Button></td>
                        <td><Button clicked={this.stringButtonHandler}>%</Button></td>
                    </tr>
                    <tr>
                        <td><Button clicked={this.stringButtonHandler}>7</Button></td>
                        <td><Button clicked={this.stringButtonHandler}>8</Button></td>
                        <td><Button clicked={this.stringButtonHandler}>9</Button></td>
                        <td><Button clicked={this.stringButtonHandler}>+</Button></td>
                    </tr><tr>
                        <td><Button clicked={this.stringButtonHandler}>4</Button></td>
                        <td><Button clicked={this.stringButtonHandler}>5</Button></td>
                        <td><Button clicked={this.stringButtonHandler}>6</Button></td>
                        <td><Button clicked={this.stringButtonHandler}>-</Button></td>
                    </tr><tr>
                        <td><Button clicked={this.stringButtonHandler}>1</Button></td>
                        <td><Button clicked={this.stringButtonHandler}>2</Button></td>
                        <td><Button clicked={this.stringButtonHandler}>3</Button></td>
                        <td><Button clicked={this.stringButtonHandler}>*</Button></td>
                    </tr>
                    <tr>
                        <td><Button clicked={this.stringButtonHandler}>0</Button></td>
                        <td><Button clicked={this.stringButtonHandler}>.</Button></td>
                        <td><Button clicked={this.equalButtonHandler}>=</Button></td>
                        <td><Button clicked={this.stringButtonHandler}>/</Button></td>
                    </tr>
                    <tr>
                        <td colSpan="4"><Button clicked={this.clearButtonHandler}>clr</Button></td>
                        
                    </tr>
                </tbody></table>
            </div>
        </div>
            );
    }     
}

export default Layout;