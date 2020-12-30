
//Start signature to Callback event to Q_TRANNEAN_UO34
task.executeQueryCallback.Q_TRANNEAN_UO34 = function(entities, executeQueryCallbackEventArgs) {
     //here your code
    if( executeQueryCallbackEventArgs.commons.api.grid.getData("QV_OQ34_TWV45").length===0){
        executeQueryCallbackEventArgs.commons.messageHandler.showMessagesWarning([{code: 0, message: 'Cuenta no encontrada.', parameters: null}], false,null,5000);
    }
};
