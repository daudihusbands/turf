import { Feature, GeometryObject } from '@turf/helpers'

/**
 * http://turfjs.org/docs/#booleancrosses
 */
export default function (
    feature1: Feature<any> | GeometryObject,
    feature2: Feature<any> | GeometryObject
): boolean;
