/* tslint:disable */
/* eslint-disable */
/**
 * PrismAgent OpenAPI specification
 * OpenAPI specification for Decentralized Identifiers (DID) Operations
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: atala-coredid@iohk.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface IssueCredentialRecordBase
 */
export interface IssueCredentialRecordBase {
    /**
     * The unique identifier of the schema used for this credential offer.
     * @type {string}
     * @memberof IssueCredentialRecordBase
     */
    schemaId?: string;
    /**
     * The identifier (e.g DID) of the subject to which the verifiable credential will be issued.
     * @type {string}
     * @memberof IssueCredentialRecordBase
     */
    subjectId: string;
    /**
     * The validity period in seconds of the verifiable credential that will be issued.
     * @type {number}
     * @memberof IssueCredentialRecordBase
     */
    validityPeriod?: number;
    /**
     * The claims that will be associated with the issued verifiable credential.
     * @type {{ [key: string]: string; }}
     * @memberof IssueCredentialRecordBase
     */
    claims: { [key: string]: string; };
    /**
     * Specifies whether or not the credential should be automatically generated and issued when receiving the `CredentialRequest` from the holder.
     * If set to `false`, a manual approval by the issuer via API call will be required for the VC to be issued.
     * @type {boolean}
     * @memberof IssueCredentialRecordBase
     */
    automaticIssuance?: boolean;
}

/**
 * Check if a given object implements the IssueCredentialRecordBase interface.
 */
export function instanceOfIssueCredentialRecordBase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "subjectId" in value;
    isInstance = isInstance && "claims" in value;

    return isInstance;
}

export function IssueCredentialRecordBaseFromJSON(json: any): IssueCredentialRecordBase {
    return IssueCredentialRecordBaseFromJSONTyped(json, false);
}

export function IssueCredentialRecordBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IssueCredentialRecordBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schemaId': !exists(json, 'schemaId') ? undefined : json['schemaId'],
        'subjectId': json['subjectId'],
        'validityPeriod': !exists(json, 'validityPeriod') ? undefined : json['validityPeriod'],
        'claims': json['claims'],
        'automaticIssuance': !exists(json, 'automaticIssuance') ? undefined : json['automaticIssuance'],
    };
}

export function IssueCredentialRecordBaseToJSON(value?: IssueCredentialRecordBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schemaId': value.schemaId,
        'subjectId': value.subjectId,
        'validityPeriod': value.validityPeriod,
        'claims': value.claims,
        'automaticIssuance': value.automaticIssuance,
    };
}

