


// (Button) 
task.executeCommand.CM_TCNTASLX_D3S = function(entities, executeCommandEventArgs) {
    entities.Valor.tipoCuentaOr = executeCommandEventArgs.commons.api.grid.getData("QV_PM71_YIX98")[0].tipoCuenta;
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;

};