import {
  UserOutlined,
  UsergroupAddOutlined,
  DesktopOutlined,
  NotificationOutlined,
  BarChartOutlined,
  EyeOutlined,
  HeartOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';

export default {
  ADMIN: [
    {
      key: 'profile',
      to: '/dashboard/profile',
      icon: UserOutlined,
      content: 'Thông tin cá nhân',
    },
    {
      key: 'motel-post',
      to: '/dashboard/motel-post',
      icon: DesktopOutlined,
      content: 'Quản lý bài đăng',
    },
    {
      key: 'user',
      to: '/dashboard/user',
      icon: UsergroupAddOutlined,
      content: 'Quản lý người dùng',
    },
    {
      key: 'notification',
      to: '/dashboard/notification',
      icon: NotificationOutlined,
      content: 'Quản lý thông báo',
    },
    {
      key: 'static',
      to: '/dashboard/static',
      icon: BarChartOutlined,
      content: 'Thống kê',
    },
    {
      key: 'credit',
      to: '/dashboard/credit',
      icon: CreditCardOutlined,
      content: 'Thanh toán',
    },
  ],

  RENTER: [
    {
      key: 'profile',
      to: '/dashboard/profile',
      icon: UserOutlined,
      content: 'Thông tin cá nhân',
    },
    {
      key: 'favourite-motel-post',
      to: '/dashboard/favourite-motel-post',
      icon: HeartOutlined,
      content: 'Bài viết yêu thích',
    },
  ],

  OWNER: [
    {
      key: 'profile',
      to: '/dashboard/profile',
      icon: UserOutlined,
      content: 'Thông tin cá nhân',
    },
    {
      key: 'motel-post',
      to: '/dashboard/motel-post',
      icon: DesktopOutlined,
      content: 'Quản lý bài đăng',
    },
    {
      key: 'notification',
      to: '/dashboard/notification',
      icon: NotificationOutlined,
      content: 'Quản lý thông báo',
    },
    {
      key: 'static',
      to: '/dashboard/static',
      icon: BarChartOutlined,
      content: 'Thống kê',
    },
    {
      key: 'credit',
      to: '/dashboard/credit',
      icon: CreditCardOutlined,
      content: 'Thanh toán',
    },
  ],
};
