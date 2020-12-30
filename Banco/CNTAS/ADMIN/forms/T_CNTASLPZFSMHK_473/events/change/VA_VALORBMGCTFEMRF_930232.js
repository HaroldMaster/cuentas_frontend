

//Entity: Valor
//Valor.valor (TextInputBox) View: transferenciaForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_VALORBMGCTFEMRF_930232 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.viewState.hide("CM_TCNTASLP_LCA");
    if (entities.Valor.valor > changedEventArgs.commons.api.grid.getData("QV_TB71_JEA48")[0].saldo ) {
        changedEventArgs.commons.api.viewState.hide("CM_TCNTASLP_LCA");
        changedEventArgs.commons.messageHandler.showMessagesWarning([{code: 0, message: 'Saldo insuficiente.', parameters: null}], false,null,5000);
    } else {
        changedEventArgs.commons.api.viewState.show("CM_TCNTASLP_LCA");
    }

};