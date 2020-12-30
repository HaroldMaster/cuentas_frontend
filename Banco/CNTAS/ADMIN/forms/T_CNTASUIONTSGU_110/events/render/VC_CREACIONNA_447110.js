
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: creacionCuenta
task.render = function (entities, renderEventArgs){

    renderEventArgs.commons.execServer = false;
    
    renderEventArgs.commons.api.viewState.hide("G_CREACIOUUN_983786");
    renderEventArgs.commons.api.viewState.hide("CM_TCNTASUI_SNN");
};