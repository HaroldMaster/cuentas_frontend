
//Start signature to Callback event to Q_CUENLTTT_TQ71
task.executeQueryCallback.Q_CUENLTTT_TQ71 = function(entities, executeQueryCallbackEventArgs) {
     //here your code
    if( executeQueryCallbackEventArgs.commons.api.grid.getData("QV_GH71_HFQ19").length===0){
        executeQueryCallbackEventArgs.commons.api.viewState.hide("G_DEPOSITOOO_163323");       executeQueryCallbackEventArgs.commons.api.viewState.hide("CM_TCNTASTU_MS3");
        executeQueryCallbackEventArgs.commons.messageHandler.showMessagesWarning([{code: 0, message: 'Cuenta no encontrada.', parameters: null}], false,null,5000);

    }else{
    	executeQueryCallbackEventArgs.commons.api.viewState.show("G_DEPOSITOOO_163323");    	executeQueryCallbackEventArgs.commons.api.viewState.show("CM_TCNTASTU_MS3");

    }
};
