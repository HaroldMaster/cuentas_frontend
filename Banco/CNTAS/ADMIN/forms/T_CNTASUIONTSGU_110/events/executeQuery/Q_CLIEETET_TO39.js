
//ClienteQuery Entity: Cliente
task.executeQuery.Q_CLIEETET_TO39 = function(executeQueryEventArgs){
    executeQueryEventArgs.commons.execServer = true;
    executeQueryEventArgs.parameters.tipo = executeQueryEventArgs.commons.api.vc.model.TipoCuenta.tipo;
    //executeQueryEventArgs.commons.serverParameters.Cliente = true;
    executeQueryEventArgs.parameters.cedula = executeQueryEventArgs.commons.api.vc.model.TipoBusquedaCedula.cedula;  
};