import React from 'react';

class  Home extends React.Component{
constructor()
  {
    super();
    this.state={
      name:"",
      password:"",
      nameError:"",
      passwordError:""
    }
  }

  valid()
  {
    if(!this.state.name.includes("@mnit.ac.in") && this.state.password.length<8)
    {
      this.setState(
        {nameError:"Invalid Email ID", passwordError:"Password length should be atleast 8 characters"}
      )
    }
    else if(!this.state.name.includes("@mnit.ac.in") )
    {
      this.setState(
        {nameError:"Invalid Email ID"}
      )
    }
    else if(this.state.password.length<8)
    {
      this.setState(
        {passwordError:"Password length should be atleast 8 characters"}
      )
    }
    else{
      return true
    }
  }

  Submit()
  {
    this.setState(
      {nameError:"", passwordError:""}
    )
    if(this.valid())
    {
      alert("Logged in Successfully")
    }
  }


     render(){
        return(
            <div class="login-page">
            <div class="form">    
                <div class="login">
                    <div class="login-header">
                        <h3>LOGIN</h3>
                        <p>Please enter your credentials to login.</p>
                    </div>
                </div>
                <form class="login-form">
                    <input type="text" placeholder="College Email" onChange={(event)=>{this.setState({name:event.target.value})}} required="required"/>
                    <p style={{color:"red",fontSize:"16px"}}>{this.state.nameError}</p>

                    <input type="password" placeholder="Password" onChange={(event)=>{this.setState({password:event.target.value})}} required="required"/>
                    <p style={{color:"red",fontSize:"16px"}}>{this.state.passwordError}</p>

                    <button onClick={()=>this.Submit()}>login</button>
                    <p class="message">Not registered? <a href="register">Create an account</a></p>
                </form>
            </div>
            </div>
        
        );
        }
}

export default Home;