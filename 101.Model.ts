export interface PossibilityTree {
  [key: number]: {
    [key: number]: {
      Easy: string[];
      Difficult: string[];
      medium: string[];
    };
  };
}
