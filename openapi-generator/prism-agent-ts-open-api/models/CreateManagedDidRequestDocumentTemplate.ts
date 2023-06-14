/* tslint:disable */
/* eslint-disable */
/**
 * Prism Agent
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ManagedDIDKeyTemplate } from './ManagedDIDKeyTemplate';
import {
    ManagedDIDKeyTemplateFromJSON,
    ManagedDIDKeyTemplateFromJSONTyped,
    ManagedDIDKeyTemplateToJSON,
} from './ManagedDIDKeyTemplate';
import type { Service } from './Service';
import {
    ServiceFromJSON,
    ServiceFromJSONTyped,
    ServiceToJSON,
} from './Service';

/**
 * 
 * @export
 * @interface CreateManagedDidRequestDocumentTemplate
 */
export interface CreateManagedDidRequestDocumentTemplate {
    /**
     * 
     * @type {Array<ManagedDIDKeyTemplate>}
     * @memberof CreateManagedDidRequestDocumentTemplate
     */
    publicKeys?: Array<ManagedDIDKeyTemplate>;
    /**
     * 
     * @type {Array<Service>}
     * @memberof CreateManagedDidRequestDocumentTemplate
     */
    services?: Array<Service>;
}

/**
 * Check if a given object implements the CreateManagedDidRequestDocumentTemplate interface.
 */
export function instanceOfCreateManagedDidRequestDocumentTemplate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateManagedDidRequestDocumentTemplateFromJSON(json: any): CreateManagedDidRequestDocumentTemplate {
    return CreateManagedDidRequestDocumentTemplateFromJSONTyped(json, false);
}

export function CreateManagedDidRequestDocumentTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateManagedDidRequestDocumentTemplate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'publicKeys': !exists(json, 'publicKeys') ? undefined : ((json['publicKeys'] as Array<any>).map(ManagedDIDKeyTemplateFromJSON)),
        'services': !exists(json, 'services') ? undefined : ((json['services'] as Array<any>).map(ServiceFromJSON)),
    };
}

export function CreateManagedDidRequestDocumentTemplateToJSON(value?: CreateManagedDidRequestDocumentTemplate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'publicKeys': value.publicKeys === undefined ? undefined : ((value.publicKeys as Array<any>).map(ManagedDIDKeyTemplateToJSON)),
        'services': value.services === undefined ? undefined : ((value.services as Array<any>).map(ServiceToJSON)),
    };
}

