import { Status } from "./status.enum";

export interface Task {
    id: string;
    name: string;
    description: string;
    status: Status;
    assignedTo: string;
}
