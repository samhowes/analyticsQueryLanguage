// Generated from /Users/samh/dev/analyticsQueryLanguage/src/app/lang/antlr/AqlParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { RANKING_WINDOWED_FUNCContext } from "./AqlParser";
import { AGGREGATE_WINDOWED_FUNCContext } from "./AqlParser";
import { ANALYTIC_WINDOWED_FUNCContext } from "./AqlParser";
import { SCALAR_FUNCTIONContext } from "./AqlParser";
import { BUILT_IN_FUNCContext } from "./AqlParser";
import { FREE_TEXTContext } from "./AqlParser";
import { BINARY_CHECKSUMContext } from "./AqlParser";
import { CASTContext } from "./AqlParser";
import { TRY_CASTContext } from "./AqlParser";
import { CONVERTContext } from "./AqlParser";
import { CHECKSUMContext } from "./AqlParser";
import { COALESCEContext } from "./AqlParser";
import { CURRENT_TIMESTAMPContext } from "./AqlParser";
import { CURRENT_USERContext } from "./AqlParser";
import { DATEADDContext } from "./AqlParser";
import { DATEDIFFContext } from "./AqlParser";
import { DATENAMEContext } from "./AqlParser";
import { DATEPARTContext } from "./AqlParser";
import { GETDATEContext } from "./AqlParser";
import { GETUTCDATEContext } from "./AqlParser";
import { IDENTITYContext } from "./AqlParser";
import { MIN_ACTIVE_ROWVERSIONContext } from "./AqlParser";
import { NULLIFContext } from "./AqlParser";
import { STUFFContext } from "./AqlParser";
import { SESSION_USERContext } from "./AqlParser";
import { SYSTEM_USERContext } from "./AqlParser";
import { USERContext } from "./AqlParser";
import { ISNULLContext } from "./AqlParser";
import { XML_DATA_TYPE_FUNCContext } from "./AqlParser";
import { IIFContext } from "./AqlParser";
import { STRINGAGGContext } from "./AqlParser";
import { Tsql_fileContext } from "./AqlParser";
import { BatchContext } from "./AqlParser";
import { Batch_level_statementContext } from "./AqlParser";
import { Sql_clausesContext } from "./AqlParser";
import { Dml_clauseContext } from "./AqlParser";
import { Ddl_clauseContext } from "./AqlParser";
import { Backup_statementContext } from "./AqlParser";
import { Cfl_statementContext } from "./AqlParser";
import { Block_statementContext } from "./AqlParser";
import { Break_statementContext } from "./AqlParser";
import { Continue_statementContext } from "./AqlParser";
import { Goto_statementContext } from "./AqlParser";
import { Return_statementContext } from "./AqlParser";
import { If_statementContext } from "./AqlParser";
import { Throw_statementContext } from "./AqlParser";
import { Throw_error_numberContext } from "./AqlParser";
import { Throw_messageContext } from "./AqlParser";
import { Throw_stateContext } from "./AqlParser";
import { Try_catch_statementContext } from "./AqlParser";
import { Waitfor_statementContext } from "./AqlParser";
import { While_statementContext } from "./AqlParser";
import { Print_statementContext } from "./AqlParser";
import { Raiseerror_statementContext } from "./AqlParser";
import { Empty_statementContext } from "./AqlParser";
import { Another_statementContext } from "./AqlParser";
import { Alter_application_roleContext } from "./AqlParser";
import { Create_application_roleContext } from "./AqlParser";
import { Drop_aggregateContext } from "./AqlParser";
import { Drop_application_roleContext } from "./AqlParser";
import { Alter_assemblyContext } from "./AqlParser";
import { Alter_assembly_startContext } from "./AqlParser";
import { Alter_assembly_clauseContext } from "./AqlParser";
import { Alter_assembly_from_clauseContext } from "./AqlParser";
import { Alter_assembly_from_clause_startContext } from "./AqlParser";
import { Alter_assembly_drop_clauseContext } from "./AqlParser";
import { Alter_assembly_drop_multiple_filesContext } from "./AqlParser";
import { Alter_assembly_dropContext } from "./AqlParser";
import { Alter_assembly_add_clauseContext } from "./AqlParser";
import { Alter_asssembly_add_clause_startContext } from "./AqlParser";
import { Alter_assembly_client_file_clauseContext } from "./AqlParser";
import { Alter_assembly_file_nameContext } from "./AqlParser";
import { Alter_assembly_file_bitsContext } from "./AqlParser";
import { Alter_assembly_asContext } from "./AqlParser";
import { Alter_assembly_with_clauseContext } from "./AqlParser";
import { Alter_assembly_withContext } from "./AqlParser";
import { Client_assembly_specifierContext } from "./AqlParser";
import { Assembly_optionContext } from "./AqlParser";
import { Network_file_shareContext } from "./AqlParser";
import { Network_computerContext } from "./AqlParser";
import { Network_file_startContext } from "./AqlParser";
import { File_pathContext } from "./AqlParser";
import { File_directory_path_separatorContext } from "./AqlParser";
import { Local_fileContext } from "./AqlParser";
import { Local_driveContext } from "./AqlParser";
import { Multiple_local_filesContext } from "./AqlParser";
import { Multiple_local_file_startContext } from "./AqlParser";
import { Create_assemblyContext } from "./AqlParser";
import { Drop_assemblyContext } from "./AqlParser";
import { Alter_asymmetric_keyContext } from "./AqlParser";
import { Alter_asymmetric_key_startContext } from "./AqlParser";
import { Asymmetric_key_optionContext } from "./AqlParser";
import { Asymmetric_key_option_startContext } from "./AqlParser";
import { Asymmetric_key_password_change_optionContext } from "./AqlParser";
import { Create_asymmetric_keyContext } from "./AqlParser";
import { Drop_asymmetric_keyContext } from "./AqlParser";
import { Alter_authorizationContext } from "./AqlParser";
import { Authorization_granteeContext } from "./AqlParser";
import { Entity_toContext } from "./AqlParser";
import { Colon_colonContext } from "./AqlParser";
import { Alter_authorization_startContext } from "./AqlParser";
import { Alter_authorization_for_sql_databaseContext } from "./AqlParser";
import { Alter_authorization_for_azure_dwContext } from "./AqlParser";
import { Alter_authorization_for_parallel_dwContext } from "./AqlParser";
import { Class_typeContext } from "./AqlParser";
import { Class_type_for_sql_databaseContext } from "./AqlParser";
import { Class_type_for_azure_dwContext } from "./AqlParser";
import { Class_type_for_parallel_dwContext } from "./AqlParser";
import { Drop_availability_groupContext } from "./AqlParser";
import { Alter_availability_groupContext } from "./AqlParser";
import { Alter_availability_group_startContext } from "./AqlParser";
import { Alter_availability_group_optionsContext } from "./AqlParser";
import { Ip_v4_failoverContext } from "./AqlParser";
import { Ip_v6_failoverContext } from "./AqlParser";
import { Create_or_alter_broker_priorityContext } from "./AqlParser";
import { Drop_broker_priorityContext } from "./AqlParser";
import { Alter_certificateContext } from "./AqlParser";
import { Alter_column_encryption_keyContext } from "./AqlParser";
import { Create_column_encryption_keyContext } from "./AqlParser";
import { Drop_certificateContext } from "./AqlParser";
import { Drop_column_encryption_keyContext } from "./AqlParser";
import { Drop_column_master_keyContext } from "./AqlParser";
import { Drop_contractContext } from "./AqlParser";
import { Drop_credentialContext } from "./AqlParser";
import { Drop_cryptograhic_providerContext } from "./AqlParser";
import { Drop_databaseContext } from "./AqlParser";
import { Drop_database_audit_specificationContext } from "./AqlParser";
import { Drop_database_encryption_keyContext } from "./AqlParser";
import { Drop_database_scoped_credentialContext } from "./AqlParser";
import { Drop_defaultContext } from "./AqlParser";
import { Drop_endpointContext } from "./AqlParser";
import { Drop_external_data_sourceContext } from "./AqlParser";
import { Drop_external_file_formatContext } from "./AqlParser";
import { Drop_external_libraryContext } from "./AqlParser";
import { Drop_external_resource_poolContext } from "./AqlParser";
import { Drop_external_tableContext } from "./AqlParser";
import { Drop_event_notificationsContext } from "./AqlParser";
import { Drop_event_sessionContext } from "./AqlParser";
import { Drop_fulltext_catalogContext } from "./AqlParser";
import { Drop_fulltext_indexContext } from "./AqlParser";
import { Drop_fulltext_stoplistContext } from "./AqlParser";
import { Drop_loginContext } from "./AqlParser";
import { Drop_master_keyContext } from "./AqlParser";
import { Drop_message_typeContext } from "./AqlParser";
import { Drop_partition_functionContext } from "./AqlParser";
import { Drop_partition_schemeContext } from "./AqlParser";
import { Drop_queueContext } from "./AqlParser";
import { Drop_remote_service_bindingContext } from "./AqlParser";
import { Drop_resource_poolContext } from "./AqlParser";
import { Drop_db_roleContext } from "./AqlParser";
import { Drop_routeContext } from "./AqlParser";
import { Drop_ruleContext } from "./AqlParser";
import { Drop_schemaContext } from "./AqlParser";
import { Drop_search_property_listContext } from "./AqlParser";
import { Drop_security_policyContext } from "./AqlParser";
import { Drop_sequenceContext } from "./AqlParser";
import { Drop_server_auditContext } from "./AqlParser";
import { Drop_server_audit_specificationContext } from "./AqlParser";
import { Drop_server_roleContext } from "./AqlParser";
import { Drop_serviceContext } from "./AqlParser";
import { Drop_signatureContext } from "./AqlParser";
import { Drop_statistics_name_azure_dw_and_pdwContext } from "./AqlParser";
import { Drop_symmetric_keyContext } from "./AqlParser";
import { Drop_synonymContext } from "./AqlParser";
import { Drop_userContext } from "./AqlParser";
import { Drop_workload_groupContext } from "./AqlParser";
import { Drop_xml_schema_collectionContext } from "./AqlParser";
import { Disable_triggerContext } from "./AqlParser";
import { Enable_triggerContext } from "./AqlParser";
import { Lock_tableContext } from "./AqlParser";
import { Truncate_tableContext } from "./AqlParser";
import { Create_column_master_keyContext } from "./AqlParser";
import { Alter_credentialContext } from "./AqlParser";
import { Create_credentialContext } from "./AqlParser";
import { Alter_cryptographic_providerContext } from "./AqlParser";
import { Create_cryptographic_providerContext } from "./AqlParser";
import { Create_event_notificationContext } from "./AqlParser";
import { Create_or_alter_event_sessionContext } from "./AqlParser";
import { Event_session_predicate_expressionContext } from "./AqlParser";
import { Event_session_predicate_factorContext } from "./AqlParser";
import { Event_session_predicate_leafContext } from "./AqlParser";
import { Alter_external_data_sourceContext } from "./AqlParser";
import { Alter_external_libraryContext } from "./AqlParser";
import { Create_external_libraryContext } from "./AqlParser";
import { Alter_external_resource_poolContext } from "./AqlParser";
import { Create_external_resource_poolContext } from "./AqlParser";
import { Alter_fulltext_catalogContext } from "./AqlParser";
import { Create_fulltext_catalogContext } from "./AqlParser";
import { Alter_fulltext_stoplistContext } from "./AqlParser";
import { Create_fulltext_stoplistContext } from "./AqlParser";
import { Alter_login_sql_serverContext } from "./AqlParser";
import { Create_login_sql_serverContext } from "./AqlParser";
import { Alter_login_azure_sqlContext } from "./AqlParser";
import { Create_login_azure_sqlContext } from "./AqlParser";
import { Alter_login_azure_sql_dw_and_pdwContext } from "./AqlParser";
import { Create_login_pdwContext } from "./AqlParser";
import { Alter_master_key_sql_serverContext } from "./AqlParser";
import { Create_master_key_sql_serverContext } from "./AqlParser";
import { Alter_master_key_azure_sqlContext } from "./AqlParser";
import { Create_master_key_azure_sqlContext } from "./AqlParser";
import { Alter_message_typeContext } from "./AqlParser";
import { Alter_partition_functionContext } from "./AqlParser";
import { Alter_partition_schemeContext } from "./AqlParser";
import { Alter_remote_service_bindingContext } from "./AqlParser";
import { Create_remote_service_bindingContext } from "./AqlParser";
import { Create_resource_poolContext } from "./AqlParser";
import { Alter_resource_governorContext } from "./AqlParser";
import { Alter_db_roleContext } from "./AqlParser";
import { Create_db_roleContext } from "./AqlParser";
import { Create_routeContext } from "./AqlParser";
import { Create_ruleContext } from "./AqlParser";
import { Alter_schema_sqlContext } from "./AqlParser";
import { Create_schemaContext } from "./AqlParser";
import { Create_schema_azure_sql_dw_and_pdwContext } from "./AqlParser";
import { Alter_schema_azure_sql_dw_and_pdwContext } from "./AqlParser";
import { Create_search_property_listContext } from "./AqlParser";
import { Create_security_policyContext } from "./AqlParser";
import { Alter_sequenceContext } from "./AqlParser";
import { Create_sequenceContext } from "./AqlParser";
import { Alter_server_auditContext } from "./AqlParser";
import { Create_server_auditContext } from "./AqlParser";
import { Alter_server_audit_specificationContext } from "./AqlParser";
import { Create_server_audit_specificationContext } from "./AqlParser";
import { Alter_server_configurationContext } from "./AqlParser";
import { Alter_server_roleContext } from "./AqlParser";
import { Create_server_roleContext } from "./AqlParser";
import { Alter_server_role_pdwContext } from "./AqlParser";
import { Alter_serviceContext } from "./AqlParser";
import { Create_serviceContext } from "./AqlParser";
import { Alter_service_master_keyContext } from "./AqlParser";
import { Alter_symmetric_keyContext } from "./AqlParser";
import { Create_symmetric_keyContext } from "./AqlParser";
import { Create_synonymContext } from "./AqlParser";
import { Alter_userContext } from "./AqlParser";
import { Create_userContext } from "./AqlParser";
import { Create_user_azure_sql_dwContext } from "./AqlParser";
import { Alter_user_azure_sqlContext } from "./AqlParser";
import { Alter_workload_groupContext } from "./AqlParser";
import { Create_workload_groupContext } from "./AqlParser";
import { Create_xml_schema_collectionContext } from "./AqlParser";
import { Create_queueContext } from "./AqlParser";
import { Queue_settingsContext } from "./AqlParser";
import { Alter_queueContext } from "./AqlParser";
import { Queue_actionContext } from "./AqlParser";
import { Queue_rebuild_optionsContext } from "./AqlParser";
import { Create_contractContext } from "./AqlParser";
import { Conversation_statementContext } from "./AqlParser";
import { Message_statementContext } from "./AqlParser";
import { Merge_statementContext } from "./AqlParser";
import { When_matchesContext } from "./AqlParser";
import { Merge_matchedContext } from "./AqlParser";
import { Merge_not_matchedContext } from "./AqlParser";
import { Delete_statementContext } from "./AqlParser";
import { Delete_statement_fromContext } from "./AqlParser";
import { Insert_statementContext } from "./AqlParser";
import { Insert_statement_valueContext } from "./AqlParser";
import { Receive_statementContext } from "./AqlParser";
import { Select_statement_standaloneContext } from "./AqlParser";
import { Select_statementContext } from "./AqlParser";
import { TimeContext } from "./AqlParser";
import { Update_statementContext } from "./AqlParser";
import { Output_clauseContext } from "./AqlParser";
import { Output_dml_list_elemContext } from "./AqlParser";
import { Output_column_nameContext } from "./AqlParser";
import { Create_databaseContext } from "./AqlParser";
import { Create_indexContext } from "./AqlParser";
import { Create_xml_indexContext } from "./AqlParser";
import { Create_or_alter_procedureContext } from "./AqlParser";
import { Create_or_alter_triggerContext } from "./AqlParser";
import { Create_or_alter_dml_triggerContext } from "./AqlParser";
import { Dml_trigger_optionContext } from "./AqlParser";
import { Dml_trigger_operationContext } from "./AqlParser";
import { Create_or_alter_ddl_triggerContext } from "./AqlParser";
import { Ddl_trigger_operationContext } from "./AqlParser";
import { Create_or_alter_functionContext } from "./AqlParser";
import { Func_body_returns_selectContext } from "./AqlParser";
import { Func_body_returns_tableContext } from "./AqlParser";
import { Func_body_returns_scalarContext } from "./AqlParser";
import { Procedure_paramContext } from "./AqlParser";
import { Procedure_optionContext } from "./AqlParser";
import { Function_optionContext } from "./AqlParser";
import { Create_statisticsContext } from "./AqlParser";
import { Update_statisticsContext } from "./AqlParser";
import { Create_tableContext } from "./AqlParser";
import { Table_indicesContext } from "./AqlParser";
import { Table_optionsContext } from "./AqlParser";
import { Create_viewContext } from "./AqlParser";
import { View_attributeContext } from "./AqlParser";
import { Alter_tableContext } from "./AqlParser";
import { Alter_databaseContext } from "./AqlParser";
import { Database_optionspecContext } from "./AqlParser";
import { Auto_optionContext } from "./AqlParser";
import { Change_tracking_optionContext } from "./AqlParser";
import { Change_tracking_option_listContext } from "./AqlParser";
import { Containment_optionContext } from "./AqlParser";
import { Cursor_optionContext } from "./AqlParser";
import { Alter_endpointContext } from "./AqlParser";
import { Database_mirroring_optionContext } from "./AqlParser";
import { Mirroring_set_optionContext } from "./AqlParser";
import { Mirroring_partnerContext } from "./AqlParser";
import { Mirroring_witnessContext } from "./AqlParser";
import { Witness_partner_equalContext } from "./AqlParser";
import { Partner_optionContext } from "./AqlParser";
import { Witness_optionContext } from "./AqlParser";
import { Witness_serverContext } from "./AqlParser";
import { Partner_serverContext } from "./AqlParser";
import { Mirroring_host_port_seperatorContext } from "./AqlParser";
import { Partner_server_tcp_prefixContext } from "./AqlParser";
import { Port_numberContext } from "./AqlParser";
import { HostContext } from "./AqlParser";
import { Date_correlation_optimization_optionContext } from "./AqlParser";
import { Db_encryption_optionContext } from "./AqlParser";
import { Db_state_optionContext } from "./AqlParser";
import { Db_update_optionContext } from "./AqlParser";
import { Db_user_access_optionContext } from "./AqlParser";
import { Delayed_durability_optionContext } from "./AqlParser";
import { External_access_optionContext } from "./AqlParser";
import { Hadr_optionsContext } from "./AqlParser";
import { Mixed_page_allocation_optionContext } from "./AqlParser";
import { Parameterization_optionContext } from "./AqlParser";
import { Recovery_optionContext } from "./AqlParser";
import { Service_broker_optionContext } from "./AqlParser";
import { Snapshot_optionContext } from "./AqlParser";
import { Sql_optionContext } from "./AqlParser";
import { Target_recovery_time_optionContext } from "./AqlParser";
import { TerminationContext } from "./AqlParser";
import { Drop_indexContext } from "./AqlParser";
import { Drop_relational_or_xml_or_spatial_indexContext } from "./AqlParser";
import { Drop_backward_compatible_indexContext } from "./AqlParser";
import { Drop_procedureContext } from "./AqlParser";
import { Drop_triggerContext } from "./AqlParser";
import { Drop_dml_triggerContext } from "./AqlParser";
import { Drop_ddl_triggerContext } from "./AqlParser";
import { Drop_functionContext } from "./AqlParser";
import { Drop_statisticsContext } from "./AqlParser";
import { Drop_tableContext } from "./AqlParser";
import { Drop_viewContext } from "./AqlParser";
import { Create_typeContext } from "./AqlParser";
import { Drop_typeContext } from "./AqlParser";
import { Rowset_function_limitedContext } from "./AqlParser";
import { OpenqueryContext } from "./AqlParser";
import { OpendatasourceContext } from "./AqlParser";
import { Declare_statementContext } from "./AqlParser";
import { Xml_declarationContext } from "./AqlParser";
import { Cursor_statementContext } from "./AqlParser";
import { Backup_databaseContext } from "./AqlParser";
import { Backup_logContext } from "./AqlParser";
import { Backup_certificateContext } from "./AqlParser";
import { Backup_master_keyContext } from "./AqlParser";
import { Backup_service_master_keyContext } from "./AqlParser";
import { Kill_statementContext } from "./AqlParser";
import { Kill_processContext } from "./AqlParser";
import { Kill_query_notificationContext } from "./AqlParser";
import { Kill_stats_jobContext } from "./AqlParser";
import { Execute_statementContext } from "./AqlParser";
import { Execute_body_batchContext } from "./AqlParser";
import { Execute_bodyContext } from "./AqlParser";
import { Execute_statement_argContext } from "./AqlParser";
import { Execute_statement_arg_namedContext } from "./AqlParser";
import { Execute_statement_arg_unnamedContext } from "./AqlParser";
import { Execute_parameterContext } from "./AqlParser";
import { Execute_var_stringContext } from "./AqlParser";
import { Security_statementContext } from "./AqlParser";
import { Principal_idContext } from "./AqlParser";
import { Create_certificateContext } from "./AqlParser";
import { Existing_keysContext } from "./AqlParser";
import { Private_key_optionsContext } from "./AqlParser";
import { Generate_new_keysContext } from "./AqlParser";
import { Date_optionsContext } from "./AqlParser";
import { Open_keyContext } from "./AqlParser";
import { Close_keyContext } from "./AqlParser";
import { Create_keyContext } from "./AqlParser";
import { Key_optionsContext } from "./AqlParser";
import { AlgorithmContext } from "./AqlParser";
import { Encryption_mechanismContext } from "./AqlParser";
import { Decryption_mechanismContext } from "./AqlParser";
import { Grant_permissionContext } from "./AqlParser";
import { Set_statementContext } from "./AqlParser";
import { Transaction_statementContext } from "./AqlParser";
import { Go_batch_statementContext } from "./AqlParser";
import { Go_statementContext } from "./AqlParser";
import { Use_statementContext } from "./AqlParser";
import { Setuser_statementContext } from "./AqlParser";
import { Reconfigure_statementContext } from "./AqlParser";
import { Shutdown_statementContext } from "./AqlParser";
import { Dbcc_specialContext } from "./AqlParser";
import { Dbcc_clauseContext } from "./AqlParser";
import { Dbcc_commandContext } from "./AqlParser";
import { Dbcc_optionsContext } from "./AqlParser";
import { Execute_clauseContext } from "./AqlParser";
import { Declare_localContext } from "./AqlParser";
import { Table_type_definitionContext } from "./AqlParser";
import { Table_type_indicesContext } from "./AqlParser";
import { Xml_type_definitionContext } from "./AqlParser";
import { Xml_schema_collectionContext } from "./AqlParser";
import { Column_def_table_constraintsContext } from "./AqlParser";
import { Column_def_table_constraintContext } from "./AqlParser";
import { Column_definitionContext } from "./AqlParser";
import { Materialized_column_definitionContext } from "./AqlParser";
import { Column_constraintContext } from "./AqlParser";
import { Table_constraintContext } from "./AqlParser";
import { On_deleteContext } from "./AqlParser";
import { On_updateContext } from "./AqlParser";
import { Index_optionsContext } from "./AqlParser";
import { Index_optionContext } from "./AqlParser";
import { Declare_cursorContext } from "./AqlParser";
import { Declare_set_cursor_commonContext } from "./AqlParser";
import { Declare_set_cursor_common_partialContext } from "./AqlParser";
import { Fetch_cursorContext } from "./AqlParser";
import { Set_specialContext } from "./AqlParser";
import { Constant_LOCAL_IDContext } from "./AqlParser";
import { ExpressionContext } from "./AqlParser";
import { Time_zoneContext } from "./AqlParser";
import { Primitive_expressionContext } from "./AqlParser";
import { Case_expressionContext } from "./AqlParser";
import { Unary_operator_expressionContext } from "./AqlParser";
import { Bracket_expressionContext } from "./AqlParser";
import { Constant_expressionContext } from "./AqlParser";
import { SubqueryContext } from "./AqlParser";
import { With_expressionContext } from "./AqlParser";
import { Common_table_expressionContext } from "./AqlParser";
import { Update_elemContext } from "./AqlParser";
import { Update_elem_mergeContext } from "./AqlParser";
import { Search_conditionContext } from "./AqlParser";
import { Predicate_brContext } from "./AqlParser";
import { PredicateContext } from "./AqlParser";
import { Query_expressionContext } from "./AqlParser";
import { Sql_unionContext } from "./AqlParser";
import { Query_specificationContext } from "./AqlParser";
import { Top_clauseContext } from "./AqlParser";
import { Top_percentContext } from "./AqlParser";
import { Top_countContext } from "./AqlParser";
import { Order_by_clauseContext } from "./AqlParser";
import { For_clauseContext } from "./AqlParser";
import { Xml_common_directivesContext } from "./AqlParser";
import { Order_by_expressionContext } from "./AqlParser";
import { Group_by_itemContext } from "./AqlParser";
import { Option_clauseContext } from "./AqlParser";
import { OptionContext } from "./AqlParser";
import { Optimize_for_argContext } from "./AqlParser";
import { Select_listContext } from "./AqlParser";
import { Udt_method_argumentsContext } from "./AqlParser";
import { AsteriskContext } from "./AqlParser";
import { Column_elemContext } from "./AqlParser";
import { Udt_elemContext } from "./AqlParser";
import { Expression_elemContext } from "./AqlParser";
import { Select_list_elemContext } from "./AqlParser";
import { Table_sourcesContext } from "./AqlParser";
import { Table_sourceContext } from "./AqlParser";
import { Table_source_item_joinedContext } from "./AqlParser";
import { Table_source_itemContext } from "./AqlParser";
import { Open_xmlContext } from "./AqlParser";
import { Open_jsonContext } from "./AqlParser";
import { Json_declarationContext } from "./AqlParser";
import { Json_column_declarationContext } from "./AqlParser";
import { Schema_declarationContext } from "./AqlParser";
import { Column_declarationContext } from "./AqlParser";
import { Change_tableContext } from "./AqlParser";
import { Change_table_changesContext } from "./AqlParser";
import { Change_table_versionContext } from "./AqlParser";
import { Join_partContext } from "./AqlParser";
import { Join_onContext } from "./AqlParser";
import { Cross_joinContext } from "./AqlParser";
import { ApplyContext } from "./AqlParser";
import { PivotContext } from "./AqlParser";
import { UnpivotContext } from "./AqlParser";
import { Pivot_clauseContext } from "./AqlParser";
import { Unpivot_clauseContext } from "./AqlParser";
import { Full_column_name_listContext } from "./AqlParser";
import { Table_name_with_hintContext } from "./AqlParser";
import { Rowset_functionContext } from "./AqlParser";
import { Bulk_optionContext } from "./AqlParser";
import { Derived_tableContext } from "./AqlParser";
import { Function_callContext } from "./AqlParser";
import { Freetext_functionContext } from "./AqlParser";
import { Freetext_predicateContext } from "./AqlParser";
import { Build_in_functionsContext } from "./AqlParser";
import { Xml_data_type_methodsContext } from "./AqlParser";
import { Value_methodContext } from "./AqlParser";
import { Value_callContext } from "./AqlParser";
import { Query_methodContext } from "./AqlParser";
import { Query_callContext } from "./AqlParser";
import { Exist_methodContext } from "./AqlParser";
import { Exist_callContext } from "./AqlParser";
import { Modify_methodContext } from "./AqlParser";
import { Modify_callContext } from "./AqlParser";
import { Nodes_methodContext } from "./AqlParser";
import { Switch_sectionContext } from "./AqlParser";
import { Switch_search_condition_sectionContext } from "./AqlParser";
import { As_column_aliasContext } from "./AqlParser";
import { As_table_aliasContext } from "./AqlParser";
import { Table_aliasContext } from "./AqlParser";
import { With_table_hintsContext } from "./AqlParser";
import { Insert_with_table_hintsContext } from "./AqlParser";
import { Table_hintContext } from "./AqlParser";
import { Index_valueContext } from "./AqlParser";
import { Column_alias_listContext } from "./AqlParser";
import { Column_aliasContext } from "./AqlParser";
import { Table_value_constructorContext } from "./AqlParser";
import { Expression_listContext } from "./AqlParser";
import { Ranking_windowed_functionContext } from "./AqlParser";
import { Aggregate_windowed_functionContext } from "./AqlParser";
import { Analytic_windowed_functionContext } from "./AqlParser";
import { All_distinct_expressionContext } from "./AqlParser";
import { Over_clauseContext } from "./AqlParser";
import { Row_or_range_clauseContext } from "./AqlParser";
import { Window_frame_extentContext } from "./AqlParser";
import { Window_frame_boundContext } from "./AqlParser";
import { Window_frame_precedingContext } from "./AqlParser";
import { Window_frame_followingContext } from "./AqlParser";
import { Create_database_optionContext } from "./AqlParser";
import { Database_filestream_optionContext } from "./AqlParser";
import { Database_file_specContext } from "./AqlParser";
import { File_groupContext } from "./AqlParser";
import { File_specContext } from "./AqlParser";
import { Entity_nameContext } from "./AqlParser";
import { Entity_name_for_azure_dwContext } from "./AqlParser";
import { Entity_name_for_parallel_dwContext } from "./AqlParser";
import { Full_table_nameContext } from "./AqlParser";
import { Table_nameContext } from "./AqlParser";
import { Simple_nameContext } from "./AqlParser";
import { Func_proc_name_schemaContext } from "./AqlParser";
import { Func_proc_name_database_schemaContext } from "./AqlParser";
import { Func_proc_name_server_database_schemaContext } from "./AqlParser";
import { Ddl_objectContext } from "./AqlParser";
import { Full_column_nameContext } from "./AqlParser";
import { Column_name_list_with_orderContext } from "./AqlParser";
import { Insert_column_name_listContext } from "./AqlParser";
import { Insert_column_idContext } from "./AqlParser";
import { Column_name_listContext } from "./AqlParser";
import { Cursor_nameContext } from "./AqlParser";
import { On_offContext } from "./AqlParser";
import { ClusteredContext } from "./AqlParser";
import { Null_notnullContext } from "./AqlParser";
import { Null_or_defaultContext } from "./AqlParser";
import { Scalar_function_nameContext } from "./AqlParser";
import { Begin_conversation_timerContext } from "./AqlParser";
import { Begin_conversation_dialogContext } from "./AqlParser";
import { Contract_nameContext } from "./AqlParser";
import { Service_nameContext } from "./AqlParser";
import { End_conversationContext } from "./AqlParser";
import { Waitfor_conversationContext } from "./AqlParser";
import { Get_conversationContext } from "./AqlParser";
import { Queue_idContext } from "./AqlParser";
import { Send_conversationContext } from "./AqlParser";
import { Data_typeContext } from "./AqlParser";
import { Default_valueContext } from "./AqlParser";
import { ConstantContext } from "./AqlParser";
import { SignContext } from "./AqlParser";
import { KeywordContext } from "./AqlParser";
import { IdContext } from "./AqlParser";
import { Simple_idContext } from "./AqlParser";
import { Comparison_operatorContext } from "./AqlParser";
import { Assignment_operatorContext } from "./AqlParser";
import { File_sizeContext } from "./AqlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `AqlParser`.
 */
export interface AqlParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `RANKING_WINDOWED_FUNC`
	 * labeled alternative in `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterRANKING_WINDOWED_FUNC?: (ctx: RANKING_WINDOWED_FUNCContext) => void;
	/**
	 * Exit a parse tree produced by the `RANKING_WINDOWED_FUNC`
	 * labeled alternative in `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitRANKING_WINDOWED_FUNC?: (ctx: RANKING_WINDOWED_FUNCContext) => void;

	/**
	 * Enter a parse tree produced by the `AGGREGATE_WINDOWED_FUNC`
	 * labeled alternative in `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterAGGREGATE_WINDOWED_FUNC?: (ctx: AGGREGATE_WINDOWED_FUNCContext) => void;
	/**
	 * Exit a parse tree produced by the `AGGREGATE_WINDOWED_FUNC`
	 * labeled alternative in `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitAGGREGATE_WINDOWED_FUNC?: (ctx: AGGREGATE_WINDOWED_FUNCContext) => void;

	/**
	 * Enter a parse tree produced by the `ANALYTIC_WINDOWED_FUNC`
	 * labeled alternative in `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterANALYTIC_WINDOWED_FUNC?: (ctx: ANALYTIC_WINDOWED_FUNCContext) => void;
	/**
	 * Exit a parse tree produced by the `ANALYTIC_WINDOWED_FUNC`
	 * labeled alternative in `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitANALYTIC_WINDOWED_FUNC?: (ctx: ANALYTIC_WINDOWED_FUNCContext) => void;

	/**
	 * Enter a parse tree produced by the `SCALAR_FUNCTION`
	 * labeled alternative in `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterSCALAR_FUNCTION?: (ctx: SCALAR_FUNCTIONContext) => void;
	/**
	 * Exit a parse tree produced by the `SCALAR_FUNCTION`
	 * labeled alternative in `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitSCALAR_FUNCTION?: (ctx: SCALAR_FUNCTIONContext) => void;

	/**
	 * Enter a parse tree produced by the `BUILT_IN_FUNC`
	 * labeled alternative in `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterBUILT_IN_FUNC?: (ctx: BUILT_IN_FUNCContext) => void;
	/**
	 * Exit a parse tree produced by the `BUILT_IN_FUNC`
	 * labeled alternative in `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitBUILT_IN_FUNC?: (ctx: BUILT_IN_FUNCContext) => void;

	/**
	 * Enter a parse tree produced by the `FREE_TEXT`
	 * labeled alternative in `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFREE_TEXT?: (ctx: FREE_TEXTContext) => void;
	/**
	 * Exit a parse tree produced by the `FREE_TEXT`
	 * labeled alternative in `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFREE_TEXT?: (ctx: FREE_TEXTContext) => void;

	/**
	 * Enter a parse tree produced by the `BINARY_CHECKSUM`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterBINARY_CHECKSUM?: (ctx: BINARY_CHECKSUMContext) => void;
	/**
	 * Exit a parse tree produced by the `BINARY_CHECKSUM`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitBINARY_CHECKSUM?: (ctx: BINARY_CHECKSUMContext) => void;

	/**
	 * Enter a parse tree produced by the `CAST`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterCAST?: (ctx: CASTContext) => void;
	/**
	 * Exit a parse tree produced by the `CAST`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitCAST?: (ctx: CASTContext) => void;

	/**
	 * Enter a parse tree produced by the `TRY_CAST`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterTRY_CAST?: (ctx: TRY_CASTContext) => void;
	/**
	 * Exit a parse tree produced by the `TRY_CAST`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitTRY_CAST?: (ctx: TRY_CASTContext) => void;

	/**
	 * Enter a parse tree produced by the `CONVERT`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterCONVERT?: (ctx: CONVERTContext) => void;
	/**
	 * Exit a parse tree produced by the `CONVERT`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitCONVERT?: (ctx: CONVERTContext) => void;

	/**
	 * Enter a parse tree produced by the `CHECKSUM`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterCHECKSUM?: (ctx: CHECKSUMContext) => void;
	/**
	 * Exit a parse tree produced by the `CHECKSUM`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitCHECKSUM?: (ctx: CHECKSUMContext) => void;

	/**
	 * Enter a parse tree produced by the `COALESCE`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterCOALESCE?: (ctx: COALESCEContext) => void;
	/**
	 * Exit a parse tree produced by the `COALESCE`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitCOALESCE?: (ctx: COALESCEContext) => void;

	/**
	 * Enter a parse tree produced by the `CURRENT_TIMESTAMP`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterCURRENT_TIMESTAMP?: (ctx: CURRENT_TIMESTAMPContext) => void;
	/**
	 * Exit a parse tree produced by the `CURRENT_TIMESTAMP`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitCURRENT_TIMESTAMP?: (ctx: CURRENT_TIMESTAMPContext) => void;

	/**
	 * Enter a parse tree produced by the `CURRENT_USER`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterCURRENT_USER?: (ctx: CURRENT_USERContext) => void;
	/**
	 * Exit a parse tree produced by the `CURRENT_USER`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitCURRENT_USER?: (ctx: CURRENT_USERContext) => void;

	/**
	 * Enter a parse tree produced by the `DATEADD`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterDATEADD?: (ctx: DATEADDContext) => void;
	/**
	 * Exit a parse tree produced by the `DATEADD`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitDATEADD?: (ctx: DATEADDContext) => void;

	/**
	 * Enter a parse tree produced by the `DATEDIFF`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterDATEDIFF?: (ctx: DATEDIFFContext) => void;
	/**
	 * Exit a parse tree produced by the `DATEDIFF`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitDATEDIFF?: (ctx: DATEDIFFContext) => void;

	/**
	 * Enter a parse tree produced by the `DATENAME`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterDATENAME?: (ctx: DATENAMEContext) => void;
	/**
	 * Exit a parse tree produced by the `DATENAME`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitDATENAME?: (ctx: DATENAMEContext) => void;

	/**
	 * Enter a parse tree produced by the `DATEPART`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterDATEPART?: (ctx: DATEPARTContext) => void;
	/**
	 * Exit a parse tree produced by the `DATEPART`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitDATEPART?: (ctx: DATEPARTContext) => void;

	/**
	 * Enter a parse tree produced by the `GETDATE`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterGETDATE?: (ctx: GETDATEContext) => void;
	/**
	 * Exit a parse tree produced by the `GETDATE`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitGETDATE?: (ctx: GETDATEContext) => void;

	/**
	 * Enter a parse tree produced by the `GETUTCDATE`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterGETUTCDATE?: (ctx: GETUTCDATEContext) => void;
	/**
	 * Exit a parse tree produced by the `GETUTCDATE`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitGETUTCDATE?: (ctx: GETUTCDATEContext) => void;

	/**
	 * Enter a parse tree produced by the `IDENTITY`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterIDENTITY?: (ctx: IDENTITYContext) => void;
	/**
	 * Exit a parse tree produced by the `IDENTITY`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitIDENTITY?: (ctx: IDENTITYContext) => void;

	/**
	 * Enter a parse tree produced by the `MIN_ACTIVE_ROWVERSION`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterMIN_ACTIVE_ROWVERSION?: (ctx: MIN_ACTIVE_ROWVERSIONContext) => void;
	/**
	 * Exit a parse tree produced by the `MIN_ACTIVE_ROWVERSION`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitMIN_ACTIVE_ROWVERSION?: (ctx: MIN_ACTIVE_ROWVERSIONContext) => void;

	/**
	 * Enter a parse tree produced by the `NULLIF`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterNULLIF?: (ctx: NULLIFContext) => void;
	/**
	 * Exit a parse tree produced by the `NULLIF`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitNULLIF?: (ctx: NULLIFContext) => void;

	/**
	 * Enter a parse tree produced by the `STUFF`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterSTUFF?: (ctx: STUFFContext) => void;
	/**
	 * Exit a parse tree produced by the `STUFF`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitSTUFF?: (ctx: STUFFContext) => void;

	/**
	 * Enter a parse tree produced by the `SESSION_USER`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterSESSION_USER?: (ctx: SESSION_USERContext) => void;
	/**
	 * Exit a parse tree produced by the `SESSION_USER`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitSESSION_USER?: (ctx: SESSION_USERContext) => void;

	/**
	 * Enter a parse tree produced by the `SYSTEM_USER`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterSYSTEM_USER?: (ctx: SYSTEM_USERContext) => void;
	/**
	 * Exit a parse tree produced by the `SYSTEM_USER`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitSYSTEM_USER?: (ctx: SYSTEM_USERContext) => void;

	/**
	 * Enter a parse tree produced by the `USER`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterUSER?: (ctx: USERContext) => void;
	/**
	 * Exit a parse tree produced by the `USER`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitUSER?: (ctx: USERContext) => void;

	/**
	 * Enter a parse tree produced by the `ISNULL`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterISNULL?: (ctx: ISNULLContext) => void;
	/**
	 * Exit a parse tree produced by the `ISNULL`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitISNULL?: (ctx: ISNULLContext) => void;

	/**
	 * Enter a parse tree produced by the `XML_DATA_TYPE_FUNC`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterXML_DATA_TYPE_FUNC?: (ctx: XML_DATA_TYPE_FUNCContext) => void;
	/**
	 * Exit a parse tree produced by the `XML_DATA_TYPE_FUNC`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitXML_DATA_TYPE_FUNC?: (ctx: XML_DATA_TYPE_FUNCContext) => void;

	/**
	 * Enter a parse tree produced by the `IIF`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterIIF?: (ctx: IIFContext) => void;
	/**
	 * Exit a parse tree produced by the `IIF`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitIIF?: (ctx: IIFContext) => void;

	/**
	 * Enter a parse tree produced by the `STRINGAGG`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterSTRINGAGG?: (ctx: STRINGAGGContext) => void;
	/**
	 * Exit a parse tree produced by the `STRINGAGG`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitSTRINGAGG?: (ctx: STRINGAGGContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.tsql_file`.
	 * @param ctx the parse tree
	 */
	enterTsql_file?: (ctx: Tsql_fileContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.tsql_file`.
	 * @param ctx the parse tree
	 */
	exitTsql_file?: (ctx: Tsql_fileContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.batch`.
	 * @param ctx the parse tree
	 */
	enterBatch?: (ctx: BatchContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.batch`.
	 * @param ctx the parse tree
	 */
	exitBatch?: (ctx: BatchContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.batch_level_statement`.
	 * @param ctx the parse tree
	 */
	enterBatch_level_statement?: (ctx: Batch_level_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.batch_level_statement`.
	 * @param ctx the parse tree
	 */
	exitBatch_level_statement?: (ctx: Batch_level_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.sql_clauses`.
	 * @param ctx the parse tree
	 */
	enterSql_clauses?: (ctx: Sql_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.sql_clauses`.
	 * @param ctx the parse tree
	 */
	exitSql_clauses?: (ctx: Sql_clausesContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.dml_clause`.
	 * @param ctx the parse tree
	 */
	enterDml_clause?: (ctx: Dml_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.dml_clause`.
	 * @param ctx the parse tree
	 */
	exitDml_clause?: (ctx: Dml_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.ddl_clause`.
	 * @param ctx the parse tree
	 */
	enterDdl_clause?: (ctx: Ddl_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.ddl_clause`.
	 * @param ctx the parse tree
	 */
	exitDdl_clause?: (ctx: Ddl_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.backup_statement`.
	 * @param ctx the parse tree
	 */
	enterBackup_statement?: (ctx: Backup_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.backup_statement`.
	 * @param ctx the parse tree
	 */
	exitBackup_statement?: (ctx: Backup_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.cfl_statement`.
	 * @param ctx the parse tree
	 */
	enterCfl_statement?: (ctx: Cfl_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.cfl_statement`.
	 * @param ctx the parse tree
	 */
	exitCfl_statement?: (ctx: Cfl_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.block_statement`.
	 * @param ctx the parse tree
	 */
	enterBlock_statement?: (ctx: Block_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.block_statement`.
	 * @param ctx the parse tree
	 */
	exitBlock_statement?: (ctx: Block_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.break_statement`.
	 * @param ctx the parse tree
	 */
	enterBreak_statement?: (ctx: Break_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.break_statement`.
	 * @param ctx the parse tree
	 */
	exitBreak_statement?: (ctx: Break_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.continue_statement`.
	 * @param ctx the parse tree
	 */
	enterContinue_statement?: (ctx: Continue_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.continue_statement`.
	 * @param ctx the parse tree
	 */
	exitContinue_statement?: (ctx: Continue_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.goto_statement`.
	 * @param ctx the parse tree
	 */
	enterGoto_statement?: (ctx: Goto_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.goto_statement`.
	 * @param ctx the parse tree
	 */
	exitGoto_statement?: (ctx: Goto_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.return_statement`.
	 * @param ctx the parse tree
	 */
	enterReturn_statement?: (ctx: Return_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.return_statement`.
	 * @param ctx the parse tree
	 */
	exitReturn_statement?: (ctx: Return_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.if_statement`.
	 * @param ctx the parse tree
	 */
	enterIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.if_statement`.
	 * @param ctx the parse tree
	 */
	exitIf_statement?: (ctx: If_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.throw_statement`.
	 * @param ctx the parse tree
	 */
	enterThrow_statement?: (ctx: Throw_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.throw_statement`.
	 * @param ctx the parse tree
	 */
	exitThrow_statement?: (ctx: Throw_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.throw_error_number`.
	 * @param ctx the parse tree
	 */
	enterThrow_error_number?: (ctx: Throw_error_numberContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.throw_error_number`.
	 * @param ctx the parse tree
	 */
	exitThrow_error_number?: (ctx: Throw_error_numberContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.throw_message`.
	 * @param ctx the parse tree
	 */
	enterThrow_message?: (ctx: Throw_messageContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.throw_message`.
	 * @param ctx the parse tree
	 */
	exitThrow_message?: (ctx: Throw_messageContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.throw_state`.
	 * @param ctx the parse tree
	 */
	enterThrow_state?: (ctx: Throw_stateContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.throw_state`.
	 * @param ctx the parse tree
	 */
	exitThrow_state?: (ctx: Throw_stateContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.try_catch_statement`.
	 * @param ctx the parse tree
	 */
	enterTry_catch_statement?: (ctx: Try_catch_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.try_catch_statement`.
	 * @param ctx the parse tree
	 */
	exitTry_catch_statement?: (ctx: Try_catch_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.waitfor_statement`.
	 * @param ctx the parse tree
	 */
	enterWaitfor_statement?: (ctx: Waitfor_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.waitfor_statement`.
	 * @param ctx the parse tree
	 */
	exitWaitfor_statement?: (ctx: Waitfor_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.while_statement`.
	 * @param ctx the parse tree
	 */
	enterWhile_statement?: (ctx: While_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.while_statement`.
	 * @param ctx the parse tree
	 */
	exitWhile_statement?: (ctx: While_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.print_statement`.
	 * @param ctx the parse tree
	 */
	enterPrint_statement?: (ctx: Print_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.print_statement`.
	 * @param ctx the parse tree
	 */
	exitPrint_statement?: (ctx: Print_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.raiseerror_statement`.
	 * @param ctx the parse tree
	 */
	enterRaiseerror_statement?: (ctx: Raiseerror_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.raiseerror_statement`.
	 * @param ctx the parse tree
	 */
	exitRaiseerror_statement?: (ctx: Raiseerror_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.empty_statement`.
	 * @param ctx the parse tree
	 */
	enterEmpty_statement?: (ctx: Empty_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.empty_statement`.
	 * @param ctx the parse tree
	 */
	exitEmpty_statement?: (ctx: Empty_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.another_statement`.
	 * @param ctx the parse tree
	 */
	enterAnother_statement?: (ctx: Another_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.another_statement`.
	 * @param ctx the parse tree
	 */
	exitAnother_statement?: (ctx: Another_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_application_role`.
	 * @param ctx the parse tree
	 */
	enterAlter_application_role?: (ctx: Alter_application_roleContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_application_role`.
	 * @param ctx the parse tree
	 */
	exitAlter_application_role?: (ctx: Alter_application_roleContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_application_role`.
	 * @param ctx the parse tree
	 */
	enterCreate_application_role?: (ctx: Create_application_roleContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_application_role`.
	 * @param ctx the parse tree
	 */
	exitCreate_application_role?: (ctx: Create_application_roleContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_aggregate`.
	 * @param ctx the parse tree
	 */
	enterDrop_aggregate?: (ctx: Drop_aggregateContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_aggregate`.
	 * @param ctx the parse tree
	 */
	exitDrop_aggregate?: (ctx: Drop_aggregateContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_application_role`.
	 * @param ctx the parse tree
	 */
	enterDrop_application_role?: (ctx: Drop_application_roleContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_application_role`.
	 * @param ctx the parse tree
	 */
	exitDrop_application_role?: (ctx: Drop_application_roleContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_assembly`.
	 * @param ctx the parse tree
	 */
	enterAlter_assembly?: (ctx: Alter_assemblyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_assembly`.
	 * @param ctx the parse tree
	 */
	exitAlter_assembly?: (ctx: Alter_assemblyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_assembly_start`.
	 * @param ctx the parse tree
	 */
	enterAlter_assembly_start?: (ctx: Alter_assembly_startContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_assembly_start`.
	 * @param ctx the parse tree
	 */
	exitAlter_assembly_start?: (ctx: Alter_assembly_startContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_assembly_clause`.
	 * @param ctx the parse tree
	 */
	enterAlter_assembly_clause?: (ctx: Alter_assembly_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_assembly_clause`.
	 * @param ctx the parse tree
	 */
	exitAlter_assembly_clause?: (ctx: Alter_assembly_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_assembly_from_clause`.
	 * @param ctx the parse tree
	 */
	enterAlter_assembly_from_clause?: (ctx: Alter_assembly_from_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_assembly_from_clause`.
	 * @param ctx the parse tree
	 */
	exitAlter_assembly_from_clause?: (ctx: Alter_assembly_from_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_assembly_from_clause_start`.
	 * @param ctx the parse tree
	 */
	enterAlter_assembly_from_clause_start?: (ctx: Alter_assembly_from_clause_startContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_assembly_from_clause_start`.
	 * @param ctx the parse tree
	 */
	exitAlter_assembly_from_clause_start?: (ctx: Alter_assembly_from_clause_startContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_assembly_drop_clause`.
	 * @param ctx the parse tree
	 */
	enterAlter_assembly_drop_clause?: (ctx: Alter_assembly_drop_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_assembly_drop_clause`.
	 * @param ctx the parse tree
	 */
	exitAlter_assembly_drop_clause?: (ctx: Alter_assembly_drop_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_assembly_drop_multiple_files`.
	 * @param ctx the parse tree
	 */
	enterAlter_assembly_drop_multiple_files?: (ctx: Alter_assembly_drop_multiple_filesContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_assembly_drop_multiple_files`.
	 * @param ctx the parse tree
	 */
	exitAlter_assembly_drop_multiple_files?: (ctx: Alter_assembly_drop_multiple_filesContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_assembly_drop`.
	 * @param ctx the parse tree
	 */
	enterAlter_assembly_drop?: (ctx: Alter_assembly_dropContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_assembly_drop`.
	 * @param ctx the parse tree
	 */
	exitAlter_assembly_drop?: (ctx: Alter_assembly_dropContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_assembly_add_clause`.
	 * @param ctx the parse tree
	 */
	enterAlter_assembly_add_clause?: (ctx: Alter_assembly_add_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_assembly_add_clause`.
	 * @param ctx the parse tree
	 */
	exitAlter_assembly_add_clause?: (ctx: Alter_assembly_add_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_asssembly_add_clause_start`.
	 * @param ctx the parse tree
	 */
	enterAlter_asssembly_add_clause_start?: (ctx: Alter_asssembly_add_clause_startContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_asssembly_add_clause_start`.
	 * @param ctx the parse tree
	 */
	exitAlter_asssembly_add_clause_start?: (ctx: Alter_asssembly_add_clause_startContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_assembly_client_file_clause`.
	 * @param ctx the parse tree
	 */
	enterAlter_assembly_client_file_clause?: (ctx: Alter_assembly_client_file_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_assembly_client_file_clause`.
	 * @param ctx the parse tree
	 */
	exitAlter_assembly_client_file_clause?: (ctx: Alter_assembly_client_file_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_assembly_file_name`.
	 * @param ctx the parse tree
	 */
	enterAlter_assembly_file_name?: (ctx: Alter_assembly_file_nameContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_assembly_file_name`.
	 * @param ctx the parse tree
	 */
	exitAlter_assembly_file_name?: (ctx: Alter_assembly_file_nameContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_assembly_file_bits`.
	 * @param ctx the parse tree
	 */
	enterAlter_assembly_file_bits?: (ctx: Alter_assembly_file_bitsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_assembly_file_bits`.
	 * @param ctx the parse tree
	 */
	exitAlter_assembly_file_bits?: (ctx: Alter_assembly_file_bitsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_assembly_as`.
	 * @param ctx the parse tree
	 */
	enterAlter_assembly_as?: (ctx: Alter_assembly_asContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_assembly_as`.
	 * @param ctx the parse tree
	 */
	exitAlter_assembly_as?: (ctx: Alter_assembly_asContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_assembly_with_clause`.
	 * @param ctx the parse tree
	 */
	enterAlter_assembly_with_clause?: (ctx: Alter_assembly_with_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_assembly_with_clause`.
	 * @param ctx the parse tree
	 */
	exitAlter_assembly_with_clause?: (ctx: Alter_assembly_with_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_assembly_with`.
	 * @param ctx the parse tree
	 */
	enterAlter_assembly_with?: (ctx: Alter_assembly_withContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_assembly_with`.
	 * @param ctx the parse tree
	 */
	exitAlter_assembly_with?: (ctx: Alter_assembly_withContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.client_assembly_specifier`.
	 * @param ctx the parse tree
	 */
	enterClient_assembly_specifier?: (ctx: Client_assembly_specifierContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.client_assembly_specifier`.
	 * @param ctx the parse tree
	 */
	exitClient_assembly_specifier?: (ctx: Client_assembly_specifierContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.assembly_option`.
	 * @param ctx the parse tree
	 */
	enterAssembly_option?: (ctx: Assembly_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.assembly_option`.
	 * @param ctx the parse tree
	 */
	exitAssembly_option?: (ctx: Assembly_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.network_file_share`.
	 * @param ctx the parse tree
	 */
	enterNetwork_file_share?: (ctx: Network_file_shareContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.network_file_share`.
	 * @param ctx the parse tree
	 */
	exitNetwork_file_share?: (ctx: Network_file_shareContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.network_computer`.
	 * @param ctx the parse tree
	 */
	enterNetwork_computer?: (ctx: Network_computerContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.network_computer`.
	 * @param ctx the parse tree
	 */
	exitNetwork_computer?: (ctx: Network_computerContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.network_file_start`.
	 * @param ctx the parse tree
	 */
	enterNetwork_file_start?: (ctx: Network_file_startContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.network_file_start`.
	 * @param ctx the parse tree
	 */
	exitNetwork_file_start?: (ctx: Network_file_startContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.file_path`.
	 * @param ctx the parse tree
	 */
	enterFile_path?: (ctx: File_pathContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.file_path`.
	 * @param ctx the parse tree
	 */
	exitFile_path?: (ctx: File_pathContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.file_directory_path_separator`.
	 * @param ctx the parse tree
	 */
	enterFile_directory_path_separator?: (ctx: File_directory_path_separatorContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.file_directory_path_separator`.
	 * @param ctx the parse tree
	 */
	exitFile_directory_path_separator?: (ctx: File_directory_path_separatorContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.local_file`.
	 * @param ctx the parse tree
	 */
	enterLocal_file?: (ctx: Local_fileContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.local_file`.
	 * @param ctx the parse tree
	 */
	exitLocal_file?: (ctx: Local_fileContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.local_drive`.
	 * @param ctx the parse tree
	 */
	enterLocal_drive?: (ctx: Local_driveContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.local_drive`.
	 * @param ctx the parse tree
	 */
	exitLocal_drive?: (ctx: Local_driveContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.multiple_local_files`.
	 * @param ctx the parse tree
	 */
	enterMultiple_local_files?: (ctx: Multiple_local_filesContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.multiple_local_files`.
	 * @param ctx the parse tree
	 */
	exitMultiple_local_files?: (ctx: Multiple_local_filesContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.multiple_local_file_start`.
	 * @param ctx the parse tree
	 */
	enterMultiple_local_file_start?: (ctx: Multiple_local_file_startContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.multiple_local_file_start`.
	 * @param ctx the parse tree
	 */
	exitMultiple_local_file_start?: (ctx: Multiple_local_file_startContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_assembly`.
	 * @param ctx the parse tree
	 */
	enterCreate_assembly?: (ctx: Create_assemblyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_assembly`.
	 * @param ctx the parse tree
	 */
	exitCreate_assembly?: (ctx: Create_assemblyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_assembly`.
	 * @param ctx the parse tree
	 */
	enterDrop_assembly?: (ctx: Drop_assemblyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_assembly`.
	 * @param ctx the parse tree
	 */
	exitDrop_assembly?: (ctx: Drop_assemblyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_asymmetric_key`.
	 * @param ctx the parse tree
	 */
	enterAlter_asymmetric_key?: (ctx: Alter_asymmetric_keyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_asymmetric_key`.
	 * @param ctx the parse tree
	 */
	exitAlter_asymmetric_key?: (ctx: Alter_asymmetric_keyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_asymmetric_key_start`.
	 * @param ctx the parse tree
	 */
	enterAlter_asymmetric_key_start?: (ctx: Alter_asymmetric_key_startContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_asymmetric_key_start`.
	 * @param ctx the parse tree
	 */
	exitAlter_asymmetric_key_start?: (ctx: Alter_asymmetric_key_startContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.asymmetric_key_option`.
	 * @param ctx the parse tree
	 */
	enterAsymmetric_key_option?: (ctx: Asymmetric_key_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.asymmetric_key_option`.
	 * @param ctx the parse tree
	 */
	exitAsymmetric_key_option?: (ctx: Asymmetric_key_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.asymmetric_key_option_start`.
	 * @param ctx the parse tree
	 */
	enterAsymmetric_key_option_start?: (ctx: Asymmetric_key_option_startContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.asymmetric_key_option_start`.
	 * @param ctx the parse tree
	 */
	exitAsymmetric_key_option_start?: (ctx: Asymmetric_key_option_startContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.asymmetric_key_password_change_option`.
	 * @param ctx the parse tree
	 */
	enterAsymmetric_key_password_change_option?: (ctx: Asymmetric_key_password_change_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.asymmetric_key_password_change_option`.
	 * @param ctx the parse tree
	 */
	exitAsymmetric_key_password_change_option?: (ctx: Asymmetric_key_password_change_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_asymmetric_key`.
	 * @param ctx the parse tree
	 */
	enterCreate_asymmetric_key?: (ctx: Create_asymmetric_keyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_asymmetric_key`.
	 * @param ctx the parse tree
	 */
	exitCreate_asymmetric_key?: (ctx: Create_asymmetric_keyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_asymmetric_key`.
	 * @param ctx the parse tree
	 */
	enterDrop_asymmetric_key?: (ctx: Drop_asymmetric_keyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_asymmetric_key`.
	 * @param ctx the parse tree
	 */
	exitDrop_asymmetric_key?: (ctx: Drop_asymmetric_keyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_authorization`.
	 * @param ctx the parse tree
	 */
	enterAlter_authorization?: (ctx: Alter_authorizationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_authorization`.
	 * @param ctx the parse tree
	 */
	exitAlter_authorization?: (ctx: Alter_authorizationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.authorization_grantee`.
	 * @param ctx the parse tree
	 */
	enterAuthorization_grantee?: (ctx: Authorization_granteeContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.authorization_grantee`.
	 * @param ctx the parse tree
	 */
	exitAuthorization_grantee?: (ctx: Authorization_granteeContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.entity_to`.
	 * @param ctx the parse tree
	 */
	enterEntity_to?: (ctx: Entity_toContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.entity_to`.
	 * @param ctx the parse tree
	 */
	exitEntity_to?: (ctx: Entity_toContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.colon_colon`.
	 * @param ctx the parse tree
	 */
	enterColon_colon?: (ctx: Colon_colonContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.colon_colon`.
	 * @param ctx the parse tree
	 */
	exitColon_colon?: (ctx: Colon_colonContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_authorization_start`.
	 * @param ctx the parse tree
	 */
	enterAlter_authorization_start?: (ctx: Alter_authorization_startContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_authorization_start`.
	 * @param ctx the parse tree
	 */
	exitAlter_authorization_start?: (ctx: Alter_authorization_startContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_authorization_for_sql_database`.
	 * @param ctx the parse tree
	 */
	enterAlter_authorization_for_sql_database?: (ctx: Alter_authorization_for_sql_databaseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_authorization_for_sql_database`.
	 * @param ctx the parse tree
	 */
	exitAlter_authorization_for_sql_database?: (ctx: Alter_authorization_for_sql_databaseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_authorization_for_azure_dw`.
	 * @param ctx the parse tree
	 */
	enterAlter_authorization_for_azure_dw?: (ctx: Alter_authorization_for_azure_dwContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_authorization_for_azure_dw`.
	 * @param ctx the parse tree
	 */
	exitAlter_authorization_for_azure_dw?: (ctx: Alter_authorization_for_azure_dwContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_authorization_for_parallel_dw`.
	 * @param ctx the parse tree
	 */
	enterAlter_authorization_for_parallel_dw?: (ctx: Alter_authorization_for_parallel_dwContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_authorization_for_parallel_dw`.
	 * @param ctx the parse tree
	 */
	exitAlter_authorization_for_parallel_dw?: (ctx: Alter_authorization_for_parallel_dwContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.class_type`.
	 * @param ctx the parse tree
	 */
	enterClass_type?: (ctx: Class_typeContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.class_type`.
	 * @param ctx the parse tree
	 */
	exitClass_type?: (ctx: Class_typeContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.class_type_for_sql_database`.
	 * @param ctx the parse tree
	 */
	enterClass_type_for_sql_database?: (ctx: Class_type_for_sql_databaseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.class_type_for_sql_database`.
	 * @param ctx the parse tree
	 */
	exitClass_type_for_sql_database?: (ctx: Class_type_for_sql_databaseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.class_type_for_azure_dw`.
	 * @param ctx the parse tree
	 */
	enterClass_type_for_azure_dw?: (ctx: Class_type_for_azure_dwContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.class_type_for_azure_dw`.
	 * @param ctx the parse tree
	 */
	exitClass_type_for_azure_dw?: (ctx: Class_type_for_azure_dwContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.class_type_for_parallel_dw`.
	 * @param ctx the parse tree
	 */
	enterClass_type_for_parallel_dw?: (ctx: Class_type_for_parallel_dwContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.class_type_for_parallel_dw`.
	 * @param ctx the parse tree
	 */
	exitClass_type_for_parallel_dw?: (ctx: Class_type_for_parallel_dwContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_availability_group`.
	 * @param ctx the parse tree
	 */
	enterDrop_availability_group?: (ctx: Drop_availability_groupContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_availability_group`.
	 * @param ctx the parse tree
	 */
	exitDrop_availability_group?: (ctx: Drop_availability_groupContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_availability_group`.
	 * @param ctx the parse tree
	 */
	enterAlter_availability_group?: (ctx: Alter_availability_groupContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_availability_group`.
	 * @param ctx the parse tree
	 */
	exitAlter_availability_group?: (ctx: Alter_availability_groupContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_availability_group_start`.
	 * @param ctx the parse tree
	 */
	enterAlter_availability_group_start?: (ctx: Alter_availability_group_startContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_availability_group_start`.
	 * @param ctx the parse tree
	 */
	exitAlter_availability_group_start?: (ctx: Alter_availability_group_startContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_availability_group_options`.
	 * @param ctx the parse tree
	 */
	enterAlter_availability_group_options?: (ctx: Alter_availability_group_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_availability_group_options`.
	 * @param ctx the parse tree
	 */
	exitAlter_availability_group_options?: (ctx: Alter_availability_group_optionsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.ip_v4_failover`.
	 * @param ctx the parse tree
	 */
	enterIp_v4_failover?: (ctx: Ip_v4_failoverContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.ip_v4_failover`.
	 * @param ctx the parse tree
	 */
	exitIp_v4_failover?: (ctx: Ip_v4_failoverContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.ip_v6_failover`.
	 * @param ctx the parse tree
	 */
	enterIp_v6_failover?: (ctx: Ip_v6_failoverContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.ip_v6_failover`.
	 * @param ctx the parse tree
	 */
	exitIp_v6_failover?: (ctx: Ip_v6_failoverContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_or_alter_broker_priority`.
	 * @param ctx the parse tree
	 */
	enterCreate_or_alter_broker_priority?: (ctx: Create_or_alter_broker_priorityContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_or_alter_broker_priority`.
	 * @param ctx the parse tree
	 */
	exitCreate_or_alter_broker_priority?: (ctx: Create_or_alter_broker_priorityContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_broker_priority`.
	 * @param ctx the parse tree
	 */
	enterDrop_broker_priority?: (ctx: Drop_broker_priorityContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_broker_priority`.
	 * @param ctx the parse tree
	 */
	exitDrop_broker_priority?: (ctx: Drop_broker_priorityContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_certificate`.
	 * @param ctx the parse tree
	 */
	enterAlter_certificate?: (ctx: Alter_certificateContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_certificate`.
	 * @param ctx the parse tree
	 */
	exitAlter_certificate?: (ctx: Alter_certificateContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_column_encryption_key`.
	 * @param ctx the parse tree
	 */
	enterAlter_column_encryption_key?: (ctx: Alter_column_encryption_keyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_column_encryption_key`.
	 * @param ctx the parse tree
	 */
	exitAlter_column_encryption_key?: (ctx: Alter_column_encryption_keyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_column_encryption_key`.
	 * @param ctx the parse tree
	 */
	enterCreate_column_encryption_key?: (ctx: Create_column_encryption_keyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_column_encryption_key`.
	 * @param ctx the parse tree
	 */
	exitCreate_column_encryption_key?: (ctx: Create_column_encryption_keyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_certificate`.
	 * @param ctx the parse tree
	 */
	enterDrop_certificate?: (ctx: Drop_certificateContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_certificate`.
	 * @param ctx the parse tree
	 */
	exitDrop_certificate?: (ctx: Drop_certificateContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_column_encryption_key`.
	 * @param ctx the parse tree
	 */
	enterDrop_column_encryption_key?: (ctx: Drop_column_encryption_keyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_column_encryption_key`.
	 * @param ctx the parse tree
	 */
	exitDrop_column_encryption_key?: (ctx: Drop_column_encryption_keyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_column_master_key`.
	 * @param ctx the parse tree
	 */
	enterDrop_column_master_key?: (ctx: Drop_column_master_keyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_column_master_key`.
	 * @param ctx the parse tree
	 */
	exitDrop_column_master_key?: (ctx: Drop_column_master_keyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_contract`.
	 * @param ctx the parse tree
	 */
	enterDrop_contract?: (ctx: Drop_contractContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_contract`.
	 * @param ctx the parse tree
	 */
	exitDrop_contract?: (ctx: Drop_contractContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_credential`.
	 * @param ctx the parse tree
	 */
	enterDrop_credential?: (ctx: Drop_credentialContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_credential`.
	 * @param ctx the parse tree
	 */
	exitDrop_credential?: (ctx: Drop_credentialContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_cryptograhic_provider`.
	 * @param ctx the parse tree
	 */
	enterDrop_cryptograhic_provider?: (ctx: Drop_cryptograhic_providerContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_cryptograhic_provider`.
	 * @param ctx the parse tree
	 */
	exitDrop_cryptograhic_provider?: (ctx: Drop_cryptograhic_providerContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_database`.
	 * @param ctx the parse tree
	 */
	enterDrop_database?: (ctx: Drop_databaseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_database`.
	 * @param ctx the parse tree
	 */
	exitDrop_database?: (ctx: Drop_databaseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_database_audit_specification`.
	 * @param ctx the parse tree
	 */
	enterDrop_database_audit_specification?: (ctx: Drop_database_audit_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_database_audit_specification`.
	 * @param ctx the parse tree
	 */
	exitDrop_database_audit_specification?: (ctx: Drop_database_audit_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_database_encryption_key`.
	 * @param ctx the parse tree
	 */
	enterDrop_database_encryption_key?: (ctx: Drop_database_encryption_keyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_database_encryption_key`.
	 * @param ctx the parse tree
	 */
	exitDrop_database_encryption_key?: (ctx: Drop_database_encryption_keyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_database_scoped_credential`.
	 * @param ctx the parse tree
	 */
	enterDrop_database_scoped_credential?: (ctx: Drop_database_scoped_credentialContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_database_scoped_credential`.
	 * @param ctx the parse tree
	 */
	exitDrop_database_scoped_credential?: (ctx: Drop_database_scoped_credentialContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_default`.
	 * @param ctx the parse tree
	 */
	enterDrop_default?: (ctx: Drop_defaultContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_default`.
	 * @param ctx the parse tree
	 */
	exitDrop_default?: (ctx: Drop_defaultContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_endpoint`.
	 * @param ctx the parse tree
	 */
	enterDrop_endpoint?: (ctx: Drop_endpointContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_endpoint`.
	 * @param ctx the parse tree
	 */
	exitDrop_endpoint?: (ctx: Drop_endpointContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_external_data_source`.
	 * @param ctx the parse tree
	 */
	enterDrop_external_data_source?: (ctx: Drop_external_data_sourceContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_external_data_source`.
	 * @param ctx the parse tree
	 */
	exitDrop_external_data_source?: (ctx: Drop_external_data_sourceContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_external_file_format`.
	 * @param ctx the parse tree
	 */
	enterDrop_external_file_format?: (ctx: Drop_external_file_formatContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_external_file_format`.
	 * @param ctx the parse tree
	 */
	exitDrop_external_file_format?: (ctx: Drop_external_file_formatContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_external_library`.
	 * @param ctx the parse tree
	 */
	enterDrop_external_library?: (ctx: Drop_external_libraryContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_external_library`.
	 * @param ctx the parse tree
	 */
	exitDrop_external_library?: (ctx: Drop_external_libraryContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_external_resource_pool`.
	 * @param ctx the parse tree
	 */
	enterDrop_external_resource_pool?: (ctx: Drop_external_resource_poolContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_external_resource_pool`.
	 * @param ctx the parse tree
	 */
	exitDrop_external_resource_pool?: (ctx: Drop_external_resource_poolContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_external_table`.
	 * @param ctx the parse tree
	 */
	enterDrop_external_table?: (ctx: Drop_external_tableContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_external_table`.
	 * @param ctx the parse tree
	 */
	exitDrop_external_table?: (ctx: Drop_external_tableContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_event_notifications`.
	 * @param ctx the parse tree
	 */
	enterDrop_event_notifications?: (ctx: Drop_event_notificationsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_event_notifications`.
	 * @param ctx the parse tree
	 */
	exitDrop_event_notifications?: (ctx: Drop_event_notificationsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_event_session`.
	 * @param ctx the parse tree
	 */
	enterDrop_event_session?: (ctx: Drop_event_sessionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_event_session`.
	 * @param ctx the parse tree
	 */
	exitDrop_event_session?: (ctx: Drop_event_sessionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_fulltext_catalog`.
	 * @param ctx the parse tree
	 */
	enterDrop_fulltext_catalog?: (ctx: Drop_fulltext_catalogContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_fulltext_catalog`.
	 * @param ctx the parse tree
	 */
	exitDrop_fulltext_catalog?: (ctx: Drop_fulltext_catalogContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_fulltext_index`.
	 * @param ctx the parse tree
	 */
	enterDrop_fulltext_index?: (ctx: Drop_fulltext_indexContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_fulltext_index`.
	 * @param ctx the parse tree
	 */
	exitDrop_fulltext_index?: (ctx: Drop_fulltext_indexContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_fulltext_stoplist`.
	 * @param ctx the parse tree
	 */
	enterDrop_fulltext_stoplist?: (ctx: Drop_fulltext_stoplistContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_fulltext_stoplist`.
	 * @param ctx the parse tree
	 */
	exitDrop_fulltext_stoplist?: (ctx: Drop_fulltext_stoplistContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_login`.
	 * @param ctx the parse tree
	 */
	enterDrop_login?: (ctx: Drop_loginContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_login`.
	 * @param ctx the parse tree
	 */
	exitDrop_login?: (ctx: Drop_loginContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_master_key`.
	 * @param ctx the parse tree
	 */
	enterDrop_master_key?: (ctx: Drop_master_keyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_master_key`.
	 * @param ctx the parse tree
	 */
	exitDrop_master_key?: (ctx: Drop_master_keyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_message_type`.
	 * @param ctx the parse tree
	 */
	enterDrop_message_type?: (ctx: Drop_message_typeContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_message_type`.
	 * @param ctx the parse tree
	 */
	exitDrop_message_type?: (ctx: Drop_message_typeContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_partition_function`.
	 * @param ctx the parse tree
	 */
	enterDrop_partition_function?: (ctx: Drop_partition_functionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_partition_function`.
	 * @param ctx the parse tree
	 */
	exitDrop_partition_function?: (ctx: Drop_partition_functionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_partition_scheme`.
	 * @param ctx the parse tree
	 */
	enterDrop_partition_scheme?: (ctx: Drop_partition_schemeContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_partition_scheme`.
	 * @param ctx the parse tree
	 */
	exitDrop_partition_scheme?: (ctx: Drop_partition_schemeContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_queue`.
	 * @param ctx the parse tree
	 */
	enterDrop_queue?: (ctx: Drop_queueContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_queue`.
	 * @param ctx the parse tree
	 */
	exitDrop_queue?: (ctx: Drop_queueContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_remote_service_binding`.
	 * @param ctx the parse tree
	 */
	enterDrop_remote_service_binding?: (ctx: Drop_remote_service_bindingContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_remote_service_binding`.
	 * @param ctx the parse tree
	 */
	exitDrop_remote_service_binding?: (ctx: Drop_remote_service_bindingContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_resource_pool`.
	 * @param ctx the parse tree
	 */
	enterDrop_resource_pool?: (ctx: Drop_resource_poolContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_resource_pool`.
	 * @param ctx the parse tree
	 */
	exitDrop_resource_pool?: (ctx: Drop_resource_poolContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_db_role`.
	 * @param ctx the parse tree
	 */
	enterDrop_db_role?: (ctx: Drop_db_roleContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_db_role`.
	 * @param ctx the parse tree
	 */
	exitDrop_db_role?: (ctx: Drop_db_roleContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_route`.
	 * @param ctx the parse tree
	 */
	enterDrop_route?: (ctx: Drop_routeContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_route`.
	 * @param ctx the parse tree
	 */
	exitDrop_route?: (ctx: Drop_routeContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_rule`.
	 * @param ctx the parse tree
	 */
	enterDrop_rule?: (ctx: Drop_ruleContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_rule`.
	 * @param ctx the parse tree
	 */
	exitDrop_rule?: (ctx: Drop_ruleContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_schema`.
	 * @param ctx the parse tree
	 */
	enterDrop_schema?: (ctx: Drop_schemaContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_schema`.
	 * @param ctx the parse tree
	 */
	exitDrop_schema?: (ctx: Drop_schemaContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_search_property_list`.
	 * @param ctx the parse tree
	 */
	enterDrop_search_property_list?: (ctx: Drop_search_property_listContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_search_property_list`.
	 * @param ctx the parse tree
	 */
	exitDrop_search_property_list?: (ctx: Drop_search_property_listContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_security_policy`.
	 * @param ctx the parse tree
	 */
	enterDrop_security_policy?: (ctx: Drop_security_policyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_security_policy`.
	 * @param ctx the parse tree
	 */
	exitDrop_security_policy?: (ctx: Drop_security_policyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_sequence`.
	 * @param ctx the parse tree
	 */
	enterDrop_sequence?: (ctx: Drop_sequenceContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_sequence`.
	 * @param ctx the parse tree
	 */
	exitDrop_sequence?: (ctx: Drop_sequenceContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_server_audit`.
	 * @param ctx the parse tree
	 */
	enterDrop_server_audit?: (ctx: Drop_server_auditContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_server_audit`.
	 * @param ctx the parse tree
	 */
	exitDrop_server_audit?: (ctx: Drop_server_auditContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_server_audit_specification`.
	 * @param ctx the parse tree
	 */
	enterDrop_server_audit_specification?: (ctx: Drop_server_audit_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_server_audit_specification`.
	 * @param ctx the parse tree
	 */
	exitDrop_server_audit_specification?: (ctx: Drop_server_audit_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_server_role`.
	 * @param ctx the parse tree
	 */
	enterDrop_server_role?: (ctx: Drop_server_roleContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_server_role`.
	 * @param ctx the parse tree
	 */
	exitDrop_server_role?: (ctx: Drop_server_roleContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_service`.
	 * @param ctx the parse tree
	 */
	enterDrop_service?: (ctx: Drop_serviceContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_service`.
	 * @param ctx the parse tree
	 */
	exitDrop_service?: (ctx: Drop_serviceContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_signature`.
	 * @param ctx the parse tree
	 */
	enterDrop_signature?: (ctx: Drop_signatureContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_signature`.
	 * @param ctx the parse tree
	 */
	exitDrop_signature?: (ctx: Drop_signatureContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_statistics_name_azure_dw_and_pdw`.
	 * @param ctx the parse tree
	 */
	enterDrop_statistics_name_azure_dw_and_pdw?: (ctx: Drop_statistics_name_azure_dw_and_pdwContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_statistics_name_azure_dw_and_pdw`.
	 * @param ctx the parse tree
	 */
	exitDrop_statistics_name_azure_dw_and_pdw?: (ctx: Drop_statistics_name_azure_dw_and_pdwContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_symmetric_key`.
	 * @param ctx the parse tree
	 */
	enterDrop_symmetric_key?: (ctx: Drop_symmetric_keyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_symmetric_key`.
	 * @param ctx the parse tree
	 */
	exitDrop_symmetric_key?: (ctx: Drop_symmetric_keyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_synonym`.
	 * @param ctx the parse tree
	 */
	enterDrop_synonym?: (ctx: Drop_synonymContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_synonym`.
	 * @param ctx the parse tree
	 */
	exitDrop_synonym?: (ctx: Drop_synonymContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_user`.
	 * @param ctx the parse tree
	 */
	enterDrop_user?: (ctx: Drop_userContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_user`.
	 * @param ctx the parse tree
	 */
	exitDrop_user?: (ctx: Drop_userContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_workload_group`.
	 * @param ctx the parse tree
	 */
	enterDrop_workload_group?: (ctx: Drop_workload_groupContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_workload_group`.
	 * @param ctx the parse tree
	 */
	exitDrop_workload_group?: (ctx: Drop_workload_groupContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_xml_schema_collection`.
	 * @param ctx the parse tree
	 */
	enterDrop_xml_schema_collection?: (ctx: Drop_xml_schema_collectionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_xml_schema_collection`.
	 * @param ctx the parse tree
	 */
	exitDrop_xml_schema_collection?: (ctx: Drop_xml_schema_collectionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.disable_trigger`.
	 * @param ctx the parse tree
	 */
	enterDisable_trigger?: (ctx: Disable_triggerContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.disable_trigger`.
	 * @param ctx the parse tree
	 */
	exitDisable_trigger?: (ctx: Disable_triggerContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.enable_trigger`.
	 * @param ctx the parse tree
	 */
	enterEnable_trigger?: (ctx: Enable_triggerContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.enable_trigger`.
	 * @param ctx the parse tree
	 */
	exitEnable_trigger?: (ctx: Enable_triggerContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.lock_table`.
	 * @param ctx the parse tree
	 */
	enterLock_table?: (ctx: Lock_tableContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.lock_table`.
	 * @param ctx the parse tree
	 */
	exitLock_table?: (ctx: Lock_tableContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.truncate_table`.
	 * @param ctx the parse tree
	 */
	enterTruncate_table?: (ctx: Truncate_tableContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.truncate_table`.
	 * @param ctx the parse tree
	 */
	exitTruncate_table?: (ctx: Truncate_tableContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_column_master_key`.
	 * @param ctx the parse tree
	 */
	enterCreate_column_master_key?: (ctx: Create_column_master_keyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_column_master_key`.
	 * @param ctx the parse tree
	 */
	exitCreate_column_master_key?: (ctx: Create_column_master_keyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_credential`.
	 * @param ctx the parse tree
	 */
	enterAlter_credential?: (ctx: Alter_credentialContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_credential`.
	 * @param ctx the parse tree
	 */
	exitAlter_credential?: (ctx: Alter_credentialContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_credential`.
	 * @param ctx the parse tree
	 */
	enterCreate_credential?: (ctx: Create_credentialContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_credential`.
	 * @param ctx the parse tree
	 */
	exitCreate_credential?: (ctx: Create_credentialContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_cryptographic_provider`.
	 * @param ctx the parse tree
	 */
	enterAlter_cryptographic_provider?: (ctx: Alter_cryptographic_providerContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_cryptographic_provider`.
	 * @param ctx the parse tree
	 */
	exitAlter_cryptographic_provider?: (ctx: Alter_cryptographic_providerContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_cryptographic_provider`.
	 * @param ctx the parse tree
	 */
	enterCreate_cryptographic_provider?: (ctx: Create_cryptographic_providerContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_cryptographic_provider`.
	 * @param ctx the parse tree
	 */
	exitCreate_cryptographic_provider?: (ctx: Create_cryptographic_providerContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_event_notification`.
	 * @param ctx the parse tree
	 */
	enterCreate_event_notification?: (ctx: Create_event_notificationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_event_notification`.
	 * @param ctx the parse tree
	 */
	exitCreate_event_notification?: (ctx: Create_event_notificationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_or_alter_event_session`.
	 * @param ctx the parse tree
	 */
	enterCreate_or_alter_event_session?: (ctx: Create_or_alter_event_sessionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_or_alter_event_session`.
	 * @param ctx the parse tree
	 */
	exitCreate_or_alter_event_session?: (ctx: Create_or_alter_event_sessionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.event_session_predicate_expression`.
	 * @param ctx the parse tree
	 */
	enterEvent_session_predicate_expression?: (ctx: Event_session_predicate_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.event_session_predicate_expression`.
	 * @param ctx the parse tree
	 */
	exitEvent_session_predicate_expression?: (ctx: Event_session_predicate_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.event_session_predicate_factor`.
	 * @param ctx the parse tree
	 */
	enterEvent_session_predicate_factor?: (ctx: Event_session_predicate_factorContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.event_session_predicate_factor`.
	 * @param ctx the parse tree
	 */
	exitEvent_session_predicate_factor?: (ctx: Event_session_predicate_factorContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.event_session_predicate_leaf`.
	 * @param ctx the parse tree
	 */
	enterEvent_session_predicate_leaf?: (ctx: Event_session_predicate_leafContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.event_session_predicate_leaf`.
	 * @param ctx the parse tree
	 */
	exitEvent_session_predicate_leaf?: (ctx: Event_session_predicate_leafContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_external_data_source`.
	 * @param ctx the parse tree
	 */
	enterAlter_external_data_source?: (ctx: Alter_external_data_sourceContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_external_data_source`.
	 * @param ctx the parse tree
	 */
	exitAlter_external_data_source?: (ctx: Alter_external_data_sourceContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_external_library`.
	 * @param ctx the parse tree
	 */
	enterAlter_external_library?: (ctx: Alter_external_libraryContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_external_library`.
	 * @param ctx the parse tree
	 */
	exitAlter_external_library?: (ctx: Alter_external_libraryContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_external_library`.
	 * @param ctx the parse tree
	 */
	enterCreate_external_library?: (ctx: Create_external_libraryContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_external_library`.
	 * @param ctx the parse tree
	 */
	exitCreate_external_library?: (ctx: Create_external_libraryContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_external_resource_pool`.
	 * @param ctx the parse tree
	 */
	enterAlter_external_resource_pool?: (ctx: Alter_external_resource_poolContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_external_resource_pool`.
	 * @param ctx the parse tree
	 */
	exitAlter_external_resource_pool?: (ctx: Alter_external_resource_poolContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_external_resource_pool`.
	 * @param ctx the parse tree
	 */
	enterCreate_external_resource_pool?: (ctx: Create_external_resource_poolContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_external_resource_pool`.
	 * @param ctx the parse tree
	 */
	exitCreate_external_resource_pool?: (ctx: Create_external_resource_poolContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_fulltext_catalog`.
	 * @param ctx the parse tree
	 */
	enterAlter_fulltext_catalog?: (ctx: Alter_fulltext_catalogContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_fulltext_catalog`.
	 * @param ctx the parse tree
	 */
	exitAlter_fulltext_catalog?: (ctx: Alter_fulltext_catalogContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_fulltext_catalog`.
	 * @param ctx the parse tree
	 */
	enterCreate_fulltext_catalog?: (ctx: Create_fulltext_catalogContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_fulltext_catalog`.
	 * @param ctx the parse tree
	 */
	exitCreate_fulltext_catalog?: (ctx: Create_fulltext_catalogContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_fulltext_stoplist`.
	 * @param ctx the parse tree
	 */
	enterAlter_fulltext_stoplist?: (ctx: Alter_fulltext_stoplistContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_fulltext_stoplist`.
	 * @param ctx the parse tree
	 */
	exitAlter_fulltext_stoplist?: (ctx: Alter_fulltext_stoplistContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_fulltext_stoplist`.
	 * @param ctx the parse tree
	 */
	enterCreate_fulltext_stoplist?: (ctx: Create_fulltext_stoplistContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_fulltext_stoplist`.
	 * @param ctx the parse tree
	 */
	exitCreate_fulltext_stoplist?: (ctx: Create_fulltext_stoplistContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_login_sql_server`.
	 * @param ctx the parse tree
	 */
	enterAlter_login_sql_server?: (ctx: Alter_login_sql_serverContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_login_sql_server`.
	 * @param ctx the parse tree
	 */
	exitAlter_login_sql_server?: (ctx: Alter_login_sql_serverContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_login_sql_server`.
	 * @param ctx the parse tree
	 */
	enterCreate_login_sql_server?: (ctx: Create_login_sql_serverContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_login_sql_server`.
	 * @param ctx the parse tree
	 */
	exitCreate_login_sql_server?: (ctx: Create_login_sql_serverContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_login_azure_sql`.
	 * @param ctx the parse tree
	 */
	enterAlter_login_azure_sql?: (ctx: Alter_login_azure_sqlContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_login_azure_sql`.
	 * @param ctx the parse tree
	 */
	exitAlter_login_azure_sql?: (ctx: Alter_login_azure_sqlContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_login_azure_sql`.
	 * @param ctx the parse tree
	 */
	enterCreate_login_azure_sql?: (ctx: Create_login_azure_sqlContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_login_azure_sql`.
	 * @param ctx the parse tree
	 */
	exitCreate_login_azure_sql?: (ctx: Create_login_azure_sqlContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_login_azure_sql_dw_and_pdw`.
	 * @param ctx the parse tree
	 */
	enterAlter_login_azure_sql_dw_and_pdw?: (ctx: Alter_login_azure_sql_dw_and_pdwContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_login_azure_sql_dw_and_pdw`.
	 * @param ctx the parse tree
	 */
	exitAlter_login_azure_sql_dw_and_pdw?: (ctx: Alter_login_azure_sql_dw_and_pdwContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_login_pdw`.
	 * @param ctx the parse tree
	 */
	enterCreate_login_pdw?: (ctx: Create_login_pdwContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_login_pdw`.
	 * @param ctx the parse tree
	 */
	exitCreate_login_pdw?: (ctx: Create_login_pdwContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_master_key_sql_server`.
	 * @param ctx the parse tree
	 */
	enterAlter_master_key_sql_server?: (ctx: Alter_master_key_sql_serverContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_master_key_sql_server`.
	 * @param ctx the parse tree
	 */
	exitAlter_master_key_sql_server?: (ctx: Alter_master_key_sql_serverContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_master_key_sql_server`.
	 * @param ctx the parse tree
	 */
	enterCreate_master_key_sql_server?: (ctx: Create_master_key_sql_serverContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_master_key_sql_server`.
	 * @param ctx the parse tree
	 */
	exitCreate_master_key_sql_server?: (ctx: Create_master_key_sql_serverContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_master_key_azure_sql`.
	 * @param ctx the parse tree
	 */
	enterAlter_master_key_azure_sql?: (ctx: Alter_master_key_azure_sqlContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_master_key_azure_sql`.
	 * @param ctx the parse tree
	 */
	exitAlter_master_key_azure_sql?: (ctx: Alter_master_key_azure_sqlContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_master_key_azure_sql`.
	 * @param ctx the parse tree
	 */
	enterCreate_master_key_azure_sql?: (ctx: Create_master_key_azure_sqlContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_master_key_azure_sql`.
	 * @param ctx the parse tree
	 */
	exitCreate_master_key_azure_sql?: (ctx: Create_master_key_azure_sqlContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_message_type`.
	 * @param ctx the parse tree
	 */
	enterAlter_message_type?: (ctx: Alter_message_typeContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_message_type`.
	 * @param ctx the parse tree
	 */
	exitAlter_message_type?: (ctx: Alter_message_typeContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_partition_function`.
	 * @param ctx the parse tree
	 */
	enterAlter_partition_function?: (ctx: Alter_partition_functionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_partition_function`.
	 * @param ctx the parse tree
	 */
	exitAlter_partition_function?: (ctx: Alter_partition_functionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_partition_scheme`.
	 * @param ctx the parse tree
	 */
	enterAlter_partition_scheme?: (ctx: Alter_partition_schemeContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_partition_scheme`.
	 * @param ctx the parse tree
	 */
	exitAlter_partition_scheme?: (ctx: Alter_partition_schemeContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_remote_service_binding`.
	 * @param ctx the parse tree
	 */
	enterAlter_remote_service_binding?: (ctx: Alter_remote_service_bindingContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_remote_service_binding`.
	 * @param ctx the parse tree
	 */
	exitAlter_remote_service_binding?: (ctx: Alter_remote_service_bindingContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_remote_service_binding`.
	 * @param ctx the parse tree
	 */
	enterCreate_remote_service_binding?: (ctx: Create_remote_service_bindingContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_remote_service_binding`.
	 * @param ctx the parse tree
	 */
	exitCreate_remote_service_binding?: (ctx: Create_remote_service_bindingContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_resource_pool`.
	 * @param ctx the parse tree
	 */
	enterCreate_resource_pool?: (ctx: Create_resource_poolContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_resource_pool`.
	 * @param ctx the parse tree
	 */
	exitCreate_resource_pool?: (ctx: Create_resource_poolContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_resource_governor`.
	 * @param ctx the parse tree
	 */
	enterAlter_resource_governor?: (ctx: Alter_resource_governorContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_resource_governor`.
	 * @param ctx the parse tree
	 */
	exitAlter_resource_governor?: (ctx: Alter_resource_governorContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_db_role`.
	 * @param ctx the parse tree
	 */
	enterAlter_db_role?: (ctx: Alter_db_roleContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_db_role`.
	 * @param ctx the parse tree
	 */
	exitAlter_db_role?: (ctx: Alter_db_roleContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_db_role`.
	 * @param ctx the parse tree
	 */
	enterCreate_db_role?: (ctx: Create_db_roleContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_db_role`.
	 * @param ctx the parse tree
	 */
	exitCreate_db_role?: (ctx: Create_db_roleContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_route`.
	 * @param ctx the parse tree
	 */
	enterCreate_route?: (ctx: Create_routeContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_route`.
	 * @param ctx the parse tree
	 */
	exitCreate_route?: (ctx: Create_routeContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_rule`.
	 * @param ctx the parse tree
	 */
	enterCreate_rule?: (ctx: Create_ruleContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_rule`.
	 * @param ctx the parse tree
	 */
	exitCreate_rule?: (ctx: Create_ruleContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_schema_sql`.
	 * @param ctx the parse tree
	 */
	enterAlter_schema_sql?: (ctx: Alter_schema_sqlContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_schema_sql`.
	 * @param ctx the parse tree
	 */
	exitAlter_schema_sql?: (ctx: Alter_schema_sqlContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_schema`.
	 * @param ctx the parse tree
	 */
	enterCreate_schema?: (ctx: Create_schemaContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_schema`.
	 * @param ctx the parse tree
	 */
	exitCreate_schema?: (ctx: Create_schemaContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_schema_azure_sql_dw_and_pdw`.
	 * @param ctx the parse tree
	 */
	enterCreate_schema_azure_sql_dw_and_pdw?: (ctx: Create_schema_azure_sql_dw_and_pdwContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_schema_azure_sql_dw_and_pdw`.
	 * @param ctx the parse tree
	 */
	exitCreate_schema_azure_sql_dw_and_pdw?: (ctx: Create_schema_azure_sql_dw_and_pdwContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_schema_azure_sql_dw_and_pdw`.
	 * @param ctx the parse tree
	 */
	enterAlter_schema_azure_sql_dw_and_pdw?: (ctx: Alter_schema_azure_sql_dw_and_pdwContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_schema_azure_sql_dw_and_pdw`.
	 * @param ctx the parse tree
	 */
	exitAlter_schema_azure_sql_dw_and_pdw?: (ctx: Alter_schema_azure_sql_dw_and_pdwContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_search_property_list`.
	 * @param ctx the parse tree
	 */
	enterCreate_search_property_list?: (ctx: Create_search_property_listContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_search_property_list`.
	 * @param ctx the parse tree
	 */
	exitCreate_search_property_list?: (ctx: Create_search_property_listContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_security_policy`.
	 * @param ctx the parse tree
	 */
	enterCreate_security_policy?: (ctx: Create_security_policyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_security_policy`.
	 * @param ctx the parse tree
	 */
	exitCreate_security_policy?: (ctx: Create_security_policyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_sequence`.
	 * @param ctx the parse tree
	 */
	enterAlter_sequence?: (ctx: Alter_sequenceContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_sequence`.
	 * @param ctx the parse tree
	 */
	exitAlter_sequence?: (ctx: Alter_sequenceContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_sequence`.
	 * @param ctx the parse tree
	 */
	enterCreate_sequence?: (ctx: Create_sequenceContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_sequence`.
	 * @param ctx the parse tree
	 */
	exitCreate_sequence?: (ctx: Create_sequenceContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_server_audit`.
	 * @param ctx the parse tree
	 */
	enterAlter_server_audit?: (ctx: Alter_server_auditContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_server_audit`.
	 * @param ctx the parse tree
	 */
	exitAlter_server_audit?: (ctx: Alter_server_auditContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_server_audit`.
	 * @param ctx the parse tree
	 */
	enterCreate_server_audit?: (ctx: Create_server_auditContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_server_audit`.
	 * @param ctx the parse tree
	 */
	exitCreate_server_audit?: (ctx: Create_server_auditContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_server_audit_specification`.
	 * @param ctx the parse tree
	 */
	enterAlter_server_audit_specification?: (ctx: Alter_server_audit_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_server_audit_specification`.
	 * @param ctx the parse tree
	 */
	exitAlter_server_audit_specification?: (ctx: Alter_server_audit_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_server_audit_specification`.
	 * @param ctx the parse tree
	 */
	enterCreate_server_audit_specification?: (ctx: Create_server_audit_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_server_audit_specification`.
	 * @param ctx the parse tree
	 */
	exitCreate_server_audit_specification?: (ctx: Create_server_audit_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_server_configuration`.
	 * @param ctx the parse tree
	 */
	enterAlter_server_configuration?: (ctx: Alter_server_configurationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_server_configuration`.
	 * @param ctx the parse tree
	 */
	exitAlter_server_configuration?: (ctx: Alter_server_configurationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_server_role`.
	 * @param ctx the parse tree
	 */
	enterAlter_server_role?: (ctx: Alter_server_roleContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_server_role`.
	 * @param ctx the parse tree
	 */
	exitAlter_server_role?: (ctx: Alter_server_roleContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_server_role`.
	 * @param ctx the parse tree
	 */
	enterCreate_server_role?: (ctx: Create_server_roleContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_server_role`.
	 * @param ctx the parse tree
	 */
	exitCreate_server_role?: (ctx: Create_server_roleContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_server_role_pdw`.
	 * @param ctx the parse tree
	 */
	enterAlter_server_role_pdw?: (ctx: Alter_server_role_pdwContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_server_role_pdw`.
	 * @param ctx the parse tree
	 */
	exitAlter_server_role_pdw?: (ctx: Alter_server_role_pdwContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_service`.
	 * @param ctx the parse tree
	 */
	enterAlter_service?: (ctx: Alter_serviceContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_service`.
	 * @param ctx the parse tree
	 */
	exitAlter_service?: (ctx: Alter_serviceContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_service`.
	 * @param ctx the parse tree
	 */
	enterCreate_service?: (ctx: Create_serviceContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_service`.
	 * @param ctx the parse tree
	 */
	exitCreate_service?: (ctx: Create_serviceContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_service_master_key`.
	 * @param ctx the parse tree
	 */
	enterAlter_service_master_key?: (ctx: Alter_service_master_keyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_service_master_key`.
	 * @param ctx the parse tree
	 */
	exitAlter_service_master_key?: (ctx: Alter_service_master_keyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_symmetric_key`.
	 * @param ctx the parse tree
	 */
	enterAlter_symmetric_key?: (ctx: Alter_symmetric_keyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_symmetric_key`.
	 * @param ctx the parse tree
	 */
	exitAlter_symmetric_key?: (ctx: Alter_symmetric_keyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_symmetric_key`.
	 * @param ctx the parse tree
	 */
	enterCreate_symmetric_key?: (ctx: Create_symmetric_keyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_symmetric_key`.
	 * @param ctx the parse tree
	 */
	exitCreate_symmetric_key?: (ctx: Create_symmetric_keyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_synonym`.
	 * @param ctx the parse tree
	 */
	enterCreate_synonym?: (ctx: Create_synonymContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_synonym`.
	 * @param ctx the parse tree
	 */
	exitCreate_synonym?: (ctx: Create_synonymContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_user`.
	 * @param ctx the parse tree
	 */
	enterAlter_user?: (ctx: Alter_userContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_user`.
	 * @param ctx the parse tree
	 */
	exitAlter_user?: (ctx: Alter_userContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_user`.
	 * @param ctx the parse tree
	 */
	enterCreate_user?: (ctx: Create_userContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_user`.
	 * @param ctx the parse tree
	 */
	exitCreate_user?: (ctx: Create_userContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_user_azure_sql_dw`.
	 * @param ctx the parse tree
	 */
	enterCreate_user_azure_sql_dw?: (ctx: Create_user_azure_sql_dwContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_user_azure_sql_dw`.
	 * @param ctx the parse tree
	 */
	exitCreate_user_azure_sql_dw?: (ctx: Create_user_azure_sql_dwContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_user_azure_sql`.
	 * @param ctx the parse tree
	 */
	enterAlter_user_azure_sql?: (ctx: Alter_user_azure_sqlContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_user_azure_sql`.
	 * @param ctx the parse tree
	 */
	exitAlter_user_azure_sql?: (ctx: Alter_user_azure_sqlContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_workload_group`.
	 * @param ctx the parse tree
	 */
	enterAlter_workload_group?: (ctx: Alter_workload_groupContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_workload_group`.
	 * @param ctx the parse tree
	 */
	exitAlter_workload_group?: (ctx: Alter_workload_groupContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_workload_group`.
	 * @param ctx the parse tree
	 */
	enterCreate_workload_group?: (ctx: Create_workload_groupContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_workload_group`.
	 * @param ctx the parse tree
	 */
	exitCreate_workload_group?: (ctx: Create_workload_groupContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_xml_schema_collection`.
	 * @param ctx the parse tree
	 */
	enterCreate_xml_schema_collection?: (ctx: Create_xml_schema_collectionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_xml_schema_collection`.
	 * @param ctx the parse tree
	 */
	exitCreate_xml_schema_collection?: (ctx: Create_xml_schema_collectionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_queue`.
	 * @param ctx the parse tree
	 */
	enterCreate_queue?: (ctx: Create_queueContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_queue`.
	 * @param ctx the parse tree
	 */
	exitCreate_queue?: (ctx: Create_queueContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.queue_settings`.
	 * @param ctx the parse tree
	 */
	enterQueue_settings?: (ctx: Queue_settingsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.queue_settings`.
	 * @param ctx the parse tree
	 */
	exitQueue_settings?: (ctx: Queue_settingsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_queue`.
	 * @param ctx the parse tree
	 */
	enterAlter_queue?: (ctx: Alter_queueContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_queue`.
	 * @param ctx the parse tree
	 */
	exitAlter_queue?: (ctx: Alter_queueContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.queue_action`.
	 * @param ctx the parse tree
	 */
	enterQueue_action?: (ctx: Queue_actionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.queue_action`.
	 * @param ctx the parse tree
	 */
	exitQueue_action?: (ctx: Queue_actionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.queue_rebuild_options`.
	 * @param ctx the parse tree
	 */
	enterQueue_rebuild_options?: (ctx: Queue_rebuild_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.queue_rebuild_options`.
	 * @param ctx the parse tree
	 */
	exitQueue_rebuild_options?: (ctx: Queue_rebuild_optionsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_contract`.
	 * @param ctx the parse tree
	 */
	enterCreate_contract?: (ctx: Create_contractContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_contract`.
	 * @param ctx the parse tree
	 */
	exitCreate_contract?: (ctx: Create_contractContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.conversation_statement`.
	 * @param ctx the parse tree
	 */
	enterConversation_statement?: (ctx: Conversation_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.conversation_statement`.
	 * @param ctx the parse tree
	 */
	exitConversation_statement?: (ctx: Conversation_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.message_statement`.
	 * @param ctx the parse tree
	 */
	enterMessage_statement?: (ctx: Message_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.message_statement`.
	 * @param ctx the parse tree
	 */
	exitMessage_statement?: (ctx: Message_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.merge_statement`.
	 * @param ctx the parse tree
	 */
	enterMerge_statement?: (ctx: Merge_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.merge_statement`.
	 * @param ctx the parse tree
	 */
	exitMerge_statement?: (ctx: Merge_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.when_matches`.
	 * @param ctx the parse tree
	 */
	enterWhen_matches?: (ctx: When_matchesContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.when_matches`.
	 * @param ctx the parse tree
	 */
	exitWhen_matches?: (ctx: When_matchesContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.merge_matched`.
	 * @param ctx the parse tree
	 */
	enterMerge_matched?: (ctx: Merge_matchedContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.merge_matched`.
	 * @param ctx the parse tree
	 */
	exitMerge_matched?: (ctx: Merge_matchedContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.merge_not_matched`.
	 * @param ctx the parse tree
	 */
	enterMerge_not_matched?: (ctx: Merge_not_matchedContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.merge_not_matched`.
	 * @param ctx the parse tree
	 */
	exitMerge_not_matched?: (ctx: Merge_not_matchedContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.delete_statement`.
	 * @param ctx the parse tree
	 */
	enterDelete_statement?: (ctx: Delete_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.delete_statement`.
	 * @param ctx the parse tree
	 */
	exitDelete_statement?: (ctx: Delete_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.delete_statement_from`.
	 * @param ctx the parse tree
	 */
	enterDelete_statement_from?: (ctx: Delete_statement_fromContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.delete_statement_from`.
	 * @param ctx the parse tree
	 */
	exitDelete_statement_from?: (ctx: Delete_statement_fromContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.insert_statement`.
	 * @param ctx the parse tree
	 */
	enterInsert_statement?: (ctx: Insert_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.insert_statement`.
	 * @param ctx the parse tree
	 */
	exitInsert_statement?: (ctx: Insert_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.insert_statement_value`.
	 * @param ctx the parse tree
	 */
	enterInsert_statement_value?: (ctx: Insert_statement_valueContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.insert_statement_value`.
	 * @param ctx the parse tree
	 */
	exitInsert_statement_value?: (ctx: Insert_statement_valueContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.receive_statement`.
	 * @param ctx the parse tree
	 */
	enterReceive_statement?: (ctx: Receive_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.receive_statement`.
	 * @param ctx the parse tree
	 */
	exitReceive_statement?: (ctx: Receive_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.select_statement_standalone`.
	 * @param ctx the parse tree
	 */
	enterSelect_statement_standalone?: (ctx: Select_statement_standaloneContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.select_statement_standalone`.
	 * @param ctx the parse tree
	 */
	exitSelect_statement_standalone?: (ctx: Select_statement_standaloneContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.select_statement`.
	 * @param ctx the parse tree
	 */
	enterSelect_statement?: (ctx: Select_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.select_statement`.
	 * @param ctx the parse tree
	 */
	exitSelect_statement?: (ctx: Select_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.time`.
	 * @param ctx the parse tree
	 */
	enterTime?: (ctx: TimeContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.time`.
	 * @param ctx the parse tree
	 */
	exitTime?: (ctx: TimeContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.update_statement`.
	 * @param ctx the parse tree
	 */
	enterUpdate_statement?: (ctx: Update_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.update_statement`.
	 * @param ctx the parse tree
	 */
	exitUpdate_statement?: (ctx: Update_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.output_clause`.
	 * @param ctx the parse tree
	 */
	enterOutput_clause?: (ctx: Output_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.output_clause`.
	 * @param ctx the parse tree
	 */
	exitOutput_clause?: (ctx: Output_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.output_dml_list_elem`.
	 * @param ctx the parse tree
	 */
	enterOutput_dml_list_elem?: (ctx: Output_dml_list_elemContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.output_dml_list_elem`.
	 * @param ctx the parse tree
	 */
	exitOutput_dml_list_elem?: (ctx: Output_dml_list_elemContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.output_column_name`.
	 * @param ctx the parse tree
	 */
	enterOutput_column_name?: (ctx: Output_column_nameContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.output_column_name`.
	 * @param ctx the parse tree
	 */
	exitOutput_column_name?: (ctx: Output_column_nameContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_database`.
	 * @param ctx the parse tree
	 */
	enterCreate_database?: (ctx: Create_databaseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_database`.
	 * @param ctx the parse tree
	 */
	exitCreate_database?: (ctx: Create_databaseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_index`.
	 * @param ctx the parse tree
	 */
	enterCreate_index?: (ctx: Create_indexContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_index`.
	 * @param ctx the parse tree
	 */
	exitCreate_index?: (ctx: Create_indexContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_xml_index`.
	 * @param ctx the parse tree
	 */
	enterCreate_xml_index?: (ctx: Create_xml_indexContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_xml_index`.
	 * @param ctx the parse tree
	 */
	exitCreate_xml_index?: (ctx: Create_xml_indexContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_or_alter_procedure`.
	 * @param ctx the parse tree
	 */
	enterCreate_or_alter_procedure?: (ctx: Create_or_alter_procedureContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_or_alter_procedure`.
	 * @param ctx the parse tree
	 */
	exitCreate_or_alter_procedure?: (ctx: Create_or_alter_procedureContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_or_alter_trigger`.
	 * @param ctx the parse tree
	 */
	enterCreate_or_alter_trigger?: (ctx: Create_or_alter_triggerContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_or_alter_trigger`.
	 * @param ctx the parse tree
	 */
	exitCreate_or_alter_trigger?: (ctx: Create_or_alter_triggerContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_or_alter_dml_trigger`.
	 * @param ctx the parse tree
	 */
	enterCreate_or_alter_dml_trigger?: (ctx: Create_or_alter_dml_triggerContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_or_alter_dml_trigger`.
	 * @param ctx the parse tree
	 */
	exitCreate_or_alter_dml_trigger?: (ctx: Create_or_alter_dml_triggerContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.dml_trigger_option`.
	 * @param ctx the parse tree
	 */
	enterDml_trigger_option?: (ctx: Dml_trigger_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.dml_trigger_option`.
	 * @param ctx the parse tree
	 */
	exitDml_trigger_option?: (ctx: Dml_trigger_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.dml_trigger_operation`.
	 * @param ctx the parse tree
	 */
	enterDml_trigger_operation?: (ctx: Dml_trigger_operationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.dml_trigger_operation`.
	 * @param ctx the parse tree
	 */
	exitDml_trigger_operation?: (ctx: Dml_trigger_operationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_or_alter_ddl_trigger`.
	 * @param ctx the parse tree
	 */
	enterCreate_or_alter_ddl_trigger?: (ctx: Create_or_alter_ddl_triggerContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_or_alter_ddl_trigger`.
	 * @param ctx the parse tree
	 */
	exitCreate_or_alter_ddl_trigger?: (ctx: Create_or_alter_ddl_triggerContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.ddl_trigger_operation`.
	 * @param ctx the parse tree
	 */
	enterDdl_trigger_operation?: (ctx: Ddl_trigger_operationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.ddl_trigger_operation`.
	 * @param ctx the parse tree
	 */
	exitDdl_trigger_operation?: (ctx: Ddl_trigger_operationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_or_alter_function`.
	 * @param ctx the parse tree
	 */
	enterCreate_or_alter_function?: (ctx: Create_or_alter_functionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_or_alter_function`.
	 * @param ctx the parse tree
	 */
	exitCreate_or_alter_function?: (ctx: Create_or_alter_functionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.func_body_returns_select`.
	 * @param ctx the parse tree
	 */
	enterFunc_body_returns_select?: (ctx: Func_body_returns_selectContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.func_body_returns_select`.
	 * @param ctx the parse tree
	 */
	exitFunc_body_returns_select?: (ctx: Func_body_returns_selectContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.func_body_returns_table`.
	 * @param ctx the parse tree
	 */
	enterFunc_body_returns_table?: (ctx: Func_body_returns_tableContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.func_body_returns_table`.
	 * @param ctx the parse tree
	 */
	exitFunc_body_returns_table?: (ctx: Func_body_returns_tableContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.func_body_returns_scalar`.
	 * @param ctx the parse tree
	 */
	enterFunc_body_returns_scalar?: (ctx: Func_body_returns_scalarContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.func_body_returns_scalar`.
	 * @param ctx the parse tree
	 */
	exitFunc_body_returns_scalar?: (ctx: Func_body_returns_scalarContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.procedure_param`.
	 * @param ctx the parse tree
	 */
	enterProcedure_param?: (ctx: Procedure_paramContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.procedure_param`.
	 * @param ctx the parse tree
	 */
	exitProcedure_param?: (ctx: Procedure_paramContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.procedure_option`.
	 * @param ctx the parse tree
	 */
	enterProcedure_option?: (ctx: Procedure_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.procedure_option`.
	 * @param ctx the parse tree
	 */
	exitProcedure_option?: (ctx: Procedure_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.function_option`.
	 * @param ctx the parse tree
	 */
	enterFunction_option?: (ctx: Function_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.function_option`.
	 * @param ctx the parse tree
	 */
	exitFunction_option?: (ctx: Function_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_statistics`.
	 * @param ctx the parse tree
	 */
	enterCreate_statistics?: (ctx: Create_statisticsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_statistics`.
	 * @param ctx the parse tree
	 */
	exitCreate_statistics?: (ctx: Create_statisticsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.update_statistics`.
	 * @param ctx the parse tree
	 */
	enterUpdate_statistics?: (ctx: Update_statisticsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.update_statistics`.
	 * @param ctx the parse tree
	 */
	exitUpdate_statistics?: (ctx: Update_statisticsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_table`.
	 * @param ctx the parse tree
	 */
	enterCreate_table?: (ctx: Create_tableContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_table`.
	 * @param ctx the parse tree
	 */
	exitCreate_table?: (ctx: Create_tableContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_indices`.
	 * @param ctx the parse tree
	 */
	enterTable_indices?: (ctx: Table_indicesContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_indices`.
	 * @param ctx the parse tree
	 */
	exitTable_indices?: (ctx: Table_indicesContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_options`.
	 * @param ctx the parse tree
	 */
	enterTable_options?: (ctx: Table_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_options`.
	 * @param ctx the parse tree
	 */
	exitTable_options?: (ctx: Table_optionsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_view`.
	 * @param ctx the parse tree
	 */
	enterCreate_view?: (ctx: Create_viewContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_view`.
	 * @param ctx the parse tree
	 */
	exitCreate_view?: (ctx: Create_viewContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.view_attribute`.
	 * @param ctx the parse tree
	 */
	enterView_attribute?: (ctx: View_attributeContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.view_attribute`.
	 * @param ctx the parse tree
	 */
	exitView_attribute?: (ctx: View_attributeContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_table`.
	 * @param ctx the parse tree
	 */
	enterAlter_table?: (ctx: Alter_tableContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_table`.
	 * @param ctx the parse tree
	 */
	exitAlter_table?: (ctx: Alter_tableContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_database`.
	 * @param ctx the parse tree
	 */
	enterAlter_database?: (ctx: Alter_databaseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_database`.
	 * @param ctx the parse tree
	 */
	exitAlter_database?: (ctx: Alter_databaseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.database_optionspec`.
	 * @param ctx the parse tree
	 */
	enterDatabase_optionspec?: (ctx: Database_optionspecContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.database_optionspec`.
	 * @param ctx the parse tree
	 */
	exitDatabase_optionspec?: (ctx: Database_optionspecContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.auto_option`.
	 * @param ctx the parse tree
	 */
	enterAuto_option?: (ctx: Auto_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.auto_option`.
	 * @param ctx the parse tree
	 */
	exitAuto_option?: (ctx: Auto_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.change_tracking_option`.
	 * @param ctx the parse tree
	 */
	enterChange_tracking_option?: (ctx: Change_tracking_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.change_tracking_option`.
	 * @param ctx the parse tree
	 */
	exitChange_tracking_option?: (ctx: Change_tracking_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.change_tracking_option_list`.
	 * @param ctx the parse tree
	 */
	enterChange_tracking_option_list?: (ctx: Change_tracking_option_listContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.change_tracking_option_list`.
	 * @param ctx the parse tree
	 */
	exitChange_tracking_option_list?: (ctx: Change_tracking_option_listContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.containment_option`.
	 * @param ctx the parse tree
	 */
	enterContainment_option?: (ctx: Containment_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.containment_option`.
	 * @param ctx the parse tree
	 */
	exitContainment_option?: (ctx: Containment_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.cursor_option`.
	 * @param ctx the parse tree
	 */
	enterCursor_option?: (ctx: Cursor_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.cursor_option`.
	 * @param ctx the parse tree
	 */
	exitCursor_option?: (ctx: Cursor_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.alter_endpoint`.
	 * @param ctx the parse tree
	 */
	enterAlter_endpoint?: (ctx: Alter_endpointContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.alter_endpoint`.
	 * @param ctx the parse tree
	 */
	exitAlter_endpoint?: (ctx: Alter_endpointContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.database_mirroring_option`.
	 * @param ctx the parse tree
	 */
	enterDatabase_mirroring_option?: (ctx: Database_mirroring_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.database_mirroring_option`.
	 * @param ctx the parse tree
	 */
	exitDatabase_mirroring_option?: (ctx: Database_mirroring_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.mirroring_set_option`.
	 * @param ctx the parse tree
	 */
	enterMirroring_set_option?: (ctx: Mirroring_set_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.mirroring_set_option`.
	 * @param ctx the parse tree
	 */
	exitMirroring_set_option?: (ctx: Mirroring_set_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.mirroring_partner`.
	 * @param ctx the parse tree
	 */
	enterMirroring_partner?: (ctx: Mirroring_partnerContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.mirroring_partner`.
	 * @param ctx the parse tree
	 */
	exitMirroring_partner?: (ctx: Mirroring_partnerContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.mirroring_witness`.
	 * @param ctx the parse tree
	 */
	enterMirroring_witness?: (ctx: Mirroring_witnessContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.mirroring_witness`.
	 * @param ctx the parse tree
	 */
	exitMirroring_witness?: (ctx: Mirroring_witnessContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.witness_partner_equal`.
	 * @param ctx the parse tree
	 */
	enterWitness_partner_equal?: (ctx: Witness_partner_equalContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.witness_partner_equal`.
	 * @param ctx the parse tree
	 */
	exitWitness_partner_equal?: (ctx: Witness_partner_equalContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.partner_option`.
	 * @param ctx the parse tree
	 */
	enterPartner_option?: (ctx: Partner_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.partner_option`.
	 * @param ctx the parse tree
	 */
	exitPartner_option?: (ctx: Partner_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.witness_option`.
	 * @param ctx the parse tree
	 */
	enterWitness_option?: (ctx: Witness_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.witness_option`.
	 * @param ctx the parse tree
	 */
	exitWitness_option?: (ctx: Witness_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.witness_server`.
	 * @param ctx the parse tree
	 */
	enterWitness_server?: (ctx: Witness_serverContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.witness_server`.
	 * @param ctx the parse tree
	 */
	exitWitness_server?: (ctx: Witness_serverContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.partner_server`.
	 * @param ctx the parse tree
	 */
	enterPartner_server?: (ctx: Partner_serverContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.partner_server`.
	 * @param ctx the parse tree
	 */
	exitPartner_server?: (ctx: Partner_serverContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.mirroring_host_port_seperator`.
	 * @param ctx the parse tree
	 */
	enterMirroring_host_port_seperator?: (ctx: Mirroring_host_port_seperatorContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.mirroring_host_port_seperator`.
	 * @param ctx the parse tree
	 */
	exitMirroring_host_port_seperator?: (ctx: Mirroring_host_port_seperatorContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.partner_server_tcp_prefix`.
	 * @param ctx the parse tree
	 */
	enterPartner_server_tcp_prefix?: (ctx: Partner_server_tcp_prefixContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.partner_server_tcp_prefix`.
	 * @param ctx the parse tree
	 */
	exitPartner_server_tcp_prefix?: (ctx: Partner_server_tcp_prefixContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.port_number`.
	 * @param ctx the parse tree
	 */
	enterPort_number?: (ctx: Port_numberContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.port_number`.
	 * @param ctx the parse tree
	 */
	exitPort_number?: (ctx: Port_numberContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.host`.
	 * @param ctx the parse tree
	 */
	enterHost?: (ctx: HostContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.host`.
	 * @param ctx the parse tree
	 */
	exitHost?: (ctx: HostContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.date_correlation_optimization_option`.
	 * @param ctx the parse tree
	 */
	enterDate_correlation_optimization_option?: (ctx: Date_correlation_optimization_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.date_correlation_optimization_option`.
	 * @param ctx the parse tree
	 */
	exitDate_correlation_optimization_option?: (ctx: Date_correlation_optimization_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.db_encryption_option`.
	 * @param ctx the parse tree
	 */
	enterDb_encryption_option?: (ctx: Db_encryption_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.db_encryption_option`.
	 * @param ctx the parse tree
	 */
	exitDb_encryption_option?: (ctx: Db_encryption_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.db_state_option`.
	 * @param ctx the parse tree
	 */
	enterDb_state_option?: (ctx: Db_state_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.db_state_option`.
	 * @param ctx the parse tree
	 */
	exitDb_state_option?: (ctx: Db_state_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.db_update_option`.
	 * @param ctx the parse tree
	 */
	enterDb_update_option?: (ctx: Db_update_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.db_update_option`.
	 * @param ctx the parse tree
	 */
	exitDb_update_option?: (ctx: Db_update_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.db_user_access_option`.
	 * @param ctx the parse tree
	 */
	enterDb_user_access_option?: (ctx: Db_user_access_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.db_user_access_option`.
	 * @param ctx the parse tree
	 */
	exitDb_user_access_option?: (ctx: Db_user_access_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.delayed_durability_option`.
	 * @param ctx the parse tree
	 */
	enterDelayed_durability_option?: (ctx: Delayed_durability_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.delayed_durability_option`.
	 * @param ctx the parse tree
	 */
	exitDelayed_durability_option?: (ctx: Delayed_durability_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.external_access_option`.
	 * @param ctx the parse tree
	 */
	enterExternal_access_option?: (ctx: External_access_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.external_access_option`.
	 * @param ctx the parse tree
	 */
	exitExternal_access_option?: (ctx: External_access_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.hadr_options`.
	 * @param ctx the parse tree
	 */
	enterHadr_options?: (ctx: Hadr_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.hadr_options`.
	 * @param ctx the parse tree
	 */
	exitHadr_options?: (ctx: Hadr_optionsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.mixed_page_allocation_option`.
	 * @param ctx the parse tree
	 */
	enterMixed_page_allocation_option?: (ctx: Mixed_page_allocation_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.mixed_page_allocation_option`.
	 * @param ctx the parse tree
	 */
	exitMixed_page_allocation_option?: (ctx: Mixed_page_allocation_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.parameterization_option`.
	 * @param ctx the parse tree
	 */
	enterParameterization_option?: (ctx: Parameterization_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.parameterization_option`.
	 * @param ctx the parse tree
	 */
	exitParameterization_option?: (ctx: Parameterization_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.recovery_option`.
	 * @param ctx the parse tree
	 */
	enterRecovery_option?: (ctx: Recovery_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.recovery_option`.
	 * @param ctx the parse tree
	 */
	exitRecovery_option?: (ctx: Recovery_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.service_broker_option`.
	 * @param ctx the parse tree
	 */
	enterService_broker_option?: (ctx: Service_broker_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.service_broker_option`.
	 * @param ctx the parse tree
	 */
	exitService_broker_option?: (ctx: Service_broker_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.snapshot_option`.
	 * @param ctx the parse tree
	 */
	enterSnapshot_option?: (ctx: Snapshot_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.snapshot_option`.
	 * @param ctx the parse tree
	 */
	exitSnapshot_option?: (ctx: Snapshot_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.sql_option`.
	 * @param ctx the parse tree
	 */
	enterSql_option?: (ctx: Sql_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.sql_option`.
	 * @param ctx the parse tree
	 */
	exitSql_option?: (ctx: Sql_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.target_recovery_time_option`.
	 * @param ctx the parse tree
	 */
	enterTarget_recovery_time_option?: (ctx: Target_recovery_time_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.target_recovery_time_option`.
	 * @param ctx the parse tree
	 */
	exitTarget_recovery_time_option?: (ctx: Target_recovery_time_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.termination`.
	 * @param ctx the parse tree
	 */
	enterTermination?: (ctx: TerminationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.termination`.
	 * @param ctx the parse tree
	 */
	exitTermination?: (ctx: TerminationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_index`.
	 * @param ctx the parse tree
	 */
	enterDrop_index?: (ctx: Drop_indexContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_index`.
	 * @param ctx the parse tree
	 */
	exitDrop_index?: (ctx: Drop_indexContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_relational_or_xml_or_spatial_index`.
	 * @param ctx the parse tree
	 */
	enterDrop_relational_or_xml_or_spatial_index?: (ctx: Drop_relational_or_xml_or_spatial_indexContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_relational_or_xml_or_spatial_index`.
	 * @param ctx the parse tree
	 */
	exitDrop_relational_or_xml_or_spatial_index?: (ctx: Drop_relational_or_xml_or_spatial_indexContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_backward_compatible_index`.
	 * @param ctx the parse tree
	 */
	enterDrop_backward_compatible_index?: (ctx: Drop_backward_compatible_indexContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_backward_compatible_index`.
	 * @param ctx the parse tree
	 */
	exitDrop_backward_compatible_index?: (ctx: Drop_backward_compatible_indexContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_procedure`.
	 * @param ctx the parse tree
	 */
	enterDrop_procedure?: (ctx: Drop_procedureContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_procedure`.
	 * @param ctx the parse tree
	 */
	exitDrop_procedure?: (ctx: Drop_procedureContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_trigger`.
	 * @param ctx the parse tree
	 */
	enterDrop_trigger?: (ctx: Drop_triggerContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_trigger`.
	 * @param ctx the parse tree
	 */
	exitDrop_trigger?: (ctx: Drop_triggerContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_dml_trigger`.
	 * @param ctx the parse tree
	 */
	enterDrop_dml_trigger?: (ctx: Drop_dml_triggerContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_dml_trigger`.
	 * @param ctx the parse tree
	 */
	exitDrop_dml_trigger?: (ctx: Drop_dml_triggerContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_ddl_trigger`.
	 * @param ctx the parse tree
	 */
	enterDrop_ddl_trigger?: (ctx: Drop_ddl_triggerContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_ddl_trigger`.
	 * @param ctx the parse tree
	 */
	exitDrop_ddl_trigger?: (ctx: Drop_ddl_triggerContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_function`.
	 * @param ctx the parse tree
	 */
	enterDrop_function?: (ctx: Drop_functionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_function`.
	 * @param ctx the parse tree
	 */
	exitDrop_function?: (ctx: Drop_functionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_statistics`.
	 * @param ctx the parse tree
	 */
	enterDrop_statistics?: (ctx: Drop_statisticsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_statistics`.
	 * @param ctx the parse tree
	 */
	exitDrop_statistics?: (ctx: Drop_statisticsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_table`.
	 * @param ctx the parse tree
	 */
	enterDrop_table?: (ctx: Drop_tableContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_table`.
	 * @param ctx the parse tree
	 */
	exitDrop_table?: (ctx: Drop_tableContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_view`.
	 * @param ctx the parse tree
	 */
	enterDrop_view?: (ctx: Drop_viewContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_view`.
	 * @param ctx the parse tree
	 */
	exitDrop_view?: (ctx: Drop_viewContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_type`.
	 * @param ctx the parse tree
	 */
	enterCreate_type?: (ctx: Create_typeContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_type`.
	 * @param ctx the parse tree
	 */
	exitCreate_type?: (ctx: Create_typeContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.drop_type`.
	 * @param ctx the parse tree
	 */
	enterDrop_type?: (ctx: Drop_typeContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.drop_type`.
	 * @param ctx the parse tree
	 */
	exitDrop_type?: (ctx: Drop_typeContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.rowset_function_limited`.
	 * @param ctx the parse tree
	 */
	enterRowset_function_limited?: (ctx: Rowset_function_limitedContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.rowset_function_limited`.
	 * @param ctx the parse tree
	 */
	exitRowset_function_limited?: (ctx: Rowset_function_limitedContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.openquery`.
	 * @param ctx the parse tree
	 */
	enterOpenquery?: (ctx: OpenqueryContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.openquery`.
	 * @param ctx the parse tree
	 */
	exitOpenquery?: (ctx: OpenqueryContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.opendatasource`.
	 * @param ctx the parse tree
	 */
	enterOpendatasource?: (ctx: OpendatasourceContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.opendatasource`.
	 * @param ctx the parse tree
	 */
	exitOpendatasource?: (ctx: OpendatasourceContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.declare_statement`.
	 * @param ctx the parse tree
	 */
	enterDeclare_statement?: (ctx: Declare_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.declare_statement`.
	 * @param ctx the parse tree
	 */
	exitDeclare_statement?: (ctx: Declare_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.xml_declaration`.
	 * @param ctx the parse tree
	 */
	enterXml_declaration?: (ctx: Xml_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.xml_declaration`.
	 * @param ctx the parse tree
	 */
	exitXml_declaration?: (ctx: Xml_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.cursor_statement`.
	 * @param ctx the parse tree
	 */
	enterCursor_statement?: (ctx: Cursor_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.cursor_statement`.
	 * @param ctx the parse tree
	 */
	exitCursor_statement?: (ctx: Cursor_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.backup_database`.
	 * @param ctx the parse tree
	 */
	enterBackup_database?: (ctx: Backup_databaseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.backup_database`.
	 * @param ctx the parse tree
	 */
	exitBackup_database?: (ctx: Backup_databaseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.backup_log`.
	 * @param ctx the parse tree
	 */
	enterBackup_log?: (ctx: Backup_logContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.backup_log`.
	 * @param ctx the parse tree
	 */
	exitBackup_log?: (ctx: Backup_logContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.backup_certificate`.
	 * @param ctx the parse tree
	 */
	enterBackup_certificate?: (ctx: Backup_certificateContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.backup_certificate`.
	 * @param ctx the parse tree
	 */
	exitBackup_certificate?: (ctx: Backup_certificateContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.backup_master_key`.
	 * @param ctx the parse tree
	 */
	enterBackup_master_key?: (ctx: Backup_master_keyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.backup_master_key`.
	 * @param ctx the parse tree
	 */
	exitBackup_master_key?: (ctx: Backup_master_keyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.backup_service_master_key`.
	 * @param ctx the parse tree
	 */
	enterBackup_service_master_key?: (ctx: Backup_service_master_keyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.backup_service_master_key`.
	 * @param ctx the parse tree
	 */
	exitBackup_service_master_key?: (ctx: Backup_service_master_keyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.kill_statement`.
	 * @param ctx the parse tree
	 */
	enterKill_statement?: (ctx: Kill_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.kill_statement`.
	 * @param ctx the parse tree
	 */
	exitKill_statement?: (ctx: Kill_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.kill_process`.
	 * @param ctx the parse tree
	 */
	enterKill_process?: (ctx: Kill_processContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.kill_process`.
	 * @param ctx the parse tree
	 */
	exitKill_process?: (ctx: Kill_processContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.kill_query_notification`.
	 * @param ctx the parse tree
	 */
	enterKill_query_notification?: (ctx: Kill_query_notificationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.kill_query_notification`.
	 * @param ctx the parse tree
	 */
	exitKill_query_notification?: (ctx: Kill_query_notificationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.kill_stats_job`.
	 * @param ctx the parse tree
	 */
	enterKill_stats_job?: (ctx: Kill_stats_jobContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.kill_stats_job`.
	 * @param ctx the parse tree
	 */
	exitKill_stats_job?: (ctx: Kill_stats_jobContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.execute_statement`.
	 * @param ctx the parse tree
	 */
	enterExecute_statement?: (ctx: Execute_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.execute_statement`.
	 * @param ctx the parse tree
	 */
	exitExecute_statement?: (ctx: Execute_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.execute_body_batch`.
	 * @param ctx the parse tree
	 */
	enterExecute_body_batch?: (ctx: Execute_body_batchContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.execute_body_batch`.
	 * @param ctx the parse tree
	 */
	exitExecute_body_batch?: (ctx: Execute_body_batchContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.execute_body`.
	 * @param ctx the parse tree
	 */
	enterExecute_body?: (ctx: Execute_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.execute_body`.
	 * @param ctx the parse tree
	 */
	exitExecute_body?: (ctx: Execute_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.execute_statement_arg`.
	 * @param ctx the parse tree
	 */
	enterExecute_statement_arg?: (ctx: Execute_statement_argContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.execute_statement_arg`.
	 * @param ctx the parse tree
	 */
	exitExecute_statement_arg?: (ctx: Execute_statement_argContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.execute_statement_arg_named`.
	 * @param ctx the parse tree
	 */
	enterExecute_statement_arg_named?: (ctx: Execute_statement_arg_namedContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.execute_statement_arg_named`.
	 * @param ctx the parse tree
	 */
	exitExecute_statement_arg_named?: (ctx: Execute_statement_arg_namedContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.execute_statement_arg_unnamed`.
	 * @param ctx the parse tree
	 */
	enterExecute_statement_arg_unnamed?: (ctx: Execute_statement_arg_unnamedContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.execute_statement_arg_unnamed`.
	 * @param ctx the parse tree
	 */
	exitExecute_statement_arg_unnamed?: (ctx: Execute_statement_arg_unnamedContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.execute_parameter`.
	 * @param ctx the parse tree
	 */
	enterExecute_parameter?: (ctx: Execute_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.execute_parameter`.
	 * @param ctx the parse tree
	 */
	exitExecute_parameter?: (ctx: Execute_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.execute_var_string`.
	 * @param ctx the parse tree
	 */
	enterExecute_var_string?: (ctx: Execute_var_stringContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.execute_var_string`.
	 * @param ctx the parse tree
	 */
	exitExecute_var_string?: (ctx: Execute_var_stringContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.security_statement`.
	 * @param ctx the parse tree
	 */
	enterSecurity_statement?: (ctx: Security_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.security_statement`.
	 * @param ctx the parse tree
	 */
	exitSecurity_statement?: (ctx: Security_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.principal_id`.
	 * @param ctx the parse tree
	 */
	enterPrincipal_id?: (ctx: Principal_idContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.principal_id`.
	 * @param ctx the parse tree
	 */
	exitPrincipal_id?: (ctx: Principal_idContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_certificate`.
	 * @param ctx the parse tree
	 */
	enterCreate_certificate?: (ctx: Create_certificateContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_certificate`.
	 * @param ctx the parse tree
	 */
	exitCreate_certificate?: (ctx: Create_certificateContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.existing_keys`.
	 * @param ctx the parse tree
	 */
	enterExisting_keys?: (ctx: Existing_keysContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.existing_keys`.
	 * @param ctx the parse tree
	 */
	exitExisting_keys?: (ctx: Existing_keysContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.private_key_options`.
	 * @param ctx the parse tree
	 */
	enterPrivate_key_options?: (ctx: Private_key_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.private_key_options`.
	 * @param ctx the parse tree
	 */
	exitPrivate_key_options?: (ctx: Private_key_optionsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.generate_new_keys`.
	 * @param ctx the parse tree
	 */
	enterGenerate_new_keys?: (ctx: Generate_new_keysContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.generate_new_keys`.
	 * @param ctx the parse tree
	 */
	exitGenerate_new_keys?: (ctx: Generate_new_keysContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.date_options`.
	 * @param ctx the parse tree
	 */
	enterDate_options?: (ctx: Date_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.date_options`.
	 * @param ctx the parse tree
	 */
	exitDate_options?: (ctx: Date_optionsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.open_key`.
	 * @param ctx the parse tree
	 */
	enterOpen_key?: (ctx: Open_keyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.open_key`.
	 * @param ctx the parse tree
	 */
	exitOpen_key?: (ctx: Open_keyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.close_key`.
	 * @param ctx the parse tree
	 */
	enterClose_key?: (ctx: Close_keyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.close_key`.
	 * @param ctx the parse tree
	 */
	exitClose_key?: (ctx: Close_keyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_key`.
	 * @param ctx the parse tree
	 */
	enterCreate_key?: (ctx: Create_keyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_key`.
	 * @param ctx the parse tree
	 */
	exitCreate_key?: (ctx: Create_keyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.key_options`.
	 * @param ctx the parse tree
	 */
	enterKey_options?: (ctx: Key_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.key_options`.
	 * @param ctx the parse tree
	 */
	exitKey_options?: (ctx: Key_optionsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.algorithm`.
	 * @param ctx the parse tree
	 */
	enterAlgorithm?: (ctx: AlgorithmContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.algorithm`.
	 * @param ctx the parse tree
	 */
	exitAlgorithm?: (ctx: AlgorithmContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.encryption_mechanism`.
	 * @param ctx the parse tree
	 */
	enterEncryption_mechanism?: (ctx: Encryption_mechanismContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.encryption_mechanism`.
	 * @param ctx the parse tree
	 */
	exitEncryption_mechanism?: (ctx: Encryption_mechanismContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.decryption_mechanism`.
	 * @param ctx the parse tree
	 */
	enterDecryption_mechanism?: (ctx: Decryption_mechanismContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.decryption_mechanism`.
	 * @param ctx the parse tree
	 */
	exitDecryption_mechanism?: (ctx: Decryption_mechanismContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.grant_permission`.
	 * @param ctx the parse tree
	 */
	enterGrant_permission?: (ctx: Grant_permissionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.grant_permission`.
	 * @param ctx the parse tree
	 */
	exitGrant_permission?: (ctx: Grant_permissionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.set_statement`.
	 * @param ctx the parse tree
	 */
	enterSet_statement?: (ctx: Set_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.set_statement`.
	 * @param ctx the parse tree
	 */
	exitSet_statement?: (ctx: Set_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.transaction_statement`.
	 * @param ctx the parse tree
	 */
	enterTransaction_statement?: (ctx: Transaction_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.transaction_statement`.
	 * @param ctx the parse tree
	 */
	exitTransaction_statement?: (ctx: Transaction_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.go_batch_statement`.
	 * @param ctx the parse tree
	 */
	enterGo_batch_statement?: (ctx: Go_batch_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.go_batch_statement`.
	 * @param ctx the parse tree
	 */
	exitGo_batch_statement?: (ctx: Go_batch_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.go_statement`.
	 * @param ctx the parse tree
	 */
	enterGo_statement?: (ctx: Go_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.go_statement`.
	 * @param ctx the parse tree
	 */
	exitGo_statement?: (ctx: Go_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.use_statement`.
	 * @param ctx the parse tree
	 */
	enterUse_statement?: (ctx: Use_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.use_statement`.
	 * @param ctx the parse tree
	 */
	exitUse_statement?: (ctx: Use_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.setuser_statement`.
	 * @param ctx the parse tree
	 */
	enterSetuser_statement?: (ctx: Setuser_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.setuser_statement`.
	 * @param ctx the parse tree
	 */
	exitSetuser_statement?: (ctx: Setuser_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.reconfigure_statement`.
	 * @param ctx the parse tree
	 */
	enterReconfigure_statement?: (ctx: Reconfigure_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.reconfigure_statement`.
	 * @param ctx the parse tree
	 */
	exitReconfigure_statement?: (ctx: Reconfigure_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.shutdown_statement`.
	 * @param ctx the parse tree
	 */
	enterShutdown_statement?: (ctx: Shutdown_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.shutdown_statement`.
	 * @param ctx the parse tree
	 */
	exitShutdown_statement?: (ctx: Shutdown_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.dbcc_special`.
	 * @param ctx the parse tree
	 */
	enterDbcc_special?: (ctx: Dbcc_specialContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.dbcc_special`.
	 * @param ctx the parse tree
	 */
	exitDbcc_special?: (ctx: Dbcc_specialContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.dbcc_clause`.
	 * @param ctx the parse tree
	 */
	enterDbcc_clause?: (ctx: Dbcc_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.dbcc_clause`.
	 * @param ctx the parse tree
	 */
	exitDbcc_clause?: (ctx: Dbcc_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.dbcc_command`.
	 * @param ctx the parse tree
	 */
	enterDbcc_command?: (ctx: Dbcc_commandContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.dbcc_command`.
	 * @param ctx the parse tree
	 */
	exitDbcc_command?: (ctx: Dbcc_commandContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.dbcc_options`.
	 * @param ctx the parse tree
	 */
	enterDbcc_options?: (ctx: Dbcc_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.dbcc_options`.
	 * @param ctx the parse tree
	 */
	exitDbcc_options?: (ctx: Dbcc_optionsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.execute_clause`.
	 * @param ctx the parse tree
	 */
	enterExecute_clause?: (ctx: Execute_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.execute_clause`.
	 * @param ctx the parse tree
	 */
	exitExecute_clause?: (ctx: Execute_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.declare_local`.
	 * @param ctx the parse tree
	 */
	enterDeclare_local?: (ctx: Declare_localContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.declare_local`.
	 * @param ctx the parse tree
	 */
	exitDeclare_local?: (ctx: Declare_localContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_type_definition`.
	 * @param ctx the parse tree
	 */
	enterTable_type_definition?: (ctx: Table_type_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_type_definition`.
	 * @param ctx the parse tree
	 */
	exitTable_type_definition?: (ctx: Table_type_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_type_indices`.
	 * @param ctx the parse tree
	 */
	enterTable_type_indices?: (ctx: Table_type_indicesContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_type_indices`.
	 * @param ctx the parse tree
	 */
	exitTable_type_indices?: (ctx: Table_type_indicesContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.xml_type_definition`.
	 * @param ctx the parse tree
	 */
	enterXml_type_definition?: (ctx: Xml_type_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.xml_type_definition`.
	 * @param ctx the parse tree
	 */
	exitXml_type_definition?: (ctx: Xml_type_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.xml_schema_collection`.
	 * @param ctx the parse tree
	 */
	enterXml_schema_collection?: (ctx: Xml_schema_collectionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.xml_schema_collection`.
	 * @param ctx the parse tree
	 */
	exitXml_schema_collection?: (ctx: Xml_schema_collectionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.column_def_table_constraints`.
	 * @param ctx the parse tree
	 */
	enterColumn_def_table_constraints?: (ctx: Column_def_table_constraintsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.column_def_table_constraints`.
	 * @param ctx the parse tree
	 */
	exitColumn_def_table_constraints?: (ctx: Column_def_table_constraintsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.column_def_table_constraint`.
	 * @param ctx the parse tree
	 */
	enterColumn_def_table_constraint?: (ctx: Column_def_table_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.column_def_table_constraint`.
	 * @param ctx the parse tree
	 */
	exitColumn_def_table_constraint?: (ctx: Column_def_table_constraintContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.column_definition`.
	 * @param ctx the parse tree
	 */
	enterColumn_definition?: (ctx: Column_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.column_definition`.
	 * @param ctx the parse tree
	 */
	exitColumn_definition?: (ctx: Column_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.materialized_column_definition`.
	 * @param ctx the parse tree
	 */
	enterMaterialized_column_definition?: (ctx: Materialized_column_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.materialized_column_definition`.
	 * @param ctx the parse tree
	 */
	exitMaterialized_column_definition?: (ctx: Materialized_column_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.column_constraint`.
	 * @param ctx the parse tree
	 */
	enterColumn_constraint?: (ctx: Column_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.column_constraint`.
	 * @param ctx the parse tree
	 */
	exitColumn_constraint?: (ctx: Column_constraintContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_constraint`.
	 * @param ctx the parse tree
	 */
	enterTable_constraint?: (ctx: Table_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_constraint`.
	 * @param ctx the parse tree
	 */
	exitTable_constraint?: (ctx: Table_constraintContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.on_delete`.
	 * @param ctx the parse tree
	 */
	enterOn_delete?: (ctx: On_deleteContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.on_delete`.
	 * @param ctx the parse tree
	 */
	exitOn_delete?: (ctx: On_deleteContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.on_update`.
	 * @param ctx the parse tree
	 */
	enterOn_update?: (ctx: On_updateContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.on_update`.
	 * @param ctx the parse tree
	 */
	exitOn_update?: (ctx: On_updateContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.index_options`.
	 * @param ctx the parse tree
	 */
	enterIndex_options?: (ctx: Index_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.index_options`.
	 * @param ctx the parse tree
	 */
	exitIndex_options?: (ctx: Index_optionsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.index_option`.
	 * @param ctx the parse tree
	 */
	enterIndex_option?: (ctx: Index_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.index_option`.
	 * @param ctx the parse tree
	 */
	exitIndex_option?: (ctx: Index_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.declare_cursor`.
	 * @param ctx the parse tree
	 */
	enterDeclare_cursor?: (ctx: Declare_cursorContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.declare_cursor`.
	 * @param ctx the parse tree
	 */
	exitDeclare_cursor?: (ctx: Declare_cursorContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.declare_set_cursor_common`.
	 * @param ctx the parse tree
	 */
	enterDeclare_set_cursor_common?: (ctx: Declare_set_cursor_commonContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.declare_set_cursor_common`.
	 * @param ctx the parse tree
	 */
	exitDeclare_set_cursor_common?: (ctx: Declare_set_cursor_commonContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.declare_set_cursor_common_partial`.
	 * @param ctx the parse tree
	 */
	enterDeclare_set_cursor_common_partial?: (ctx: Declare_set_cursor_common_partialContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.declare_set_cursor_common_partial`.
	 * @param ctx the parse tree
	 */
	exitDeclare_set_cursor_common_partial?: (ctx: Declare_set_cursor_common_partialContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.fetch_cursor`.
	 * @param ctx the parse tree
	 */
	enterFetch_cursor?: (ctx: Fetch_cursorContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.fetch_cursor`.
	 * @param ctx the parse tree
	 */
	exitFetch_cursor?: (ctx: Fetch_cursorContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.set_special`.
	 * @param ctx the parse tree
	 */
	enterSet_special?: (ctx: Set_specialContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.set_special`.
	 * @param ctx the parse tree
	 */
	exitSet_special?: (ctx: Set_specialContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.constant_LOCAL_ID`.
	 * @param ctx the parse tree
	 */
	enterConstant_LOCAL_ID?: (ctx: Constant_LOCAL_IDContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.constant_LOCAL_ID`.
	 * @param ctx the parse tree
	 */
	exitConstant_LOCAL_ID?: (ctx: Constant_LOCAL_IDContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.time_zone`.
	 * @param ctx the parse tree
	 */
	enterTime_zone?: (ctx: Time_zoneContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.time_zone`.
	 * @param ctx the parse tree
	 */
	exitTime_zone?: (ctx: Time_zoneContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.primitive_expression`.
	 * @param ctx the parse tree
	 */
	enterPrimitive_expression?: (ctx: Primitive_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.primitive_expression`.
	 * @param ctx the parse tree
	 */
	exitPrimitive_expression?: (ctx: Primitive_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.case_expression`.
	 * @param ctx the parse tree
	 */
	enterCase_expression?: (ctx: Case_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.case_expression`.
	 * @param ctx the parse tree
	 */
	exitCase_expression?: (ctx: Case_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.unary_operator_expression`.
	 * @param ctx the parse tree
	 */
	enterUnary_operator_expression?: (ctx: Unary_operator_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.unary_operator_expression`.
	 * @param ctx the parse tree
	 */
	exitUnary_operator_expression?: (ctx: Unary_operator_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.bracket_expression`.
	 * @param ctx the parse tree
	 */
	enterBracket_expression?: (ctx: Bracket_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.bracket_expression`.
	 * @param ctx the parse tree
	 */
	exitBracket_expression?: (ctx: Bracket_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.constant_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_expression?: (ctx: Constant_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.constant_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_expression?: (ctx: Constant_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.subquery`.
	 * @param ctx the parse tree
	 */
	enterSubquery?: (ctx: SubqueryContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.subquery`.
	 * @param ctx the parse tree
	 */
	exitSubquery?: (ctx: SubqueryContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.with_expression`.
	 * @param ctx the parse tree
	 */
	enterWith_expression?: (ctx: With_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.with_expression`.
	 * @param ctx the parse tree
	 */
	exitWith_expression?: (ctx: With_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.common_table_expression`.
	 * @param ctx the parse tree
	 */
	enterCommon_table_expression?: (ctx: Common_table_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.common_table_expression`.
	 * @param ctx the parse tree
	 */
	exitCommon_table_expression?: (ctx: Common_table_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.update_elem`.
	 * @param ctx the parse tree
	 */
	enterUpdate_elem?: (ctx: Update_elemContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.update_elem`.
	 * @param ctx the parse tree
	 */
	exitUpdate_elem?: (ctx: Update_elemContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.update_elem_merge`.
	 * @param ctx the parse tree
	 */
	enterUpdate_elem_merge?: (ctx: Update_elem_mergeContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.update_elem_merge`.
	 * @param ctx the parse tree
	 */
	exitUpdate_elem_merge?: (ctx: Update_elem_mergeContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.search_condition`.
	 * @param ctx the parse tree
	 */
	enterSearch_condition?: (ctx: Search_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.search_condition`.
	 * @param ctx the parse tree
	 */
	exitSearch_condition?: (ctx: Search_conditionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.predicate_br`.
	 * @param ctx the parse tree
	 */
	enterPredicate_br?: (ctx: Predicate_brContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.predicate_br`.
	 * @param ctx the parse tree
	 */
	exitPredicate_br?: (ctx: Predicate_brContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.query_expression`.
	 * @param ctx the parse tree
	 */
	enterQuery_expression?: (ctx: Query_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.query_expression`.
	 * @param ctx the parse tree
	 */
	exitQuery_expression?: (ctx: Query_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.sql_union`.
	 * @param ctx the parse tree
	 */
	enterSql_union?: (ctx: Sql_unionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.sql_union`.
	 * @param ctx the parse tree
	 */
	exitSql_union?: (ctx: Sql_unionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.query_specification`.
	 * @param ctx the parse tree
	 */
	enterQuery_specification?: (ctx: Query_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.query_specification`.
	 * @param ctx the parse tree
	 */
	exitQuery_specification?: (ctx: Query_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.top_clause`.
	 * @param ctx the parse tree
	 */
	enterTop_clause?: (ctx: Top_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.top_clause`.
	 * @param ctx the parse tree
	 */
	exitTop_clause?: (ctx: Top_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.top_percent`.
	 * @param ctx the parse tree
	 */
	enterTop_percent?: (ctx: Top_percentContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.top_percent`.
	 * @param ctx the parse tree
	 */
	exitTop_percent?: (ctx: Top_percentContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.top_count`.
	 * @param ctx the parse tree
	 */
	enterTop_count?: (ctx: Top_countContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.top_count`.
	 * @param ctx the parse tree
	 */
	exitTop_count?: (ctx: Top_countContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.order_by_clause`.
	 * @param ctx the parse tree
	 */
	enterOrder_by_clause?: (ctx: Order_by_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.order_by_clause`.
	 * @param ctx the parse tree
	 */
	exitOrder_by_clause?: (ctx: Order_by_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.for_clause`.
	 * @param ctx the parse tree
	 */
	enterFor_clause?: (ctx: For_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.for_clause`.
	 * @param ctx the parse tree
	 */
	exitFor_clause?: (ctx: For_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.xml_common_directives`.
	 * @param ctx the parse tree
	 */
	enterXml_common_directives?: (ctx: Xml_common_directivesContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.xml_common_directives`.
	 * @param ctx the parse tree
	 */
	exitXml_common_directives?: (ctx: Xml_common_directivesContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.order_by_expression`.
	 * @param ctx the parse tree
	 */
	enterOrder_by_expression?: (ctx: Order_by_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.order_by_expression`.
	 * @param ctx the parse tree
	 */
	exitOrder_by_expression?: (ctx: Order_by_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.group_by_item`.
	 * @param ctx the parse tree
	 */
	enterGroup_by_item?: (ctx: Group_by_itemContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.group_by_item`.
	 * @param ctx the parse tree
	 */
	exitGroup_by_item?: (ctx: Group_by_itemContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.option_clause`.
	 * @param ctx the parse tree
	 */
	enterOption_clause?: (ctx: Option_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.option_clause`.
	 * @param ctx the parse tree
	 */
	exitOption_clause?: (ctx: Option_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.option`.
	 * @param ctx the parse tree
	 */
	enterOption?: (ctx: OptionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.option`.
	 * @param ctx the parse tree
	 */
	exitOption?: (ctx: OptionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.optimize_for_arg`.
	 * @param ctx the parse tree
	 */
	enterOptimize_for_arg?: (ctx: Optimize_for_argContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.optimize_for_arg`.
	 * @param ctx the parse tree
	 */
	exitOptimize_for_arg?: (ctx: Optimize_for_argContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.select_list`.
	 * @param ctx the parse tree
	 */
	enterSelect_list?: (ctx: Select_listContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.select_list`.
	 * @param ctx the parse tree
	 */
	exitSelect_list?: (ctx: Select_listContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.udt_method_arguments`.
	 * @param ctx the parse tree
	 */
	enterUdt_method_arguments?: (ctx: Udt_method_argumentsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.udt_method_arguments`.
	 * @param ctx the parse tree
	 */
	exitUdt_method_arguments?: (ctx: Udt_method_argumentsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.asterisk`.
	 * @param ctx the parse tree
	 */
	enterAsterisk?: (ctx: AsteriskContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.asterisk`.
	 * @param ctx the parse tree
	 */
	exitAsterisk?: (ctx: AsteriskContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.column_elem`.
	 * @param ctx the parse tree
	 */
	enterColumn_elem?: (ctx: Column_elemContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.column_elem`.
	 * @param ctx the parse tree
	 */
	exitColumn_elem?: (ctx: Column_elemContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.udt_elem`.
	 * @param ctx the parse tree
	 */
	enterUdt_elem?: (ctx: Udt_elemContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.udt_elem`.
	 * @param ctx the parse tree
	 */
	exitUdt_elem?: (ctx: Udt_elemContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.expression_elem`.
	 * @param ctx the parse tree
	 */
	enterExpression_elem?: (ctx: Expression_elemContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.expression_elem`.
	 * @param ctx the parse tree
	 */
	exitExpression_elem?: (ctx: Expression_elemContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.select_list_elem`.
	 * @param ctx the parse tree
	 */
	enterSelect_list_elem?: (ctx: Select_list_elemContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.select_list_elem`.
	 * @param ctx the parse tree
	 */
	exitSelect_list_elem?: (ctx: Select_list_elemContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_sources`.
	 * @param ctx the parse tree
	 */
	enterTable_sources?: (ctx: Table_sourcesContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_sources`.
	 * @param ctx the parse tree
	 */
	exitTable_sources?: (ctx: Table_sourcesContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_source`.
	 * @param ctx the parse tree
	 */
	enterTable_source?: (ctx: Table_sourceContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_source`.
	 * @param ctx the parse tree
	 */
	exitTable_source?: (ctx: Table_sourceContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_source_item_joined`.
	 * @param ctx the parse tree
	 */
	enterTable_source_item_joined?: (ctx: Table_source_item_joinedContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_source_item_joined`.
	 * @param ctx the parse tree
	 */
	exitTable_source_item_joined?: (ctx: Table_source_item_joinedContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_source_item`.
	 * @param ctx the parse tree
	 */
	enterTable_source_item?: (ctx: Table_source_itemContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_source_item`.
	 * @param ctx the parse tree
	 */
	exitTable_source_item?: (ctx: Table_source_itemContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.open_xml`.
	 * @param ctx the parse tree
	 */
	enterOpen_xml?: (ctx: Open_xmlContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.open_xml`.
	 * @param ctx the parse tree
	 */
	exitOpen_xml?: (ctx: Open_xmlContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.open_json`.
	 * @param ctx the parse tree
	 */
	enterOpen_json?: (ctx: Open_jsonContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.open_json`.
	 * @param ctx the parse tree
	 */
	exitOpen_json?: (ctx: Open_jsonContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.json_declaration`.
	 * @param ctx the parse tree
	 */
	enterJson_declaration?: (ctx: Json_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.json_declaration`.
	 * @param ctx the parse tree
	 */
	exitJson_declaration?: (ctx: Json_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.json_column_declaration`.
	 * @param ctx the parse tree
	 */
	enterJson_column_declaration?: (ctx: Json_column_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.json_column_declaration`.
	 * @param ctx the parse tree
	 */
	exitJson_column_declaration?: (ctx: Json_column_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.schema_declaration`.
	 * @param ctx the parse tree
	 */
	enterSchema_declaration?: (ctx: Schema_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.schema_declaration`.
	 * @param ctx the parse tree
	 */
	exitSchema_declaration?: (ctx: Schema_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.column_declaration`.
	 * @param ctx the parse tree
	 */
	enterColumn_declaration?: (ctx: Column_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.column_declaration`.
	 * @param ctx the parse tree
	 */
	exitColumn_declaration?: (ctx: Column_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.change_table`.
	 * @param ctx the parse tree
	 */
	enterChange_table?: (ctx: Change_tableContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.change_table`.
	 * @param ctx the parse tree
	 */
	exitChange_table?: (ctx: Change_tableContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.change_table_changes`.
	 * @param ctx the parse tree
	 */
	enterChange_table_changes?: (ctx: Change_table_changesContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.change_table_changes`.
	 * @param ctx the parse tree
	 */
	exitChange_table_changes?: (ctx: Change_table_changesContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.change_table_version`.
	 * @param ctx the parse tree
	 */
	enterChange_table_version?: (ctx: Change_table_versionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.change_table_version`.
	 * @param ctx the parse tree
	 */
	exitChange_table_version?: (ctx: Change_table_versionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.join_part`.
	 * @param ctx the parse tree
	 */
	enterJoin_part?: (ctx: Join_partContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.join_part`.
	 * @param ctx the parse tree
	 */
	exitJoin_part?: (ctx: Join_partContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.join_on`.
	 * @param ctx the parse tree
	 */
	enterJoin_on?: (ctx: Join_onContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.join_on`.
	 * @param ctx the parse tree
	 */
	exitJoin_on?: (ctx: Join_onContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.cross_join`.
	 * @param ctx the parse tree
	 */
	enterCross_join?: (ctx: Cross_joinContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.cross_join`.
	 * @param ctx the parse tree
	 */
	exitCross_join?: (ctx: Cross_joinContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.apply`.
	 * @param ctx the parse tree
	 */
	enterApply?: (ctx: ApplyContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.apply`.
	 * @param ctx the parse tree
	 */
	exitApply?: (ctx: ApplyContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.pivot`.
	 * @param ctx the parse tree
	 */
	enterPivot?: (ctx: PivotContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.pivot`.
	 * @param ctx the parse tree
	 */
	exitPivot?: (ctx: PivotContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.unpivot`.
	 * @param ctx the parse tree
	 */
	enterUnpivot?: (ctx: UnpivotContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.unpivot`.
	 * @param ctx the parse tree
	 */
	exitUnpivot?: (ctx: UnpivotContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.pivot_clause`.
	 * @param ctx the parse tree
	 */
	enterPivot_clause?: (ctx: Pivot_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.pivot_clause`.
	 * @param ctx the parse tree
	 */
	exitPivot_clause?: (ctx: Pivot_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.unpivot_clause`.
	 * @param ctx the parse tree
	 */
	enterUnpivot_clause?: (ctx: Unpivot_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.unpivot_clause`.
	 * @param ctx the parse tree
	 */
	exitUnpivot_clause?: (ctx: Unpivot_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.full_column_name_list`.
	 * @param ctx the parse tree
	 */
	enterFull_column_name_list?: (ctx: Full_column_name_listContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.full_column_name_list`.
	 * @param ctx the parse tree
	 */
	exitFull_column_name_list?: (ctx: Full_column_name_listContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_name_with_hint`.
	 * @param ctx the parse tree
	 */
	enterTable_name_with_hint?: (ctx: Table_name_with_hintContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_name_with_hint`.
	 * @param ctx the parse tree
	 */
	exitTable_name_with_hint?: (ctx: Table_name_with_hintContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.rowset_function`.
	 * @param ctx the parse tree
	 */
	enterRowset_function?: (ctx: Rowset_functionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.rowset_function`.
	 * @param ctx the parse tree
	 */
	exitRowset_function?: (ctx: Rowset_functionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.bulk_option`.
	 * @param ctx the parse tree
	 */
	enterBulk_option?: (ctx: Bulk_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.bulk_option`.
	 * @param ctx the parse tree
	 */
	exitBulk_option?: (ctx: Bulk_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.derived_table`.
	 * @param ctx the parse tree
	 */
	enterDerived_table?: (ctx: Derived_tableContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.derived_table`.
	 * @param ctx the parse tree
	 */
	exitDerived_table?: (ctx: Derived_tableContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.freetext_function`.
	 * @param ctx the parse tree
	 */
	enterFreetext_function?: (ctx: Freetext_functionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.freetext_function`.
	 * @param ctx the parse tree
	 */
	exitFreetext_function?: (ctx: Freetext_functionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.freetext_predicate`.
	 * @param ctx the parse tree
	 */
	enterFreetext_predicate?: (ctx: Freetext_predicateContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.freetext_predicate`.
	 * @param ctx the parse tree
	 */
	exitFreetext_predicate?: (ctx: Freetext_predicateContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterBuild_in_functions?: (ctx: Build_in_functionsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitBuild_in_functions?: (ctx: Build_in_functionsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.xml_data_type_methods`.
	 * @param ctx the parse tree
	 */
	enterXml_data_type_methods?: (ctx: Xml_data_type_methodsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.xml_data_type_methods`.
	 * @param ctx the parse tree
	 */
	exitXml_data_type_methods?: (ctx: Xml_data_type_methodsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.value_method`.
	 * @param ctx the parse tree
	 */
	enterValue_method?: (ctx: Value_methodContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.value_method`.
	 * @param ctx the parse tree
	 */
	exitValue_method?: (ctx: Value_methodContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.value_call`.
	 * @param ctx the parse tree
	 */
	enterValue_call?: (ctx: Value_callContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.value_call`.
	 * @param ctx the parse tree
	 */
	exitValue_call?: (ctx: Value_callContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.query_method`.
	 * @param ctx the parse tree
	 */
	enterQuery_method?: (ctx: Query_methodContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.query_method`.
	 * @param ctx the parse tree
	 */
	exitQuery_method?: (ctx: Query_methodContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.query_call`.
	 * @param ctx the parse tree
	 */
	enterQuery_call?: (ctx: Query_callContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.query_call`.
	 * @param ctx the parse tree
	 */
	exitQuery_call?: (ctx: Query_callContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.exist_method`.
	 * @param ctx the parse tree
	 */
	enterExist_method?: (ctx: Exist_methodContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.exist_method`.
	 * @param ctx the parse tree
	 */
	exitExist_method?: (ctx: Exist_methodContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.exist_call`.
	 * @param ctx the parse tree
	 */
	enterExist_call?: (ctx: Exist_callContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.exist_call`.
	 * @param ctx the parse tree
	 */
	exitExist_call?: (ctx: Exist_callContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.modify_method`.
	 * @param ctx the parse tree
	 */
	enterModify_method?: (ctx: Modify_methodContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.modify_method`.
	 * @param ctx the parse tree
	 */
	exitModify_method?: (ctx: Modify_methodContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.modify_call`.
	 * @param ctx the parse tree
	 */
	enterModify_call?: (ctx: Modify_callContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.modify_call`.
	 * @param ctx the parse tree
	 */
	exitModify_call?: (ctx: Modify_callContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.nodes_method`.
	 * @param ctx the parse tree
	 */
	enterNodes_method?: (ctx: Nodes_methodContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.nodes_method`.
	 * @param ctx the parse tree
	 */
	exitNodes_method?: (ctx: Nodes_methodContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.switch_section`.
	 * @param ctx the parse tree
	 */
	enterSwitch_section?: (ctx: Switch_sectionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.switch_section`.
	 * @param ctx the parse tree
	 */
	exitSwitch_section?: (ctx: Switch_sectionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.switch_search_condition_section`.
	 * @param ctx the parse tree
	 */
	enterSwitch_search_condition_section?: (ctx: Switch_search_condition_sectionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.switch_search_condition_section`.
	 * @param ctx the parse tree
	 */
	exitSwitch_search_condition_section?: (ctx: Switch_search_condition_sectionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.as_column_alias`.
	 * @param ctx the parse tree
	 */
	enterAs_column_alias?: (ctx: As_column_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.as_column_alias`.
	 * @param ctx the parse tree
	 */
	exitAs_column_alias?: (ctx: As_column_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.as_table_alias`.
	 * @param ctx the parse tree
	 */
	enterAs_table_alias?: (ctx: As_table_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.as_table_alias`.
	 * @param ctx the parse tree
	 */
	exitAs_table_alias?: (ctx: As_table_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_alias`.
	 * @param ctx the parse tree
	 */
	enterTable_alias?: (ctx: Table_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_alias`.
	 * @param ctx the parse tree
	 */
	exitTable_alias?: (ctx: Table_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.with_table_hints`.
	 * @param ctx the parse tree
	 */
	enterWith_table_hints?: (ctx: With_table_hintsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.with_table_hints`.
	 * @param ctx the parse tree
	 */
	exitWith_table_hints?: (ctx: With_table_hintsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.insert_with_table_hints`.
	 * @param ctx the parse tree
	 */
	enterInsert_with_table_hints?: (ctx: Insert_with_table_hintsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.insert_with_table_hints`.
	 * @param ctx the parse tree
	 */
	exitInsert_with_table_hints?: (ctx: Insert_with_table_hintsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_hint`.
	 * @param ctx the parse tree
	 */
	enterTable_hint?: (ctx: Table_hintContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_hint`.
	 * @param ctx the parse tree
	 */
	exitTable_hint?: (ctx: Table_hintContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.index_value`.
	 * @param ctx the parse tree
	 */
	enterIndex_value?: (ctx: Index_valueContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.index_value`.
	 * @param ctx the parse tree
	 */
	exitIndex_value?: (ctx: Index_valueContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.column_alias_list`.
	 * @param ctx the parse tree
	 */
	enterColumn_alias_list?: (ctx: Column_alias_listContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.column_alias_list`.
	 * @param ctx the parse tree
	 */
	exitColumn_alias_list?: (ctx: Column_alias_listContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.column_alias`.
	 * @param ctx the parse tree
	 */
	enterColumn_alias?: (ctx: Column_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.column_alias`.
	 * @param ctx the parse tree
	 */
	exitColumn_alias?: (ctx: Column_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_value_constructor`.
	 * @param ctx the parse tree
	 */
	enterTable_value_constructor?: (ctx: Table_value_constructorContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_value_constructor`.
	 * @param ctx the parse tree
	 */
	exitTable_value_constructor?: (ctx: Table_value_constructorContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.expression_list`.
	 * @param ctx the parse tree
	 */
	enterExpression_list?: (ctx: Expression_listContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.expression_list`.
	 * @param ctx the parse tree
	 */
	exitExpression_list?: (ctx: Expression_listContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.ranking_windowed_function`.
	 * @param ctx the parse tree
	 */
	enterRanking_windowed_function?: (ctx: Ranking_windowed_functionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.ranking_windowed_function`.
	 * @param ctx the parse tree
	 */
	exitRanking_windowed_function?: (ctx: Ranking_windowed_functionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.aggregate_windowed_function`.
	 * @param ctx the parse tree
	 */
	enterAggregate_windowed_function?: (ctx: Aggregate_windowed_functionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.aggregate_windowed_function`.
	 * @param ctx the parse tree
	 */
	exitAggregate_windowed_function?: (ctx: Aggregate_windowed_functionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.analytic_windowed_function`.
	 * @param ctx the parse tree
	 */
	enterAnalytic_windowed_function?: (ctx: Analytic_windowed_functionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.analytic_windowed_function`.
	 * @param ctx the parse tree
	 */
	exitAnalytic_windowed_function?: (ctx: Analytic_windowed_functionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.all_distinct_expression`.
	 * @param ctx the parse tree
	 */
	enterAll_distinct_expression?: (ctx: All_distinct_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.all_distinct_expression`.
	 * @param ctx the parse tree
	 */
	exitAll_distinct_expression?: (ctx: All_distinct_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.over_clause`.
	 * @param ctx the parse tree
	 */
	enterOver_clause?: (ctx: Over_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.over_clause`.
	 * @param ctx the parse tree
	 */
	exitOver_clause?: (ctx: Over_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.row_or_range_clause`.
	 * @param ctx the parse tree
	 */
	enterRow_or_range_clause?: (ctx: Row_or_range_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.row_or_range_clause`.
	 * @param ctx the parse tree
	 */
	exitRow_or_range_clause?: (ctx: Row_or_range_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.window_frame_extent`.
	 * @param ctx the parse tree
	 */
	enterWindow_frame_extent?: (ctx: Window_frame_extentContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.window_frame_extent`.
	 * @param ctx the parse tree
	 */
	exitWindow_frame_extent?: (ctx: Window_frame_extentContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.window_frame_bound`.
	 * @param ctx the parse tree
	 */
	enterWindow_frame_bound?: (ctx: Window_frame_boundContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.window_frame_bound`.
	 * @param ctx the parse tree
	 */
	exitWindow_frame_bound?: (ctx: Window_frame_boundContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.window_frame_preceding`.
	 * @param ctx the parse tree
	 */
	enterWindow_frame_preceding?: (ctx: Window_frame_precedingContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.window_frame_preceding`.
	 * @param ctx the parse tree
	 */
	exitWindow_frame_preceding?: (ctx: Window_frame_precedingContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.window_frame_following`.
	 * @param ctx the parse tree
	 */
	enterWindow_frame_following?: (ctx: Window_frame_followingContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.window_frame_following`.
	 * @param ctx the parse tree
	 */
	exitWindow_frame_following?: (ctx: Window_frame_followingContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.create_database_option`.
	 * @param ctx the parse tree
	 */
	enterCreate_database_option?: (ctx: Create_database_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.create_database_option`.
	 * @param ctx the parse tree
	 */
	exitCreate_database_option?: (ctx: Create_database_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.database_filestream_option`.
	 * @param ctx the parse tree
	 */
	enterDatabase_filestream_option?: (ctx: Database_filestream_optionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.database_filestream_option`.
	 * @param ctx the parse tree
	 */
	exitDatabase_filestream_option?: (ctx: Database_filestream_optionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.database_file_spec`.
	 * @param ctx the parse tree
	 */
	enterDatabase_file_spec?: (ctx: Database_file_specContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.database_file_spec`.
	 * @param ctx the parse tree
	 */
	exitDatabase_file_spec?: (ctx: Database_file_specContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.file_group`.
	 * @param ctx the parse tree
	 */
	enterFile_group?: (ctx: File_groupContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.file_group`.
	 * @param ctx the parse tree
	 */
	exitFile_group?: (ctx: File_groupContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.file_spec`.
	 * @param ctx the parse tree
	 */
	enterFile_spec?: (ctx: File_specContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.file_spec`.
	 * @param ctx the parse tree
	 */
	exitFile_spec?: (ctx: File_specContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.entity_name`.
	 * @param ctx the parse tree
	 */
	enterEntity_name?: (ctx: Entity_nameContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.entity_name`.
	 * @param ctx the parse tree
	 */
	exitEntity_name?: (ctx: Entity_nameContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.entity_name_for_azure_dw`.
	 * @param ctx the parse tree
	 */
	enterEntity_name_for_azure_dw?: (ctx: Entity_name_for_azure_dwContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.entity_name_for_azure_dw`.
	 * @param ctx the parse tree
	 */
	exitEntity_name_for_azure_dw?: (ctx: Entity_name_for_azure_dwContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.entity_name_for_parallel_dw`.
	 * @param ctx the parse tree
	 */
	enterEntity_name_for_parallel_dw?: (ctx: Entity_name_for_parallel_dwContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.entity_name_for_parallel_dw`.
	 * @param ctx the parse tree
	 */
	exitEntity_name_for_parallel_dw?: (ctx: Entity_name_for_parallel_dwContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.full_table_name`.
	 * @param ctx the parse tree
	 */
	enterFull_table_name?: (ctx: Full_table_nameContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.full_table_name`.
	 * @param ctx the parse tree
	 */
	exitFull_table_name?: (ctx: Full_table_nameContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_name`.
	 * @param ctx the parse tree
	 */
	enterTable_name?: (ctx: Table_nameContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_name`.
	 * @param ctx the parse tree
	 */
	exitTable_name?: (ctx: Table_nameContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.simple_name`.
	 * @param ctx the parse tree
	 */
	enterSimple_name?: (ctx: Simple_nameContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.simple_name`.
	 * @param ctx the parse tree
	 */
	exitSimple_name?: (ctx: Simple_nameContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.func_proc_name_schema`.
	 * @param ctx the parse tree
	 */
	enterFunc_proc_name_schema?: (ctx: Func_proc_name_schemaContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.func_proc_name_schema`.
	 * @param ctx the parse tree
	 */
	exitFunc_proc_name_schema?: (ctx: Func_proc_name_schemaContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.func_proc_name_database_schema`.
	 * @param ctx the parse tree
	 */
	enterFunc_proc_name_database_schema?: (ctx: Func_proc_name_database_schemaContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.func_proc_name_database_schema`.
	 * @param ctx the parse tree
	 */
	exitFunc_proc_name_database_schema?: (ctx: Func_proc_name_database_schemaContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.func_proc_name_server_database_schema`.
	 * @param ctx the parse tree
	 */
	enterFunc_proc_name_server_database_schema?: (ctx: Func_proc_name_server_database_schemaContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.func_proc_name_server_database_schema`.
	 * @param ctx the parse tree
	 */
	exitFunc_proc_name_server_database_schema?: (ctx: Func_proc_name_server_database_schemaContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.ddl_object`.
	 * @param ctx the parse tree
	 */
	enterDdl_object?: (ctx: Ddl_objectContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.ddl_object`.
	 * @param ctx the parse tree
	 */
	exitDdl_object?: (ctx: Ddl_objectContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.full_column_name`.
	 * @param ctx the parse tree
	 */
	enterFull_column_name?: (ctx: Full_column_nameContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.full_column_name`.
	 * @param ctx the parse tree
	 */
	exitFull_column_name?: (ctx: Full_column_nameContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.column_name_list_with_order`.
	 * @param ctx the parse tree
	 */
	enterColumn_name_list_with_order?: (ctx: Column_name_list_with_orderContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.column_name_list_with_order`.
	 * @param ctx the parse tree
	 */
	exitColumn_name_list_with_order?: (ctx: Column_name_list_with_orderContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.insert_column_name_list`.
	 * @param ctx the parse tree
	 */
	enterInsert_column_name_list?: (ctx: Insert_column_name_listContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.insert_column_name_list`.
	 * @param ctx the parse tree
	 */
	exitInsert_column_name_list?: (ctx: Insert_column_name_listContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.insert_column_id`.
	 * @param ctx the parse tree
	 */
	enterInsert_column_id?: (ctx: Insert_column_idContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.insert_column_id`.
	 * @param ctx the parse tree
	 */
	exitInsert_column_id?: (ctx: Insert_column_idContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.column_name_list`.
	 * @param ctx the parse tree
	 */
	enterColumn_name_list?: (ctx: Column_name_listContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.column_name_list`.
	 * @param ctx the parse tree
	 */
	exitColumn_name_list?: (ctx: Column_name_listContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.cursor_name`.
	 * @param ctx the parse tree
	 */
	enterCursor_name?: (ctx: Cursor_nameContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.cursor_name`.
	 * @param ctx the parse tree
	 */
	exitCursor_name?: (ctx: Cursor_nameContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.on_off`.
	 * @param ctx the parse tree
	 */
	enterOn_off?: (ctx: On_offContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.on_off`.
	 * @param ctx the parse tree
	 */
	exitOn_off?: (ctx: On_offContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.clustered`.
	 * @param ctx the parse tree
	 */
	enterClustered?: (ctx: ClusteredContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.clustered`.
	 * @param ctx the parse tree
	 */
	exitClustered?: (ctx: ClusteredContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.null_notnull`.
	 * @param ctx the parse tree
	 */
	enterNull_notnull?: (ctx: Null_notnullContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.null_notnull`.
	 * @param ctx the parse tree
	 */
	exitNull_notnull?: (ctx: Null_notnullContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.null_or_default`.
	 * @param ctx the parse tree
	 */
	enterNull_or_default?: (ctx: Null_or_defaultContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.null_or_default`.
	 * @param ctx the parse tree
	 */
	exitNull_or_default?: (ctx: Null_or_defaultContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.scalar_function_name`.
	 * @param ctx the parse tree
	 */
	enterScalar_function_name?: (ctx: Scalar_function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.scalar_function_name`.
	 * @param ctx the parse tree
	 */
	exitScalar_function_name?: (ctx: Scalar_function_nameContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.begin_conversation_timer`.
	 * @param ctx the parse tree
	 */
	enterBegin_conversation_timer?: (ctx: Begin_conversation_timerContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.begin_conversation_timer`.
	 * @param ctx the parse tree
	 */
	exitBegin_conversation_timer?: (ctx: Begin_conversation_timerContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.begin_conversation_dialog`.
	 * @param ctx the parse tree
	 */
	enterBegin_conversation_dialog?: (ctx: Begin_conversation_dialogContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.begin_conversation_dialog`.
	 * @param ctx the parse tree
	 */
	exitBegin_conversation_dialog?: (ctx: Begin_conversation_dialogContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.contract_name`.
	 * @param ctx the parse tree
	 */
	enterContract_name?: (ctx: Contract_nameContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.contract_name`.
	 * @param ctx the parse tree
	 */
	exitContract_name?: (ctx: Contract_nameContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.service_name`.
	 * @param ctx the parse tree
	 */
	enterService_name?: (ctx: Service_nameContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.service_name`.
	 * @param ctx the parse tree
	 */
	exitService_name?: (ctx: Service_nameContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.end_conversation`.
	 * @param ctx the parse tree
	 */
	enterEnd_conversation?: (ctx: End_conversationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.end_conversation`.
	 * @param ctx the parse tree
	 */
	exitEnd_conversation?: (ctx: End_conversationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.waitfor_conversation`.
	 * @param ctx the parse tree
	 */
	enterWaitfor_conversation?: (ctx: Waitfor_conversationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.waitfor_conversation`.
	 * @param ctx the parse tree
	 */
	exitWaitfor_conversation?: (ctx: Waitfor_conversationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.get_conversation`.
	 * @param ctx the parse tree
	 */
	enterGet_conversation?: (ctx: Get_conversationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.get_conversation`.
	 * @param ctx the parse tree
	 */
	exitGet_conversation?: (ctx: Get_conversationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.queue_id`.
	 * @param ctx the parse tree
	 */
	enterQueue_id?: (ctx: Queue_idContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.queue_id`.
	 * @param ctx the parse tree
	 */
	exitQueue_id?: (ctx: Queue_idContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.send_conversation`.
	 * @param ctx the parse tree
	 */
	enterSend_conversation?: (ctx: Send_conversationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.send_conversation`.
	 * @param ctx the parse tree
	 */
	exitSend_conversation?: (ctx: Send_conversationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type?: (ctx: Data_typeContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type?: (ctx: Data_typeContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.default_value`.
	 * @param ctx the parse tree
	 */
	enterDefault_value?: (ctx: Default_valueContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.default_value`.
	 * @param ctx the parse tree
	 */
	exitDefault_value?: (ctx: Default_valueContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.sign`.
	 * @param ctx the parse tree
	 */
	enterSign?: (ctx: SignContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.sign`.
	 * @param ctx the parse tree
	 */
	exitSign?: (ctx: SignContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.keyword`.
	 * @param ctx the parse tree
	 */
	enterKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.keyword`.
	 * @param ctx the parse tree
	 */
	exitKeyword?: (ctx: KeywordContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.simple_id`.
	 * @param ctx the parse tree
	 */
	enterSimple_id?: (ctx: Simple_idContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.simple_id`.
	 * @param ctx the parse tree
	 */
	exitSimple_id?: (ctx: Simple_idContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.comparison_operator`.
	 * @param ctx the parse tree
	 */
	enterComparison_operator?: (ctx: Comparison_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.comparison_operator`.
	 * @param ctx the parse tree
	 */
	exitComparison_operator?: (ctx: Comparison_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	enterAssignment_operator?: (ctx: Assignment_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	exitAssignment_operator?: (ctx: Assignment_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.file_size`.
	 * @param ctx the parse tree
	 */
	enterFile_size?: (ctx: File_sizeContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.file_size`.
	 * @param ctx the parse tree
	 */
	exitFile_size?: (ctx: File_sizeContext) => void;
}

