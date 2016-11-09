import React, {Component} from "react";

let RED = 'ff4646';
let ORANGE = 'ffa734';
let PALE_YELLOW = 'fffdd9';

//F	 'Currently on the Final NPL'
//N	 'Not on the NPL'
//P	 'Proposed for NPL'
//R	 'Removed from Proposed NPL'
//A	 'Site is Part of NPL Site'
//D	 'Deleted from the Final NPL'
//W	 'Withdrawn'


class Legend extends Component {
  render() {
    var legendItems = [
    {key: 1, color: RED, label: 'On NPL'},
    {key: 2, color: ORANGE, label: 'Not on NPL'},
    {key: 3, color: PALE_YELLOW, label: 'Deleted from NPL'}
    ];
    return (
        <div id="legend">
            <h2>LEGEND</h2>
            {legendItems.map(function(item) {
                return (
                    <div>
                        <img src={"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + item.color} />
                        {item.label}
                    </div>
                );
            })}

        </div>
    );
  }
}

export default Legend;
