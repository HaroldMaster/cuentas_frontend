
//Start signature to Callback event to Q_CUENLTTT_TQ71
task.executeQueryCallback.Q_CUENLTTT_TQ71 = function(entities, executeQueryCallbackEventArgs) {
     //here your code
    if( executeQueryCallbackEventArgs.commons.api.grid.getData("QV_TB71_JEA48").length===0){
        executeQueryCallbackEventArgs.commons.api.viewState.hide("G_TRANSFECIR_536232");        executeQueryCallbackEventArgs.commons.api.viewState.hide("G_TRANSFENCA_582232");
        executeQueryCallbackEventArgs.commons.messageHandler.showMessagesWarning([{code: 0, message: 'Cuenta no encontrada.', parameters: null}], false,null,5000);

    }else{
    	executeQueryCallbackEventArgs.commons.api.viewState.show("G_TRANSFECIR_536232");    	executeQueryCallbackEventArgs.commons.api.viewState.show("G_TRANSFENCA_582232");

    }
};
