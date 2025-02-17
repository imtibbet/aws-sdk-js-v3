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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { SearchTablesRequest, SearchTablesResponse } from "../models/models_2";
import {
  deserializeAws_json1_1SearchTablesCommand,
  serializeAws_json1_1SearchTablesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link SearchTablesCommand}.
 */
export interface SearchTablesCommandInput extends SearchTablesRequest {}
/**
 * @public
 *
 * The output of {@link SearchTablesCommand}.
 */
export interface SearchTablesCommandOutput extends SearchTablesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. </p>
 *          <p>You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, SearchTablesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, SearchTablesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // SearchTablesRequest
 *   CatalogId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // SearchPropertyPredicates
 *     { // PropertyPredicate
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       Comparator: "EQUALS" || "GREATER_THAN" || "LESS_THAN" || "GREATER_THAN_EQUALS" || "LESS_THAN_EQUALS",
 *     },
 *   ],
 *   SearchText: "STRING_VALUE",
 *   SortCriteria: [ // SortCriteria
 *     { // SortCriterion
 *       FieldName: "STRING_VALUE",
 *       Sort: "ASC" || "DESC",
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   ResourceShareType: "FOREIGN" || "ALL",
 * };
 * const command = new SearchTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param SearchTablesCommandInput - {@link SearchTablesCommandInput}
 * @returns {@link SearchTablesCommandOutput}
 * @see {@link SearchTablesCommandInput} for command's `input` shape.
 * @see {@link SearchTablesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 *
 */
export class SearchTablesCommand extends $Command<
  SearchTablesCommandInput,
  SearchTablesCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: SearchTablesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchTablesCommandInput, SearchTablesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SearchTablesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "SearchTablesCommand";
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
  private serialize(input: SearchTablesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchTablesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchTablesCommandOutput> {
    return deserializeAws_json1_1SearchTablesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
