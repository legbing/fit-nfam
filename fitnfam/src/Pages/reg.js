constructor(props) {
    super(props);
    this.state = {user:{
        name:"",
        email:"",
        password:""
    }};
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
}

handleChange(event) {
    var name1 = event.target.name;
    var value1 = event.target.value;
    this.setState({
        ...this.state.user,
        user:{
            ...this.state.form,
            [name1]: value1
        }
        
    })
}

register(event) {
    event.preventDefault();
    
    const {name, email, password} = this.state.user;
    console.log(name, email, password);
    if(name && email && password) {
        axios.post("http://localhost:5000/register")
        .then(res=>console.log(res));
    }
    else {
        alert("Invalid input");
    }
}
render() {
    return (
        
            <form onSubmit={this.register}>
            Enter Name: 
            <input type = "text" name="name" value={this.state.user.name} onChange={this.handleChange} placeholder="Full Name"/>
            <br/>
            Enter Email: 
            <input type = "text" name="email" value={this.state.user.email} onChange={this.handleChange(Event)} placeholder="Email address"/>
            <br/>
            Enter password: 
            <input type = "password" name="password" value={this.state.user.password} onChange={this.handleChange} placeholder="Password"/>
            <br/>

            <input type="Submit" onClick={(e) => e.preventDefault()}></input>
            </form>
        
    );
}
