/* variables locales de T_CNTASUIONTSGU_110*/

(function (root, factory) {
    factory();
} (this, function() {

    "use strict";

    /*global designerEvents, console */

        //*********** COMENTARIOS DE AYUDA **************
        //  Para imprimir mensajes en consola
        //  console.log("executeCommand");

        //  Para enviar mensaje use
        //  eventArgs.commons.messageHandler.showMessagesInformation('Ejecutando comando personalizado');

        //  Para evitar que se continue con la validación a nivel de servidor
        //  eventArgs.commons.execServer = false;

        //**********************************************************
        //  Eventos de VISUAL ATTRIBUTES
        //**********************************************************

    
        var task = designerEvents.api.creacioncuenta;
    

    //"TaskId": "T_CNTASUIONTSGU_110"


    	

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

	


// (Button) 
task.executeCommand.CM_TCNTASUI_SNN = function(entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = true;
   // executeCommandEventArgs.parameters.codigocl = executeCommandEventArgs.commons.api.grid.getData("QV_TV39_HMX33")[0].idCliente;
   entities.Cuenta.cliente = executeCommandEventArgs.commons.api.grid.getData("QV_TV39_HMX33")[0].idCliente;
    
    //executeCommandEventArgs.commons.serverParameters.entityName = true;
    
};

	
//Start signature to Callback event to CM_TCNTASUI_SNN
task.executeCommandCallback.CM_TCNTASUI_SNN = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    executeCommandCallbackEventArgs.commons.messageHandler.showMessagesSuccess([{code: 0, message: 'Cuenta creada con exito.', parameters: null}], false,null,5000);
};


	
//ClienteQuery Entity: Cliente
task.executeQuery.Q_CLIEETET_TO39 = function(executeQueryEventArgs){
    executeQueryEventArgs.commons.execServer = true;
    executeQueryEventArgs.parameters.tipo = executeQueryEventArgs.commons.api.vc.model.TipoCuenta.tipo;
    //executeQueryEventArgs.commons.serverParameters.Cliente = true;
    executeQueryEventArgs.parameters.cedula = executeQueryEventArgs.commons.api.vc.model.TipoBusquedaCedula.cedula;  
};

	
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


	
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: creacionCuenta
task.render = function (entities, renderEventArgs){

    renderEventArgs.commons.execServer = false;
    
    renderEventArgs.commons.api.viewState.hide("G_CREACIOUUN_983786");
    renderEventArgs.commons.api.viewState.hide("CM_TCNTASUI_SNN");
};



}));
