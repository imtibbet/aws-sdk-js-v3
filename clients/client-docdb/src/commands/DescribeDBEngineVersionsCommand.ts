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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DBEngineVersionMessage, DescribeDBEngineVersionsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeDBEngineVersionsCommand,
  serializeAws_queryDescribeDBEngineVersionsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DescribeDBEngineVersionsCommand}.
 */
export interface DescribeDBEngineVersionsCommandInput extends DescribeDBEngineVersionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBEngineVersionsCommand}.
 */
export interface DescribeDBEngineVersionsCommandOutput extends DBEngineVersionMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the available engines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeDBEngineVersionsCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeDBEngineVersionsCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const input = { // DescribeDBEngineVersionsMessage
 *   Engine: "STRING_VALUE",
 *   EngineVersion: "STRING_VALUE",
 *   DBParameterGroupFamily: "STRING_VALUE",
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
 *   DefaultOnly: true || false,
 *   ListSupportedCharacterSets: true || false,
 *   ListSupportedTimezones: true || false,
 * };
 * const command = new DescribeDBEngineVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeDBEngineVersionsCommandInput - {@link DescribeDBEngineVersionsCommandInput}
 * @returns {@link DescribeDBEngineVersionsCommandOutput}
 * @see {@link DescribeDBEngineVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBEngineVersionsCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 *
 */
export class DescribeDBEngineVersionsCommand extends $Command<
  DescribeDBEngineVersionsCommandInput,
  DescribeDBEngineVersionsCommandOutput,
  DocDBClientResolvedConfig
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
  constructor(readonly input: DescribeDBEngineVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBEngineVersionsCommandInput, DescribeDBEngineVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBEngineVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "DescribeDBEngineVersionsCommand";
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
  private serialize(input: DescribeDBEngineVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBEngineVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDBEngineVersionsCommandOutput> {
    return deserializeAws_queryDescribeDBEngineVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
