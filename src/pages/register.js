import React from 'react';

class Register extends React.Component
{
    constructor()
  {
    super();
    this.state={
      name:"",
      password:"",
      conPassword:"",
      nameError:"",
      passwordError:"",
      conPasswordError:""
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
    else if(this.state.password!=this.state.conPassword)
    {
        this.setState(
            {conPasswordError:"Passwords should match"}
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
      alert("Registered successfully")
    }
  }
    render(){
        return(
            <div>                
                <div class="signup-form">
    <form>
		<h2>Sign Up</h2>
		<p>Please fill in this form to create an account!</p>
		<hr/>
        <div class="form-group">
			<div class="input-group">
				<input type="text" class="form-control" name="fullname" placeholder="Full Name" required="required"/>
			</div>
        </div>
        <div class="form-group">
			<div class="input-group">
				<input type="text" class="form-control" name="hostel" placeholder="Hostel" />
			</div>
        </div>
        <div class="form-group">
			<div class="input-group">
				<input type="text" class="form-control" name="room" placeholder="Room Number" />
			</div>
        </div>
        <div class="form-group">
			<div class="input-group">
				<input type="text" class="form-control" name="branch" placeholder="Branch" />
			</div>
        </div>
        <div class="form-group">
			<div class="input-group">
				<input type="email" class="form-control" name="email" placeholder="College Email"  onChange={(event)=>{this.setState({name:event.target.value})}}/>
                <p style={{color:"red",fontSize:"14px"}}>{this.state.nameError}</p>
			</div>
        </div>
		<div class="form-group">
			<div class="input-group">
				<input type="password" class="form-control" name="password" placeholder="Password" onChange={(event)=>{this.setState({password:event.target.value})}}/>
                <p style={{color:"red",fontSize:"14px"}}>{this.state.passwordError}</p>
			</div>
        </div>
		<div class="form-group">
			<div class="input-group">
				<input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" onChange={(event)=>{this.setState({conPassword:event.target.value})}}/>
                <p style={{color:"red",fontSize:"14px"}}>{this.state.conPasswordError}</p>
			</div>
        </div>
		<div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg" onClick={()=>this.Submit()}>Sign Up</button>
        </div>
        <div class="form-group">
        <div class="text-center">Already have an account? <a href="Login">Login here</a></div>
        </div>
    </form>
</div>
            </div>
        );
    }
}

export {Register};
