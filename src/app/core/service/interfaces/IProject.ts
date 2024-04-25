export interface IProject {
  name: string;
  description: string;
  tasks: Itask[];
}

export interface Itask {
  name: string;
  description: string;
  status: string;
}
