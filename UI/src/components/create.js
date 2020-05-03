import React from "react";
import * as action from "../actions/create.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CheckBox from "./checkbox";

class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = { optionsChecked: [] }
  }

  changeEvent(event) {

    let checkedArray = this.state.optionsChecked;
    let selectedValue = event.target.value;

    if (event.target.checked === true) {

      checkedArray.push(selectedValue);
      this.setState({
        optionsChecked: checkedArray
      });

    } else {

      let valueIndex = checkedArray.indexOf(selectedValue);
      checkedArray.splice(valueIndex, 1);

      this.setState({
        optionsChecked: checkedArray
      });

    }

  }

  render() {

    let checkBoxArray = ['Onion Pizza', 'Tomato Pizza', 'Oliva Pizza', 'Mashroom Pizza', 'Pepper Image'];

    let outputCheckboxes = checkBoxArray.map(function (string, i) {
      return (<div>
        <CheckBox value={string} id={'string_' + i} onChange={this.changeEvent.bind(this)} />
        <label htmlFor={'string_' + i}>{string}</label>
        <img src={require('../Images/olive.jpg')} alt="" />
        </div>)
    }, this);

    return (
      <div>
        <div>
          {outputCheckboxes}
        </div>
        <div>
          {JSON.stringify(this.state.optionsChecked)}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  createReducer: state.createReducer
});

const mapDispathToProps = dispatch => ({
  values: bindActionCreators(action, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispathToProps
)(Create);
