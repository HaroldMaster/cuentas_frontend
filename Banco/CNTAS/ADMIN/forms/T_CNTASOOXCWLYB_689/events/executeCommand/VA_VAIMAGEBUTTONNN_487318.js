


// (Button) 
task.executeCommand.VA_VAIMAGEBUTTONNN_487318 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    var nav = executeCommandEventArgs.commons.api.navigation;
    nav.address = {
             moduleId: "CNTAS",
             subModuleId: "ADMIN",
             taskId: "T_CNTASTUGNQMHY_194",
             taskVersion: "1.0.0",
             viewContainerId: "VC_DEPOSITOWN_298194"
    }
    nav.openModalWindow("VA_VAIMAGEBUTTONNN_487318");
};