
//CuentaxClienteQuery Entity: CuentaxCliente
task.executeQuery.Q_CUENLTTT_TQ71 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.cuentaO = executeQueryEventArgs.commons.api.vc.model.Valor.cuentaOrigen;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.CuentaxCliente = true;
};