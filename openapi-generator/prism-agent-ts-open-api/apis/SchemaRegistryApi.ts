/* tslint:disable */
/* eslint-disable */
/**
 * Prism Agent OpenAPI specification
 * OpenAPI specification for Decentralized Identifiers (DID) Operations
 *
 * The version of the OpenAPI document: 0.41.0
 * Contact: atala-coredid@iohk.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CredentialSchemaInput,
  CredentialSchemaResponse,
  CredentialSchemaResponsePage,
  ErrorResponse,
} from '../models';
import {
    CredentialSchemaInputFromJSON,
    CredentialSchemaInputToJSON,
    CredentialSchemaResponseFromJSON,
    CredentialSchemaResponseToJSON,
    CredentialSchemaResponsePageFromJSON,
    CredentialSchemaResponsePageToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface CreateSchemaRequest {
    credentialSchemaInput: CredentialSchemaInput;
}

export interface GetSchemaByIdRequest {
    guid: string;
}

export interface LookupSchemasByQueryRequest {
    author?: string;
    name?: string;
    version?: string;
    tags?: string;
    offset?: number;
    limit?: number;
    order?: string;
}

/**
 * 
 */
export class SchemaRegistryApi extends runtime.BaseAPI {

    /**
     * Create the new credential schema record with metadata and internal JSON Schema on behalf of Cloud Agent. The credential schema will be signed by the keys of Cloud Agent and issued by the DID that corresponds to it
     * Publish new schema to the schema registry
     */
    async createSchemaRaw(requestParameters: CreateSchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CredentialSchemaResponse>> {
        if (requestParameters.credentialSchemaInput === null || requestParameters.credentialSchemaInput === undefined) {
            throw new runtime.RequiredError('credentialSchemaInput','Required parameter requestParameters.credentialSchemaInput was null or undefined when calling createSchema.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/schema-registry/schemas`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CredentialSchemaInputToJSON(requestParameters.credentialSchemaInput),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CredentialSchemaResponseFromJSON(jsonValue));
    }

    /**
     * Create the new credential schema record with metadata and internal JSON Schema on behalf of Cloud Agent. The credential schema will be signed by the keys of Cloud Agent and issued by the DID that corresponds to it
     * Publish new schema to the schema registry
     */
    async createSchema(requestParameters: CreateSchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CredentialSchemaResponse> {
        const response = await this.createSchemaRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch the credential schema by the unique identifier
     * Fetch the schema from the registry by `guid`
     */
    async getSchemaByIdRaw(requestParameters: GetSchemaByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CredentialSchemaResponse>> {
        if (requestParameters.guid === null || requestParameters.guid === undefined) {
            throw new runtime.RequiredError('guid','Required parameter requestParameters.guid was null or undefined when calling getSchemaById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/schema-registry/schemas/{guid}`.replace(`{${"guid"}}`, encodeURIComponent(String(requestParameters.guid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CredentialSchemaResponseFromJSON(jsonValue));
    }

    /**
     * Fetch the credential schema by the unique identifier
     * Fetch the schema from the registry by `guid`
     */
    async getSchemaById(requestParameters: GetSchemaByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CredentialSchemaResponse> {
        const response = await this.getSchemaByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Lookup schemas by `author`, `name`, `tags` parameters and control the pagination by `offset` and `limit` parameters
     * Lookup schemas by indexed fields
     */
    async lookupSchemasByQueryRaw(requestParameters: LookupSchemasByQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CredentialSchemaResponsePage>> {
        const queryParameters: any = {};

        if (requestParameters.author !== undefined) {
            queryParameters['author'] = requestParameters.author;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.version !== undefined) {
            queryParameters['version'] = requestParameters.version;
        }

        if (requestParameters.tags !== undefined) {
            queryParameters['tags'] = requestParameters.tags;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/schema-registry/schemas`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CredentialSchemaResponsePageFromJSON(jsonValue));
    }

    /**
     * Lookup schemas by `author`, `name`, `tags` parameters and control the pagination by `offset` and `limit` parameters
     * Lookup schemas by indexed fields
     */
    async lookupSchemasByQuery(requestParameters: LookupSchemasByQueryRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CredentialSchemaResponsePage> {
        const response = await this.lookupSchemasByQueryRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
