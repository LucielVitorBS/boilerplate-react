import { connect } from 'react-redux'
import { Page } from './page-view'
import { selectState } from './page-state'

const mapStateToProps = state => ({
   state: selectState(state)
})

const mapActionsToProps = {}

export default connect(
   mapStateToProps,
   mapActionsToProps,
)(Page)
