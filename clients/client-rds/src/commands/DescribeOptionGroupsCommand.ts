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

import { DescribeOptionGroupsMessage, OptionGroups } from "../models/models_1";
import {
  deserializeAws_queryDescribeOptionGroupsCommand,
  serializeAws_queryDescribeOptionGroupsCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link DescribeOptionGroupsCommand}.
 */
export interface DescribeOptionGroupsCommandInput extends DescribeOptionGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeOptionGroupsCommand}.
 */
export interface DescribeOptionGroupsCommandOutput extends OptionGroups, __MetadataBearer {}

/**
 * @public
 * <p>Describes the available option groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeOptionGroupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeOptionGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeOptionGroupsMessage
 *   OptionGroupName: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   EngineName: "STRING_VALUE",
 *   MajorEngineVersion: "STRING_VALUE",
 * };
 * const command = new DescribeOptionGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeOptionGroupsCommandInput - {@link DescribeOptionGroupsCommandInput}
 * @returns {@link DescribeOptionGroupsCommandOutput}
 * @see {@link DescribeOptionGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeOptionGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link OptionGroupNotFoundFault} (client fault)
 *  <p>The specified option group could not be found.</p>
 *
 *
 * @example To list information about DB option groups
 * ```javascript
 * // This example lists information for all option groups for the specified DB engine.
 * const input = {
 *   "EngineName": "mysql",
 *   "MajorEngineVersion": "5.6"
 * };
 * const command = new DescribeOptionGroupsCommand(input);
 * await client.send(command);
 * // example id: describe-option-groups-4ef478a1-66d5-45f2-bec3-e608720418a4
 * ```
 *
 */
export class DescribeOptionGroupsCommand extends $Command<
  DescribeOptionGroupsCommandInput,
  DescribeOptionGroupsCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: DescribeOptionGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeOptionGroupsCommandInput, DescribeOptionGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOptionGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeOptionGroupsCommand";
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
  private serialize(input: DescribeOptionGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeOptionGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeOptionGroupsCommandOutput> {
    return deserializeAws_queryDescribeOptionGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
