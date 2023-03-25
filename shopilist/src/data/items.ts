export interface ShopilistItemModel {
  id: number;
  name: string;
  bought: boolean;
}

const items: ShopilistItemModel[] = [
  {
    id: 1,
    name: "Bread",
    bought: false,
  },
  {
    id: 2,
    name: "Butter",
    bought: false,
  },
  {
    id: 3,
    name: "Cheese",
    bought: false,
  },
  {
    id: 4,
    name: "Apple",
    bought: false,
  },
  {
    id: 5,
    name: "Flo",
    bought: false,
  },
  {
    id: 6,
    name: "Banana",
    bought: false,
  },
];

export const getItems = () => items;
