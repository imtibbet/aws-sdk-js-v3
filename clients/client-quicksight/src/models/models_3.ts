// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { AccountCustomization, ActiveIAMPolicyAssignment, ResourceStatus } from "./models_0";
import {
  AnalysisDefinition,
  AnalysisSearchFilter,
  AnalysisSourceEntity,
  AnalysisSummary,
  AssignmentStatus,
  ColumnGroup,
  ColumnLevelPermissionRule,
  Tag,
} from "./models_1";
import {
  _Parameters,
  _ParametersFilterSensitiveLog,
  DashboardPublishOptions,
  DashboardSearchFilter,
  DashboardSourceEntity,
  DashboardSummary,
  DashboardVersionDefinition,
  DashboardVersionSummary,
  DataSetImportMode,
  DataSetSearchFilter,
  DataSetSummary,
  DataSetUsageConfiguration,
  DataSource,
  DataSourceCredentials,
  DataSourceParameters,
  DataSourceSearchFilter,
  DataSourceSummary,
  FieldFolder,
  FolderSearchFilter,
  FolderSummary,
  Group,
  GroupMember,
  IdentityType,
  Ingestion,
  LinkSharingConfiguration,
  LogicalTable,
  LogicalTableFilterSensitiveLog,
  MemberIdArnPair,
  NamespaceInfoV2,
  PhysicalTable,
  ResourcePermission,
  RowLevelPermissionDataSet,
  RowLevelPermissionTagConfiguration,
  RowLevelPermissionTagConfigurationFilterSensitiveLog,
  SslProperties,
  TemplateAlias,
  TemplateSourceEntity,
  TemplateVersionDefinition,
  ThemeAlias,
  ThemeConfiguration,
  ThemeType,
  User,
  UserRole,
  VpcConnectionProperties,
} from "./models_2";
import { QuickSightServiceException as __BaseException } from "./QuickSightServiceException";

/**
 * @public
 * <p>Output returned from the <code>GetDashboardEmbedUrl</code> operation.</p>
 */
export interface GetDashboardEmbedUrlResponse {
  /**
   * <p>A single-use URL that you can put into your server-side webpage to embed your
   * 			dashboard. This URL is valid for 5 minutes. The API operation provides the URL with an
   * 			<code>auth_code</code> value that enables one (and only one) sign-on to a user session
   * 			that is valid for 10 hours. </p>
   */
  EmbedUrl?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 * <p>The identity type specified isn't supported. Supported identity types include
 * 				<code>IAM</code> and <code>QUICKSIGHT</code>.</p>
 */
export class IdentityTypeNotSupportedException extends __BaseException {
  readonly name: "IdentityTypeNotSupportedException" = "IdentityTypeNotSupportedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdentityTypeNotSupportedException, __BaseException>) {
    super({
      name: "IdentityTypeNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdentityTypeNotSupportedException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 */
export interface GetSessionEmbedUrlRequest {
  /**
   * <p>The ID for the Amazon Web Services account associated with your Amazon QuickSight subscription.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The URL you use to access the embedded session. The entry point URL is constrained to
   *           the following paths:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>/start</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/start/analyses</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/start/dashboards</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/start/favorites</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/dashboards/<i>DashboardId</i>
   *                   </code> - where <code>DashboardId</code> is the actual ID key from the Amazon QuickSight console URL of the dashboard</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>/analyses/<i>AnalysisId</i>
   *                   </code> - where <code>AnalysisId</code> is the actual ID key from the Amazon QuickSight console URL of the analysis</p>
   *             </li>
   *          </ul>
   */
  EntryPoint?: string;

  /**
   * <p>How many minutes the session is valid. The session lifetime must be 15-600 minutes.</p>
   */
  SessionLifetimeInMinutes?: number;

  /**
   * <p>The Amazon QuickSight user's Amazon Resource Name (ARN), for use with <code>QUICKSIGHT</code> identity type.
   * 			You can use this for any type of Amazon QuickSight users in your account (readers, authors, or
   * 			admins). They need to be authenticated as one of the following:</p>
   *          <ol>
   *             <li>
   *                <p>Active Directory (AD) users or group members</p>
   *             </li>
   *             <li>
   *                <p>Invited nonfederated users</p>
   *             </li>
   *             <li>
   *                <p>IAM users and IAM role-based sessions authenticated
   *                     through Federated Single Sign-On using SAML, OpenID Connect, or IAM
   *                     federation</p>
   *             </li>
   *          </ol>
   *          <p>Omit this parameter for users in the third group, IAM users and IAM role-based
   *             sessions.</p>
   */
  UserArn?: string;
}

/**
 * @public
 */
export interface GetSessionEmbedUrlResponse {
  /**
   * <p>A single-use URL that you can put into your server-side web page to embed your
   * 			Amazon QuickSight session. This URL is valid for 5 minutes. The API operation provides the URL with an
   * 			<code>auth_code</code> value that enables one (and only one) sign-on to a user session
   * 			that is valid for 10 hours. </p>
   */
  EmbedUrl?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export enum GroupFilterAttribute {
  GROUP_NAME = "GROUP_NAME",
}

/**
 * @public
 */
export enum GroupFilterOperator {
  StartsWith = "StartsWith",
}

/**
 * @public
 * <p>A <code>GroupSearchFilter</code> object that you want to apply to your search.</p>
 */
export interface GroupSearchFilter {
  /**
   * <p>The comparison operator that you want to use as a filter, for example <code>"Operator":
   *                 "StartsWith"</code>. Currently, the only supported operator is
   *                 <code>StartsWith</code>.</p>
   */
  Operator: GroupFilterOperator | string | undefined;

  /**
   * <p>The name of the value that you want to use as a filter, for example <code>"Name":
   *                 "GROUP_NAME"</code>. Currently, the only supported name is
   *             <code>GROUP_NAME</code>.</p>
   */
  Name: GroupFilterAttribute | string | undefined;

  /**
   * <p>The value of the named item, in this case <code>GROUP_NAME</code>, that you want to use as a filter.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>IAM policy assignment summary.</p>
 */
export interface IAMPolicyAssignmentSummary {
  /**
   * <p>Assignment name.</p>
   */
  AssignmentName?: string;

  /**
   * <p>Assignment status.</p>
   */
  AssignmentStatus?: AssignmentStatus | string;
}

/**
 * @public
 * <p>You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The Amazon Web Services request ID for this request.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * @public
 */
export interface ListAnalysesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the analyses.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAnalysesResponse {
  /**
   * <p>Metadata describing each of the analyses that are listed.</p>
   */
  AnalysisSummaryList?: AnalysisSummary[];

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface ListDashboardsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboards that you're
   *             listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDashboardsResponse {
  /**
   * <p>A structure that contains all of the dashboards in your Amazon Web Services account. This structure
   *             provides basic information about the dashboards.</p>
   */
  DashboardSummaryList?: DashboardSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface ListDashboardVersionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're listing versions
   *             for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDashboardVersionsResponse {
  /**
   * <p>A structure that contains information about each version of the dashboard.</p>
   */
  DashboardVersionSummaryList?: DashboardVersionSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface ListDataSetsRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDataSetsResponse {
  /**
   * <p>The list of dataset summaries.</p>
   */
  DataSetSummaries?: DataSetSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListDataSourcesRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDataSourcesResponse {
  /**
   * <p>A list of data sources.</p>
   */
  DataSources?: DataSource[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListFolderMembersRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListFolderMembersResponse {
  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>A structure that contains all of the folder members (dashboards, analyses, and datasets) in the folder.</p>
   */
  FolderMemberList?: MemberIdArnPair[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface ListFoldersRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListFoldersResponse {
  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>A structure that contains all of the folders in the Amazon Web Services account. This structure provides basic information about the folders.</p>
   */
  FolderSummaryList?: FolderSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface ListGroupMembershipsRequest {
  /**
   * <p>The name of the group that you want to see a membership list of.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return from this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace of the group that you want a list of users from.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListGroupMembershipsResponse {
  /**
   * <p>The list of the members of the group.</p>
   */
  GroupMemberList?: GroupMember[];

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The namespace that you want a list of groups from.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * <p>The list of the groups.</p>
   */
  GroupList?: Group[];

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListIAMPolicyAssignmentsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains these IAM policy assignments.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The status of the assignments.</p>
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   * <p>The namespace for the assignments.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListIAMPolicyAssignmentsResponse {
  /**
   * <p>Information describing the IAM policy assignments.</p>
   */
  IAMPolicyAssignments?: IAMPolicyAssignmentSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListIAMPolicyAssignmentsForUserRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the assignments.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the user.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The namespace of the assignment.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListIAMPolicyAssignmentsForUserResponse {
  /**
   * <p>The active assignments for this user.</p>
   */
  ActiveAssignments?: ActiveIAMPolicyAssignment[];

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListIngestionsRequest {
  /**
   * <p>The ID of the dataset used in the ingestion.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListIngestionsResponse {
  /**
   * <p>A list of the ingestions.</p>
   */
  Ingestions?: Ingestion[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListNamespacesRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the Amazon QuickSight namespaces that you want to list.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A unique pagination token that can be used in a subsequent request. You will receive a pagination token in the response body of a previous <code>ListNameSpaces</code> API call if there is more data that can be returned. To receive the data, make another <code>ListNamespaces</code> API call with the returned token to retrieve the next page of data. Each token is valid for 24 hours. If you try to make a <code>ListNamespaces</code> API call with an expired token, you will receive a <code>HTTP 400 InvalidNextTokenException</code> error.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListNamespacesResponse {
  /**
   * <p>The information about the namespaces in this Amazon Web Services account. The response includes
   *         the namespace ARN, name, Amazon Web Services Region, notification email address, creation status, and
   *         identity store.</p>
   */
  Namespaces?: NamespaceInfoV2[];

  /**
   * <p>A unique pagination token that can be used in a subsequent request. Receiving <code>NextToken</code> in your response inticates that there is more data that can be returned. To receive the data, make another <code>ListNamespaces</code> API call with the returned token to retrieve the next page of data. Each token is valid for 24 hours. If you try to make a <code>ListNamespaces</code> API call with an expired token, you will receive a <code>HTTP 400 InvalidNextTokenException</code> error.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want a list of tags for.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
   * 			resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListTemplateAliasesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template aliases that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListTemplateAliasesResponse {
  /**
   * <p>A structure containing the list of the template's aliases.</p>
   */
  TemplateAliasList?: TemplateAlias[];

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTemplatesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the templates that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The template summary.</p>
 */
export interface TemplateSummary {
  /**
   * <p>A summary of a template.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the template. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  TemplateId?: string;

  /**
   * <p>A display name for the template.</p>
   */
  Name?: string;

  /**
   * <p>A structure containing a list of version numbers for the template summary.</p>
   */
  LatestVersionNumber?: number;

  /**
   * <p>The last time that this template was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The last time that this template was updated.</p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface ListTemplatesResponse {
  /**
   * <p>A structure containing information about the templates in the list.</p>
   */
  TemplateSummaryList?: TemplateSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface ListTemplateVersionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the templates that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The template version.</p>
 */
export interface TemplateVersionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the template version.</p>
   */
  Arn?: string;

  /**
   * <p>The version number of the template version.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The time that this template version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The status of the template version.</p>
   */
  Status?: ResourceStatus | string;

  /**
   * <p>The description of the template version.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface ListTemplateVersionsResponse {
  /**
   * <p>A structure containing a list of all the versions of the specified template.</p>
   */
  TemplateVersionSummaryList?: TemplateVersionSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface ListThemeAliasesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme aliases that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListThemeAliasesResponse {
  /**
   * <p>A structure containing the list of the theme's aliases.</p>
   */
  ThemeAliasList?: ThemeAlias[];

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListThemesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the themes that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The type of themes that you want to list. Valid options include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL (default)</code>- Display all existing themes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM</code> - Display only the themes created by people using Amazon QuickSight.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT</code> - Display only the starting themes defined by Amazon QuickSight.</p>
   *             </li>
   *          </ul>
   */
  Type?: ThemeType | string;
}

/**
 * @public
 * <p>The theme summary.</p>
 */
export interface ThemeSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>the display name for the theme.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the theme. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  ThemeId?: string;

  /**
   * <p>The latest version number for the theme. </p>
   */
  LatestVersionNumber?: number;

  /**
   * <p>The date and time that this theme was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The last date and time that this theme was updated.</p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface ListThemesResponse {
  /**
   * <p>Information about the themes in the list.</p>
   */
  ThemeSummaryList?: ThemeSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface ListThemeVersionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the themes that you're listing.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The theme version.</p>
 */
export interface ThemeVersionSummary {
  /**
   * <p>The version number of the theme version.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme version.</p>
   */
  Arn?: string;

  /**
   * <p>The description of the theme version.</p>
   */
  Description?: string;

  /**
   * <p>The date and time that this theme version was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The status of the theme version.</p>
   */
  Status?: ResourceStatus | string;
}

/**
 * @public
 */
export interface ListThemeVersionsResponse {
  /**
   * <p>A structure containing a list of all the versions of the specified theme.</p>
   */
  ThemeVersionSummaryList?: ThemeVersionSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface ListUserGroupsRequest {
  /**
   * <p>The Amazon QuickSight user name that you want to list group memberships for.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that the user is in. Currently, you use the ID for the Amazon Web Services account
   * 			that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return from this request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListUserGroupsResponse {
  /**
   * <p>The list of groups the user is a member of.</p>
   */
  GroupList?: Group[];

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * <p>The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return from this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * <p>The list of users.</p>
   */
  UserList?: User[];

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface RegisterUserRequest {
  /**
   * <p>Amazon QuickSight supports several ways of managing the identity of users. This
   * 			parameter accepts two values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IAM</code>: A user whose identity maps to an existing IAM user or role.
   * 				</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUICKSIGHT</code>: A user whose identity is owned and managed internally by
   * 					Amazon QuickSight. </p>
   *             </li>
   *          </ul>
   */
  IdentityType: IdentityType | string | undefined;

  /**
   * <p>The email address of the user that you want to register.</p>
   */
  Email: string | undefined;

  /**
   * <p>The Amazon QuickSight role for the user. The user role can be one of the
   * 			following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>READER</code>: A user who has read-only access to dashboards.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTHOR</code>: A user who can create data sources, datasets, analyses, and
   * 					dashboards.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADMIN</code>: A user who is an author, who can also manage Amazon QuickSight
   * 					settings.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESTRICTED_READER</code>: This role isn't currently available for
   * 					use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESTRICTED_AUTHOR</code>: This role isn't currently available for
   * 					use.</p>
   *             </li>
   *          </ul>
   */
  UserRole: UserRole | string | undefined;

  /**
   * <p>The ARN of the IAM user or role that you are registering with Amazon QuickSight. </p>
   */
  IamArn?: string;

  /**
   * <p>You need to use this parameter only when you register one or more users using an assumed
   * 			IAM role. You don't need to provide the session name for other scenarios, for example when
   * 			you are registering an IAM user or an Amazon QuickSight user. You can register multiple
   * 			users using the same IAM role if each user has a different session name. For more
   * 			information on assuming IAM roles, see <a href="https://docs.aws.amazon.com/cli/latest/reference/sts/assume-role.html">
   *                <code>assume-role</code>
   *             </a> in the <i>CLI Reference.</i>
   *          </p>
   */
  SessionName?: string;

  /**
   * <p>The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The Amazon QuickSight user name that you want to create for the user you are
   * 			registering.</p>
   */
  UserName?: string;

  /**
   * <p>(Enterprise edition only) The name of the custom permissions profile that you want to
   *             assign to this user. Customized permissions allows you to control a user's access by
   *             restricting access the following operations:</p>
   *          <ul>
   *             <li>
   *                <p>Create and update data sources</p>
   *             </li>
   *             <li>
   *                <p>Create and update datasets</p>
   *             </li>
   *             <li>
   *                <p>Create and update email reports</p>
   *             </li>
   *             <li>
   *                <p>Subscribe to email reports</p>
   *             </li>
   *          </ul>
   *          <p>To add custom permissions to an existing user, use <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateUser.html">UpdateUser</a>
   *             </code> instead.</p>
   *          <p>A set of custom permissions includes any combination of these restrictions. Currently,
   *             you need to create the profile names for custom permission sets by using the Amazon QuickSight
   *             console. Then, you use the <code>RegisterUser</code> API operation to assign the named set of
   *             permissions to a Amazon QuickSight user. </p>
   *          <p>Amazon QuickSight custom permissions are applied through IAM policies. Therefore, they
   *             override the permissions typically granted by assigning Amazon QuickSight users to one of the
   *             default security cohorts in Amazon QuickSight (admin, author, reader).</p>
   *          <p>This feature is available only to Amazon QuickSight Enterprise edition subscriptions.</p>
   */
  CustomPermissionsName?: string;

  /**
   * <p>The type of supported external login provider that provides identity to let a user federate into Amazon QuickSight with an associated Identity and Access Management(IAM) role. The type of supported external login provider can be one of the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COGNITO</code>: Amazon Cognito. The provider URL is cognito-identity.amazonaws.com. When choosing the <code>COGNITO</code> provider type, don’t use the "CustomFederationProviderUrl" parameter which is only needed when the external provider is custom.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_OIDC</code>: Custom OpenID Connect (OIDC) provider. When choosing <code>CUSTOM_OIDC</code> type, use the <code>CustomFederationProviderUrl</code> parameter to provide the custom OIDC provider URL.</p>
   *             </li>
   *          </ul>
   */
  ExternalLoginFederationProviderType?: string;

  /**
   * <p>The URL of the custom OpenID Connect (OIDC) provider that provides identity to let a user federate
   *          into Amazon QuickSight with an associated Identity and Access Management(IAM) role. This parameter should
   *          only be used when <code>ExternalLoginFederationProviderType</code> parameter is set to <code>CUSTOM_OIDC</code>.</p>
   */
  CustomFederationProviderUrl?: string;

  /**
   * <p>The identity ID for a user in the external login provider.</p>
   */
  ExternalLoginId?: string;
}

/**
 * @public
 */
export interface RegisterUserResponse {
  /**
   * <p>The user's user name.</p>
   */
  User?: User;

  /**
   * <p>The URL the user visits to complete registration and provide a password. This is
   * 			returned only for users with an identity type of <code>QUICKSIGHT</code>.</p>
   */
  UserInvitationUrl?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface RestoreAnalysisRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the analysis.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis that you're restoring.</p>
   */
  AnalysisId: string | undefined;
}

/**
 * @public
 */
export interface RestoreAnalysisResponse {
  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the analysis that you're restoring.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the analysis that you're restoring.
   *         </p>
   */
  AnalysisId?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface SearchAnalysesRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the analyses that you're searching
   *             for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The structure for the search filters that you want to apply to your search. </p>
   */
  Filters: AnalysisSearchFilter[] | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface SearchAnalysesResponse {
  /**
   * <p>Metadata describing the analyses that you searched for.</p>
   */
  AnalysisSummaryList?: AnalysisSummary[];

  /**
   * <p>A pagination token that can be used in a subsequent request.
   *             </p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface SearchDashboardsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the user whose dashboards you're searching
   *             for. </p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The filters to apply to the search. Currently, you can search only by user name, for
   *             example, <code>"Filters": [ \{ "Name": "QUICKSIGHT_USER", "Operator": "StringEquals",
   *             "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1" \} ]</code>
   *          </p>
   */
  Filters: DashboardSearchFilter[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface SearchDashboardsResponse {
  /**
   * <p>The list of dashboards owned by the user specified in <code>Filters</code> in your
   *             request.</p>
   */
  DashboardSummaryList?: DashboardSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface SearchDataSetsRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The filters to apply to the search.</p>
   */
  Filters: DataSetSearchFilter[] | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface SearchDataSetsResponse {
  /**
   * <p>A <code>DataSetSummaries</code> object that returns a summary of a dataset.</p>
   */
  DataSetSummaries?: DataSetSummary[];

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface SearchDataSourcesRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The filters to apply to the search.</p>
   */
  Filters: DataSourceSearchFilter[] | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface SearchDataSourcesResponse {
  /**
   * <p>A <code>DataSourceSummaries</code> object that returns a summary of a data source.</p>
   */
  DataSourceSummaries?: DataSourceSummary[];

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface SearchFoldersRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The filters to apply to the search. Currently, you can search only by the parent folder ARN. For example, <code>"Filters": [ \{ "Name": "PARENT_FOLDER_ARN", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:folder/folderId" \} ]</code>.</p>
   */
  Filters: FolderSearchFilter[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface SearchFoldersResponse {
  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>A structure that contains all of the folders in the Amazon Web Services account. This structure provides basic information about the folders.</p>
   */
  FolderSummaryList?: FolderSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface SearchGroupsRequest {
  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   *           Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return from this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The namespace that you want to search.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The structure for the search filters that you want to apply to your search.</p>
   */
  Filters: GroupSearchFilter[] | undefined;
}

/**
 * @public
 */
export interface SearchGroupsResponse {
  /**
   * <p>A list of groups in a specified namespace that match the filters you set in your <code>SearchGroups</code> request.</p>
   */
  GroupList?: Group[];

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface UpdateAccountCustomizationRequest {
  /**
   * <p>The ID for the Amazon Web Services account that you want to update Amazon QuickSight customizations
   *             for.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace that you want to update Amazon QuickSight customizations for.</p>
   */
  Namespace?: string;

  /**
   * <p>The Amazon QuickSight customizations you're updating in the current Amazon Web Services Region. </p>
   */
  AccountCustomization: AccountCustomization | undefined;
}

/**
 * @public
 */
export interface UpdateAccountCustomizationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the updated customization for this Amazon Web Services account.</p>
   */
  Arn?: string;

  /**
   * <p>The ID for the Amazon Web Services account that you want to update Amazon QuickSight customizations
   *             for.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The namespace associated with the customization that you're updating.</p>
   */
  Namespace?: string;

  /**
   * <p>The Amazon QuickSight customizations you're updating in the current Amazon Web Services Region. </p>
   */
  AccountCustomization?: AccountCustomization;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface UpdateAccountSettingsRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the Amazon QuickSight settings that you want to
   *             list.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The default namespace for this Amazon Web Services account. Currently, the default is
   *                 <code>default</code>. IAM users that
   *             register for the first time with Amazon QuickSight provide an email address that becomes
   *             associated with the default namespace.
   *         </p>
   */
  DefaultNamespace: string | undefined;

  /**
   * <p>The email address that you want Amazon QuickSight to send notifications to regarding your
   *             Amazon Web Services account or Amazon QuickSight subscription.</p>
   */
  NotificationEmail?: string;

  /**
   * <p>A boolean value that determines whether or not an Amazon QuickSight account can be deleted. A <code>True</code> value doesn't allow the account to be deleted and results in an error message if a user tries to make a <code>DeleteAccountSubscription</code> request. A <code>False</code> value will allow the account to be deleted.</p>
   */
  TerminationProtectionEnabled?: boolean;
}

/**
 * @public
 */
export interface UpdateAccountSettingsResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface UpdateAnalysisRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the analysis that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the analysis that you're updating. This ID displays in the URL of the
   *             analysis.</p>
   */
  AnalysisId: string | undefined;

  /**
   * <p>A descriptive name for the analysis that you're updating. This name displays for the
   *             analysis in the Amazon QuickSight console.</p>
   */
  Name: string | undefined;

  /**
   * <p>The parameter names and override values that you want to use. An analysis can have
   *             any parameter type, and some parameters might accept multiple values. </p>
   */
  Parameters?: _Parameters;

  /**
   * <p>A source entity to use for the analysis that you're updating. This metadata structure
   *             contains details that describe a source template and one or more datasets.</p>
   */
  SourceEntity?: AnalysisSourceEntity;

  /**
   * <p>The Amazon Resource Name (ARN) for the theme to apply to the analysis that you're
   *             creating. To see the theme in the Amazon QuickSight console, make sure that you have access to
   *             it.</p>
   */
  ThemeArn?: string;

  /**
   * <p>The definition of an analysis.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   */
  Definition?: AnalysisDefinition;
}

/**
 * @public
 */
export interface UpdateAnalysisResponse {
  /**
   * <p>The ARN of the analysis that you're updating.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the analysis.</p>
   */
  AnalysisId?: string;

  /**
   * <p>The update status of the last update that was made to the analysis.</p>
   */
  UpdateStatus?: ResourceStatus | string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface UpdateAnalysisPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the analysis whose permissions you're
   *             updating. You must be using the Amazon Web Services account that the analysis is in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the analysis whose permissions you're updating. The ID is part of the
   *             analysis URL.</p>
   */
  AnalysisId: string | undefined;

  /**
   * <p>A structure that describes the permissions to add and the principal to add them
   *             to.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>A structure that describes the permissions to remove and the principal to remove them
   *             from.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

/**
 * @public
 */
export interface UpdateAnalysisPermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the analysis that you updated.</p>
   */
  AnalysisArn?: string;

  /**
   * <p>The ID of the analysis that you updated permissions for.</p>
   */
  AnalysisId?: string;

  /**
   * <p>A structure that describes the principals and the resource-level permissions on an
   *             analysis.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface UpdateDashboardRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The display name of the dashboard.</p>
   */
  Name: string | undefined;

  /**
   * <p>The entity that you are using as a source when you update the dashboard. In
   *             <code>SourceEntity</code>, you specify the type of object you're using as source. You
   *             can only update a dashboard from a template, so you use a <code>SourceTemplate</code>
   *             entity. If you need to update a dashboard from an analysis, first convert the analysis
   *             to a template by using the <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>
   *             </code> API operation. For
   *             <code>SourceTemplate</code>, specify the Amazon Resource Name (ARN) of the source
   *             template. The <code>SourceTemplate</code> ARN can contain any Amazon Web Services account and any
   *             Amazon QuickSight-supported Amazon Web Services Region. </p>
   *          <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> to
   *             list the replacement datasets for the placeholders listed in the original. The schema in
   *             each dataset must match its placeholder. </p>
   */
  SourceEntity?: DashboardSourceEntity;

  /**
   * <p>A structure that contains the parameters of the dashboard. These are parameter
   *             overrides for a dashboard. A dashboard can have any type of parameters, and some
   *             parameters might accept multiple values.</p>
   */
  Parameters?: _Parameters;

  /**
   * <p>A description for the first version of the dashboard being created.</p>
   */
  VersionDescription?: string;

  /**
   * <p>Options for publishing the dashboard when you create it:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AvailabilityStatus</code> for <code>AdHocFilteringOption</code> - This
   *                     status can be either <code>ENABLED</code> or <code>DISABLED</code>. When this is
   *                     set to <code>DISABLED</code>, Amazon QuickSight disables the left filter pane on the
   *                     published dashboard, which can be used for ad hoc (one-time) filtering. This
   *                     option is <code>ENABLED</code> by default. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AvailabilityStatus</code> for <code>ExportToCSVOption</code> - This
   *                     status can be either <code>ENABLED</code> or <code>DISABLED</code>. The visual
   *                     option to export data to .CSV format isn't enabled when this is set to
   *                     <code>DISABLED</code>. This option is <code>ENABLED</code> by default. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VisibilityState</code> for <code>SheetControlsOption</code> - This
   *                     visibility state can be either <code>COLLAPSED</code> or <code>EXPANDED</code>.
   *                     This option is <code>COLLAPSED</code> by default. </p>
   *             </li>
   *          </ul>
   */
  DashboardPublishOptions?: DashboardPublishOptions;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If
   *             you add a value for this field, it overrides the value that was originally associated
   *             with the entity. The theme ARN must exist in the same Amazon Web Services account where you create the
   *             dashboard.</p>
   */
  ThemeArn?: string;

  /**
   * <p>The definition of a dashboard.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   */
  Definition?: DashboardVersionDefinition;
}

/**
 * @public
 */
export interface UpdateDashboardResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;

  /**
   * <p>The ARN of the dashboard, including the version number.</p>
   */
  VersionArn?: string;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>The creation status of the request.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface UpdateDashboardPermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard whose permissions you're
   *             updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The permissions that you want to grant on this resource.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>The permissions that you want to revoke from this resource.</p>
   */
  RevokePermissions?: ResourcePermission[];

  /**
   * <p>Grants link permissions to all users in a defined namespace.</p>
   */
  GrantLinkPermissions?: ResourcePermission[];

  /**
   * <p>Revokes link permissions from all users in a defined namespace.</p>
   */
  RevokeLinkPermissions?: ResourcePermission[];
}

/**
 * @public
 */
export interface UpdateDashboardPermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>Information about the permissions on the dashboard.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>Updates the permissions of a shared link to an Amazon QuickSight dashboard.</p>
   */
  LinkSharingConfiguration?: LinkSharingConfiguration;
}

/**
 * @public
 */
export interface UpdateDashboardPublishedVersionRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the dashboard that you're
   *             updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId: string | undefined;

  /**
   * <p>The version number of the dashboard.</p>
   */
  VersionNumber: number | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardPublishedVersionResponse {
  /**
   * <p>The ID for the dashboard.</p>
   */
  DashboardId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface UpdateDataSetRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset that you want to update. This ID is unique per Amazon Web Services Region for each
   * 			Amazon Web Services account.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The display name for the dataset.</p>
   */
  Name: string | undefined;

  /**
   * <p>Declares the physical tables that are available in the underlying data sources.</p>
   */
  PhysicalTableMap: Record<string, PhysicalTable> | undefined;

  /**
   * <p>Configures the combination and transformation of the data from the physical tables.</p>
   */
  LogicalTableMap?: Record<string, LogicalTable>;

  /**
   * <p>Indicates whether you want to import the data into SPICE.</p>
   */
  ImportMode: DataSetImportMode | string | undefined;

  /**
   * <p>Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported.</p>
   */
  ColumnGroups?: ColumnGroup[];

  /**
   * <p>The folder that contains fields and nested subfolders for your dataset.</p>
   */
  FieldFolders?: Record<string, FieldFolder>;

  /**
   * <p>The row-level security configuration for the data you want to create.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * <p>The configuration of tags on a dataset to set row-level security. Row-level security tags are currently supported for anonymous embedding only.</p>
   */
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration;

  /**
   * <p>A set of one or more definitions of a <code>
   *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ColumnLevelPermissionRule.html">ColumnLevelPermissionRule</a>
   *             </code>.</p>
   */
  ColumnLevelPermissionRules?: ColumnLevelPermissionRule[];

  /**
   * <p>The usage configuration to apply to child datasets that reference this dataset as a source.</p>
   */
  DataSetUsageConfiguration?: DataSetUsageConfiguration;
}

/**
 * @public
 */
export interface UpdateDataSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  Arn?: string;

  /**
   * <p>The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId?: string;

  /**
   * <p>The ARN for the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   */
  IngestionArn?: string;

  /**
   * <p>The ID of the ingestion, which is triggered as a result of dataset creation if the import
   * 			mode is SPICE.</p>
   */
  IngestionId?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface UpdateDataSetPermissionsRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the dataset whose permissions you want to update. This ID is unique per
   * 			Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The resource permissions that you want to grant to the dataset.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>The resource permissions that you want to revoke from the dataset.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

/**
 * @public
 */
export interface UpdateDataSetPermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DataSetArn?: string;

  /**
   * <p>The ID for the dataset whose permissions you want to update. This ID is unique per
   * 			Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSetId?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface UpdateDataSourceRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. </p>
   */
  DataSourceId: string | undefined;

  /**
   * <p>A display name for the data source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The parameters that Amazon QuickSight uses to connect to your underlying source.</p>
   */
  DataSourceParameters?: DataSourceParameters;

  /**
   * <p>The credentials that Amazon QuickSight that uses to connect to your underlying source. Currently,
   * 			only credentials based on user name and password are supported.</p>
   */
  Credentials?: DataSourceCredentials;

  /**
   * <p>Use this parameter only when you want Amazon QuickSight to use a VPC connection when connecting to
   * 			your underlying source.</p>
   */
  VpcConnectionProperties?: VpcConnectionProperties;

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your underlying
   * 			source.</p>
   */
  SslProperties?: SslProperties;
}

/**
 * @public
 */
export interface UpdateDataSourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The update status of the data source's last update.</p>
   */
  UpdateStatus?: ResourceStatus | string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface UpdateDataSourcePermissionsRequest {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. </p>
   */
  DataSourceId: string | undefined;

  /**
   * <p>A list of resource permissions that you want to grant on the data source.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>A list of resource permissions that you want to revoke on the data source.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

/**
 * @public
 */
export interface UpdateDataSourcePermissionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  DataSourceArn?: string;

  /**
   * <p>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface UpdateFolderRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder to update.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

  /**
   * <p>The name of the folder.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateFolderResponse {
  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the folder.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface UpdateFolderPermissionsRequest {
  /**
   * <p>The ID for the Amazon Web Services account that contains the folder to update.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

  /**
   * <p>The permissions that you want to grant on a resource.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>The permissions that you want to revoke from a resource.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

/**
 * @public
 */
export interface UpdateFolderPermissionsResponse {
  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the folder.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId?: string;

  /**
   * <p>Information about the permissions for the folder.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface UpdateGroupRequest {
  /**
   * <p>The name of the group that you want to update.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The description for the group that you want to update.</p>
   */
  Description?: string;

  /**
   * <p>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace of the group that you want to update.</p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 */
export interface UpdateGroupResponse {
  /**
   * <p>The name of the group.</p>
   */
  Group?: Group;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface UpdateIAMPolicyAssignmentRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the IAM policy assignment. </p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The name of the assignment, also called a rule. This name must be unique within an Amazon Web Services account.</p>
   */
  AssignmentName: string | undefined;

  /**
   * <p>The namespace of the assignment.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The status of the assignment. Possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Anything specified in this assignment is used when creating the data
   * 				source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - This assignment isn't used when creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code> - This assignment is an unfinished draft and isn't used when creating the
   * 				data source.</p>
   *             </li>
   *          </ul>
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   * <p>The ARN for the IAM policy to apply to the Amazon QuickSight users and groups
   * 			specified in this assignment.</p>
   */
  PolicyArn?: string;

  /**
   * <p>The Amazon QuickSight users, groups, or both that you want to assign the policy to.</p>
   */
  Identities?: Record<string, string[]>;
}

/**
 * @public
 */
export interface UpdateIAMPolicyAssignmentResponse {
  /**
   * <p>The name of the assignment or rule.</p>
   */
  AssignmentName?: string;

  /**
   * <p>The ID of the assignment.</p>
   */
  AssignmentId?: string;

  /**
   * <p>The ARN for the IAM policy applied to the Amazon QuickSight users and groups specified in this
   * 			assignment.</p>
   */
  PolicyArn?: string;

  /**
   * <p>The Amazon QuickSight users, groups, or both that the IAM policy is assigned to.</p>
   */
  Identities?: Record<string, string[]>;

  /**
   * <p>The status of the assignment. Possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Anything specified in this assignment is used when creating the data
   * 				source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - This assignment isn't used when creating the data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DRAFT</code> - This assignment is an unfinished draft and isn't used when creating the
   * 				data source.</p>
   *             </li>
   *          </ul>
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface UpdateIpRestrictionRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the IP rules.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A map that describes the updated IP rules with CIDR ranges and descriptions.</p>
   */
  IpRestrictionRuleMap?: Record<string, string>;

  /**
   * <p>A value that specifies whether IP rules are turned on.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 */
export interface UpdateIpRestrictionResponse {
  /**
   * <p>The ID of the Amazon Web Services account that contains the IP rules.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request. </p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface UpdatePublicSharingSettingsRequest {
  /**
   * <p>The Amazon Web Services account ID associated with your Amazon QuickSight subscription.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>A Boolean value that indicates whether public sharing is turned on for an Amazon QuickSight account.</p>
   */
  PublicSharingEnabled?: boolean;
}

/**
 * @public
 */
export interface UpdatePublicSharingSettingsResponse {
  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface UpdateTemplateRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The entity that you are using as a source when you update the template. In
   * 			<code>SourceEntity</code>, you specify the type of object you're using as source:
   * 			<code>SourceTemplate</code> for a template or <code>SourceAnalysis</code> for an
   * 			analysis. Both of these require an Amazon Resource Name (ARN). For
   * 			<code>SourceTemplate</code>, specify the ARN of the source template. For
   * 			<code>SourceAnalysis</code>, specify the ARN of the source analysis. The <code>SourceTemplate</code>
   * 			ARN can contain any Amazon Web Services account and any Amazon QuickSight-supported Amazon Web Services Region;. </p>
   *          <p>Use the <code>DataSetReferences</code> entity within <code>SourceTemplate</code> or
   * 			<code>SourceAnalysis</code> to list the replacement datasets for the placeholders listed
   * 			in the original. The schema in each dataset must match its placeholder. </p>
   */
  SourceEntity?: TemplateSourceEntity;

  /**
   * <p>A description of the current template version that is being updated. Every time you call
   * 				<code>UpdateTemplate</code>, you create a new version of the template. Each version
   * 			of the template maintains a description of the version in the
   * 				<code>VersionDescription</code> field.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The name for the template.</p>
   */
  Name?: string;

  /**
   * <p>The definition of a template.</p>
   *          <p>A definition is the data model of all features in a Dashboard, Template, or Analysis.</p>
   */
  Definition?: TemplateVersionDefinition;
}

/**
 * @public
 */
export interface UpdateTemplateResponse {
  /**
   * <p>The ID for the template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the template.</p>
   */
  Arn?: string;

  /**
   * <p>The ARN for the template, including the version information of the first version.</p>
   */
  VersionArn?: string;

  /**
   * <p>The creation status of the template.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface UpdateTemplateAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template alias that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>The alias of the template that you want to update. If you name a specific alias, you update
   * 			the version that the alias points to. You can specify the latest version of the template
   * 			by providing the keyword <code>$LATEST</code> in the <code>AliasName</code> parameter.
   * 			The keyword <code>$PUBLISHED</code> doesn't apply to templates.</p>
   */
  AliasName: string | undefined;

  /**
   * <p>The version number of the template.</p>
   */
  TemplateVersionNumber: number | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateAliasResponse {
  /**
   * <p>The template alias.</p>
   */
  TemplateAlias?: TemplateAlias;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface UpdateTemplatePermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the template.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the template.</p>
   */
  TemplateId: string | undefined;

  /**
   * <p>A list of resource permissions to be granted on the template. </p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>A list of resource permissions to be revoked from the template. </p>
   */
  RevokePermissions?: ResourcePermission[];
}

/**
 * @public
 */
export interface UpdateTemplatePermissionsResponse {
  /**
   * <p>The ID for the template.</p>
   */
  TemplateId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  TemplateArn?: string;

  /**
   * <p>A list of resource permissions to be set on the template.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface UpdateThemeRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The name for the theme.</p>
   */
  Name?: string;

  /**
   * <p>The theme ID, defined by Amazon QuickSight, that a custom theme inherits from.
   * 		All themes initially inherit from a default Amazon QuickSight theme.</p>
   */
  BaseThemeId: string | undefined;

  /**
   * <p>A description of the theme version that you're updating Every time that you call
   * 				<code>UpdateTheme</code>, you create a new version of the theme. Each version of the
   * 			theme maintains a description of the version in <code>VersionDescription</code>.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The theme configuration, which contains the theme display properties.</p>
   */
  Configuration?: ThemeConfiguration;
}

/**
 * @public
 */
export interface UpdateThemeResponse {
  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the theme.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the new version of the theme.</p>
   */
  VersionArn?: string;

  /**
   * <p>The creation status of the theme.</p>
   */
  CreationStatus?: ResourceStatus | string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface UpdateThemeAliasRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme alias that you're updating.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>The name of the theme alias that you want to update.</p>
   */
  AliasName: string | undefined;

  /**
   * <p>The version number of the theme that the alias should reference.</p>
   */
  ThemeVersionNumber: number | undefined;
}

/**
 * @public
 */
export interface UpdateThemeAliasResponse {
  /**
   * <p>Information about the theme alias.</p>
   */
  ThemeAlias?: ThemeAlias;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;
}

/**
 * @public
 */
export interface UpdateThemePermissionsRequest {
  /**
   * <p>The ID of the Amazon Web Services account that contains the theme.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId: string | undefined;

  /**
   * <p>A list of resource permissions to be granted for the theme.</p>
   */
  GrantPermissions?: ResourcePermission[];

  /**
   * <p>A list of resource permissions to be revoked from the theme.</p>
   */
  RevokePermissions?: ResourcePermission[];
}

/**
 * @public
 */
export interface UpdateThemePermissionsResponse {
  /**
   * <p>The ID for the theme.</p>
   */
  ThemeId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the theme.</p>
   */
  ThemeArn?: string;

  /**
   * <p>The resulting list of resource permissions for the theme.</p>
   */
  Permissions?: ResourcePermission[];

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * <p>The Amazon QuickSight user name that you want to update.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the
   * 			Amazon Web Services account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The email address of the user that you want to update.</p>
   */
  Email: string | undefined;

  /**
   * <p>The Amazon QuickSight role of the user. The role can be one of the
   * 			following default security cohorts:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>READER</code>: A user who has read-only access to dashboards.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTHOR</code>: A user who can create data sources, datasets, analyses, and
   * 					dashboards.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADMIN</code>: A user who is an author, who can also manage Amazon QuickSight
   * 					settings.</p>
   *             </li>
   *          </ul>
   *          <p>The name of the Amazon QuickSight role is invisible to the user except for the console
   * 	        screens dealing with permissions.</p>
   */
  Role: UserRole | string | undefined;

  /**
   * <p>(Enterprise edition only) The name of the custom permissions profile that you want to
   *             assign to this user. Customized permissions allows you to control a user's access by
   *             restricting access the following operations:</p>
   *          <ul>
   *             <li>
   *                <p>Create and update data sources</p>
   *             </li>
   *             <li>
   *                <p>Create and update datasets</p>
   *             </li>
   *             <li>
   *                <p>Create and update email reports</p>
   *             </li>
   *             <li>
   *                <p>Subscribe to email reports</p>
   *             </li>
   *          </ul>
   *          <p>A set of custom permissions includes any combination of these restrictions. Currently,
   *             you need to create the profile names for custom permission sets by using the Amazon QuickSight
   *             console. Then, you use the <code>RegisterUser</code> API operation to assign the named set of
   *             permissions to a Amazon QuickSight user. </p>
   *          <p>Amazon QuickSight custom permissions are applied through IAM policies. Therefore, they
   *             override the permissions typically granted by assigning Amazon QuickSight users to one of the
   *             default security cohorts in Amazon QuickSight (admin, author, reader).</p>
   *          <p>This feature is available only to Amazon QuickSight Enterprise edition subscriptions.</p>
   */
  CustomPermissionsName?: string;

  /**
   * <p>A flag that you use to indicate that you want to remove all custom permissions
   *             from this user. Using this parameter resets the user to the state
   *             it was in before a custom permissions profile was applied. This parameter defaults to
   *             NULL and it doesn't accept any other value.</p>
   */
  UnapplyCustomPermissions?: boolean;

  /**
   * <p>The type of supported external login provider that provides identity to let a user federate into Amazon QuickSight with an associated Identity and Access Management(IAM) role. The type of supported external login provider can be one of the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COGNITO</code>: Amazon Cognito. The provider URL is cognito-identity.amazonaws.com. When choosing the <code>COGNITO</code> provider type, don’t use the "CustomFederationProviderUrl" parameter which is only needed when the external provider is custom.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_OIDC</code>: Custom OpenID Connect (OIDC) provider. When choosing <code>CUSTOM_OIDC</code> type, use the <code>CustomFederationProviderUrl</code> parameter to provide the custom OIDC provider URL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: This clears all the previously saved external login information for a user. Use the
   *           <code>
   *                      <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeUser.html">DescribeUser</a>
   *                   </code>
   *           API operation to check the external login information.</p>
   *             </li>
   *          </ul>
   */
  ExternalLoginFederationProviderType?: string;

  /**
   * <p>The URL of the custom OpenID Connect (OIDC) provider that provides identity to let a user federate
   *          into Amazon QuickSight with an associated Identity and Access Management(IAM) role. This parameter should
   *          only be used when <code>ExternalLoginFederationProviderType</code> parameter is set to <code>CUSTOM_OIDC</code>.</p>
   */
  CustomFederationProviderUrl?: string;

  /**
   * <p>The identity ID for a user in the external login provider.</p>
   */
  ExternalLoginId?: string;
}

/**
 * @public
 */
export interface UpdateUserResponse {
  /**
   * <p>The Amazon QuickSight user.</p>
   */
  User?: User;

  /**
   * <p>The Amazon Web Services request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The HTTP status of the request.</p>
   */
  Status?: number;
}

/**
 * @internal
 */
export const GetDashboardEmbedUrlResponseFilterSensitiveLog = (obj: GetDashboardEmbedUrlResponse): any => ({
  ...obj,
  ...(obj.EmbedUrl && { EmbedUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetSessionEmbedUrlResponseFilterSensitiveLog = (obj: GetSessionEmbedUrlResponse): any => ({
  ...obj,
  ...(obj.EmbedUrl && { EmbedUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAnalysisRequestFilterSensitiveLog = (obj: UpdateAnalysisRequest): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: _ParametersFilterSensitiveLog(obj.Parameters) }),
});

/**
 * @internal
 */
export const UpdateDashboardRequestFilterSensitiveLog = (obj: UpdateDashboardRequest): any => ({
  ...obj,
  ...(obj.Parameters && { Parameters: _ParametersFilterSensitiveLog(obj.Parameters) }),
});

/**
 * @internal
 */
export const UpdateDataSetRequestFilterSensitiveLog = (obj: UpdateDataSetRequest): any => ({
  ...obj,
  ...(obj.PhysicalTableMap && {
    PhysicalTableMap: Object.entries(obj.PhysicalTableMap).reduce(
      (acc: any, [key, value]: [string, PhysicalTable]) => ((acc[key] = value), acc),
      {}
    ),
  }),
  ...(obj.LogicalTableMap && {
    LogicalTableMap: Object.entries(obj.LogicalTableMap).reduce(
      (acc: any, [key, value]: [string, LogicalTable]) => ((acc[key] = LogicalTableFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
  ...(obj.RowLevelPermissionTagConfiguration && {
    RowLevelPermissionTagConfiguration: RowLevelPermissionTagConfigurationFilterSensitiveLog(
      obj.RowLevelPermissionTagConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const UpdateDataSourceRequestFilterSensitiveLog = (obj: UpdateDataSourceRequest): any => ({
  ...obj,
  ...(obj.DataSourceParameters && { DataSourceParameters: obj.DataSourceParameters }),
  ...(obj.Credentials && { Credentials: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateTemplateRequestFilterSensitiveLog = (obj: UpdateTemplateRequest): any => ({
  ...obj,
});
