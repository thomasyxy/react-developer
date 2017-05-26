import React from 'react'
import PropTypes from 'prop-types'
import assign from 'object-assign'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu
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
            {
              Config.MENUDATA.data.map((i, index1) =>
                <SubMenu
                  className="menu-sub"
                  key={`sub${index1}`}
                  title={<span><Icon type={activitySubIndex[0] === `sub${index1}` ? 'caret-down' : 'caret-right'} /><span className="nav-text">{i.title}</span></span>}
                >
                  {
                    i.list & i.list.map((j, index2) =>
                      <Menu.Item className="menu-item" key={`item${index2}`}>
                        <Icon type="file" />
                        <span className="nav-text">{j.title}</span>
                      </Menu.Item>
                    )
                  }
                </SubMenu>
              )
            }
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
