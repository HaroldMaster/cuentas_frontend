
//ClienteQuery Entity: Cliente
task.executeQuery.Q_CLIEETET_TO39 = function(executeQueryEventArgs){
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Cliente = true;
    executeQueryEventArgs.parameters.cedula = executeQueryEventArgs.commons.api.vc.model.TipoBusquedaCedula.cedula;
    console.log(typeof  executeQueryEventArgs.parameters.cedula);
    if( executeQueryEventArgs.parameters.cedula === ''){
    executeQueryEventArgs.commons.api.viewState.hide("G_CREACIOUUN_983786");
    }
};