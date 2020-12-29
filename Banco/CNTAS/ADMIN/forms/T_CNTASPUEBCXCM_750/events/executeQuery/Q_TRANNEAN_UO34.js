
//TransaccionesQuery Entity: Transacciones
task.executeQuery.Q_TRANNEAN_UO34 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.cuentaO = executeQueryEventArgs.commons.api.vc.model.Cuenta.banco;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Transacciones = true;
};