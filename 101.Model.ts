export interface PossibilityTree {
  [key: number]: {
    [key: number]: {
      [key: string]: string[];
    };
  };
}
