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

import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { ListCodeReviewsRequest, ListCodeReviewsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListCodeReviewsCommand,
  serializeAws_restJson1ListCodeReviewsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListCodeReviewsCommand}.
 */
export interface ListCodeReviewsCommandInput extends ListCodeReviewsRequest {}
/**
 * @public
 *
 * The output of {@link ListCodeReviewsCommand}.
 */
export interface ListCodeReviewsCommandOutput extends ListCodeReviewsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all the code reviews that the customer has created in the past 90 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, ListCodeReviewsCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, ListCodeReviewsCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const input = { // ListCodeReviewsRequest
 *   ProviderTypes: [ // ProviderTypes
 *     "CodeCommit" || "GitHub" || "Bitbucket" || "GitHubEnterpriseServer" || "S3Bucket",
 *   ],
 *   States: [ // JobStates
 *     "Completed" || "Pending" || "Failed" || "Deleting",
 *   ],
 *   RepositoryNames: [ // RepositoryNames
 *     "STRING_VALUE",
 *   ],
 *   Type: "PullRequest" || "RepositoryAnalysis", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCodeReviewsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListCodeReviewsCommandInput - {@link ListCodeReviewsCommandInput}
 * @returns {@link ListCodeReviewsCommandOutput}
 * @see {@link ListCodeReviewsCommandInput} for command's `input` shape.
 * @see {@link ListCodeReviewsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for CodeGuruReviewerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 *
 */
export class ListCodeReviewsCommand extends $Command<
  ListCodeReviewsCommandInput,
  ListCodeReviewsCommandOutput,
  CodeGuruReviewerClientResolvedConfig
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
  constructor(readonly input: ListCodeReviewsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruReviewerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCodeReviewsCommandInput, ListCodeReviewsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCodeReviewsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruReviewerClient";
    const commandName = "ListCodeReviewsCommand";
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
  private serialize(input: ListCodeReviewsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListCodeReviewsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCodeReviewsCommandOutput> {
    return deserializeAws_restJson1ListCodeReviewsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
