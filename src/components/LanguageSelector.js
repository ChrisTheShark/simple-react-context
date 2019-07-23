import React, { Component } from "react";
import LanguageContext from "../context/LanguageContext";

class LanguageSelector extends Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        Select a Language:
        <i
          className="flag us"
          onClick={() => {
            this.context.onChange("english");
          }}
        />
        <i
          className="flag nl"
          onClick={() => {
            this.context.onChange("dutch");
          }}
        />
      </div>
    );
  }
}

export default LanguageSelector;
