// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type OptionsLegacyParser } from '@hey-api/client-fetch';
import type { RequestLoginRequestLoginPostData, RequestLoginRequestLoginPostError, RequestLoginRequestLoginPostResponse, VerifyTokenVerifyGetData, VerifyTokenVerifyGetError, VerifyTokenVerifyGetResponse, ProtectedRouteProtectedRouteGetError, ProtectedRouteProtectedRouteGetResponse, GetEventUnauthenticatedEventsUnauthenticatedEventIdGetData, GetEventUnauthenticatedEventsUnauthenticatedEventIdGetError, GetEventUnauthenticatedEventsUnauthenticatedEventIdGetResponse, GetEventEventsEventIdGetData, GetEventEventsEventIdGetError, GetEventEventsEventIdGetResponse, GetAttendingEventsEventsGetError, GetAttendingEventsEventsGetResponse, CreateEventEventsPostData, CreateEventEventsPostError, CreateEventEventsPostResponse, AttendEventEventsAttendPostData, AttendEventEventsAttendPostError, AttendEventEventsAttendPostResponse, UpdateEventEventsEventIdPutData, UpdateEventEventsEventIdPutResponse, UpdateEventEventsEventIdPutError, DeleteEventEventsEventIdDeleteData, DeleteEventEventsEventIdDeleteResponse, DeleteEventEventsEventIdDeleteError, VoteEventsVotePostData, VoteEventsVotePostError, VoteEventsVotePostResponse, GetLeaderboardEventsEventIdLeaderboardGetData, GetLeaderboardEventsEventIdLeaderboardGetError, GetLeaderboardEventsEventIdLeaderboardGetResponse, GetEventProjectsEventsEventIdProjectsGetData, GetEventProjectsEventsEventIdProjectsGetError, GetEventProjectsEventsEventIdProjectsGetResponse, GetProjectsProjectsMineGetError, GetProjectsProjectsMineGetResponse, CreateProjectProjectsPostData, CreateProjectProjectsPostError, CreateProjectProjectsPostResponse, JoinProjectProjectsJoinPostData, JoinProjectProjectsJoinPostError, JoinProjectProjectsJoinPostResponse, UpdateProjectProjectsProjectIdPutData, UpdateProjectProjectsProjectIdPutError, UpdateProjectProjectsProjectIdPutResponse, DeleteProjectProjectsProjectIdDeleteData, DeleteProjectProjectsProjectIdDeleteError, DeleteProjectProjectsProjectIdDeleteResponse, GetProjectProjectsProjectIdGetData, GetProjectProjectsProjectIdGetError, GetProjectProjectsProjectIdGetResponse, GetCurrentUserUsersCurrentGetError, GetCurrentUserUsersCurrentGetResponse, CreateUserUsersPostData, CreateUserUsersPostError, CreateUserUsersPostResponse, UserExistsUsersExistsGetData, UserExistsUsersExistsGetError, UserExistsUsersExistsGetResponse } from './types.gen';

export const client = createClient(createConfig());

export class AuthService {
    /**
     * Request Login
     * Send a magic link to the user's email. If the user has not yet signed up, an error will be raised
     */
    public static requestLoginRequestLoginPost<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<RequestLoginRequestLoginPostData, ThrowOnError>) {
        return (options?.client ?? client).post<RequestLoginRequestLoginPostResponse, RequestLoginRequestLoginPostError, ThrowOnError>({
            ...options,
            url: '/request-login'
        });
    }
    
    /**
     * Verify Token
     * Verify a magic link and return an access token
     */
    public static verifyTokenVerifyGet<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<VerifyTokenVerifyGetData, ThrowOnError>) {
        return (options?.client ?? client).get<VerifyTokenVerifyGetResponse, VerifyTokenVerifyGetError, ThrowOnError>({
            ...options,
            url: '/verify'
        });
    }
    
    /**
     * Protected Route
     */
    public static protectedRouteProtectedRouteGet<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<ProtectedRouteProtectedRouteGetResponse, ProtectedRouteProtectedRouteGetError, ThrowOnError>({
            ...options,
            url: '/protected-route'
        });
    }
    
}

export class EventsService {
    /**
     * Get Event Unauthenticated
     * Get an event by its ID. This is used for the public event page.
     */
    public static getEventUnauthenticatedEventsUnauthenticatedEventIdGet<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetEventUnauthenticatedEventsUnauthenticatedEventIdGetData, ThrowOnError>) {
        return (options?.client ?? client).get<GetEventUnauthenticatedEventsUnauthenticatedEventIdGetResponse, GetEventUnauthenticatedEventsUnauthenticatedEventIdGetError, ThrowOnError>({
            ...options,
            url: '/events/unauthenticated/{event_id}'
        });
    }
    
    /**
     * Get Event
     * Get an event by its ID. If the user owns it, return a PrivateEvent. Otherwise, return a regular event.
     */
    public static getEventEventsEventIdGet<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetEventEventsEventIdGetData, ThrowOnError>) {
        return (options?.client ?? client).get<GetEventEventsEventIdGetResponse, GetEventEventsEventIdGetError, ThrowOnError>({
            ...options,
            url: '/events/{event_id}'
        });
    }
    
    /**
     * Get Attending Events
     * Get a list of all events that the current user is attending.
     */
    public static getAttendingEventsEventsGet<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<GetAttendingEventsEventsGetResponse, GetAttendingEventsEventsGetError, ThrowOnError>({
            ...options,
            url: '/events/'
        });
    }
    
    /**
     * Create Event
     * Create a new event. The current user is automatically added as an owner of the event.
     */
    public static createEventEventsPost<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateEventEventsPostData, ThrowOnError>) {
        return (options?.client ?? client).post<CreateEventEventsPostResponse, CreateEventEventsPostError, ThrowOnError>({
            ...options,
            url: '/events/'
        });
    }
    
    /**
     * Attend Event
     * Attend an event. The client must supply a join code that matches the event's join code.
     */
    public static attendEventEventsAttendPost<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<AttendEventEventsAttendPostData, ThrowOnError>) {
        return (options?.client ?? client).post<AttendEventEventsAttendPostResponse, AttendEventEventsAttendPostError, ThrowOnError>({
            ...options,
            url: '/events/attend'
        });
    }
    
    /**
     * Update Event
     * Update an Event by replacing it
     */
    public static updateEventEventsEventIdPut<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateEventEventsEventIdPutData, ThrowOnError>) {
        return (options?.client ?? client).put<UpdateEventEventsEventIdPutResponse, UpdateEventEventsEventIdPutError, ThrowOnError>({
            ...options,
            url: '/events/{event_id}'
        });
    }

    /**
     * Delete Event
     */
    public static deleteEventEventsEventIdDelete<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeleteEventEventsEventIdDeleteData, ThrowOnError>) {
        return (options?.client ?? client).delete<DeleteEventEventsEventIdDeleteResponse, DeleteEventEventsEventIdDeleteError, ThrowOnError>({
            ...options,
            url: '/events/{event_id}'
        });
    }
    
    
    /**
     * Vote
     * Vote for the top 3 projects in an event. The client must provide the event ID and a list of the top 3 projects. If there are less than 20 projects in the event, only the top 2 projects are required.
     */
    public static voteEventsVotePost<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<VoteEventsVotePostData, ThrowOnError>) {
        return (options?.client ?? client).post<VoteEventsVotePostResponse, VoteEventsVotePostError, ThrowOnError>({
            ...options,
            url: '/events/vote'
        });
    }
    
    /**
     * Get Leaderboard
     * Get the leaderboard for an event. The leaderboard is a list of projects in the event, sorted by the number of votes they have received.
     */
    public static getLeaderboardEventsEventIdLeaderboardGet<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetLeaderboardEventsEventIdLeaderboardGetData, ThrowOnError>) {
        return (options?.client ?? client).get<GetLeaderboardEventsEventIdLeaderboardGetResponse, GetLeaderboardEventsEventIdLeaderboardGetError, ThrowOnError>({
            ...options,
            url: '/events/{event_id}/leaderboard'
        });
    }
    
    /**
     * Get Event Projects
     * Get the projects for a specific event.
     */
    public static getEventProjectsEventsEventIdProjectsGet<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetEventProjectsEventsEventIdProjectsGetData, ThrowOnError>) {
        return (options?.client ?? client).get<GetEventProjectsEventsEventIdProjectsGetResponse, GetEventProjectsEventsEventIdProjectsGetError, ThrowOnError>({
            ...options,
            url: '/events/{event_id}/projects'
        });
    }
    
}

export class ProjectsService {
    /**
     * Get Projects
     * Get the current user's projects and projects they are collaborating on.
     */
    public static getProjectsProjectsMineGet<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<GetProjectsProjectsMineGetResponse, GetProjectsProjectsMineGetError, ThrowOnError>({
            ...options,
            url: '/projects/mine'
        });
    }
    
    /**
     * Create Project
     * Create a new project. The current user is automatically added as an owner of the project.
     */
    public static createProjectProjectsPost<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateProjectProjectsPostData, ThrowOnError>) {
        return (options?.client ?? client).post<CreateProjectProjectsPostResponse, CreateProjectProjectsPostError, ThrowOnError>({
            ...options,
            url: '/projects/'
        });
    }
    
    /**
     * Join Project
     */
    public static joinProjectProjectsJoinPost<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<JoinProjectProjectsJoinPostData, ThrowOnError>) {
        return (options?.client ?? client).post<JoinProjectProjectsJoinPostResponse, JoinProjectProjectsJoinPostError, ThrowOnError>({
            ...options,
            url: '/projects/join'
        });
    }
    
    /**
     * Update Project
     * Update a project by replacing it
     */
    public static updateProjectProjectsProjectIdPut<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UpdateProjectProjectsProjectIdPutData, ThrowOnError>) {
        return (options?.client ?? client).put<UpdateProjectProjectsProjectIdPutResponse, UpdateProjectProjectsProjectIdPutError, ThrowOnError>({
            ...options,
            url: '/projects/{project_id}'
        });
    }
    
    /**
     * Delete Project
     */
    public static deleteProjectProjectsProjectIdDelete<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<DeleteProjectProjectsProjectIdDeleteData, ThrowOnError>) {
        return (options?.client ?? client).delete<DeleteProjectProjectsProjectIdDeleteResponse, DeleteProjectProjectsProjectIdDeleteError, ThrowOnError>({
            ...options,
            url: '/projects/{project_id}'
        });
    }
    
    /**
     * Get Project
     */
    public static getProjectProjectsProjectIdGet<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetProjectProjectsProjectIdGetData, ThrowOnError>) {
        return (options?.client ?? client).get<GetProjectProjectsProjectIdGetResponse, GetProjectProjectsProjectIdGetError, ThrowOnError>({
            ...options,
            url: '/projects/{project_id}'
        });
    }
    
}

export class UsersService {
    /**
     * Get Current User
     */
    public static getCurrentUserUsersCurrentGet<ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<GetCurrentUserUsersCurrentGetResponse, GetCurrentUserUsersCurrentGetError, ThrowOnError>({
            ...options,
            url: '/users/current'
        });
    }
    
    /**
     * Create User
     */
    public static createUserUsersPost<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<CreateUserUsersPostData, ThrowOnError>) {
        return (options?.client ?? client).post<CreateUserUsersPostResponse, CreateUserUsersPostError, ThrowOnError>({
            ...options,
            url: '/users/'
        });
    }
    
    /**
     * User Exists
     */
    public static userExistsUsersExistsGet<ThrowOnError extends boolean = false>(options: OptionsLegacyParser<UserExistsUsersExistsGetData, ThrowOnError>) {
        return (options?.client ?? client).get<UserExistsUsersExistsGetResponse, UserExistsUsersExistsGetError, ThrowOnError>({
            ...options,
            url: '/users/exists'
        });
    }
    
}