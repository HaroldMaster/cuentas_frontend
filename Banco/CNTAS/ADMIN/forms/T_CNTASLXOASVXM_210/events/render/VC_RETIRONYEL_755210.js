
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: retiroForm
task.render = function (entities, renderEventArgs){

    renderEventArgs.commons.execServer = false;
    renderEventArgs.commons.api.viewState.hide("G_RETIROVDZZ_977352");
    renderEventArgs.commons.api.viewState.hide("CM_TCNTASLX_D3S");

};