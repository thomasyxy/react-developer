import React from 'react'
import PropTypes from 'prop-types'
import assign from 'object-assign'
import { Layout, Menu, Icon } from 'antd'
const { Header, Content, Footer, Sider } = Layout
// import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'

class CoreLayout extends React.Component {
  constructor (props) {
    super(props);
    this.state = assign({}, props, {
      collapsed: true
    });
  }
  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">nav 4</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              content
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
// export const CoreLayout = ({ children }) => (
//   <div className='container text-center'>
//     <Header />
//     <div className='core-layout__viewport'>
//       {children}
//     </div>
//   </div>
// )

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CoreLayout
