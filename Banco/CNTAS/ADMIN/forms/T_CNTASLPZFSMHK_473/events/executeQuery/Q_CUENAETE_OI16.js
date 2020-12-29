
//CuentaxClienteDesQuery Entity: CuentaxClienteDes
task.executeQuery.Q_CUENAETE_OI16 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.cuentaO = executeQueryEventArgs.commons.api.vc.model.Valor.cuentaDestino;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.CuentaxClienteDes = true;
};