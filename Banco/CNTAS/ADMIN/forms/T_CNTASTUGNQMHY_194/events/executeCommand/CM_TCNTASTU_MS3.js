


// (Button) 
task.executeCommand.CM_TCNTASTU_MS3 = function(entities, executeCommandEventArgs) {
    entities.Valor.tipoCuentaOr = executeCommandEventArgs.commons.api.grid.getData("QV_GH71_HFQ19")[0].tipoCuenta
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;
    
};