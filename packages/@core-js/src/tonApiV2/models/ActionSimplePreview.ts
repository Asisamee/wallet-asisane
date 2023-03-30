/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ActionSimplePreview
 */
export interface ActionSimplePreview {
    /**
     * 
     * @type {string}
     * @memberof ActionSimplePreview
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ActionSimplePreview
     */
    shortDescription: string;
    /**
     * 
     * @type {string}
     * @memberof ActionSimplePreview
     */
    fullDescription: string;
    /**
     * 
     * @type {string}
     * @memberof ActionSimplePreview
     */
    image?: string;
}

/**
 * Check if a given object implements the ActionSimplePreview interface.
 */
export function instanceOfActionSimplePreview(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "shortDescription" in value;
    isInstance = isInstance && "fullDescription" in value;

    return isInstance;
}

export function ActionSimplePreviewFromJSON(json: any): ActionSimplePreview {
    return ActionSimplePreviewFromJSONTyped(json, false);
}

export function ActionSimplePreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionSimplePreview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'shortDescription': json['short_description'],
        'fullDescription': json['full_description'],
        'image': !exists(json, 'image') ? undefined : json['image'],
    };
}

export function ActionSimplePreviewToJSON(value?: ActionSimplePreview | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'short_description': value.shortDescription,
        'full_description': value.fullDescription,
        'image': value.image,
    };
}
