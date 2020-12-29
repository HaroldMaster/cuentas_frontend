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
};


	
//ClienteQuery Entity: Cliente
task.executeQuery.Q_CLIEETET_TO39 = function(executeQueryEventArgs){
    executeQueryEventArgs.commons.execServer = true;
    executeQueryEventArgs.parameters.tipo = executeQueryEventArgs.commons.api.vc.model.TipoCuenta.tipo;
    //executeQueryEventArgs.commons.serverParameters.Cliente = true;
    executeQueryEventArgs.parameters.cedula = executeQueryEventArgs.commons.api.vc.model.TipoBusquedaCedula.cedula;
    console.log(typeof  executeQueryEventArgs.parameters.cedula);
    if( executeQueryEventArgs.parameters.cedula === ''){
    executeQueryEventArgs.commons.api.viewState.hide("G_CREACIOUUN_983786");
    }
    
};

	
//Start signature to Callback event to Q_CLIEETET_TO39
task.executeQueryCallback.Q_CLIEETET_TO39 = function(entities, executeQueryCallbackEventArgs) {
     //here your code
};




}));
