import React from 'react'
import PropTypes from 'prop-types'
import assign from 'object-assign'
import Config from '../../config'
import './CoreLayout.scss'
import '../../styles/core.scss'

class CoreLayout extends React.Component {
  constructor (props) {
    super(props)
    this.state = assign({}, props, {
      collapsed: false,
      mode: 'inline',
      activitySubIndex: ['sub0']
    })
  }
  onHandleToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  onOpenChange = (openKeys) => {
    if(openKeys.length > 1) {
      openKeys.shift()
    }
    this.setState({
      activitySubIndex: openKeys
    })
  }
  render() {
    const {
      collapsed,
      activitySubIndex
    } = this.state

    return (
      <div></div>
    );
  }
}

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CoreLayout
