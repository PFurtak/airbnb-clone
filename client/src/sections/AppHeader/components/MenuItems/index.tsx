import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { Avatar, Button, Menu } from 'antd';
import { LOG_OUT } from '../../../../lib/graphql/mutations/LogOut';
import { LogOut as LogOutData } from '../../../../lib/graphql/mutations/LogOut/__generated__/LogOut';
import { HomeOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import {
  displaySuccessNotification,
  displayErrorMessage,
} from '../../../../lib/utils';
import { Viewer } from '../../../../lib/types/types';

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

const { Item, SubMenu } = Menu;

export const MenuItems = ({ viewer, setViewer }: Props) => {
  const [logOut] = useMutation<LogOutData>(LOG_OUT, {
    onCompleted: (data) => {
      if (data && data.logOut) {
        setViewer(data.logOut);
        displaySuccessNotification('You have been logged out.');
      }
    },
    onError: () => {
      displayErrorMessage(
        'Sorry, we were unable to log you out, please try again.'
      );
    },
  });

  const handleLogOut = () => {
    logOut();
  };

  const subMenuLogin =
    viewer.id && viewer.avatar ? (
      <SubMenu title={<Avatar src={viewer.avatar} />}>
        <Item key='/user'>
          <Link to={`/user/${viewer.id}`}>
            <UserOutlined />
            Profile
          </Link>
        </Item>
        <Item key='/logout'>
          <div onClick={handleLogOut}>
            <LogoutOutlined />
            Log Out
          </div>
        </Item>
      </SubMenu>
    ) : (
      <Item>
        <Link to='/login'>
          <Button type='primary'>Sign In</Button>
        </Link>
      </Item>
    );

  return (
    <Menu mode='horizontal' selectable={false} className='menu'>
      <Item key='/host'>
        <Link to='/host'>
          <HomeOutlined />
          Host
        </Link>
      </Item>
      {subMenuLogin}
    </Menu>
  );
};
