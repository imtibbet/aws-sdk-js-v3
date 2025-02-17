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

import { UpdateProductInput, UpdateProductOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateProductCommand,
  serializeAws_json1_1UpdateProductCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 *
 * The input for {@link UpdateProductCommand}.
 */
export interface UpdateProductCommandInput extends UpdateProductInput {}
/**
 * @public
 *
 * The output of {@link UpdateProductCommand}.
 */
export interface UpdateProductCommandOutput extends UpdateProductOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // UpdateProductInput
 *   AcceptLanguage: "STRING_VALUE",
 *   Id: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Owner: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Distributor: "STRING_VALUE",
 *   SupportDescription: "STRING_VALUE",
 *   SupportEmail: "STRING_VALUE",
 *   SupportUrl: "STRING_VALUE",
 *   AddTags: [ // AddTags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   RemoveTags: [ // TagKeys
 *     "STRING_VALUE",
 *   ],
 *   SourceConnection: { // SourceConnection
 *     Type: "CODESTAR",
 *     ConnectionParameters: { // SourceConnectionParameters
 *       CodeStar: { // CodeStarParameters
 *         ConnectionArn: "STRING_VALUE", // required
 *         Repository: "STRING_VALUE", // required
 *         Branch: "STRING_VALUE", // required
 *         ArtifactPath: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateProductCommandInput - {@link UpdateProductCommandInput}
 * @returns {@link UpdateProductCommandOutput}
 * @see {@link UpdateProductCommandInput} for command's `input` shape.
 * @see {@link UpdateProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link TagOptionNotMigratedException} (client fault)
 *  <p>An operation requiring TagOptions failed because the TagOptions migration process has
 *          not been performed for this account. Use the Amazon Web Services Management Console to perform the migration
 *          process before retrying the operation.</p>
 *
 *
 */
export class UpdateProductCommand extends $Command<
  UpdateProductCommandInput,
  UpdateProductCommandOutput,
  ServiceCatalogClientResolvedConfig
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
  constructor(readonly input: UpdateProductCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateProductCommandInput, UpdateProductCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateProductCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "UpdateProductCommand";
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
  private serialize(input: UpdateProductCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateProductCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateProductCommandOutput> {
    return deserializeAws_json1_1UpdateProductCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
