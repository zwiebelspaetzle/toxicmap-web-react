import React, {Component} from "react";

class Legend extends Component {
  render() {
    return (

        //F	 'Currently on the Final NPL'
        //N	 'Not on the NPL'
        //P	 'Proposed for NPL'
        //R	 'Removed from Proposed NPL'
        //A	 'Site is Part of NPL Site'
        //D	 'Deleted from the Final NPL'
        //W	 'Withdrawn'


        <div id="legend">
            <h2>LEGEND</h2>

            {% for item in legendItems %}
                <div>
                    <img src="http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|{{ item.color }}" />
                    {{ item.label }}
                </div>
            {% endfor %}
        </div>

    );
  }
}

export default Legend;
