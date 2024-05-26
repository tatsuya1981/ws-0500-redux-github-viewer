import styled from "styled-components";
import { DeleteButton } from "../atoms/button/DeleteButton";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const IssueButtons = () => {
  return (
    <Scontainer>
      <PrimaryButton>New</PrimaryButton>
      <DeleteButton>Delete</DeleteButton>
    </Scontainer>
  );
};

const Scontainer = styled.div`
font-family: "Lato", sans-serif;
display: flex;
`