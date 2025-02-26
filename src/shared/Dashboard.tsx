import { useState } from 'react';
import styled from '@emotion/styled';
import * as Typography from '@/app/typography';
import { Title5 } from '@/app/typography';

const BoardContainer = styled.div`
  width: 100vw;
  padding: 0rem 5rem;
  color: var(--gray-scale-100);
  margin: 2rem 0 3.75rem 0;
`;

const BoardTitle = styled(Title5)`
  margin: 2.25rem 0 1.75rem 0;
`;

const BoardItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  padding: 1.22rem 0;
  border-bottom: 2px solid var(--gray-scale-70); /* 레이블 항목에 두께 2px */
  background: var(--common-white);
  align-items: center;
`;

const BoardItemRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  padding: 1.22rem 0;
  border-bottom: 1px solid var(--gray-scale-30); /* 항목 항목에 두께 1px */
  background: var(--common-white);
  align-items: center;
`;

const BoardItem = styled.div<{ flex?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: ${({ flex }) => (flex ? flex : 1)};
  ${Typography.Title7}
`;

const IconWrapper = styled.div`
  margin-right: 0.5rem;
  cursor: pointer;
`;

const BoardList = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoardItemRow = ({ data, isPresentation }: { data: any, isPresentation?: boolean }) => {
  return (
    <BoardItemRowContainer>
      {!isPresentation && (
        <>
          <BoardItem flex={1}>{data.requestId}</BoardItem>
          <BoardItem flex={1}>{data.userType}</BoardItem> 
          <BoardItem flex={1}>{data.name}</BoardItem>
          <BoardItem flex={1}>{data.phone}</BoardItem> 
          <BoardItem flex={1.5}>{data.company}</BoardItem> 
          <BoardItem flex={1}>
            <IconWrapper>
              {data.attachment && (
                <img src="icons/Link.svg" alt="재직 증명서" width="16" height="16" />
              )}
            </IconWrapper>
          </BoardItem>
          <BoardItem flex={1.5}>{data.email}</BoardItem>
          <BoardItem flex={1}>{data.requestDate}</BoardItem>
          <BoardItem flex={1}>{data.status}</BoardItem>
        </>
      )}

      {isPresentation && (
        <>
          <BoardItem flex={1}>{data.requestId}</BoardItem>
          <BoardItem flex={1}>{data.name}</BoardItem>
          <BoardItem flex={1.5}>{data.ptName}</BoardItem>
          <BoardItem flex={1}>
            <IconWrapper>
              {data.oneMinPresentation && (
                <img src="icons/Link.svg" alt="1분 프레젠테이션 링크" width="16" height="16" />
              )}
            </IconWrapper>
          </BoardItem>
          <BoardItem flex={1}>
            <IconWrapper>
              {data.fullPresentation && (
                <img src="icons/Link.svg" alt="전체 프레젠테이션 링크" width="16" height="16" />
              )}
            </IconWrapper>
          </BoardItem>
          <BoardItem flex={1}>
            <IconWrapper>
              {data.onePagerBusinessPlan && (
                <img src="icons/Folder.svg" alt="원페이퍼 사업기획서" width="16" height="16" />
              )}
            </IconWrapper>
          </BoardItem>
          <BoardItem flex={1}>
            <IconWrapper>
              {data.businessPlan && (
                <img src="icons/Folder.svg" alt="사업 기획서" width="16" height="16" />
              )}
            </IconWrapper>
          </BoardItem>
          <BoardItem flex={1}>
            <IconWrapper>
              {data.pitchDeck && (
                <img src="icons/Folder.svg" alt="피치덱" width="16" height="16" />
              )}
            </IconWrapper>
          </BoardItem>
          <BoardItem flex={1}>
            <IconWrapper>
              {data.traction && (
                <img src="icons/Folder.svg" alt="트렉션" width="16" height="16" />
              )}
            </IconWrapper>
          </BoardItem>
          <BoardItem flex={1}>{data.requestDate}</BoardItem>
          <BoardItem flex={1}>{data.status}</BoardItem>
        </>
      )}
    </BoardItemRowContainer>
  );
};

interface DashboardProps {
  selectedTab: string;
}

const Dashboard: React.FC<DashboardProps> = ({ selectedTab }) => {
  const memberDataList = [
    {
      requestId: 'T0161AS15',
      userType: '투자자',
      name: '홍길동',
      phone: '010-2701-4674',
      company: '미래에셋투자증권',
      attachment: true,
      email: 'example@google.com',
      requestDate: '2025-01-09',
      status: '-',
    },
    {
      requestId: 'T0161AS16',
      userType: '개인투자자',
      name: '김철수',
      phone: '010-1234-5678',
      company: '삼성증권',
      attachment: true,
      email: 'example2@google.com',
      requestDate: '2025-01-10',
      status: 'Y',
    },
    {
      requestId: 'T0161AS17',
      userType: '기업',
      name: '이영희',
      phone: '010-9876-5432',
      company: '네이버',
      attachment: true,
      email: 'example3@google.com',
      requestDate: '2025-01-11',
      status: 'N',
    },
  ];

  const presentationDataList = [
    {
      requestId: 'P0161AS16',
      name: '이몽룡',
      ptName: '사업 발표',
      oneMinPresentation: true,
      fullPresentation: true, 
      onePagerBusinessPlan: true,
      businessPlan: true,
      pitchDeck: true,
      traction: true,
      requestDate: '2025-01-10',
      status: '-',
    },
    {
      requestId: 'P0161AS17',
      name: '김철수',
      ptName: '기술 발표',
      oneMinPresentation: true,
      fullPresentation: true, 
      onePagerBusinessPlan: true,
      businessPlan: true,
      pitchDeck: true,
      traction: true,
      requestDate: '2025-01-11',
      status: 'Y',
    },
    {
      requestId: 'P0161AS18',
      name: '박지민',
      ptName: '마케팅 발표',
      oneMinPresentation: true,
      fullPresentation: true, 
      onePagerBusinessPlan: true,
      businessPlan: true,
      pitchDeck: true,
      traction: true,
      requestDate: '2025-01-12',
      status: 'N',
    },
  ];

  return (
    <BoardContainer>
      <BoardTitle>{selectedTab} 보드</BoardTitle>
      <BoardList>
        {selectedTab === '회원 승인 요청' && (
          <>
            <BoardItemContainer>
              <BoardItem flex={1}>요청 번호</BoardItem>
              <BoardItem flex={1}>사용자 유형</BoardItem>
              <BoardItem flex={1}>이름</BoardItem>
              <BoardItem flex={1}>전화번호</BoardItem>
              <BoardItem flex={1.5}>소속/회사</BoardItem>
              <BoardItem flex={1}>재직 증명서</BoardItem>
              <BoardItem flex={1.5}>회사 이메일</BoardItem>
              <BoardItem flex={1}>요청일</BoardItem>
              <BoardItem flex={1}>수락 여부</BoardItem>
            </BoardItemContainer>
            {memberDataList.map((data, index) => (
              <BoardItemRow key={index} data={data} />
            ))}
          </>
        )}

        {selectedTab === '프레젠테이션 승인 요청' && (
          <>
            <BoardItemContainer>
              <BoardItem flex={1}>요청 번호</BoardItem>
              <BoardItem flex={1}>이름</BoardItem>
              <BoardItem flex={1.5}>PT명</BoardItem>
              <BoardItem flex={1}>1분 프레젠테이션</BoardItem>
              <BoardItem flex={1}>전체 프레젠테이션</BoardItem>
              <BoardItem flex={1}>원페이퍼 사업기획서</BoardItem>
              <BoardItem flex={1}>사업 기획서</BoardItem>
              <BoardItem flex={1}>피치덱</BoardItem>
              <BoardItem flex={1}>트렉션</BoardItem>
              <BoardItem flex={1}>요청일</BoardItem>
              <BoardItem flex={1}>수락 여부</BoardItem>
            </BoardItemContainer>
            {presentationDataList.map((data, index) => (
              <BoardItemRow key={index} data={data} isPresentation />
            ))}
          </>
        )}
      </BoardList>
    </BoardContainer>
  );
};

export default Dashboard;
