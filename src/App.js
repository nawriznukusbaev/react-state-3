import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';


class AddForm extends React.Component {
  constructor(props) {
    super(props);
    let arr=[];
    this.arr=arr;
    this.state = {
      arrInput:this.arr,
    };

    this.addInput=this.addInput.bind(this);
    this.removeForm=this.removeForm.bind(this);
    this.ShowInput=this.ShowInput.bind(this);
  }
  addInput(event) {
    if(event.code==='Enter'){
      console.log('yes');
      this.arr.push(event.target.value);
      this.setState({arrInput:this.arr,});
    }
  }

  removeForm(event){
      event.preventDefault();
      let note = event.target.parentElement;
      this.arr.splice(note.dataset.id, 1);
      this.setState({
          list: this.arr,
      });

  }
  ShowInput({item,index}){
    return (
        <div style={{display:"inline",backgroundColor:"blue",color:"white"}} data-id={index}>
          <span>{item}</span>
          <span onClick={this.removeForm} style={{backgroundColor:"red"}}>
          x
        </span>
        </div>
    );
  }


  render() {
    return (
        <>
            {this.state.arrInput.map((item, index) => {
                return <this.ShowInput item={item} key={index} id={index} />;
            })}
          <input type={"text"} onKeyUp={this.addInput}/>
        </>
    );
  }
}

export default AddForm;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
