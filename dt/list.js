appConfig.table = (function () {
    var obj = {};
    obj.configureTable = function (params) {
        $(function () {
            var exportOptions = { columns: [0, 1, 2], orthogonal: "export" };
            var table = $('#datatable').DataTable({
                responsive: true,
                buttons: [
                    {
                        text: '<i"> Recargar</i>',
                        titleAttr: 'Recargar tabla',
                        className: 'btn btn-primary',
                        action: function (e, dt, config) {
                            dt.ajax.reload();
                        }
                    },
                ],
                ajax: function (data, callback, settings) {
                    $.ajax({
                        url: params.listUrl,
                        type: "GET",
                        dataType: "json",
                        success: function (response) {
                            callback(response);
                        },
                    });
                },
                columnDefs: [
                    {
                        targets: 0,
                        data: 'campo1'
                    },
                    {
                        targets: 1,
                        data: 'campo1'
                    },
                    {
                        targets: 2,
                        className: "text-center",
                        width: 150,
                        render: function (data, type, row) {
                            botones = "";
                            if (type == "display") {
                                botones += '<a title="Editar" class="btn btn-primary btn-sm edit-btn" data-style="zoom-in" href="Controller/Update"' + row.campo1 + '">Editar</a> | '
                                botones += '<a title="Eliminar" class="btn btn-danger btn-sm" href="Marcas/Update"' + row.campo1 + '">Eliminar</a> ';
                                  
                            }
                            return botones;
                        }
                    }
                ]
            });
        });
    };
    return obj;
}());

//appConfig.Marcas = (function () {
//    var obj = {};
//    obj.configureTable = function (params) {
//        $(function () {
//            var exportOptions = { columns: [0, 1, 2], orthogonal: "export" };
//            var table = $('#datatable').DataTable({
//                responsive: true,
//                buttons: [
//                    {
//                        text: '<i class="mdi mdi-refresh"> Recargar</i>',
//                        titleAttr: 'Recargar tabla',
//                        className: 'btn btn-primary',
//                        action: function (e, dt, config) {
//                            dt.ajax.reload();
//                        }
//                    },
//                    {
//                        extend: "collection",
//                        text: '<i class="mdi mdi-export"> Exportar</i>',
//                        className: 'btn btn-primary',
//                        titleAttr: 'Exportar esta tabla',
//                        buttons: [
//                            {
//                                extend: "excelHtml5",
//                                text: '<i class="mdi mdi-file-excel"> Excel</i>',
//                                exportOptions: exportOptions
//                            },
//                            {
//                                extend: "csvHtml5",
//                                text: '<i class="mdi mdi-file-excel"> CSV</i>',
//                                exportOptions: exportOptions
//                            },
//                            {
//                                extend: "pdfHtml5",
//                                text: '<i class="mdi mdi-file-pdf"> PDF</i>',
//                                exportOptions: exportOptions
//                            }
//                        ]
//                    },
//                ],
//                ajax: function (data, callback, settings) {
//                    $.ajax({
//                        url: params.listUrl,
//                        type: "GET",
//                        dataType: "json",
//                        success: function (response) {
//                            callback(response);
//                        },
//                    });
//                },
//                columnDefs: [
//                    {
//                        targets: 0,
//                        data: 'mar_Id'
//                    },
//                    {
//                        targets: 1,
//                        data: 'mar_Descripcion'
//                    },
//                    {
//                        targets: 3,
//                        className: "text-center",
//                        width: 150,
//                        render: function (data, type, row) {
//                            botones = "";
//                            if (type == "display") {
//                                botones += '<a title="Editar" class="btn btn-primary btn-sm edit-btn" data-style="zoom-in" href="Marcas/Update"' + row.priod_Id + '">Editar</a> | '
//                                botones += '<a title="Eliminar" class="btn btn-danger btn-sm" href="Marcas/Update"' + row.priod_Id + '">Eliminar</a> ';

//                            }
//                            return botones;
//                        }
//                    }
//                ]
//            });
//        });
//    };
//    return obj;
//}());





