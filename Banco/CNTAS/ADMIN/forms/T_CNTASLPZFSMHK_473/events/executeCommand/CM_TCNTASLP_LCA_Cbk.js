
//Start signature to Callback event to CM_TCNTASLP_LCA
task.executeCommandCallback.CM_TCNTASLP_LCA = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    executeCommandCallbackEventArgs.commons.messageHandler.showMessagesSuccess([{code: 0, message: 'Transferencia exitosa.', parameters: null}], false,null,5000);
    executeCommandCallbackEventArgs.commons.api.navigation.closeModal({});
};
