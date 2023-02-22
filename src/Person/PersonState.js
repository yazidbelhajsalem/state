import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

class PersonState extends React.Component {
  constructor() {
    super();
    this.state = {
      display: true,
      loading: true,
      color: "#ffffff",
      time:0,
    };
  }

  ChangeState = () => {
    setTimeout(() => {
        this.setState({ display: !this.state.display });
    }, 1000);
  
  };

  override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  MessageHide = {
    display: "none",
    color: "red",
  };
  MessageShow = {
    display: "flex",
    flexDirection: "column",
  };
//   componentWillUpdate() {
//     this.setState({loading:!this.state.loading})
//     console.log("ched rouhek");
//   }
  componentDidMount() {
    console.log("tayy");
  }
  componentDidUpdate() {
    console.log("changed");
  }
  static getDerivedStateFromProps(){
    console.log("getDerivedStateFromProps()");
}

componentDidMount() {
    setInterval(() => {
        this.setState({time: this.state.time+1})
        
      }, 1000);
        

    }
  render() {
    return (
      <>
<h3>time:{this.state.time}</h3>
     
       <ClipLoader
          color={this.state.color}
          loading={this.state.loading}
          cssOverride={this.override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <div style={this.state.display ? this.MessageShow : this.MessageHide}>
          <h1>YAZID</h1>
          
          <h1>La vie est belle </h1>
          <h1>web</h1>
          
          <img
          height={100}
          width={100}
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/Moulay_yazid.jpg"
            alt="yazid"
          />
        </div>
        <button onClick={this.ChangeState}>Change </button>
       
      </>
    );
  }
}
export default PersonState;
