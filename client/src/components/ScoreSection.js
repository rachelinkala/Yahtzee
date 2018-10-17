import React from 'react'
import ScoreRow from './ScoreRow'
import { List, Header, Divider, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'

class ScoreSection extends React.Component {
  
}

const mapStateToProps = (state) => {
  return { currentGame: state.currentGame }
}

export default connect(mapStateToProps)(ScoreSection)
