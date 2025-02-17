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

import {
  DescribeFolderContentsRequest,
  DescribeFolderContentsRequestFilterSensitiveLog,
  DescribeFolderContentsResponse,
  DescribeFolderContentsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeFolderContentsCommand,
  serializeAws_restJson1DescribeFolderContentsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 *
 * The input for {@link DescribeFolderContentsCommand}.
 */
export interface DescribeFolderContentsCommandInput extends DescribeFolderContentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFolderContentsCommand}.
 */
export interface DescribeFolderContentsCommandOutput extends DescribeFolderContentsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the contents of the specified folder, including its documents and
 *             subfolders.</p>
 *          <p>By default, Amazon WorkDocs returns the first 100 active document and folder
 *             metadata items. If there are more results, the response includes a marker that you can
 *             use to request the next set of results. You can also request initialized
 *             documents.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeFolderContentsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeFolderContentsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const input = { // DescribeFolderContentsRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   FolderId: "STRING_VALUE", // required
 *   Sort: "DATE" || "NAME",
 *   Order: "ASCENDING" || "DESCENDING",
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 *   Type: "ALL" || "DOCUMENT" || "FOLDER",
 *   Include: "STRING_VALUE",
 * };
 * const command = new DescribeFolderContentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeFolderContentsCommandInput - {@link DescribeFolderContentsCommandInput}
 * @returns {@link DescribeFolderContentsCommandOutput}
 * @see {@link DescribeFolderContentsCommandInput} for command's `input` shape.
 * @see {@link DescribeFolderContentsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *  <p>The resource does not exist.</p>
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The pagination marker or limit fields are not valid.</p>
 *
 * @throws {@link ProhibitedStateException} (client fault)
 *  <p>The specified document version is not in the INITIALIZED state.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>One or more of the dependencies is unavailable.</p>
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *  <p>The caller does not have access to perform the action on the resource.</p>
 *
 *
 */
export class DescribeFolderContentsCommand extends $Command<
  DescribeFolderContentsCommandInput,
  DescribeFolderContentsCommandOutput,
  WorkDocsClientResolvedConfig
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
  constructor(readonly input: DescribeFolderContentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFolderContentsCommandInput, DescribeFolderContentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFolderContentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "DescribeFolderContentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFolderContentsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeFolderContentsResponseFilterSensitiveLog,
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
  private serialize(input: DescribeFolderContentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeFolderContentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFolderContentsCommandOutput> {
    return deserializeAws_restJson1DescribeFolderContentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
