

//Entity: Cuenta
//Cuenta.saldo (TextInputBox) View: creacionCuenta
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_SALDOQASXSLOCQP_614786 = function(  entities, changedEventArgs ) {
    
    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.viewState.hide("CM_TCNTASUI_SNN"); 
    if(entities.TipoCuenta.tipo === 'A' && entities.Cuenta.saldo >= 50 && entities.Cuenta.saldo <= 200) {
        changedEventArgs.commons.api.viewState.show("CM_TCNTASUI_SNN");
    }
    if(entities.TipoCuenta.tipo === 'A' && (entities.Cuenta.saldo < 50 || entities.Cuenta.saldo > 200)) {
        changedEventArgs.commons.messageHandler.showMessagesWarning([{code: 0, message: 'El saldo inicial debe ser entre 50 y 200.', parameters: null}], false,null,5000);
    }
    if(entities.TipoCuenta.tipo === 'C' && entities.Cuenta.saldo >= 50 && entities.Cuenta.saldo <= 100) {
        changedEventArgs.commons.api.viewState.show("CM_TCNTASUI_SNN");
    }
    if(entities.TipoCuenta.tipo === 'C' && (entities.Cuenta.saldo < 50 || entities.Cuenta.saldo > 100)) {
        changedEventArgs.commons.messageHandler.showMessagesWarning([{code: 0, message: 'El saldo inicial debe ser entre 50 y 100.', parameters: null}], false,null,5000);
    }     
    
};