
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: Deposito
task.render = function (entities, renderEventArgs){

    renderEventArgs.commons.execServer = false;
    renderEventArgs.commons.api.viewState.hide("G_DEPOSITOOO_163323");
    renderEventArgs.commons.api.viewState.hide("CM_TCNTASTU_MS3");

};