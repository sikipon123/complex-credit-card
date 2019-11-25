import React, { Component } from "react";

class Cc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grabbedSerialNumb: "",
      grabbedHolderName: "",
      grabbedValidDate: "",
      slashtest: 0
    };
  }

  // handlers
  handleOnChangeNumb = e => {
    var patt = /[^0-9 ]/gi;
    if (e.target.value.length < 20 && !e.target.value.match(patt))
      this.setState({
        grabbedSerialNumb: e.target.value.replace(/[ ]/g, "")
      });
  };
  testnbrcart = x => {
    let str = "";
    for (let i = 0; i < x.length; i += 4) {
      str += x.slice(i, i + 4) + " ";
    }
    return str.trim();
  };

  handleOnChangeName = e => {
    if (e.target.value.length > 20) {
      alert("u've reached the limit");
    } else if (e.target.value.match(/[^A-Za-z ]/g)) {
      alert("tape only text");
    } else {
      this.setState({
        grabbedHolderName: e.target.value //input value
      });
    }
  };

  handleOnChangeDate = e => {
    var patt = /[^0-9]/gi;
    if (
      e.target.value.length <= 4 &&
      !e.target.value.match(patt) &&
      e.target.value.slice(0, 2) < 13
    )
      this.setState({
        grabbedValidDate: e.target.value
      });
  };
  grabbedValidDate = x => {
    return x.slice(0, 2) + "/" + x.slice(2);
  };

  render() {
    return (
      <div className="project">
        <div className="card">
          <h1 className="creditcard">CREDIT CARD</h1>
          <img
            alt="..."
            src="https://i-love-png.com/images/chip-173-678503.png"
            className="puce"
          />
          <div className="holderpart">
            <p className="serial-numb">
              {this.testnbrcart(
                this.state.grabbedSerialNumb.toString().padEnd(16, "*")
              )}
            </p>
            <span className="fournumb">0000</span>
            <p className="name" style={{}}>
              {this.state.grabbedHolderName.toUpperCase()}
            </p>
          </div>
          <p className="validthru">VALIDTHRU</p>
          <p className="small">MONTH/YEARS</p>
          <p className="date">
            {this.grabbedValidDate(this.state.grabbedValidDate)}
          </p>
          <img
            alt="..."
            src="https://krebsonsecurity.com/wp-content/uploads/2012/03/mcvisa.png"
            className="visamstrc"
          />
        </div>

        <div className="inputs">
          <form>
            <input
              type="text"
              onChange={this.handleOnChangeNumb}
              value={this.testnbrcart(this.state.grabbedSerialNumb)}
            />
            <input
              type="text"
              onChange={this.handleOnChangeName}
              value={this.state.grabbedHolderName}
            />
            <input
              type="text"
              onChange={this.handleOnChangeDate}
              value={this.state.grabbedValidDate}
            />
          </form>
        </div>
      </div>
    );
  }
}
export default Cc;
