
//Start signature to Callback event to Q_CLIEETET_TO39
task.executeQueryCallback.Q_CLIEETET_TO39 = function(entities, executeQueryCallbackEventArgs) {
     //here your code
    if( executeQueryCallbackEventArgs.commons.api.grid.getData("QV_TV39_HMX33").length===0){
        executeQueryCallbackEventArgs.commons.api.viewState.hide("G_CREACIOUUN_983786");
        executeQueryCallbackEventArgs.commons.messageHandler.showMessagesWarning([{code: 0, message: 'Cliente no encontrado.', parameters: null}], false,null,5000);
    }else{
    	executeQueryCallbackEventArgs.commons.api.viewState.show("G_CREACIOUUN_983786");
    }
};
