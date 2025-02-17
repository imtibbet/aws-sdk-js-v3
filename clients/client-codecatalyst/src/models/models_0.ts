// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { CodeCatalystServiceException as __BaseException } from "./CodeCatalystServiceException";

/**
 * @public
 * <p>The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * <p>The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request.
 *        Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * @public
 */
export interface CreateAccessTokenRequest {
  /**
   * <p>The friendly name of the personal access token.</p>
   */
  name: string | undefined;

  /**
   * <p>The date and time the personal access token expires, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  expiresTime?: Date;
}

/**
 * @public
 */
export interface CreateAccessTokenResponse {
  /**
   * <p>The secret value of the personal access token.</p>
   */
  secret: string | undefined;

  /**
   * <p>The friendly name of the personal access token.</p>
   */
  name: string | undefined;

  /**
   * <p>The date and time the personal access token expires, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>. If not specified, the default is one year from creation.</p>
   */
  expiresTime: Date | undefined;

  /**
   * <p>The system-generated unique ID of the access token.</p>
   */
  accessTokenId: string | undefined;
}

/**
 * @public
 * <p>The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 * <p>The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce
 *       the number of resources, or change the tier if applicable.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * @public
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * @public
 * <p>The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteAccessTokenRequest {
  /**
   * <p>The ID of the personal access token to delete. You can find the IDs of all PATs associated with your user account by calling <a>ListAccessTokens</a>.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessTokenResponse {}

/**
 * @public
 */
export interface ListAccessTokensRequest {
  /**
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   */
  maxResults?: number;

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Information about a specified personal access token (PAT).</p>
 */
export interface AccessTokenSummary {
  /**
   * <p>The system-generated ID of the personal access token.</p>
   */
  id: string | undefined;

  /**
   * <p>The friendly name of the personal access token.</p>
   */
  name: string | undefined;

  /**
   * <p>The date and time when the personal access token will expire, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  expiresTime?: Date;
}

/**
 * @public
 */
export interface ListAccessTokensResponse {
  /**
   * <p>A list of personal access tokens (PATs) associated with the calling user.</p>
   */
  items: AccessTokenSummary[] | undefined;

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export enum CatalogActionVersionFileRecordType {
  LICENSE = "LICENSE",
  README = "README",
}

/**
 * @public
 */
export interface GetUserDetailsRequest {
  /**
   * <p>The system-generated unique ID of the user. </p>
   */
  id?: string;

  /**
   * <p>The name of the user as displayed in Amazon CodeCatalyst.</p>
   */
  userName?: string;
}

/**
 * @public
 * <p>Information about an email address.</p>
 */
export interface EmailAddress {
  /**
   * <p>The email address.</p>
   */
  email?: string;

  /**
   * <p>Whether the email address has been verified.</p>
   */
  verified?: boolean;
}

/**
 * @public
 */
export interface GetUserDetailsResponse {
  /**
   * <p>The system-generated unique ID of the user.</p>
   */
  userId?: string;

  /**
   * <p>The name of the user as displayed in Amazon CodeCatalyst.</p>
   */
  userName?: string;

  /**
   * <p>The friendly name displayed for the user in Amazon CodeCatalyst.</p>
   */
  displayName?: string;

  /**
   * <p>The email address provided by the user when they signed up.</p>
   */
  primaryEmail?: EmailAddress;

  /**
   * <p/>
   */
  version?: string;
}

/**
 * @public
 */
export interface ListEventLogsRequest {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The date and time when you want to start retrieving events, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The time after which you do not want any events retrieved, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>The name of the event.</p>
   */
  eventName?: string;

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export enum OperationType {
  MUTATION = "MUTATION",
  READONLY = "READONLY",
}

/**
 * @public
 * <p>Information about a project in a space.</p>
 */
export interface ProjectInformation {
  /**
   * <p>The name of the project in the space.</p>
   */
  name?: string;

  /**
   * <p>The system-generated unique ID of the project.</p>
   */
  projectId?: string;
}

/**
 * @public
 * <p>Information about the payload of an event recording Amazon CodeCatalyst activity.</p>
 */
export interface EventPayload {
  /**
   * <p>The type of content in the event payload.</p>
   */
  contentType?: string;

  /**
   * <p>The data included in the event payload.</p>
   */
  data?: string;
}

/**
 * @public
 */
export enum UserType {
  AWS_ACCOUNT = "AWS_ACCOUNT",
  UNKNOWN = "UNKNOWN",
  USER = "USER",
}

/**
 * @public
 * <p>Information about a user whose activity is recorded in an event for a space.</p>
 */
export interface UserIdentity {
  /**
   * <p>The role assigned to the user in a Amazon CodeCatalyst space or project when the event occurred.</p>
   */
  userType: UserType | string | undefined;

  /**
   * <p/>
   */
  principalId: string | undefined;

  /**
   * <p>The display name of the user in Amazon CodeCatalyst.</p>
   */
  userName?: string;

  /**
   * <p>The Amazon Web Services account number of the user in Amazon Web Services, if any.</p>
   */
  awsAccountId?: string;
}

/**
 * @public
 * <p>Information about an entry in an event log of Amazon CodeCatalyst activity.</p>
 */
export interface EventLogEntry {
  /**
   * <p>The system-generated unique ID of the event.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the event.</p>
   */
  eventName: string | undefined;

  /**
   * <p>The type of the event.</p>
   */
  eventType: string | undefined;

  /**
   * <p>The category for the event.</p>
   */
  eventCategory: string | undefined;

  /**
   * <p>The source of the event.</p>
   */
  eventSource: string | undefined;

  /**
   * <p>The time the event took place, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  eventTime: Date | undefined;

  /**
   * <p>The type of the event.</p>
   */
  operationType: OperationType | string | undefined;

  /**
   * <p>The system-generated unique ID of the user whose actions are recorded in the event.</p>
   */
  userIdentity: UserIdentity | undefined;

  /**
   * <p>Information about the project where the event occurred.</p>
   */
  projectInformation?: ProjectInformation;

  /**
   * <p>The system-generated unique ID of the request.</p>
   */
  requestId?: string;

  /**
   * <p>Information about the payload of the request.</p>
   */
  requestPayload?: EventPayload;

  /**
   * <p>Information about the payload of the response, if any.</p>
   */
  responsePayload?: EventPayload;

  /**
   * <p>The code of the error, if any.</p>
   */
  errorCode?: string;

  /**
   * <p>The IP address of the user whose actions are recorded in the event.</p>
   */
  sourceIpAddress?: string;

  /**
   * <p/>
   */
  userAgent?: string;
}

/**
 * @public
 */
export interface ListEventLogsResponse {
  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;

  /**
   * <p>Information about each event retrieved in the list.</p>
   */
  items: EventLogEntry[] | undefined;
}

/**
 * @public
 */
export interface GetSpaceRequest {
  /**
   * <p>The name of the space.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetSpaceResponse {
  /**
   * <p>The name of the space.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the space exists.</p>
   */
  regionName: string | undefined;

  /**
   * <p>The friendly name of the space displayed to users.</p>
   */
  displayName?: string;

  /**
   * <p>The description of the space.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface ListSpacesRequest {
  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Information about an space.</p>
 */
export interface SpaceSummary {
  /**
   * <p>The name of the space.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Web Services Region
   *       where the space exists.</p>
   */
  regionName: string | undefined;

  /**
   * <p>The friendly name of the space displayed to users.</p>
   */
  displayName?: string;

  /**
   * <p>The description of the space.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface ListSpacesResponse {
  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;

  /**
   * <p>Information about the space. </p>
   */
  items?: SpaceSummary[];
}

/**
 * @public
 */
export interface CreateProjectRequest {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The friendly name of the project that will be displayed to users.</p>
   */
  displayName: string | undefined;

  /**
   * <p>The description of the project. This description will be displayed to all users of the project. We recommend providing a brief description of the project and its intended purpose.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface CreateProjectResponse {
  /**
   * <p>The name of the space.</p>
   */
  spaceName?: string;

  /**
   * <p>The name of the project in the space.</p>
   */
  name: string | undefined;

  /**
   * <p>The friendly name of the project.</p>
   */
  displayName?: string;

  /**
   * <p>The description of the project.</p>
   */
  description?: string;
}

/**
 * @public
 * <p>Information about the configuration of an integrated development environment (IDE) for a Dev Environment.</p>
 */
export interface IdeConfiguration {
  /**
   * <p>A link to the IDE runtime image. </p>
   *          <note>
   *             <p>This parameter is not required for <code>VSCode</code>.</p>
   *          </note>
   */
  runtime?: string;

  /**
   * <p>The name of the IDE. Valid values include <code>Cloud9</code>, <code>IntelliJ</code>, <code>PyCharm</code>, <code>GoLand</code>, and <code>VSCode</code>.</p>
   */
  name?: string;
}

/**
 * @public
 */
export enum _InstanceType {
  DEV_STANDARD1_LARGE = "dev.standard1.large",
  DEV_STANDARD1_MEDIUM = "dev.standard1.medium",
  DEV_STANDARD1_SMALL = "dev.standard1.small",
  DEV_STANDARD1_XLARGE = "dev.standard1.xlarge",
}

/**
 * @public
 * <p>Information about the configuration of persistent storage for a Dev Environment. </p>
 */
export interface PersistentStorageConfiguration {
  /**
   * <p>The size of the persistent storage in gigabytes (specifically GiB).</p>
   *          <note>
   *             <p>Valid values for storage are based on memory sizes in 16GB increments. Valid values are
   *         16, 32, and 64.</p>
   *          </note>
   */
  sizeInGiB: number | undefined;
}

/**
 * @public
 * <p>Information about a repository that will be cloned to a Dev Environment.</p>
 */
export interface RepositoryInput {
  /**
   * <p>The name of the source repository.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the branch in a source repository.</p>
   */
  branchName?: string;
}

/**
 * @public
 */
export interface CreateDevEnvironmentRequest {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The source repository that contains the branch to clone into the Dev Environment. </p>
   */
  repositories?: RepositoryInput[];

  /**
   * <p>A user-specified idempotency token.  Idempotency ensures that an API request completes only once.
   *        With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect.</p>
   */
  clientToken?: string;

  /**
   * <p>The user-defined alias for a Dev Environment.</p>
   */
  alias?: string;

  /**
   * <p>Information about the integrated development environment (IDE) configured for a
   *       Dev Environment.</p>
   *          <note>
   *             <p>An IDE is required to create a Dev Environment. For Dev Environment creation, this field
   *         contains configuration information and must be provided.</p>
   *          </note>
   */
  ides?: IdeConfiguration[];

  /**
   * <p>The Amazon EC2 instace type to use for the Dev Environment. </p>
   */
  instanceType: _InstanceType | string | undefined;

  /**
   * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.</p>
   */
  inactivityTimeoutMinutes?: number;

  /**
   * <p>Information about the amount of storage allocated to the Dev Environment. </p>
   *          <note>
   *             <p>By default, a Dev Environment is configured to have 16GB of persistent storage when created from the Amazon CodeCatalyst console, but there is no default when programmatically
   *         creating a Dev Environment.
   *         Valid values for persistent storage are based on memory sizes in 16GB increments. Valid
   *         values are 16, 32, and 64.</p>
   *          </note>
   */
  persistentStorage: PersistentStorageConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateDevEnvironmentResponse {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment. </p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteDevEnvironmentRequest {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment you want to delete. To retrieve a list of Dev Environment IDs, use <a>ListDevEnvironments</a>.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteDevEnvironmentResponse {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the deleted Dev Environment. </p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetDevEnvironmentRequest {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment for which you want to view information. To retrieve a list of Dev Environment IDs, use <a>ListDevEnvironments</a>.</p>
   */
  id: string | undefined;
}

/**
 * @public
 * <p>Information about an integrated development environment (IDE) used in a Dev Environment.</p>
 */
export interface Ide {
  /**
   * <p>A link to the IDE runtime image.</p>
   */
  runtime?: string;

  /**
   * <p>The name of the IDE.</p>
   */
  name?: string;
}

/**
 * @public
 * <p>Information about the persistent storage for a Dev Environment.</p>
 */
export interface PersistentStorage {
  /**
   * <p>The size of the persistent storage in gigabytes (specifically GiB).</p>
   *          <note>
   *             <p>Valid values for storage are based on memory sizes in 16GB increments. Valid values are
   *         16, 32, and 64.</p>
   *          </note>
   */
  sizeInGiB: number | undefined;
}

/**
 * @public
 * <p>Information about the source repsitory for a Dev Environment. </p>
 */
export interface DevEnvironmentRepositorySummary {
  /**
   * <p>The name of the source repository.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the branch in a source repository cloned into the Dev Environment. </p>
   */
  branchName?: string;
}

/**
 * @public
 */
export enum DevEnvironmentStatus {
  DELETED = "DELETED",
  DELETING = "DELETING",
  FAILED = "FAILED",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
}

/**
 * @public
 */
export interface GetDevEnvironmentResponse {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment. </p>
   */
  id: string | undefined;

  /**
   * <p>The time when the Dev Environment was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The system-generated unique ID of the user who created the Dev Environment. </p>
   */
  creatorId: string | undefined;

  /**
   * <p>The current status of the Dev Environment.</p>
   */
  status: DevEnvironmentStatus | string | undefined;

  /**
   * <p>The reason for the status.</p>
   */
  statusReason?: string;

  /**
   * <p>The source repository that contains the branch cloned into the Dev Environment. </p>
   */
  repositories: DevEnvironmentRepositorySummary[] | undefined;

  /**
   * <p>The user-specified alias for the Dev Environment. </p>
   */
  alias?: string;

  /**
   * <p>Information about the integrated development environment (IDE) configured for the Dev Environment. </p>
   */
  ides?: Ide[];

  /**
   * <p>The Amazon EC2 instace type to use for the Dev Environment. </p>
   */
  instanceType: _InstanceType | string | undefined;

  /**
   * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes.</p>
   */
  inactivityTimeoutMinutes: number | undefined;

  /**
   * <p>Information about the amount of storage allocated to the Dev Environment.  By default, a Dev Environment is configured to have 16GB of persistent storage.</p>
   */
  persistentStorage: PersistentStorage | undefined;
}

/**
 * @public
 * <p/>
 */
export interface Filter {
  /**
   * <p/>
   */
  key: string | undefined;

  /**
   * <p/>
   */
  values: string[] | undefined;

  /**
   * <p/>
   */
  comparisonOperator?: string;
}

/**
 * @public
 */
export interface ListDevEnvironmentsRequest {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>Information about filters to apply to narrow the results returned in the list.</p>
   */
  filters?: Filter[];

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about a Dev Environment. </p>
 */
export interface DevEnvironmentSummary {
  /**
   * <p>The name of the space.</p>
   */
  spaceName?: string;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName?: string;

  /**
   * <p>The system-generated unique ID for the Dev Environment. </p>
   */
  id: string | undefined;

  /**
   * <p>The time when the Dev Environment was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The system-generated unique ID of the user who created the Dev Environment. </p>
   */
  creatorId: string | undefined;

  /**
   * <p>The status of the Dev Environment. </p>
   */
  status: DevEnvironmentStatus | string | undefined;

  /**
   * <p>The reason for the status.</p>
   */
  statusReason?: string;

  /**
   * <p>Information about the repositories that will be cloned into the Dev Environment. If no rvalue is specified, no repository is cloned.</p>
   */
  repositories: DevEnvironmentRepositorySummary[] | undefined;

  /**
   * <p>The user-specified alias for the Dev Environment.</p>
   */
  alias?: string;

  /**
   * <p>Information about the integrated development environment (IDE) configured for a Dev Environment.</p>
   */
  ides?: Ide[];

  /**
   * <p>The Amazon EC2 instace type used for the Dev Environment. </p>
   */
  instanceType: _InstanceType | string | undefined;

  /**
   * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Dev Environments consume compute minutes when running.</p>
   */
  inactivityTimeoutMinutes: number | undefined;

  /**
   * <p>Information about the configuration of persistent storage for the Dev Environment.</p>
   */
  persistentStorage: PersistentStorage | undefined;
}

/**
 * @public
 */
export interface ListDevEnvironmentsResponse {
  /**
   * <p>Information about the Dev Environments in a project.</p>
   */
  items: DevEnvironmentSummary[] | undefined;

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface StartDevEnvironmentRequest {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment. </p>
   */
  id: string | undefined;

  /**
   * <p>Information about the integrated development environment (IDE) configured for a Dev Environment. </p>
   */
  ides?: IdeConfiguration[];

  /**
   * <p>The Amazon EC2 instace type to use for the Dev Environment. </p>
   */
  instanceType?: _InstanceType | string;

  /**
   * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.</p>
   */
  inactivityTimeoutMinutes?: number;
}

/**
 * @public
 */
export interface StartDevEnvironmentResponse {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment. </p>
   */
  id: string | undefined;

  /**
   * <p>The status of the Dev Environment. </p>
   */
  status: DevEnvironmentStatus | string | undefined;
}

/**
 * @public
 * <p>Information about the commands that will be run on a Dev Environment when an SSH session begins.</p>
 */
export interface ExecuteCommandSessionConfiguration {
  /**
   * <p>The command used at the beginning of the SSH session to a Dev Environment.</p>
   */
  command: string | undefined;

  /**
   * <p>An array of arguments containing arguments and members.</p>
   */
  arguments?: string[];
}

/**
 * @public
 */
export enum DevEnvironmentSessionType {
  SSH = "SSH",
  SSM = "SSM",
}

/**
 * @public
 * <p>Information about the configuration of a Dev Environment session.</p>
 */
export interface DevEnvironmentSessionConfiguration {
  /**
   * <p>The type of the session.</p>
   */
  sessionType: DevEnvironmentSessionType | string | undefined;

  /**
   * <p>Information about optional commands that will be run on the Dev Environment when the SSH session begins.</p>
   */
  executeCommandSessionConfiguration?: ExecuteCommandSessionConfiguration;
}

/**
 * @public
 */
export interface StartDevEnvironmentSessionRequest {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment.</p>
   */
  id: string | undefined;

  /**
   * <p>Information about the configuration of a Dev Environment session.</p>
   */
  sessionConfiguration: DevEnvironmentSessionConfiguration | undefined;
}

/**
 * @public
 * <p>Information about connection details for a Dev Environment.</p>
 */
export interface DevEnvironmentAccessDetails {
  /**
   * <p>The URL used to send commands to and from the Dev Environment.</p>
   */
  streamUrl: string | undefined;

  /**
   * <p>An encrypted token value that contains session and caller information used to authenticate the connection.</p>
   */
  tokenValue: string | undefined;
}

/**
 * @public
 */
export interface StartDevEnvironmentSessionResponse {
  /**
   * <p>Information about connection details for a Dev Environment.</p>
   */
  accessDetails: DevEnvironmentAccessDetails | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment session.</p>
   */
  sessionId?: string;

  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopDevEnvironmentRequest {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment. </p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopDevEnvironmentResponse {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment. </p>
   */
  id: string | undefined;

  /**
   * <p>The status of the Dev Environment. </p>
   */
  status: DevEnvironmentStatus | string | undefined;
}

/**
 * @public
 */
export interface StopDevEnvironmentSessionRequest {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment. To obtain this ID, use <a>ListDevEnvironments</a>.</p>
   */
  id: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment session. This ID is returned by <a>StartDevEnvironmentSession</a>.</p>
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface StopDevEnvironmentSessionResponse {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment.</p>
   */
  id: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment session.</p>
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateDevEnvironmentRequest {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment. </p>
   */
  id: string | undefined;

  /**
   * <p>The user-specified alias for the Dev Environment. Changing this value will not cause a restart.</p>
   */
  alias?: string;

  /**
   * <p>Information about the integrated development environment (IDE) configured for a Dev Environment.</p>
   */
  ides?: IdeConfiguration[];

  /**
   * <p>The Amazon EC2 instace type to use for the Dev Environment. </p>
   *          <note>
   *             <p>Changing this value will cause a restart of the Dev Environment if it is running.</p>
   *          </note>
   */
  instanceType?: _InstanceType | string;

  /**
   * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes.
   *       Only whole integers are allowed. Dev Environments consume compute minutes when running.</p>
   *          <note>
   *             <p>Changing this value will cause a restart of the Dev Environment if it is running.</p>
   *          </note>
   */
  inactivityTimeoutMinutes?: number;

  /**
   * <p>A user-specified idempotency token.  Idempotency ensures that an API request completes only once.
   *        With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateDevEnvironmentResponse {
  /**
   * <p>The system-generated unique ID of the Dev Environment. </p>
   */
  id: string | undefined;

  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The user-specified alias for the Dev Environment.</p>
   */
  alias?: string;

  /**
   * <p>Information about the integrated development environment (IDE) configured for the Dev Environment.</p>
   */
  ides?: IdeConfiguration[];

  /**
   * <p>The Amazon EC2 instace type to use for the Dev Environment. </p>
   */
  instanceType?: _InstanceType | string;

  /**
   * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. </p>
   */
  inactivityTimeoutMinutes?: number;

  /**
   * <p>A user-specified idempotency token.  Idempotency ensures that an API request completes only once.
   *        With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface GetProjectRequest {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetProjectResponse {
  /**
   * <p>The name of the space.</p>
   */
  spaceName?: string;

  /**
   * <p>The name of the project in the space.</p>
   */
  name: string | undefined;

  /**
   * <p>The friendly name of the project displayed to users in Amazon CodeCatalyst.</p>
   */
  displayName?: string;

  /**
   * <p>The description of the project.</p>
   */
  description?: string;
}

/**
 * @public
 */
export enum ComparisonOperator {
  EQUALS = "EQ",
  GREATER_THAN = "GT",
  GREATER_THAN_OR_EQUALS = "GE",
  LESS_THAN = "LT",
  LESS_THAN_OR_EQUALS = "LE",
}

/**
 * @public
 */
export enum FilterKey {
  HAS_ACCESS_TO = "hasAccessTo",
}

/**
 * @public
 * <p>nformation about the filter used to narrow the results returned in a list of projects.</p>
 */
export interface ProjectListFilter {
  /**
   * <p>A key that can be used to sort results.</p>
   */
  key: FilterKey | string | undefined;

  /**
   * <p>The value of the key.</p>
   */
  values: string[] | undefined;

  /**
   * <p>The operator used to compare the fields.</p>
   */
  comparisonOperator?: ComparisonOperator | string;
}

/**
 * @public
 */
export interface ListProjectsRequest {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   */
  maxResults?: number;

  /**
   * <p>Information about filters to apply to narrow the results returned in the list.</p>
   */
  filters?: ProjectListFilter[];
}

/**
 * @public
 * <p>Information about a project.</p>
 */
export interface ProjectSummary {
  /**
   * <p>The name of the project in the space.</p>
   */
  name: string | undefined;

  /**
   * <p>The friendly name displayed to users of the project in Amazon CodeCatalyst.</p>
   */
  displayName?: string;

  /**
   * <p>The description of the project.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface ListProjectsResponse {
  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;

  /**
   * <p>Information about the projects.</p>
   */
  items?: ProjectSummary[];
}

/**
 * @public
 */
export interface GetSourceRepositoryCloneUrlsRequest {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The name of the source repository.</p>
   */
  sourceRepositoryName: string | undefined;
}

/**
 * @public
 */
export interface GetSourceRepositoryCloneUrlsResponse {
  /**
   * <p>The HTTPS URL to use when cloning the source repository.</p>
   */
  https: string | undefined;
}

/**
 * @public
 */
export interface ListSourceRepositoriesRequest {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about a source repository returned in a list of source repositories.</p>
 */
export interface ListSourceRepositoriesItem {
  /**
   * <p>The system-generated unique ID of the source repository.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the source repository.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the repository, if any.</p>
   */
  description?: string;

  /**
   * <p>The time the source repository was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The time the source repository was created, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  createdTime: Date | undefined;
}

/**
 * @public
 */
export interface ListSourceRepositoriesResponse {
  /**
   * <p>Information about the source repositories.</p>
   */
  items?: ListSourceRepositoriesItem[];

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface CreateSourceRepositoryBranchRequest {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The name of the repository where you want to create a branch.</p>
   */
  sourceRepositoryName: string | undefined;

  /**
   * <p>The name for the branch you're creating.</p>
   */
  name: string | undefined;

  /**
   * <p>The commit ID in an existing branch from which you want to create the new branch.</p>
   */
  headCommitId?: string;
}

/**
 * @public
 */
export interface CreateSourceRepositoryBranchResponse {
  /**
   * <p>The Git reference name of the branch.</p>
   */
  ref?: string;

  /**
   * <p>The name of the newly created branch.</p>
   */
  name?: string;

  /**
   * <p>The time the branch was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The commit ID of the tip of the newly created branch.</p>
   */
  headCommitId?: string;
}

/**
 * @public
 */
export interface ListSourceRepositoryBranchesRequest {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The name of the source repository.</p>
   */
  sourceRepositoryName: string | undefined;

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about a branch of a source repository returned in a list of branches.</p>
 */
export interface ListSourceRepositoryBranchesItem {
  /**
   * <p>The Git reference name of the branch.</p>
   */
  ref?: string;

  /**
   * <p>The name of the branch.</p>
   */
  name?: string;

  /**
   * <p>The time the branch was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The commit ID of the tip of the branch at the time of the request, also known as the head commit.</p>
   */
  headCommitId?: string;
}

/**
 * @public
 */
export interface ListSourceRepositoryBranchesResponse {
  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;

  /**
   * <p>Information about the source branches.</p>
   */
  items: ListSourceRepositoryBranchesItem[] | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionRequest {
  /**
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionResponse {
  /**
   * <p>The type of the billing plan for the space.</p>
   */
  subscriptionType?: string;

  /**
   * <p>The display name of the Amazon Web Services account used for billing for the space.</p>
   */
  awsAccountName?: string;
}

/**
 * @public
 */
export interface VerifySessionResponse {
  /**
   * <p>The system-generated unique ID of the user in Amazon CodeCatalyst.</p>
   */
  identity?: string;
}

/**
 * @internal
 */
export const CreateAccessTokenResponseFilterSensitiveLog = (obj: CreateAccessTokenResponse): any => ({
  ...obj,
  ...(obj.secret && { secret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DevEnvironmentAccessDetailsFilterSensitiveLog = (obj: DevEnvironmentAccessDetails): any => ({
  ...obj,
  ...(obj.streamUrl && { streamUrl: SENSITIVE_STRING }),
  ...(obj.tokenValue && { tokenValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartDevEnvironmentSessionResponseFilterSensitiveLog = (obj: StartDevEnvironmentSessionResponse): any => ({
  ...obj,
  ...(obj.accessDetails && { accessDetails: SENSITIVE_STRING }),
});
