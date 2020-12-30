
//Start signature to Callback event to CM_TCNTASLX_D3S
task.executeCommandCallback.CM_TCNTASLX_D3S = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    
    executeCommandCallbackEventArgs.commons.messageHandler.showMessagesSuccess([{code: 0, message: 'Retiro exitoso.', parameters: null}], false,null,5000);
    executeCommandCallbackEventArgs.commons.api.navigation.closeModal({});
};
