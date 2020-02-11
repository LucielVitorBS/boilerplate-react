import { connect } from 'react-redux'
import { Content } from './content-view'
import {selectState} from './content-state'

const mapStateToProps = state => ({
  state: selectState(state),
})

const mapActionsToProps = {}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Content)
