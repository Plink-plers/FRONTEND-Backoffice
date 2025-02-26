"use client";

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styled from '@emotion/styled';
import * as Typography from '@/app/typography';

const TabMenuContainer = styled.div`
  display: flex;
  width: 100vw;
  padding: 0rem 5rem;
  align-items: center;
  flex-direction: row;
  gap: 0;
`;

interface TabItemProps {
  isSelected: boolean;
}

const TabItem = styled.div<TabItemProps>`
  display: flex;
  padding: 0.875rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  flex: 1 0 0;
  border-bottom: 1px solid var(--gray-scale-60);
  cursor: pointer;
  transition: all 0.3s ease;

  ${(props) =>
    props.isSelected &&
    `
      border-bottom: 4px solid var(--primary-color-60);
      font-weight: bold;
      color: var(--primary-color-60);
  `}
  ${Typography.Title5}
`;

const TabMenu: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('회원 승인 요청');
  const pathname = usePathname();
  const router = useRouter();

  // 페이지 경로에 따라 탭을 선택
  useEffect(() => {
    const path = window.location.pathname;

    if (path.includes('management')) {
      setSelectedTab('회원 승인 요청');
    } else if (path.includes('approval-request')) {
      setSelectedTab('프레젠테이션 승인 요청');
    } else if (path.includes('summit-approval')) {
      setSelectedTab('써밋 생성 승인 요청');
    }
  }, [pathname]);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);

    if (tab === '회원 승인 요청') {
      router.push('/management');
    } else if (tab === '프레젠테이션 승인 요청') {
      router.push('/approval-request');
    } else if (tab === '써밋 생성 승인 요청') {
      router.push('/summit-approval');
    }
  };

  const tabs = ["회원 승인 요청", "프레젠테이션 승인 요청", "써밋 생성 승인 요청"];

  return (
    <TabMenuContainer>
      {tabs.map((tab, index) => (
        <TabItem
          key={index}
          isSelected={tab === selectedTab}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </TabItem>
      ))}
    </TabMenuContainer>
  );
};

export default TabMenu;
