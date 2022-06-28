import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  background-color: #f5f5f5;
`;

export const Buildings = styled.header`
  display: flex;
  background-color: #ddd;
`;

type BuildingButtonProps = {
  selected: boolean;
}

export const BuildingButton = styled.button<BuildingButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  cursor: pointer;

  border: 0;
  background-color: ${props => props.selected ? '#f5f5f5' : '#ddd'};

  &:hover {
    background-color: ${props => props.selected ? '#f5f5f5' : '#d0d0d0'};;
  }
`;

export const BuildingData = styled.div`
  min-height: 300px;
  background-color: #f5f5f5;

  padding: 8px;
`;
