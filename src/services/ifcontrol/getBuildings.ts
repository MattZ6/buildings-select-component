import { ifControlService } from "./config";

export namespace GetBuildingsService {
  export type Building = {
    id: string;
    name: string;
  }

  export async function execute() {
    const { data } = await ifControlService.get<Building[]>('/v1/buildings');

    return data;
  }
}

