import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #282c34;
  color: white;
`;

export const SubContainer = styled.div`
  display: flex;
  height: 80vh;
  border: 1px solid grey;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  color: white;
`;

export const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 34px;
  text-decoration: underline;
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: space-around;
  width: 450px;
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  border-radius: 20px;
  border: none;
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  border-radius: 20px;
  margin: 0 5px;
`;

export const List = styled.li`
  border-radius: 50px;
  margin: 10px 0;
  background-color: #5dadf8;
  padding: 10px 20px;
  display: flex;
  width: 450px;
  align-items: center;
`;

export const TodoText = styled.span`
  flex: 1;
`;

export const ListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
