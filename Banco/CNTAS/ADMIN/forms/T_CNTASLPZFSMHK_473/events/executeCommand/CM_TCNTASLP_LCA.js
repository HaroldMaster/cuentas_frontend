


// (Button) 
task.executeCommand.CM_TCNTASLP_LCA = function(entities, executeCommandEventArgs) {
    entities.Valor.tipoCuentaOr = executeCommandEventArgs.commons.api.grid.getData("QV_TB71_JEA48")[0].tipoCuenta;
    
    entities.Valor.tipoCuentaDe = executeCommandEventArgs.commons.api.grid.getData("QV_GK16_TUA48")[0].tipoCuenta;
    
    
    
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;

};