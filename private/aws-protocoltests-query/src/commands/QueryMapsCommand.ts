// smithy-typescript generated code
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

import { QueryMapsInput } from "../models/models_0";
import { deserializeAws_queryQueryMapsCommand, serializeAws_queryQueryMapsCommand } from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

/**
 * @public
 *
 * The input for {@link QueryMapsCommand}.
 */
export interface QueryMapsCommandInput extends QueryMapsInput {}
/**
 * @public
 *
 * The output of {@link QueryMapsCommand}.
 */
export interface QueryMapsCommandOutput extends __MetadataBearer {}

/**
 * @public
 * This test serializes simple and complex maps.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, QueryMapsCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, QueryMapsCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * const client = new QueryProtocolClient(config);
 * const input = { // QueryMapsInput
 *   MapArg: { // StringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RenamedMapArg: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ComplexMapArg: { // ComplexMap
 *     "<keys>": { // GreetingStruct
 *       hi: "STRING_VALUE",
 *     },
 *   },
 *   MapWithXmlMemberName: { // MapWithXmlName
 *     "<keys>": "STRING_VALUE",
 *   },
 *   FlattenedMap: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   FlattenedMapWithXmlName: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   MapOfLists: { // MapOfLists
 *     "<keys>": [ // StringList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   NestedStructWithMap: { // NestedStructWithMap
 *     MapArg: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new QueryMapsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param QueryMapsCommandInput - {@link QueryMapsCommandInput}
 * @returns {@link QueryMapsCommandOutput}
 * @see {@link QueryMapsCommandInput} for command's `input` shape.
 * @see {@link QueryMapsCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 *
 */
export class QueryMapsCommand extends $Command<
  QueryMapsCommandInput,
  QueryMapsCommandOutput,
  QueryProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: QueryMapsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QueryProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryMapsCommandInput, QueryMapsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QueryProtocolClient";
    const commandName = "QueryMapsCommand";
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
  private serialize(input: QueryMapsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryQueryMapsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryMapsCommandOutput> {
    return deserializeAws_queryQueryMapsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
