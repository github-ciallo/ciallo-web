import { DashboardOutlined } from '@ant-design/icons';
import { Divider, Layout, Menu, Space, theme, Typography } from 'antd';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './index.module.less';

const { Header, Footer, Sider, Content } = Layout;

export default function Page() {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(c) => setCollapsed(c)}>
        <div className={styles.logo} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/dashboard']}
          items={[
            {
              key: '/dashboard',
              icon: <DashboardOutlined />,
              label: '工作台',
            },
          ]}
          onClick={(info) => {
            const { key } = info;
            navigate(key);
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 24px 0 24px' }}>
          <div className={styles.content}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <Space split={<Divider type="vertical" />}>
            <Typography.Text>Coperator ©2023 Created by Kira (ch1ny)</Typography.Text>
            <Typography.Link href="https://beian.miit.gov.cn/" target="_blank">
              赣ICP备2021007955号-3
            </Typography.Link>
          </Space>
        </Footer>
      </Layout>
    </Layout>
  );
}
