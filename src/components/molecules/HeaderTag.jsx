import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { activeTag } from "../../redux/headerTagSlice";

export const HeaderTag = () => {
  const active = useSelector((state) => state.headerTag.isStateActive);
  const dispatch = useDispatch();

const onClickTag = () => {
  dispatch(activeTag());
};

  return(
    <div>
    <SHeaderTagWrapper>
      <SHeaderTagLeft active={active} onClick={onClickTag} ><SHeaderTagSpan>Issue</SHeaderTagSpan></SHeaderTagLeft>
      <SHeaderTagRight active={active} onClick={onClickTag} ><SHeaderTagSpan>Pull Request</SHeaderTagSpan></SHeaderTagRight>
    </SHeaderTagWrapper>
    </div>
  )
}

const SHeaderTagWrapper = styled.ul`
display: flex;
padding: 0px;
margin: 0px;
`

const SHeaderTagLeft = styled.li`
font-size: 1.2rem;
width: 100%;
text-align: center;
border-top: ${(props) => props.active? `1px solid rgb(225, 228, 232)`: `initial`};
border-right: ${(props) => props.active? `1px solid rgb(225, 228, 232)`: `initial`};
border-left: ${(props) => props.active? `1px solid rgb(225, 228, 232)`: `initial`};
border-bottom: ${(props) => props.active? `initial`: `1px solid rgb(225, 228, 232)`};
border-radius:6px 6px 0px 0px;
list-style-type: none;
`

const SHeaderTagRight = styled.li`
font-size: 1.2rem;
width: 100%;
text-align: center;
border-top: ${(props) => props.active? `initial`: `1px solid rgb(225, 228, 232)`};
border-right: ${(props) => props.active? `initial`: `1px solid rgb(225, 228, 232)`};
border-left: ${(props) => props.active? `initial`: `1px solid rgb(225, 228, 232)`};
border-bottom: ${(props) => props.active? `1px solid rgb(225, 228, 232)`: `initial`};
border-radius:6px 6px 0px 0px;
list-style-type: none;
`

const SHeaderTagSpan = styled.span`
cursor: pointer;
color: rgb(88, 96, 105);
padding: 16px;
display: block;
width: 100%;
`