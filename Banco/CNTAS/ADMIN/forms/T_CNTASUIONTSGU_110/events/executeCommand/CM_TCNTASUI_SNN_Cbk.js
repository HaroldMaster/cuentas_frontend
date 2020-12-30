
//Start signature to Callback event to CM_TCNTASUI_SNN
task.executeCommandCallback.CM_TCNTASUI_SNN = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    executeCommandCallbackEventArgs.commons.messageHandler.showMessagesSuccess([{code: 0, message: 'Cuenta creada con exito.', parameters: null}], false,null,5000);
};
