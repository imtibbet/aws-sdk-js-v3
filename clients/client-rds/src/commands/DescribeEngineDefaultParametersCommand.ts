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

import { DescribeEngineDefaultParametersMessage, DescribeEngineDefaultParametersResult } from "../models/models_1";
import {
  deserializeAws_queryDescribeEngineDefaultParametersCommand,
  serializeAws_queryDescribeEngineDefaultParametersCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link DescribeEngineDefaultParametersCommand}.
 */
export interface DescribeEngineDefaultParametersCommandInput extends DescribeEngineDefaultParametersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEngineDefaultParametersCommand}.
 */
export interface DescribeEngineDefaultParametersCommandOutput
  extends DescribeEngineDefaultParametersResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the default engine and system parameter information for the specified database engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeEngineDefaultParametersCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeEngineDefaultParametersCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeEngineDefaultParametersMessage
 *   DBParameterGroupFamily: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeEngineDefaultParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeEngineDefaultParametersCommandInput - {@link DescribeEngineDefaultParametersCommandInput}
 * @returns {@link DescribeEngineDefaultParametersCommandOutput}
 * @see {@link DescribeEngineDefaultParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeEngineDefaultParametersCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 *
 * @example To list default parameters for a DB engine
 * ```javascript
 * // This example lists default parameters for the specified DB engine.
 * const input = {
 *   "DBParameterGroupFamily": "mysql5.6"
 * };
 * const command = new DescribeEngineDefaultParametersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EngineDefaults": {}
 * }
 * *\/
 * // example id: describe-engine-default-parameters-35d5108e-1d44-4fac-8aeb-04b8fdfface1
 * ```
 *
 */
export class DescribeEngineDefaultParametersCommand extends $Command<
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
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
  constructor(readonly input: DescribeEngineDefaultParametersCommandInput) {
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
  ): Handler<DescribeEngineDefaultParametersCommandInput, DescribeEngineDefaultParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEngineDefaultParametersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeEngineDefaultParametersCommand";
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
  private serialize(
    input: DescribeEngineDefaultParametersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeEngineDefaultParametersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEngineDefaultParametersCommandOutput> {
    return deserializeAws_queryDescribeEngineDefaultParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
