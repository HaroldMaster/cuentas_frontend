

//Entity: 
//. (ImageButton) View: OperacionesForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VAIMAGEBUTTONNN_560318 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    var nav = executeCommandEventArgs.commons.api.navigation;
    nav.address = {
             moduleId: "CNTAS",
             subModuleId: "ADMIN",
             taskId: "T_CNTASLPZFSMHK_473",
             taskVersion: "1.0.0",
             viewContainerId: "VC_TRANSFERIC_302473"
    }
    nav.openModalWindow("VA_VAIMAGEBUTTONNN_560318");
};