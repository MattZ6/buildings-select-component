import { useEffect, useState } from 'react';
import { Card, Buildings, BuildingButton, BuildingData } from './styles';

import { BuildingCardRoom } from './components/Room';

type Room = {
  id: string;
  number: string;
  capacity: number;
  ocupation: number;
}

type Building = {
  id: string;
  title: string;
  rooms: Room[];
}

const BUILDINGS: Building[] = [
  {
    id: 'building-1',
    title: 'C',
    rooms: [
      { id: 'room-1', number: '02', capacity: 40, ocupation: 32 },
      { id: 'room-2', number: '04', capacity: 60, ocupation: 28 },
      { id: 'room-3', number: '13', capacity: 20, ocupation: 20 },
    ]
  },
  {
    id: 'building-2',
    title: 'D',
    rooms: [
      { id: 'room-1', number: '02', capacity: 40, ocupation: 32 },
      { id: 'room-3', number: '13', capacity: 20, ocupation: 20 },
    ]
  },
  {
    id: 'building-3',
    title: 'E',
    rooms: [
      { id: 'room-3', number: '13', capacity: 20, ocupation: 20 },
    ]
  },
  {
    id: 'building-4',
    title: 'F',
    rooms: [
      { id: 'room-1', number: '02', capacity: 40, ocupation: 32 },
      { id: 'room-2', number: '04', capacity: 60, ocupation: 28 },
      { id: 'room-3', number: '13', capacity: 20, ocupation: 20 },
    ]
  },
  {
    id: 'building-5',
    title: 'G',
    rooms: [
      { id: 'room-1', number: '02', capacity: 40, ocupation: 32 },
      { id: 'room-3', number: '13', capacity: 20, ocupation: 20 },
    ]
  },
  {
    id: 'building-6',
    title: 'H',
    rooms: [
      { id: 'room-3', number: '13', capacity: 20, ocupation: 20 },
    ]
  },
];

export function BuildingCard() {
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [selectedBuilding, setSelectedBuilding] = useState<Building | undefined>();

  useEffect(() => {
    // Carregar prédios da API

    const apiResponse = BUILDINGS;

    setBuildings(apiResponse);
    setSelectedBuilding(apiResponse[0]);
  }, []);

  return (
    <Card>
      {/* Cabeçalho */}
      <Buildings>
        { buildings.map(building => (
          <BuildingButton
            key={building.id}
            onClick={() => setSelectedBuilding(building)}
            selected={building.id === selectedBuilding?.id}
          >
            { building.title }
          </BuildingButton>
        )) }
      </Buildings>

      {/* Conteúdo */}
      <BuildingData>
        { !selectedBuilding && <span>Por favor, selecione um prédio</span> }


        { selectedBuilding && <strong>Prédio { selectedBuilding.title }</strong> }
        { selectedBuilding && selectedBuilding.rooms.map(room => (
          <BuildingCardRoom key={room.id} buildingTitle={selectedBuilding.title} room={room} />
        )) }

        {/* { selectedBuilding && selectedBuilding.rooms.map(room => (
          <p>Sala { selectedBuilding.title }-{ room.number } - { room.ocupation }/{ room.capacity }({ Math.round((room.ocupation / room.capacity) * 100) }%)</p>
        )) } */}
      </BuildingData>
    </Card>
  );
}
