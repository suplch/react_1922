import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import Cookie from 'js-cookie';

import { menus, findItemByPath } from './menus';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Frame extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        console.log(this.props.location.pathname)
    }

    logout = () => {
        Cookie.remove('token', { path: '/' });
        window.location.hash = '#/login'
    }

    menuClick = (subItem) => {

        
        this.props.history.push(subItem.path);
    }

    render() {
        const { menuId, itemId } = findItemByPath(this.props.location.pathname)
        console.log(this.props.location.pathname);
        console.log(menuId, itemId)
        const subMenuEls = menus.map((menuItem) => {
            return (
                <SubMenu
                    key={menuItem.id}
                    title={
                    <span>
                        <Icon type="user" />
                        { menuItem.text }
                    </span>
                    }
                >
                    {
                        menuItem.subItems.map((subItem) => {
                            return (
                                <Menu.Item onClick={ () => this.menuClick(subItem) } key={subItem.id}>
                                    { subItem.text}
                                </Menu.Item>
                            )
                        })
                    }
                </SubMenu>
            )
        });
        return (
            <Layout style={ {height: '100%'} }>
                <Header className="header">
                    <div className="logo" />
                    <Button onClick={this.logout}>登出</Button>
                </Header>
                <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    defaultOpenKeys={[ menuId ]}
                    defaultSelectedKeys={[ itemId ]}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                        { subMenuEls }
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                    >
                        {/* 相当于 vue slot */}
                    { this.props.children }
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(Frame)