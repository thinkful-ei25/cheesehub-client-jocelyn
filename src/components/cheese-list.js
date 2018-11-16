/* eslint-disable react/require-render-return */
/* eslint-disable no-unused-expressions */

import React from 'react'; 
import { fetchCheeses } from '../actions/cheese';
import {connect} from 'react-redux'; 


class CheeseList extends React.Component {

    componentDidMount(){
      this.props.dispatch(fetchCheeses());
    }

    render(){
      const cheeses = this.props.cheeses.map((cheese, i) => 
      
          <li key={i}>{cheese}</li>
        
      );
      return(
        <ul>{cheeses}</ul>
      )
    }
  }
  
  const mapStateToProps = (state) => {
    return ({
      cheeses: state.cheeses
    });
  }
  
  export default connect(mapStateToProps)(CheeseList);

