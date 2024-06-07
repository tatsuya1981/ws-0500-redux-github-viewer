import styled from "styled-components";

export const Profile = () => {
  return (
  <SUserContainer>
    <SUserWrapper>
      <SProfileTitle>Profile</SProfileTitle>
      <SUserProfileContainer>
        <div>
          <div>
            <label>プロフィール</label>
            <p><img src="../../../00005429_ca15a5.jpg" /></p>
          </div>
        </div>
        <div>
          <div>
            <label>ユーザ名</label>
            <p>test</p>
          </div>
          <div>
            <label>メールアドレス</label>
            <p>test@example.com</p>
          </div>
        </div>
      </SUserProfileContainer>
    </SUserWrapper>
  </SUserContainer>
);
};

const SUserContainer = styled.div`
max-width: 896px;
margin: 0 auto;
padding: 32px 16px;
`

const SUserWrapper = styled.div`
padding: 16px;
margin: auto;
`

const SProfileTitle = styled.h1`
font-size: 2rem;
padding: 0px;
margin: 0px;
`

const SUserProfileContainer = styled.div`
margin: 32px 0;
display: flex;
border-radius: 6px;
border: 1px solid rgb(225, 228, 232);
`