/**
 * Swagger Hackboard
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { ApplicationDto } from '../model/applicationDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ApplicationService {

    protected basePath = 'http://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Add a new application
     * 
     * @param application 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addapplication(application: ApplicationDto, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public addapplication(application: ApplicationDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public addapplication(application: ApplicationDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public addapplication(application: ApplicationDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling addapplication.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<boolean>(`${this.basePath}/application`,
            application,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete all Application
     * 
     * @param projectId ID of project
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteAllApplication(projectId: number, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public deleteAllApplication(projectId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public deleteAllApplication(projectId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public deleteAllApplication(projectId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling deleteAllApplication.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.delete<boolean>(`${this.basePath}/application/${encodeURIComponent(String(projectId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * View Application
     * 
     * @param projectId ID of project
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public viewApplication(projectId: number, observe?: 'body', reportProgress?: boolean): Observable<Array<ApplicationDto>>;
    public viewApplication(projectId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ApplicationDto>>>;
    public viewApplication(projectId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ApplicationDto>>>;
    public viewApplication(projectId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling viewApplication.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<ApplicationDto>>(`${this.basePath}/application/${encodeURIComponent(String(projectId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
