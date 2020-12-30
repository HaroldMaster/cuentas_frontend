
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: transferenciaForm
task.render = function (entities, renderEventArgs){

    renderEventArgs.commons.execServer = false;
    renderEventArgs.commons.api.viewState.hide("G_TRANSFECIR_536232");       renderEventArgs.commons.api.viewState.hide("G_TRANSFENCA_582232");
    renderEventArgs.commons.api.viewState.hide("G_TRANSFECNR_665232");
    renderEventArgs.commons.api.viewState.hide("CM_TCNTASLP_LCA");
};