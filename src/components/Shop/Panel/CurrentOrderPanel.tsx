import React from 'react';
import styled from 'styled-components';
import { Table } from 'antd';

export const CurrentOrderPanel = () => {
  const columns = [
    {
      title: '이름',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '꽃다발',
      dataIndex: 'bouquet',
      key: 'bouquet',
    },
    {
      title: '꽃',
      dataIndex: 'flower',
      key: 'flower',
    },
    {
      title: '꽃 수량',
      dataIndex: 'flower_count',
      key: 'flower_count',
    },
    {
      title: '리본',
      dataIndex: 'ribbon',
      key: 'ribbon',
    },
    {
      title: '포장지',
      dataIndex: 'wrappingPaper',
      key: 'wrappingPaper',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      bouquet: '풍선 꽃다발',
      flower: '튤립',
      flower_count: 3,
      ribbon: '하얀색',
      wrappingPaper: '검정색',
    },
    {
      key: '2',
      name: 'John Brown',
      bouquet: '풍선 꽃다발',
      flower: '튤립',
      flower_count: 3,
      ribbon: '하얀색',
      wrappingPaper: '검정색',
    },
    {
      key: '3',
      name: 'John Brown',
      bouquet: '풍선 꽃다발',
      flower: '튤립',
      flower_count: 3,
      ribbon: '하얀색',
      wrappingPaper: '검정색',
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};
