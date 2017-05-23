import React from 'react'
import PropTypes from 'prop-types'
import assign from 'object-assign'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu
// import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'

class CoreLayout extends React.Component {
  constructor (props) {
    super(props)
    this.state = assign({}, props, {
      collapsed: false,
      mode: 'inline',
      activitySubIndex: ['sub1']
    })
  }
  onHandleToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  onOpenChange = (openKeys) => {
    openKeys.length > 1 && openKeys.shift()
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
      <Layout className="sentry-layout">
        <Sider
          className="sentry-sider"
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="menu-controler" onClick={this.onHandleToggle}>
            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
          </div>
          <Menu
            className="sentry-menu"
            mode="inline"
            inlineIndent={16}
            openKeys={activitySubIndex}
            onOpenChange={this.onOpenChange}
          >
            <SubMenu
              className="menu-sub"
              key="sub1"
              title={<span><Icon type="caret-down" /><span className="nav-text">前端监控室</span></span>}
            >
              <Menu.Item className="menu-item" key="1">
                <Icon type="file" />
                <span className="nav-text">Issues</span>
              </Menu.Item>
              <Menu.Item className="menu-item" key="2">
                <Icon type="file" />
                <span className="nav-text">Overview</span>
              </Menu.Item>
              <Menu.Item className="menu-item" key="3">
                <Icon type="file" />
                <span className="nav-text">UserFeedback</span>
              </Menu.Item>
              <Menu.Item className="menu-item" key="4">
                <Icon type="file" />
                <span className="nav-text">Releases</span>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              className="menu-sub"
              key="sub2"
              title={<span><Icon type="caret-down" /><span className="nav-text">Team</span></span>}
            >
              <Menu.Item className="menu-item" key="6">
                <Icon type="file" />
                <span className="nav-text">File</span>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="sentry-content-layout">
          <Content className="sentry-content">
            <div>
              Bill is a cat.
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CoreLayout
