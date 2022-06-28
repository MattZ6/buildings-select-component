import { Container, Name, Ocupation } from './styles';

type Room = {
  id: string;
  number: string;
  capacity: number;
  ocupation: number;
}

type Props = {
  buildingTitle: string;
  room: Room;
}

export function BuildingCardRoom({ buildingTitle, room }: Props) {
  return (
    <Container>
      <Name>Sala { buildingTitle }-{ room.number }</Name>
      <Ocupation>{ room.ocupation }/{ room.capacity } ({ Math.round((room.ocupation / room.capacity) * 100) }%)</Ocupation>
    </Container>
  );
}
