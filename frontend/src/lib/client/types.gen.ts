// This file is auto-generated by @hey-api/openapi-ts

export type CheckAuthResponse = {
    email: string;
};

export type ComplexEvent = {
    name: string;
    description?: (string | null);
    join_code: string;
    id: string;
    attendees?: Array<(string)>;
};

export type Event = {
    name: string;
    description?: (string | null);
    id: string;
};

export type EventCreationPayload = {
    name: string;
    description?: (string | null);
};

export type HTTPValidationError = {
    detail?: Array<ValidationError>;
};

export type MagicLinkVerificationResponse = {
    access_token: string;
    token_type: string;
    email: string;
};

export type PrivateProject = {
    name: string;
    readme: string;
    repo: string;
    image_url: string;
    demo: string;
    description?: (string | null);
    event: [
        string
    ];
    /**
     * A lower-bound estimate of the number of hours spent on the project. Only used for general statistics.
     */
    hours_spent?: number;
    id: string;
    points?: number;
    collaborators?: Array<(string)>;
    owner: [
        string
    ];
    join_code: string;
};

export type Project = {
    name: string;
    readme: string;
    repo: string;
    image_url: string;
    demo: string;
    description?: (string | null);
    event: [
        string
    ];
    /**
     * A lower-bound estimate of the number of hours spent on the project. Only used for general statistics.
     */
    hours_spent?: number;
    id: string;
    points?: number;
    collaborators?: Array<(string)>;
    owner: [
        string
    ];
};

export type ProjectUpdate = {
    name: string;
    readme: string;
    repo: string;
    image_url: string;
    demo: string;
    description?: (string | null);
    event: [
        string
    ];
    /**
     * A lower-bound estimate of the number of hours spent on the project. Only used for general statistics.
     */
    hours_spent?: number;
};

export type PublicProjectCreationPayload = {
    name: string;
    readme: string;
    repo: string;
    image_url: string;
    demo: string;
    description?: (string | null);
    event: [
        string
    ];
    /**
     * A lower-bound estimate of the number of hours spent on the project. Only used for general statistics.
     */
    hours_spent?: number;
};

/**
 * A ``dict`` representing a record returned from the Airtable API.
 * See `List records <https://airtable.com/developers/web/api/list-records>`__.
 *
 * Usage:
 * >>> table.first(formula="Name = 'Alice'")
 * {
 * 'id': 'recAdw9EjV90xbW',
 * 'createdTime': '2023-05-22T21:24:15.333134Z',
 * 'fields': {'Name': 'Alice', 'Department': 'Engineering'}
 * }
 */
export type RecordDict = {
    id: string;
    createdTime: string;
    fields: {
        [key: string]: unknown;
    };
};

export type User_Input = {
    email: string;
};

export type User_Output = {
    first_name: string;
    last_name: string;
    email: string;
    street_1: string;
    street_2?: (string | null);
    city: string;
    state: string;
    zip_code: string;
    country: string;
    dob: string;
    id: string;
    votes?: Array<(string)>;
    projects?: Array<(string)>;
    owned_events?: Array<(string)>;
    attending_events?: Array<(string)>;
    referral?: Array<(string)>;
};

/**
 * Return information regarding what the events the user owns and what events they are attending. If they are only attending an event, don't return sensitive information like participants.
 */
export type UserEvents = {
    owned_events: Array<ComplexEvent>;
    attending_events: Array<Event>;
};

export type UserExistsResponse = {
    exists: boolean;
};

export type UserSignupPayload = {
    first_name: string;
    last_name: string;
    email: string;
    street_1: string;
    street_2?: (string | null);
    city: string;
    state: string;
    zip_code: string;
    country: string;
    dob: string;
};

export type ValidationError = {
    loc: Array<(string | number)>;
    msg: string;
    type: string;
};

export type Vote = {
    /**
     * The ID of the event to vote in.
     */
    event_id: string;
    /**
     * In no particular order, the top 3 (or 2 if there are less than 20 projects) projects that the user is voting for.
     */
    projects: Array<(string)>;
};

export type RequestLoginRequestLoginPostData = {
    body: User_Input;
    query: {
        redirect: string;
    };
};

export type RequestLoginRequestLoginPostResponse = (unknown);

export type RequestLoginRequestLoginPostError = (HTTPValidationError);

export type VerifyTokenVerifyGetData = {
    query: {
        token: string;
    };
};

export type VerifyTokenVerifyGetResponse = (MagicLinkVerificationResponse);

export type VerifyTokenVerifyGetError = (HTTPValidationError);

export type ProtectedRouteProtectedRouteGetResponse = (CheckAuthResponse);

export type ProtectedRouteProtectedRouteGetError = unknown;

export type GetEventEventsEventIdGetData = {
    path: {
        event_id: string;
    };
};

export type GetEventEventsEventIdGetResponse = ((ComplexEvent | Event));

export type GetEventEventsEventIdGetError = (HTTPValidationError);

export type GetAttendingEventsEventsGetResponse = (UserEvents);

export type GetAttendingEventsEventsGetError = unknown;

export type CreateEventEventsPostData = {
    body: EventCreationPayload;
};

export type CreateEventEventsPostResponse = (unknown);

export type CreateEventEventsPostError = (HTTPValidationError);

export type AttendEventEventsAttendPostData = {
    query: {
        /**
         * A unique code used to join an event
         */
        join_code: string;
        /**
         * How did you hear about this event?
         */
        referral: string;
    };
};

export type AttendEventEventsAttendPostResponse = (unknown);

export type AttendEventEventsAttendPostError = (HTTPValidationError);

export type VoteEventsVotePostData = {
    body: Vote;
};

export type VoteEventsVotePostResponse = (unknown);

export type VoteEventsVotePostError = (HTTPValidationError);

export type GetLeaderboardEventsEventIdLeaderboardGetData = {
    path: {
        event_id: string;
    };
};

export type GetLeaderboardEventsEventIdLeaderboardGetResponse = (Array<Project>);

export type GetLeaderboardEventsEventIdLeaderboardGetError = (HTTPValidationError);

export type GetEventProjectsEventsEventIdProjectsGetData = {
    path: {
        event_id: string;
    };
};

export type GetEventProjectsEventsEventIdProjectsGetResponse = (Array<Project>);

export type GetEventProjectsEventsEventIdProjectsGetError = (HTTPValidationError);

export type GetProjectsProjectsMineGetResponse = (Array<PrivateProject>);

export type GetProjectsProjectsMineGetError = unknown;

export type CreateProjectProjectsPostData = {
    body: PublicProjectCreationPayload;
};

export type CreateProjectProjectsPostResponse = (unknown);

export type CreateProjectProjectsPostError = (HTTPValidationError);

export type JoinProjectProjectsJoinPostData = {
    query: {
        /**
         * A unique code used to join a project as a collaborator
         */
        join_code: string;
    };
};

export type JoinProjectProjectsJoinPostResponse = (unknown);

export type JoinProjectProjectsJoinPostError = (HTTPValidationError);

export type UpdateProjectProjectsProjectIdPutData = {
    body: ProjectUpdate;
    path: {
        project_id: string;
    };
};

export type UpdateProjectProjectsProjectIdPutResponse = (unknown);

export type UpdateProjectProjectsProjectIdPutError = (HTTPValidationError);

export type DeleteProjectProjectsProjectIdDeleteData = {
    path: {
        project_id: string;
    };
};

export type DeleteProjectProjectsProjectIdDeleteResponse = (unknown);

export type DeleteProjectProjectsProjectIdDeleteError = (HTTPValidationError);

export type GetProjectProjectsProjectIdGetData = {
    path: {
        project_id: string;
    };
};

export type GetProjectProjectsProjectIdGetResponse = (unknown);

export type GetProjectProjectsProjectIdGetError = (HTTPValidationError);

export type GetCurrentUserUsersCurrentGetResponse = (User_Output);

export type GetCurrentUserUsersCurrentGetError = unknown;

export type CreateUserUsersPostData = {
    body: UserSignupPayload;
};

export type CreateUserUsersPostResponse = (unknown);

export type CreateUserUsersPostError = (HTTPValidationError);

export type UserExistsUsersExistsGetData = {
    query: {
        email: string;
    };
};

export type UserExistsUsersExistsGetResponse = (UserExistsResponse);

export type UserExistsUsersExistsGetError = (HTTPValidationError);