// used to set the standings display settings
export const buttonOptions: ButtonOption[] = [
  { name: "wildcard", id: 1 },
  { name: "division", id: 2 },
  { name: "conference", id: 3 },
  { name: "league", id: 4 },
];

export interface ButtonOption {
  name: string;
  id: number;
}
