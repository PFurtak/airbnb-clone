import React from 'react';
import { Card, Layout, Typography } from 'antd';

const { Content } = Layout;
const { Text, Title } = Typography;

export const Login = () => {
  return (
    <Content className='log-in'>
      <Card className='log-in-card'>
        <div className='log-in-card__intro'>
          <Title level={3} className='log-in-card__intro-title'>
            <span role='img' aria-label='wave'>
              👋
            </span>
          </Title>
          <Title level={3} className='log-in-card__intro-title'>
            Log in to bnb clone!
          </Title>
          <Text>Sign in with Google to start booking rentals</Text>
        </div>
        <button className='log-in-card__google-button'>
          Sign in with Google
        </button>
        <Text type='secondary'>
          Note: By signing in, you'll be redirected to the Google consent form
          to sign in with your Google account.
        </Text>
      </Card>
    </Content>
  );
};
