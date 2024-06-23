import styled from 'styled-components';

export const HeaderTag = ({ activeTab, onTabClick }) => {
  return (
    <SHeaderTagWrapper>
      <SHeaderTagLeft $active={activeTab === 'issue'} onClick={() => onTabClick('issue')}>
        <SHeaderTagSpan>Issue</SHeaderTagSpan>
      </SHeaderTagLeft>
      <SHeaderTagRight $active={activeTab === 'pullRequest'} onClick={() => onTabClick('pullRequest')}>
        <SHeaderTagSpan>Pull Request</SHeaderTagSpan>
      </SHeaderTagRight>
    </SHeaderTagWrapper>
  );
};

const SHeaderTagWrapper = styled.ul`
  display: flex;
  padding: 0px;
  margin: 0px;
`;

const SHeaderTagLeft = styled.li`
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
  border-top: ${(props) => (props.$active ? `1px solid rgb(225, 228, 232)` : `initial`)};
  border-right: ${(props) => (props.$active ? `1px solid rgb(225, 228, 232)` : `initial`)};
  border-left: ${(props) => (props.$active ? `1px solid rgb(225, 228, 232)` : `initial`)};
  border-bottom: ${(props) => (props.$active ? `initial` : `1px solid rgb(225, 228, 232)`)};
  background-color: ${(props) => (props.$active ? `rgb(240, 246, 252)` : `initial`)};
  border-radius: 6px 6px 0px 0px;
  list-style-type: none;
`;

const SHeaderTagRight = styled.li`
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
  border-top: ${(props) => (props.$active ? `1px solid rgb(225, 228, 232)` : `initial`)};
  border-right: ${(props) => (props.$active ? `1px solid rgb(225, 228, 232)` : `initial`)};
  border-left: ${(props) => (props.$active ? `1px solid rgb(225, 228, 232)` : `initial`)};
  border-bottom: ${(props) => (props.$active ? `initial` : `1px solid rgb(225, 228, 232)`)};
  background-color: ${(props) => (props.$active ? `rgb(240, 246, 252)` : `initial`)};
  border-radius: 6px 6px 0px 0px;
  list-style-type: none;
`;

const SHeaderTagSpan = styled.span`
  cursor: pointer;
  color: rgb(88, 96, 105);
  padding: 16px;
  display: block;
  width: 100%;
`;
