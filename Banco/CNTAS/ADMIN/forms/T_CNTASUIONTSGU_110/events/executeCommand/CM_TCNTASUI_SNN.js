


// (Button) 
task.executeCommand.CM_TCNTASUI_SNN = function(entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = true;
   // executeCommandEventArgs.parameters.codigocl = executeCommandEventArgs.commons.api.grid.getData("QV_TV39_HMX33")[0].idCliente;
   entities.Cuenta.cliente = executeCommandEventArgs.commons.api.grid.getData("QV_TV39_HMX33")[0].idCliente;
    
    //executeCommandEventArgs.commons.serverParameters.entityName = true;
    
};