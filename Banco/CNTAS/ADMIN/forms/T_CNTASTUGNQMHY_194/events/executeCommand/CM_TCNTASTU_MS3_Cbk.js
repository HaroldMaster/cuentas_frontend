
//Start signature to Callback event to CM_TCNTASTU_MS3
task.executeCommandCallback.CM_TCNTASTU_MS3 = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    executeCommandCallbackEventArgs.commons.messageHandler.showMessagesSuccess([{code: 0, message: 'Deposito exitoso.', parameters: null}], false,null,5000);
    executeCommandCallbackEventArgs.commons.api.navigation.closeModal({});
};
