// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { CreateClusterRequest, CreateClusterResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateClusterCommand,
  serializeAws_json1_1CreateClusterCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandInput extends CreateClusterRequest {}
/**
 * @public
 *
 * The output of {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandOutput extends CreateClusterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a cluster. All nodes in the cluster run the same protocol-compliant engine software.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, CreateClusterCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, CreateClusterCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // CreateClusterRequest
 *   ClusterName: "STRING_VALUE", // required
 *   NodeType: "STRING_VALUE", // required
 *   ParameterGroupName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   NumShards: Number("int"),
 *   NumReplicasPerShard: Number("int"),
 *   SubnetGroupName: "STRING_VALUE",
 *   SecurityGroupIds: [ // SecurityGroupIdsList
 *     "STRING_VALUE",
 *   ],
 *   MaintenanceWindow: "STRING_VALUE",
 *   Port: Number("int"),
 *   SnsTopicArn: "STRING_VALUE",
 *   TLSEnabled: true || false,
 *   KmsKeyId: "STRING_VALUE",
 *   SnapshotArns: [ // SnapshotArnsList
 *     "STRING_VALUE",
 *   ],
 *   SnapshotName: "STRING_VALUE",
 *   SnapshotRetentionLimit: Number("int"),
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   SnapshotWindow: "STRING_VALUE",
 *   ACLName: "STRING_VALUE", // required
 *   EngineVersion: "STRING_VALUE",
 *   AutoMinorVersionUpgrade: true || false,
 *   DataTiering: true || false,
 * };
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateClusterCommandInput - {@link CreateClusterCommandInput}
 * @returns {@link CreateClusterCommandOutput}
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ACLNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ClusterAlreadyExistsFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ClusterQuotaForCustomerExceededFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InsufficientClusterCapacityFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidACLStateFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidCredentialsException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p></p>
 *
 * @throws {@link NodeQuotaForClusterExceededFault} (client fault)
 *  <p></p>
 *
 * @throws {@link NodeQuotaForCustomerExceededFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ParameterGroupNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ShardsPerClusterQuotaExceededFault} (client fault)
 *  <p></p>
 *
 * @throws {@link SubnetGroupNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p></p>
 *
 *
 */
export class CreateClusterCommand extends $Command<
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
  MemoryDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MemoryDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateClusterCommandInput, CreateClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateClusterCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "CreateClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateClusterCommandOutput> {
    return deserializeAws_json1_1CreateClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
