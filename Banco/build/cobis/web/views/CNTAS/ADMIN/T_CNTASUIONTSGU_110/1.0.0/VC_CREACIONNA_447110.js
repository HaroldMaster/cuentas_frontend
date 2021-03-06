//Designer Generator v 7.2.0 - SPR 2020-20 08/10/2020
var designerEvents = designerEvents || {};
designerEvents.api = designerEvents.api || {};
designerEvents.api.creacioncuenta = designerEvents.api.creacioncuenta || designer.dsgEvents();

function VC_CREACIONNA_447110(cobisMainModule) {
    cobisMainModule.controllerProvider.register("VC_CREACIONNA_447110_MAIN_CTRL", ["$scope", "breadcrumbs",

    function($scope, breadcrumbs) {
        $scope.breadcrumbs = breadcrumbs;
    }]);
    cobisMainModule.controllerProvider.register("VC_CREACIONNA_447110_CTRL", ["cobisMessage", cobis.modules.CONTAINER + ".preferencesService", "dsgnrUtils", "designer", "$scope", "$location", "$document", "$parse", "$filter", "$modal", "$q", "$compile", "$timeout", "$translate",

    function(cobisMessage, preferencesService, dsgnrUtils, designer, $scope, $location, $document, $parse, $filter, $modal, $q, $compile, $timeout, $translate) {
        $scope.designer = designer;
        $scope.validatorOptions = validatorOptions;
        $scope.vc = designer.initViewContainer({
            moduleId: "CNTAS",
            subModuleId: "ADMIN",
            taskId: "T_CNTASUIONTSGU_110",
            taskVersion: "1.0.0",
            viewContainerId: "VC_CREACIONNA_447110",
            hasCloseModalEvent: false,
            serverEvents: true
        },
            "${contextPath}/resources/CNTAS/ADMIN/T_CNTASUIONTSGU_110",
        designerEvents.api.creacioncuenta,
        $scope.rowData);
        $scope.kendo = kendo;
        //Lectura de Preferencias Visuales del Usuario, si no existen se aplican unas por default
        $scope.currencySymbol = kendo.cultures.current.numberFormat.currency.symbol;
        if (preferencesService.getGlobalization(cobis.constant.CURRENCY_SYMBOL)) {
            $scope.currencySymbol = preferencesService.getGlobalization(cobis.constant.CURRENCY_SYMBOL);
        }
        if (preferencesService.getGlobalization(cobis.constant.DATE_FORMAT)) {
            $scope.dateFormat = preferencesService.getGlobalization(cobis.constant.DATE_FORMAT);
        } else {
            $scope.dateFormat = 'yyyy/MM/dd';
        }
        if (preferencesService.getGlobalization(cobis.constant.DATE_FORMAT_PLACEHOLDER)) {
            $scope.dateFormatPlaceholder = preferencesService.getGlobalization(cobis.constant.DATE_FORMAT_PLACEHOLDER);
        } else {
            $scope.dateFormatPlaceholder = $scope.dateFormat;
        }
        $scope.vc.routeProvider = cobisMainModule.routeProvider;
        if (!$scope.vc.loaded) {
            var page = {
                hasTemporaryDataSupport: false,
                hasInitDataSupport: false,
                hasChangeInitDataSupport: false,
                hasSearchRenderEvent: true,
                ejecTemporaryData: false,
                ejecInitData: false,
                ejecChangeInitData: false,
                ejecSearchRenderEvent: false,
                hasTemporaryData: false,
                hasInitData: false,
                hasChangeInitData: false,
                hasCRUDSupport: false,
                vcName: 'VC_CREACIONNA_447110'
            };
            if (typeof designer.constants.cobisPatterns !== 'undefined' && typeof designer.constants.cobisPatterns.formType !== 'undefined') {
                $scope.vc.cobisPattern = designer.constants.cobisPatterns.formType.NONE;
                $scope.vc.isConsolidateView = ($scope.vc.cobisPattern === designer.constants.cobisPatterns.formType.CONSOLIDATE_VIEW);
            } else {
                //CobisPattern no definido en framework de Designer como constante. Actualizar Framework
                $scope.vc.cobisPattern = 0;
                $scope.vc.isConsolidateView = false;
            }
            if (($scope.vc.isModal($scope) || $scope.isDesignerInclude || $scope.isDesignerDetail) && angular.isDefined($scope.queryParameters)) {
                $scope.vc.pk = $scope.queryParameters.pk;
                $scope.vc.mode = parseInt($scope.queryParameters.mode || designer.constants.mode.Insert);
            } else {
                $scope.vc.pk = $location.search().pk;
                $scope.vc.mode = parseInt($location.search().mode || designer.constants.mode.Insert);
            }
            $scope.vc.args.pk = $scope.vc.pk;
            $scope.vc.args.mode = $scope.vc.mode;
            if (cobis.userContext.getValue(cobis.constant.USER_NAME)) {
                $scope.vc.args.user = cobis.userContext.getValue(cobis.constant.USER_NAME);
            } else {
                $scope.vc.args.user = "UserOutContainer";
            }
            $scope.vc.customDialogParameters = $scope.customDialogParameters;
            $scope.vc.args.channel = $location.search().channel;
            $scope.vc.metadata = {
                taskPk: {
                    moduleId: 'CNTAS',
                    subModuleId: 'ADMIN',
                    taskId: 'T_CNTASUIONTSGU_110',
                    version: '1.0.0',
                    user: $scope.vc.args.user
                },
                entityNames: {
                    TipoBusquedaCedula: "TipoBusquedaCedula",
                    Cliente: "Cliente",
                    Cuenta: "Cuenta",
                    TipoCuenta: "TipoCuenta"
                },
                entities: {
                    TipoBusquedaCedula: {
                        cedula: 'AT02_1NFJAZRB272',
                        _pks: [],
                        _entityId: 'EN_1IFJRRYRE_272',
                        _entityVersion: '1.0.0',
                        _transient: false
                    },
                    Cliente: {
                        apellido: 'AT30_APELLIDD816',
                        idCliente: 'AT42_IDCLIETE816',
                        nombre: 'AT67_NOMBRECQ816',
                        cedula: 'AT82_CEDULATW816',
                        _pks: [],
                        _entityId: 'EN_CLIENTEUR_816',
                        _entityVersion: '1.0.0',
                        _transient: false
                    },
                    Cuenta: {
                        banco: 'AT79_BANCOLXJ916',
                        saldo: 'AT85_SALDONLN916',
                        cliente: 'AT96_CLIENTEE916',
                        _pks: [],
                        _entityId: 'EN_CUENTAPVV_916',
                        _entityVersion: '1.0.0',
                        _transient: false
                    },
                    TipoCuenta: {
                        tipo: 'AT35_AHORROSS995',
                        _pks: [],
                        _entityId: 'EN_TIPOCUENT_995',
                        _entityVersion: '1.0.0',
                        _transient: false
                    }
                },
                relations: []
            };
            $scope.vc.queryProperties = {};
            $scope.vc.queryProperties.Q_CLIEETET_TO39 = {
                autoCrud: false
            };
            $scope.vc.getRequestQuery_Q_CLIEETET_TO39 = function() {
                var parametersAux = {};
                if ($.isEmptyObject($scope.vc.queries.Q_CLIEETET_TO39_filters)) {
                    parametersAux = {};
                } else {
                    var filters = $scope.vc.queries.Q_CLIEETET_TO39_filters;
                    parametersAux = {
                        cedula: filters.cedula
                    };
                }
                return {
                    mainEntityPk: {
                        entityId: 'EN_CLIENTEUR_816',
                        version: '1.0.0'
                    },
                    queryPk: {
                        queryId: 'Q_CLIEETET_TO39',
                        version: '1.0.0'
                    },
                    parameters: parametersAux,
                    filters: {},
                    updateParameters: function() {
                        if ($.isEmptyObject(this.filters) && $.isEmptyObject(this.parameters)) {
                            //No tiene relaciones con otra entidad
                            this.parameters = {};
                        } else if (!$.isEmptyObject(this.filters) && $.isEmptyObject(this.parameters)) {
                            this.parameters['cedula'] = this.filters.cedula;
                        }
                    }
                }
            };
            $scope.vc.queries.Q_CLIEETET_TO39_filters = {};
            var defaultValues = {
                TipoBusquedaCedula: {},
                Cliente: {},
                Cuenta: {},
                TipoCuenta: {}
            };
            $scope.vc.channelDefaultValues = function(entityName, attributeName, valueIfNotExist) {
                var channel = $scope.vc.args.channel;
                for (var en in defaultValues) {
                    if (defaultValues.hasOwnProperty(en) && en === entityName) {
                        for (var att in defaultValues[en]) {
                            if (defaultValues[en].hasOwnProperty(att) && att === attributeName) {
                                for (var ch in defaultValues[en][att]) {
                                    if (defaultValues[en][att].hasOwnProperty(ch) && ch === channel) {
                                        return defaultValues[en][att][ch];
                                    }
                                }
                            }
                        }
                    }
                }
                if (typeof valueIfNotExist !== "undefined") {
                    return valueIfNotExist;
                } else {
                    return null;
                }
            };
            $scope.vc.temporarySave = function() {
                var modelo = $scope.vc.cleanData($scope.vc.model);
                var data = {
                    model: modelo,
                    trackers: $scope.vc.trackers,
                    temporaryStorePK: $scope.vc.metadata.taskPk
                };
                $scope.vc.execute("temporarySave", VC_CREACIONNA_447110, data, function() {});
            };
            $scope.vc.temporaryRead = function() {
                if (page.hasTemporaryDataSupport) {
                    var data = {
                        model: $scope.vc.model,
                        temporaryStorePK: $scope.vc.metadata.taskPk
                    };
                    return $scope.vc.executeService("readTemporaryData", VC_CREACIONNA_447110, data).then(

                    function(response) {
                        var result = $scope.vc.processTemporaryResponse(response);
                        if (result) {
                            $scope.vc.execute("deleteTemporaryData", VC_CREACIONNA_447110, data, function() {});
                            $scope.vc.crud.addTrackers($scope.vc.model);
                        }
                        page.hasTemporaryData = result;
                        page.ejecTemporaryData = response.success;
                        return page;
                    });
                } else {
                    page.ejecTemporaryData = false;
                    page.hasTemporaryData = false;
                    return page;
                }
            };
            $scope.vc.viewState.keyDown = function(e) {
                dsgnrUtils.container.validateOnEnter(e, $scope.vc);
            };
            $scope.vc.viewState.VC_CREACIONNA_447110 = {
                style: []
            };
            $scope.vc.model.TipoBusquedaCedula = {
                cedula: $scope.vc.channelDefaultValues("TipoBusquedaCedula", "cedula")
            };
            //ViewState - Group: Group1656
            $scope.vc.createViewState({
                id: "G_CREACIOCNN_286786",
                hasId: true,
                componentStyle: [],
                label: 'Group1656',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: TipoBusquedaCedula, Attribute: cedula
            $scope.vc.createViewState({
                id: "VA_CEDULAMVYLLECLO_705786",
                componentStyle: [],
                label: "CNTAS.LBL_CNTAS_CDULAZLSY_32122",
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.createViewState({
                id: "VA_VAIMAGEBUTTONNN_724786",
                componentStyle: [],
                imageId: "fa fa-search",
                label: '',
                queryId: 'Q_CLIEETET_TO39',
                validationCode: 0,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Group: Group1662
            $scope.vc.createViewState({
                id: "G_CREACIOENN_201786",
                hasId: true,
                componentStyle: [],
                label: 'Group1662',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.types.Cliente = kendo.data.Model.define({
                id: "dsgnrId",
                fields: {
                    dsgnrId: {
                        type: "string"
                    },
                    trackId: {
                        type: "string"
                    },
                    cedula: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cliente", "cedula", '')
                    },
                    nombre: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cliente", "nombre", '')
                    },
                    apellido: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cliente", "apellido", '')
                    },
                    idCliente: {
                        type: "number",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cliente", "idCliente", 0)
                    }
                }
            });
            $scope.vc.model.Cliente = new kendo.data.DataSource({
                transport: {
                    read: function(options) {
                        var promise = false;
                        var isRefresh = (angular.isDefined(options.data) && angular.isDefined(options.data.refresh));
                        if (isRefresh || !designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
                            var queryId = 'Q_CLIEETET_TO39';
                            var queryRequest = $scope.vc.getRequestQuery_Q_CLIEETET_TO39();
                            if (queryId && queryRequest) {
                                var queryLoaded = queryRequest.loaded;
                                if (angular.isUndefined(queryLoaded) || isRefresh === true) {
                                    queryRequest.loaded = true;
                                    queryRequest.updateParameters();
                                    promise = true;
                                    $scope.vc.executeQuery(
                                        'QV_TV39_HMX33',
                                    queryRequest,
                                    queryRequest.mainEntityPk.entityId,
                                    true,

                                    function(response) {
                                        if (response.success) {
                                            var result = response.data['RESULT' + queryId];
                                            if (angular.isUndefined(result)) {
                                                result = [];
                                            }
                                            if (angular.isDefined(result) && angular.isArray(result)) {
                                                options.success(result);
                                            } else {
                                                options.success([]);
                                            }
                                        } else {
                                            options.error([]);
                                        }
                                    }, (function() {
                                        var queryOptions = options.data;
                                        var queryView = {
                                            'allowPaging': false,
                                            'pageSize': 0
                                        };

                                        function config(queryOptions, queryView) {
                                            var result = undefined;
                                            if (queryView.allowPaging === true) {
                                                result = {};
                                                if (angular.isDefined(queryOptions.appendRecords) && queryOptions.appendRecords === true) {
                                                    result.appendRecords = true;
                                                }
                                                result.pageSize = queryView.pageSize;
                                            }
                                            return result;
                                        }
                                        return config(queryOptions, queryView);
                                    }()));
                                }
                            }
                        }
                        if (promise === false) {
                            options.error({
                                xhr: {}
                            });
                        }
                    },
                    create: function(options) {
                        var model = options.data;
                        model.dsgnrId = designer.utils.uuid();
                        options.success(model);
                    },
                    update: function(options) {
                        var model = options.data;
                        options.success(model);
                    },
                    destroy: function(options) {
                        var model = options.data;
                        options.success(model);
                    }
                },
                schema: {
                    model: $scope.vc.types.Cliente
                },
                aggregate: [],
                error: function(e) {
                    if (e.xhr.message && e.xhr.message === 'DeletingError') {
                        $("#QV_TV39_HMX33").data("kendoExtGrid").cancelChanges();
                    }
                }
            });
            $scope.vc.queries.Q_CLIEETET_TO39 = $scope.vc.model.Cliente;
            $scope.vc.trackers.Cliente = new $scope.vc.crud.DataSourceTracker(
            $scope.vc.metadata.entities.Cliente);
            $scope.vc.model.Cliente.bind('change', function(e) {
                $scope.vc.trackers.Cliente.track(e);
            });
            $scope.vc.grids.QV_TV39_HMX33 = {};
            $scope.vc.grids.QV_TV39_HMX33.queryId = 'Q_CLIEETET_TO39';
            $scope.vc.viewState.QV_TV39_HMX33 = {
                style: []
            };
            $scope.vc.viewState.QV_TV39_HMX33.column = {};
            $scope.vc.grids.QV_TV39_HMX33.editable = false;
            $scope.vc.grids.QV_TV39_HMX33.events = {
                customRowClick: function(e, controlId, entity, idGrid, commandName) {
                    var grid = $scope.vc.getElementGrid(idGrid);
                    var dataItem = grid.dataItem($(e.currentTarget).closest("tr"));
                    var args = {
                        rowData: dataItem,
                        rowIndex: grid.dataSource.indexOf(dataItem),
                        nameEntityGrid: entity,
                        refreshData: false,
                        stopPropagation: false,
                        commandName: commandName
                    };
                    $scope.vc.executeGridRowCommand(controlId, args);
                    if (args.refreshData) {
                        grid.refresh();
                    }
                    if (args.stopPropagation) {
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                    }
                },
                cancel: function(e) {
                    $scope.vc.trackers.Cliente.cancelTrackedChanges(e.model);
                },
                edit: function(e) {
                    $scope.vc.grids.QV_TV39_HMX33.selectedRow = e.model;
                    var commandCell = $scope.vc.getCommandCellData(e.container);
                    var titleUpdate = $filter('translate')('DSGNR.SYS_DSGNR_LBLACEPT0_00007');
                    var titleCancel = $filter('translate')('DSGNR.SYS_DSGNR_LBLCANCEL_00006');
                    commandCell.html("<a class='btn btn-default k-grid-update cb-row-image-button' onmousedown='this.focus()' title='" + titleUpdate + "' href='#'><span class='fa fa-check-circle'></span></a><a class='btn btn-default k-grid-cancel cb-row-image-button' title='" + titleCancel + "' href='#'><span class='fa fa-times-circle'></span></a>");
                    $scope.vc.validateForm();
                },
                dataBound: function(e) {
                    var index;
                    var grid = e.sender;
                    $scope.vc.gridDataBound("QV_TV39_HMX33", false, grid);
                    $scope.vc.hideShowColumns("QV_TV39_HMX33", grid);
                    var dataView = null;
                    dataView = this.dataSource.view();
                    var styleName, iStyle;
                    for (var i = 0; i < dataView.length; i++) {
                        if (typeof $scope.vc.viewState.QV_TV39_HMX33.rows[dataView[i].uid] != "undefined") {
                            for (iStyle = 0; iStyle < $scope.vc.viewState.QV_TV39_HMX33.rows[dataView[i].uid].style.length; iStyle++) {
                                styleName = $scope.vc.viewState.QV_TV39_HMX33.rows[dataView[i].uid].style[iStyle];
                                if ($("#QV_TV39_HMX33 tbody").find("tr[data-uid=" + dataView[i].uid + "]").hasClass(styleName) === false) {
                                    $("#QV_TV39_HMX33 tbody").find("tr[data-uid=" + dataView[i].uid + "]").addClass(styleName);
                                }
                            }
                        }
                    }
                }
            };
            //Comandos de registros del Grid
            $scope.vc.grids.QV_TV39_HMX33.columns = [];
            //Registros de fila del Grid
            $scope.vc.viewState.QV_TV39_HMX33.rows = [];
            //Controles de edicion en linea del Grid
            $scope.vc.viewState.QV_TV39_HMX33.column.cedula = {
                title: 'cedula',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXWEX_821786',
                element: []
            };
            $scope.vc.grids.QV_TV39_HMX33.AT82_CEDULATW816 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_TV39_HMX33.column.cedula.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'id': "VA_TEXTINPUTBOXWEX_821786",
                        'data-validation-code': "{{vc.viewState.QV_TV39_HMX33.column.cedula.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_TV39_HMX33.column.cedula.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_TV39_HMX33.column.nombre = {
                title: 'nombre',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXVBW_790786',
                element: []
            };
            $scope.vc.grids.QV_TV39_HMX33.AT67_NOMBRECQ816 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_TV39_HMX33.column.nombre.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXVBW_790786",
                        'data-validation-code': "{{vc.viewState.QV_TV39_HMX33.column.nombre.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_TV39_HMX33.column.nombre.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_TV39_HMX33.column.apellido = {
                title: 'apellido',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXPPB_261786',
                element: []
            };
            $scope.vc.grids.QV_TV39_HMX33.AT30_APELLIDD816 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_TV39_HMX33.column.apellido.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXPPB_261786",
                        'data-validation-code': "{{vc.viewState.QV_TV39_HMX33.column.apellido.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_TV39_HMX33.column.apellido.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_TV39_HMX33.column.idCliente = {
                title: 'idCliente',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                format: "n0",
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXOZU_241786',
                element: []
            };
            $scope.vc.grids.QV_TV39_HMX33.AT42_IDCLIETE816 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_TV39_HMX33.column.idCliente.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXOZU_241786",
                        'data-validation-code': "{{vc.viewState.QV_TV39_HMX33.column.idCliente.validationCode}}",
                        'kendo-numeric-text-box': "",
                        'datatypes-Limit': "N",
                        'k-spinners': "false",
                        'k-step': "0",
                        'k-format': "vc.viewState.QV_TV39_HMX33.column.idCliente.format",
                        'k-decimals': "vc.viewState.QV_TV39_HMX33.column.idCliente.decimals",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_TV39_HMX33.column.idCliente.style"
                    });
                    textInput.appendTo(container);
                }
            };
            //Creacion de columnas del Grid
            if (designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode)) {
                $scope.vc.grids.QV_TV39_HMX33.columns.push({
                    field: 'cedula',
                    title: '{{vc.viewState.QV_TV39_HMX33.column.cedula.title|translate:vc.viewState.QV_TV39_HMX33.column.cedula.titleArgs}}',
                    width: $scope.vc.viewState.QV_TV39_HMX33.column.cedula.width,
                    format: $scope.vc.viewState.QV_TV39_HMX33.column.cedula.format,
                    editor: $scope.vc.grids.QV_TV39_HMX33.AT82_CEDULATW816.control,
                    template: "<span ng-class='vc.viewState.QV_TV39_HMX33.column.cedula.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.cedula, \"QV_TV39_HMX33\", \"cedula\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_TV39_HMX33.column.cedula.style",
                        "title": "{{vc.viewState.QV_TV39_HMX33.column.cedula.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_TV39_HMX33.column.cedula.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_TV39_HMX33.columns.push({
                    field: 'nombre',
                    title: '{{vc.viewState.QV_TV39_HMX33.column.nombre.title|translate:vc.viewState.QV_TV39_HMX33.column.nombre.titleArgs}}',
                    width: $scope.vc.viewState.QV_TV39_HMX33.column.nombre.width,
                    format: $scope.vc.viewState.QV_TV39_HMX33.column.nombre.format,
                    editor: $scope.vc.grids.QV_TV39_HMX33.AT67_NOMBRECQ816.control,
                    template: "<span ng-class='vc.viewState.QV_TV39_HMX33.column.nombre.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.nombre, \"QV_TV39_HMX33\", \"nombre\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_TV39_HMX33.column.nombre.style",
                        "title": "{{vc.viewState.QV_TV39_HMX33.column.nombre.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_TV39_HMX33.column.nombre.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_TV39_HMX33.columns.push({
                    field: 'apellido',
                    title: '{{vc.viewState.QV_TV39_HMX33.column.apellido.title|translate:vc.viewState.QV_TV39_HMX33.column.apellido.titleArgs}}',
                    width: $scope.vc.viewState.QV_TV39_HMX33.column.apellido.width,
                    format: $scope.vc.viewState.QV_TV39_HMX33.column.apellido.format,
                    editor: $scope.vc.grids.QV_TV39_HMX33.AT30_APELLIDD816.control,
                    template: "<span ng-class='vc.viewState.QV_TV39_HMX33.column.apellido.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.apellido, \"QV_TV39_HMX33\", \"apellido\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_TV39_HMX33.column.apellido.style",
                        "title": "{{vc.viewState.QV_TV39_HMX33.column.apellido.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_TV39_HMX33.column.apellido.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_TV39_HMX33.columns.push({
                    field: 'idCliente',
                    title: '{{vc.viewState.QV_TV39_HMX33.column.idCliente.title|translate:vc.viewState.QV_TV39_HMX33.column.idCliente.titleArgs}}',
                    width: $scope.vc.viewState.QV_TV39_HMX33.column.idCliente.width,
                    format: $scope.vc.viewState.QV_TV39_HMX33.column.idCliente.format,
                    editor: $scope.vc.grids.QV_TV39_HMX33.AT42_IDCLIETE816.control,
                    template: "<span ng-class='vc.viewState.QV_TV39_HMX33.column.idCliente.element[dataItem.dsgnrId].style' ng-bind='(vc.getStringColumnFormat)?vc.getStringColumnFormat(dataItem.idCliente, \"QV_TV39_HMX33\", \"idCliente\"):kendo.toString(#=idCliente#, vc.viewState.QV_TV39_HMX33.column.idCliente.format)'></span>",
                    attributes: {
                        "class": "text-right",
                        "ng-class": "vc.viewState.QV_TV39_HMX33.column.idCliente.style",
                        "title": "{{vc.viewState.QV_TV39_HMX33.column.idCliente.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_TV39_HMX33.column.idCliente.hidden
                });
            }
            $scope.vc.viewState.QV_TV39_HMX33.toolbar = {}
            $scope.vc.grids.QV_TV39_HMX33.toolbar = []; //ViewState - Group: GroupLayout1872
            $scope.vc.createViewState({
                id: "G_CREACIOUUN_983786",
                hasId: true,
                componentStyle: [],
                label: 'GroupLayout1872',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.None
            });
            $scope.vc.model.TipoCuenta = {
                tipo: $scope.vc.channelDefaultValues("TipoCuenta", "tipo")
            };
            //ViewState - Group: Group2337
            $scope.vc.createViewState({
                id: "G_CREACIONUU_119786",
                hasId: true,
                componentStyle: [],
                label: 'Group2337',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: TipoCuenta, Attribute: tipo
            $scope.vc.createViewState({
                id: "VA_TIPOVUHEDKATWYE_170786",
                componentStyle: [],
                label: "CNTAS.LBL_CNTAS_TIPOCUEAT_70539",
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All,
                isComboBox: true
            });
            $scope.vc.catalogs.VA_TIPOVUHEDKATWYE_170786 = new kendo.data.DataSource({
                transport: {
                    read: function(options) {
                        var data = [{
                            code: 'A',
                            value: 'Ahorros'
                        }, {
                            code: 'C',
                            value: 'Corriente'
                        }];
                        options.success(data);
                        $scope.vc.setComboBoxDefaultValue("VA_TIPOVUHEDKATWYE_170786", true, data[0], 'code', data);
                        $scope.vc.setEnableAndReadonlyStatus("VA_TIPOVUHEDKATWYE_170786");
                    }
                },
                requestStart: function(e) {
                    $scope.vc.requestStartRead(e, "VA_TIPOVUHEDKATWYE_170786", null);
                },
                serverFiltering: true,
                schema: {
                    model: {
                        id: "code"
                    }
                }
            });
            $scope.vc.model.Cuenta = {
                banco: $scope.vc.channelDefaultValues("Cuenta", "banco"),
                saldo: $scope.vc.channelDefaultValues("Cuenta", "saldo"),
                cliente: $scope.vc.channelDefaultValues("Cuenta", "cliente")
            };
            //ViewState - Group: Group1318
            $scope.vc.createViewState({
                id: "G_CREACIONNC_450786",
                hasId: true,
                componentStyle: [],
                label: 'Group1318',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: Cuenta, Attribute: saldo
            $scope.vc.createViewState({
                id: "VA_SALDOQASXSLOCQP_614786",
                componentStyle: [],
                label: "CNTAS.LBL_CNTAS_SALDOZNQH_30727",
                format: "n",
                decimals: kendo.cultures.current.numberFormat.decimals,
                validationCode: 32,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //watch tmpModel - Entity: Cuenta, Attribute: saldo
            $scope.$watch('vc.model.Cuenta.saldo', function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    if (angular.isDefined($scope.vc.tmpModel.Cuenta)) {
                        $scope.vc.tmpModel.Cuenta.saldo = newValue;
                    } else {
                        $scope.vc.tmpModel.Cuenta = {
                            saldo: newValue
                        };
                    }
                }
            });
            //ViewState - Entity: Cuenta, Attribute: cliente
            $scope.vc.createViewState({
                id: "VA_CLIENTEVRZFOKBV_209786",
                componentStyle: [],
                label: "CNTAS.LBL_CNTAS_CLIENTEFQ_43709",
                format: "n0",
                decimals: 0,
                validationCode: 32,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.None,
                visible: designer.constants.mode.All
            });
            //watch tmpModel - Entity: Cuenta, Attribute: cliente
            $scope.$watch('vc.model.Cuenta.cliente', function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    if (angular.isDefined($scope.vc.tmpModel.Cuenta)) {
                        $scope.vc.tmpModel.Cuenta.cliente = newValue;
                    } else {
                        $scope.vc.tmpModel.Cuenta = {
                            cliente: newValue
                        };
                    }
                }
            });
            //ViewState - Command: Accept
            $scope.vc.createViewState({
                id: "T_CNTASUIONTSGU_110_ACCEPT",
                componentStyle: [],
                label: 'Accept',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Command: Cancel
            $scope.vc.createViewState({
                id: "T_CNTASUIONTSGU_110_CANCEL",
                componentStyle: [],
                label: 'Cancel',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Command: Command1
            $scope.vc.createViewState({
                id: "CM_TCNTASUI_SNN",
                componentStyle: [],
                label: "CNTAS.LBL_CNTAS_CREARCUNA_51334",
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            if ($scope.vc.parentVc) {
                $scope.vc.afterOpenGridDialog();
            }
        }
        $scope.isInvalid = function(form, field) {
            if (!field) {
                return false;
            }
            var submitted = $scope.vc.submitted[form.$name];
            return ((submitted || field.$dirty) && field.$invalid);
        };
        $scope._initPage_CRUDExecuteQueryEntities = function(page) {
            if (!designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
                if (page.hasTemporaryDataSupport && page.ejecTemporaryData && !page.hasTemporaryData) {
                    return $scope.vc.CRUDExecuteQueryEntities(page);
                } else if (page.hasCRUDSupport) {
                    return $scope.vc.CRUDExecuteQueryEntities(page);
                } else {
                    return page;
                }
            } else {
                return page;
            }
        };
        $scope._initPage_InitializeTrackers = function(page) {
            $scope.vc.addChangeEvents($scope);
            $scope.vc.crud.addTrackers($scope.vc.model);
            return page;
        };
        $scope._initPage_ChangeInitData = function(page) {
            return $scope.vc.changeInitData(page, $scope.vc);
        };
        $scope._initPage_ProcessRender = function(page) {
            if (page.hasSearchRenderEvent) {
                $scope.vc.render('VC_CREACIONNA_447110');
            }
            return page;
        };
        if ($scope.vc.isModal($scope) || $scope.vc.isDetailGrid($scope) || $scope.isDesignerInclude) {
            //para ventanas modales se usa ng-include con onload
            $scope.runLifeCycle = function() {
                var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
                if (threadLifeCycle) {
                    if (!$scope.isDesignerInclude) {
                        cobis.showMessageWindow.loading(true, "none");
                    }
                    $scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
                    cobis.showMessageWindow.loading(false);
                }
            };
        } else {
            //con ngView no funciona el $document.ready se cambia por $viewContentLoaded
            $scope.$on('$viewContentLoaded', function() {
                if ($scope.vc.loaded) {
                    //Si se esta regresando de otra pantalla
                    $scope.vc.addAfterInitDataFlags($scope);
                    $scope.vc.addChangeEvents($scope);
                    if (($scope.vc.hasOnCloseModalEvent && angular.isDefined($scope.vc.dialogParameters.autoSync) && $scope.vc.dialogParameters.autoSync === false) && ($scope.vc.dialogResponse || $scope.vc.customDialogResponse)) {
                        $scope.vc.onCloseModalEvent();
                    }
                    if ($scope.vc.dialogResponse || $scope.vc.customDialogResponse) {
                        $scope.vc.afterCloseGridDialog();
                    }
                    cobis.showMessageWindow.loading(false);
                } else {
                    //Si es la primera vez que se ejecuta la pantalla
                    var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
                    if (threadLifeCycle) {
                        $scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
                        cobis.showMessageWindow.loading(false);
                    }
                }
            });
        }
    }]);
}
if (typeof cobisMainModule === "undefined") {
    var cobisMainModule = cobis.createModule("VC_CREACIONNA_447110", ["ngResource", "ngRoute", "kendo.directives", "ui.bootstrap", "oc.lazyLoad", "pascalprecht.translate", cobis.modules.CONTAINER, "designerModule"], ["DSGNR", "CNTAS"]);
    cobisMainModule.config(["$controllerProvider", "$compileProvider", "$filterProvider", "$locationProvider", "$routeProvider", "$provide", "$translateProvider", "$translatePartialLoaderProvider", "$ocLazyLoadProvider",

    function($controllerProvider, $compileProvider, $filterProvider, $locationProvider, $routeProvider, $provide, $translateProvider, $translatePartialLoaderProvider, $ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            asyncLoader: $script
        });
        $locationProvider.html5Mode(true);
        cobisMainModule.controllerProvider = $controllerProvider;
        cobisMainModule.compileProvider = $compileProvider;
        cobisMainModule.routeProvider = $routeProvider;
        cobisMainModule.filterProvider = $filterProvider;
        cobisMainModule.provide = $provide;
        var culture = cobis.userContext.getValue(cobis.constant.CULTURE);
        $routeProvider.when("/VC_CREACIONNA_447110", {
            templateUrl: "VC_CREACIONNA_447110_FORM.html",
            controller: "VC_CREACIONNA_447110_CTRL",
            label: "creacionCuenta",
            resolve: {
                i18n: function($translatePartialLoader, $translate) {
                    cobis.showMessageWindow.customLoading(true);
                    $translatePartialLoader.addPart('DSGNR');
                    $translatePartialLoader.addPart('CNTAS');
                    return $translate.use(cobis.userContext.getValue(cobis.constant.CULTURE)).then(function() {
                        return $translate.refresh().then(function() {
                            cobis.showMessageWindow.customLoading(false);
                        });
                    });
                }
            }
        }).otherwise({
            redirectTo: function(routeParams, path, search) {
                return "/VC_CREACIONNA_447110?" + $.param(search);
            }
        });
        VC_CREACIONNA_447110(cobisMainModule);
    }]);
} else {
    VC_CREACIONNA_447110(cobisMainModule);
}