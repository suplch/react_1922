import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import { menus } from './menus';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export class Frame extends React.Component {


    render() {
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
                            <Menu.Item key={subItem.id}>{ subItem.text}</Menu.Item>
                            )
                        })
                    }
                </SubMenu>
            )
        });
        return (
            <Layout>
                <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                </Header>
                <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
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
                    { this.props.children }
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        )
    }
}