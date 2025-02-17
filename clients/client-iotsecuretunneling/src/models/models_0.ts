// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { IoTSecureTunnelingServiceException as __BaseException } from "./IoTSecureTunnelingServiceException";

/**
 * @public
 */
export enum ClientMode {
  ALL = "ALL",
  DESTINATION = "DESTINATION",
  SOURCE = "SOURCE",
}

/**
 * @public
 */
export interface CloseTunnelRequest {
  /**
   * <p>The ID of the tunnel to close.</p>
   */
  tunnelId: string | undefined;

  /**
   * <p>When set to true, IoT Secure Tunneling deletes the tunnel data
   * 			immediately.</p>
   */
  delete?: boolean;
}

/**
 * @public
 */
export interface CloseTunnelResponse {}

/**
 * @public
 * <p>Thrown when an operation is attempted on a resource that does not exist.</p>
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
 */
export enum ConnectionStatus {
  CONNECTED = "CONNECTED",
  DISCONNECTED = "DISCONNECTED",
}

/**
 * @public
 * <p>The state of a connection.</p>
 */
export interface ConnectionState {
  /**
   * <p>The connection status of the tunnel. Valid values are <code>CONNECTED</code> and
   * 				<code>DISCONNECTED</code>.</p>
   */
  status?: ConnectionStatus | string;

  /**
   * <p>The last time the connection status was updated.</p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface DescribeTunnelRequest {
  /**
   * <p>The tunnel to describe.</p>
   */
  tunnelId: string | undefined;
}

/**
 * @public
 * <p>The destination configuration.</p>
 */
export interface DestinationConfig {
  /**
   * <p>The name of the IoT thing to which you want to connect.</p>
   */
  thingName?: string;

  /**
   * <p>A list of service names that identify the target application. The IoT client
   * 			running on the destination device reads this value and uses it to look up a port or an
   * 			IP address and a port. The IoT client instantiates the local proxy, which uses this
   * 			information to connect to the destination application.</p>
   */
  services: string[] | undefined;
}

/**
 * @public
 */
export enum TunnelStatus {
  CLOSED = "CLOSED",
  OPEN = "OPEN",
}

/**
 * @public
 * <p>An arbitary key/value pair used to add searchable metadata to secure tunnel
 * 			resources.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   */
  key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   */
  value: string | undefined;
}

/**
 * @public
 * <p>Tunnel timeout configuration.</p>
 */
export interface TimeoutConfig {
  /**
   * <p>The maximum amount of time (in minutes) a tunnel can remain open. If not specified,
   * 			maxLifetimeTimeoutMinutes defaults to 720 minutes. Valid values are from 1 minute to 12
   * 			hours (720 minutes) </p>
   */
  maxLifetimeTimeoutMinutes?: number;
}

/**
 * @public
 * <p>A connection between a source computer and a destination device.</p>
 */
export interface Tunnel {
  /**
   * <p>A unique alpha-numeric ID that identifies a tunnel.</p>
   */
  tunnelId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of a tunnel.</p>
   */
  tunnelArn?: string;

  /**
   * <p>The status of a tunnel. Valid values are: Open and Closed.</p>
   */
  status?: TunnelStatus | string;

  /**
   * <p>The connection state of the source application.</p>
   */
  sourceConnectionState?: ConnectionState;

  /**
   * <p>The connection state of the destination application.</p>
   */
  destinationConnectionState?: ConnectionState;

  /**
   * <p>A description of the tunnel.</p>
   */
  description?: string;

  /**
   * <p>The destination configuration that specifies the thing name of the destination
   * 			device and a service name that the local proxy uses to connect to the destination
   * 			application.</p>
   */
  destinationConfig?: DestinationConfig;

  /**
   * <p>Timeout configuration for the tunnel.</p>
   */
  timeoutConfig?: TimeoutConfig;

  /**
   * <p>A list of tag metadata associated with the secure tunnel.</p>
   */
  tags?: Tag[];

  /**
   * <p>The time when the tunnel was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The last time the tunnel was updated.</p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface DescribeTunnelResponse {
  /**
   * <p>The tunnel being described.</p>
   */
  tunnel?: Tunnel;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the specified resource.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface ListTunnelsRequest {
  /**
   * <p>The name of the IoT thing associated with the destination device.</p>
   */
  thingName?: string;

  /**
   * <p>The maximum number of results to return at once.</p>
   */
  maxResults?: number;

  /**
   * <p>To retrieve the next set of results, the nextToken value from a previous response;
   * 			otherwise null to receive the first set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Information about the tunnel.</p>
 */
export interface TunnelSummary {
  /**
   * <p>The unique alpha-numeric identifier for the tunnel.</p>
   */
  tunnelId?: string;

  /**
   * <p>The Amazon Resource Name of the tunnel. </p>
   */
  tunnelArn?: string;

  /**
   * <p>The status of a tunnel. Valid values are: Open and Closed.</p>
   */
  status?: TunnelStatus | string;

  /**
   * <p>A description of the tunnel.</p>
   */
  description?: string;

  /**
   * <p>The time the tunnel was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The time the tunnel was last updated.</p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface ListTunnelsResponse {
  /**
   * <p>A short description of the tunnels in an Amazon Web Services account.</p>
   */
  tunnelSummaries?: TunnelSummary[];

  /**
   * <p>The token to use to get the next set of results, or null if there are no additional
   * 			results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Thrown when a tunnel limit is exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * @public
 */
export interface OpenTunnelRequest {
  /**
   * <p>A short text description of the tunnel. </p>
   */
  description?: string;

  /**
   * <p>A collection of tag metadata.</p>
   */
  tags?: Tag[];

  /**
   * <p>The destination configuration for the OpenTunnel request.</p>
   */
  destinationConfig?: DestinationConfig;

  /**
   * <p>Timeout configuration for a tunnel.</p>
   */
  timeoutConfig?: TimeoutConfig;
}

/**
 * @public
 */
export interface OpenTunnelResponse {
  /**
   * <p>A unique alpha-numeric tunnel ID.</p>
   */
  tunnelId?: string;

  /**
   * <p>The Amazon Resource Name for the tunnel.</p>
   */
  tunnelArn?: string;

  /**
   * <p>The access token the source local proxy uses to connect to IoT Secure
   * 			Tunneling.</p>
   */
  sourceAccessToken?: string;

  /**
   * <p>The access token the destination local proxy uses to connect to IoT Secure
   * 			Tunneling.</p>
   */
  destinationAccessToken?: string;
}

/**
 * @public
 */
export interface RotateTunnelAccessTokenRequest {
  /**
   * <p>The tunnel for which you want to rotate the access tokens.</p>
   */
  tunnelId: string | undefined;

  /**
   * <p>The mode of the client that will use the client token, which can be either the source
   * 			or destination, or both source and destination.</p>
   */
  clientMode: ClientMode | string | undefined;

  /**
   * <p>The destination configuration.</p>
   */
  destinationConfig?: DestinationConfig;
}

/**
 * @public
 */
export interface RotateTunnelAccessTokenResponse {
  /**
   * <p>The Amazon Resource Name for the tunnel.</p>
   */
  tunnelArn?: string;

  /**
   * <p>The client access token that the source local proxy uses to connect to IoT Secure
   * 			Tunneling.</p>
   */
  sourceAccessToken?: string;

  /**
   * <p>The client access token that the destination local proxy uses to connect to IoT
   * 			Secure Tunneling.</p>
   */
  destinationAccessToken?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags for the resource.</p>
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @internal
 */
export const OpenTunnelResponseFilterSensitiveLog = (obj: OpenTunnelResponse): any => ({
  ...obj,
  ...(obj.sourceAccessToken && { sourceAccessToken: SENSITIVE_STRING }),
  ...(obj.destinationAccessToken && { destinationAccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RotateTunnelAccessTokenResponseFilterSensitiveLog = (obj: RotateTunnelAccessTokenResponse): any => ({
  ...obj,
  ...(obj.sourceAccessToken && { sourceAccessToken: SENSITIVE_STRING }),
  ...(obj.destinationAccessToken && { destinationAccessToken: SENSITIVE_STRING }),
});
