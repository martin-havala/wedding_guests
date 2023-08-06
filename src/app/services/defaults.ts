export interface DataState {
  data: { [key: string]: any }[];
  dataTypes: { [key: string]: string };
  categoriesMap: CategoriesMap;
  categories: string[];
  columns: string[];
  catColors: { [key: string]: string };
  yearRange: number;
  yearExtent: [number, number];
}

export interface PrintSettings {
  sizeMm: number;
  marginMm: number;
  fontSizeMm: number;
  paddingMm: number;
  paperWmm: number;
  paperHMm: number;
}
export const PRINT_SETTINGS: PrintSettings = {
  sizeMm: 45,
  marginMm: 10,
  fontSizeMm: 4.5,
  paddingMm: 0.5,
  paperWmm: 210,
  paperHMm: 297,
};

export const COLUMNS = [
  'name',
  'surname',
  'note',
  'known_from1',
  'known_from2',
  'known_years1',
  'known_years2',
];

export interface CategoriesMap {
  name: string;
  surname: string;
  note: string;
  known_from1: string;
  known_from2: string;
  known_years1: string;
  known_years2: string;
}

export const CATEGORIES_MAP: CategoriesMap = {
  name: 'name',
  surname: 'surname',
  note: 'note',
  known_from1: 'known_from1',
  known_from2: 'known_from2',
  known_years1: 'known_years1',
  known_years2: 'known_years2',
};

export const DEFAULT_STATE: DataState = {
  data: [],
  dataTypes: {},
  categoriesMap: CATEGORIES_MAP,
  categories: [],
  catColors: {},
  yearRange: 30,
  columns: COLUMNS,
  yearExtent: [0, 30],
};
