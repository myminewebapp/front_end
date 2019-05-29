import React , {Component} from 'react'
import Popup from 'reactjs-popup'

import app from './App.css'

class popup extends Component {
  
  render(props) {

      return (
        <div
        style={{ height: 200, width: 400, border: '1px solid #ccc' }}
        className={'tooltipBoundary'}
      >
        <Popup 
        
        style = {App.card}
          trigger={<button className="card" style = {App.card}> Trigger 1 </button>}
          position={['top center', 'bottom right', 'bottom left']}
          closeOnDocumentClick
          keepTooltipInside=".tooltipBoundary"
        />
      </div>
      );
  }
}
export default App;