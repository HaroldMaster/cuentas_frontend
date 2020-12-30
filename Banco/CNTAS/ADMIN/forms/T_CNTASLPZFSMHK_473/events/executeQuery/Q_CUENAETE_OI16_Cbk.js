
//Start signature to Callback event to Q_CUENAETE_OI16
task.executeQueryCallback.Q_CUENAETE_OI16 = function(entities, executeQueryCallbackEventArgs) {
     //here your code
    if( executeQueryCallbackEventArgs.commons.api.grid.getData("QV_GK16_TUA48").length===0){
        executeQueryCallbackEventArgs.commons.api.viewState.hide("G_TRANSFECNR_665232");  
        executeQueryCallbackEventArgs.commons.messageHandler.showMessagesWarning([{code: 0, message: 'Cuenta destino no encontrada.', parameters: null}], false,null,5000);

    }else{
    	executeQueryCallbackEventArgs.commons.api.viewState.show("G_TRANSFECNR_665232");   

    }
};
