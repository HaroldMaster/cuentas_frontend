

//Entity: Valor
//Valor.valor (TextInputBox) View: retiroForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_VALORCYYXCIEILA_651352 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.viewState.hide("CM_TCNTASLX_D3S");
    if (entities.Valor.valor > changedEventArgs.commons.api.grid.getData("QV_PM71_YIX98")[0].saldo ) {
        changedEventArgs.commons.api.viewState.hide("CM_TCNTASLX_D3S");
        changedEventArgs.commons.messageHandler.showMessagesWarning([{code: 0, message: 'Saldo insuficiente.', parameters: null}], false,null,5000);
    } else {
        changedEventArgs.commons.api.viewState.show("CM_TCNTASLX_D3S");
    }
};