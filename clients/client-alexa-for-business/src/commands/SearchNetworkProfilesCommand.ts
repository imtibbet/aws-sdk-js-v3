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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { SearchNetworkProfilesRequest, SearchNetworkProfilesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SearchNetworkProfilesCommand,
  serializeAws_json1_1SearchNetworkProfilesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link SearchNetworkProfilesCommand}.
 */
export interface SearchNetworkProfilesCommandInput extends SearchNetworkProfilesRequest {}
/**
 * @public
 *
 * The output of {@link SearchNetworkProfilesCommand}.
 */
export interface SearchNetworkProfilesCommandOutput extends SearchNetworkProfilesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Searches network profiles and lists the ones that meet a set of filter and sort
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SearchNetworkProfilesCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SearchNetworkProfilesCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // SearchNetworkProfilesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Key: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   SortCriteria: [ // SortList
 *     { // Sort
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new SearchNetworkProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param SearchNetworkProfilesCommandInput - {@link SearchNetworkProfilesCommandInput}
 * @returns {@link SearchNetworkProfilesCommandOutput}
 * @see {@link SearchNetworkProfilesCommandInput} for command's `input` shape.
 * @see {@link SearchNetworkProfilesCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 *
 */
export class SearchNetworkProfilesCommand extends $Command<
  SearchNetworkProfilesCommandInput,
  SearchNetworkProfilesCommandOutput,
  AlexaForBusinessClientResolvedConfig
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
  constructor(readonly input: SearchNetworkProfilesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchNetworkProfilesCommandInput, SearchNetworkProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchNetworkProfilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "SearchNetworkProfilesCommand";
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
  private serialize(input: SearchNetworkProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchNetworkProfilesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchNetworkProfilesCommandOutput> {
    return deserializeAws_json1_1SearchNetworkProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
