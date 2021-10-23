import { RefObject } from 'react';

export interface Coordinates {
  x: number;
  y: number;
}

/**
 * Gives your the X and Y coordinates of the current element
 *
 * @param {RefObject<any>} ref
 * @returns {Coordinates}
 */
export const getCoordinates = (ref: RefObject<any>): Coordinates => {
  let boundingClient: DOMRect = ref.current?.getBoundingClientRect();
  return {
    x: boundingClient.left,
    y: boundingClient.top,
  };
};
