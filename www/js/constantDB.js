(function(){
  'use strict';
  angular.module('app')
    .constant('DB_CONFIG', {
	    name: 'DB',
	    tables: [
	      	{
	            name: 'ordenes',
	            columns: [
	                {name: 'ACC_FINCA', type: 'text'},
	                {name: 'AOL', type: 'text'},
	                {name: 'CICLO', type: 'integer'},
	                {name: 'COD_TIPO_COR', type: 'text'},
	                {name: 'COLONIA', type: 'text'},
	                {name: 'DEUDA', type: 'text'},
	                {name: 'DIRECCION', type: 'text'},
	                {name: 'ESTADO_ORDEN', type: 'text'},
	                {name: 'EST_OS', type: 'text'},
	                {name: 'F_ESTM_REST', type: 'text'},
	                {name: 'MUNICIPIO', type: 'text'},
	                {name: 'NIS_RAD', type: 'text'},
	                {name: 'NOMBRE', type: 'text'},
	                {name: 'NUM_OS', type: 'text'},
	                {name: 'OBS', type: 'text'},
	                {name: 'RECIBOS_VENCIDOS', type: 'text'},
	                {name: 'REFERENCIA', type: 'text'},
	                {name: 'RUTA', type: 'text'},
	                {name: 'TARIFA', type: 'text'},
	                {name: 'TIPO', type: 'text'},
	                {name: 'FECHA', type:'text'},
	                {name: 'LAT', type:'text'},
	                {name: 'LON', type:'text'},
	                {name: 'SINC', type: 'text'}
	            ]
	        },
	        {
	            name: 'reconexiones',
	            columns: [
	                {name: 'ACC_FINCA', type: 'text'},
	                {name: 'AOL', type: 'text'},
	                {name: 'CICLO', type: 'integer'},
	                {name: 'COD_TIPO_COR', type: 'text'},
	                {name: 'COLONIA', type: 'text'},
	                {name: 'DEUDA', type: 'text'},
	                {name: 'DIRECCION', type: 'text'},
	                {name: 'ESTADO_ORDEN', type: 'text'},
	                {name: 'EST_OS', type: 'text'},
	                {name: 'F_ESTM_REST', type: 'text'},
	                {name: 'MUNICIPIO', type: 'text'},
	                {name: 'NIS_RAD', type: 'text'},
	                {name: 'NOMBRE', type: 'text'},
	                {name: 'NUM_OS', type: 'text'},
	                {name: 'OBS', type: 'text'},
	                {name: 'RECIBOS_VENCIDOS', type: 'text'},
	                {name: 'REFERENCIA', type: 'text'},
	                {name: 'RUTA', type: 'text'},
	                {name: 'TARIFA', type: 'text'},
	                {name: 'TIPO', type: 'text'},
	                {name: 'NUM_APA', type: 'text'},
	                {name: 'F_INST', type: 'text'},
	                {name: 'LAT', type:'text'},
	                {name: 'LON', type:'text'},
	                {name: 'SINC', type: 'text'}
	            ]
	        },
	        {
	        	name: 'images_os',
	        	columns: [
	        		{name: 'id', type: 'integer PRIMARY KEY AUTOINCREMENT'},
	        		{name: 'num_os', type: 'text'},
	        		{name: 'nis', type: 'text'},
	        		{name: 'consecutivo', type: 'integer'},
	        		{name: 'image', type: 'text'},
	        		{name: 'estado', type: 'text'},
	        		{name: 'lat', type: 'text'},
	        		{name: 'lon', type: 'text'},
	        		{name: 'tipo_os', type: 'text'},
	        		{name: 'timestamp', type: 'NUMERIC'},
	        		{name: 'sync', type: 'NUMERIC DEFAULT 0'}
	        	]
	        },
	        {
	        	name: 'CatalogoResolCorte',
	        	columns: [
	        		{name: 'id', type: 'integer PRIMARY KEY AUTOINCREMENT'},
	        		{name: 'COD', type: 'text'},
	        		{name: 'DESC_COD', type: 'text'}
	        	]
	        },
	        {
	        	name: 'CodigosAnomalias',
	        	columns: [
	        		{name: 'id', type: 'integer PRIMARY KEY AUTOINCREMENT'},
	        		{name: 'CODIGO', type: 'text'},
	        		{name: 'NOMBRE', type: 'text'}
	        	]
	        },
	        {
	        	name: 'MensajesRecibo',
	        	columns: [
	        		{name: 'id', type: 'integer PRIMARY KEY AUTOINCREMENT'},
	        		{name: 'NOM_MSG', type: 'text'},
	        		{name: 'IND_PARAMETROS', type: 'text'},
	        		{name: 'LINEA_MSG', type: 'text'}
	        	]
	        },
	        {
	        	name: 'MensajesPametros',
	        	columns: [
	        		{name: 'id', type: 'integer PRIMARY KEY AUTOINCREMENT'},
	        		{name: 'NOM_MSG', type: 'text'},
	        		{name: 'IND_PARAMETROS', type: 'text'},
	        		{name: 'LINEA_MSG', type: 'text'}
	        	]
	        },
	        {
	        	name: 'RangosTarifas',
	        	columns: [
	        		{name: 'id', type: 'integer PRIMARY KEY AUTOINCREMENT'},
	        		{name: 'COD_TAR', type: 'text'},
	        		{name: 'RANGO_MINIMO', type: 'integer'},
	        		{name: 'RANGO_MAXIMO', type: 'integer'},
	        		{name: 'PREC_CONCEPTO', type: 'NUMERIC'},
	        		{name: 'SADM_PRECIO_ADICIONAL', type: 'NUMERIC'}
	        	]
	        },
	        {
	        	name: 'RangosTarifasTrans',
	        	columns: [
	        		{name: 'id', type: 'integer PRIMARY KEY AUTOINCREMENT'},
	        		{name: 'COD_TAR', type: 'text'},
	        		{name: 'RANGO_MINIMO', type: 'integer'},
	        		{name: 'RANGO_MAXIMO', type: 'integer'},
	        		{name: 'PREC_CONCEPTO', type: 'NUMERIC'},
	        		{name: 'SADM_PRECIO_ADICIONAL', type: 'NUMERIC'}
	        	]
	        },
	        {
	        	name: 'Rutas_Lecturista',
	        	columns: [
	        		{name: 'id', type: 'integer PRIMARY KEY AUTOINCREMENT'},
	        		{name: 'RUTA', type: 'text'},
	        		{name: 'ITINERARIO', type: 'integer'},
	        		{name: 'COD_UNICOM', type: 'integer'},
	        		{name: 'ID_LEC', type: 'integer'},
	        		{name: 'CICLO', type: 'integer'},
	        		{name: 'ESTADO', type: 'text'},
	        		{name: 'Num_Registros', type: 'integer'},
	        	]
	        },
	        {
	        	name: 'LibrosFacturacionSitio',
	        	columns: [
	        		{name: 'id', type: 'integer PRIMARY KEY AUTOINCREMENT'},
	        		{name: 'SEC_REG', type: 'text'},
	        		{name: 'NOMBRE', type: 'text'},
	        		{name: 'ANOMALIA1', type: 'text'},
	        		{name: 'ANOMALIA2', type: 'text'},
	        		{name: 'NOOFICIAL', type: 'text'},
	        		{name: 'DIRECCION', type: 'text'},
	        		{name: 'COLONIA', type: 'text'},
	        		{name: 'BISOFICIAL', type: 'text'},
	        		{name: 'NOMEDIDOR', type: 'text'},
	        		{name: 'LECT_MAX', type: 'text'},
	        		{name: 'LECT_ANT', type: 'text'},
	        		{name: 'ADEUDO_ANTERIOR', type: 'text'},
	        		{name: 'USUARIO_CUMPLIDO', type: 'text'},
	        		{name: 'CSMO_DESCTO', type: 'text'},
	        		{name: 'CSMO_PROM', type: 'text'},
	        		{name: 'NIS_RAD', type: 'text'},
	        		{name: 'F_LECT_ANT', type: 'text'},
	        		{name: 'RFC', type: 'text'},
	        		{name: 'GIRO', type: 'text'},
	        		{name: 'COD_CNAE', type: 'text'},
	        		{name: 'TARIFA', type: 'text'},
	        		{name: 'DES_TARIFA', type: 'text'},
	        		{name: 'COD_POSTAL', type: 'text'},
	        		{name: 'COB_ANT', type: 'text'},
	        		{name: 'NIVEL_UCUMPLIDO', type: 'text'},
	        		{name: 'DIAMETRO_CON', type: 'text'},
	        		{name: 'COD_UNICOM', type: 'text'},
	        		{name: 'IMPORTE_PROMEDIO', type: 'text'},
	        		{name: 'TIP_SUMINISTRO', type: 'text'},
	        		{name: 'COD_LOCAL', type: 'text'},
	        		{name: 'TIP_CLI', type: 'text'},
	        		{name: 'TIP_CTA', type: 'text'},
	        		{name: 'EST_SUM', type: 'text'},
	        		{name: 'RUTA', type: 'text'},
	        		{name: 'NUM_ITIN', type: 'text'},
	        		{name: 'RECIBOS_VENCIDOS', type: 'text'},
	        		{name: 'IMP_COB_ANT', type: 'text'},
	        		{name: 'ULT_IMP_PAGO_DOM', type: 'text'},
	        		{name: 'CANT_CUOTAS', type: 'text'},
	        		{name: 'IMP_CUOTA', type: 'text'},
	        		{name: 'IND_MACRO', type: 'text'},
	        		{name: 'IND_DOM_BF', type: 'text'},
	        		{name: 'IND_DOMIC', type: 'text'},
	        		{name: 'LIMIT_DOMI', type: 'text'},
	        		{name: 'LATANT', type: 'text'},
	        		{name: 'LONANT', type: 'text'},
	        		{name: 'FACTURADO', type: 'NUMERIC DEFAULT 0'}
	        	]
	        },
	        {
	        	name: 'images_facturacion',
	        	columns: [
	        		{name: 'id', type: 'integer PRIMARY KEY AUTOINCREMENT'},
	        		{name: 'num_os', type: 'text'},
	        		{name: 'nis', type: 'text'},
	        		{name: 'consecutivo', type: 'integer'},
	        		{name: 'image', type: 'text'},
	        		{name: 'estado', type: 'text'},
	        		{name: 'lat', type: 'text'},
	        		{name: 'lon', type: 'text'},
	        		{name: 'tipo_os', type: 'text'},
	        		{name: 'sync', type: 'NUMERIC DEFAULT 0'}
	        	]
	        },
	        {
	        	name: 'CtesFacturacionSitio',
	        	columns: [
	        		{name: 'id', type: 'integer PRIMARY KEY AUTOINCREMENT'},
	        		{name: 'PORC_DCTO_USR_CUMPL', type: 'text'},
	        		{name: 'COD_DCTO_USR_CUMPL', type: 'text'},
	        		{name: 'DESC_USR_CUMPL', type: 'integer'},
	        		{name: 'PORC_DCTO_BONIF', type: 'text'},
	        		{name: 'TOPE_CSMO_DCTO_BONIF', type: 'text'},
	        		{name: 'VPB_MED_3_4', type: 'text'},
	        		{name: 'VPB_MED_1', type: 'text'},
	        		{name: 'VPB_MED_1_5', type: 'text'},
	        		{name: 'VPB_MED_2', type: 'text'},
	        		{name: 'VPB_MED_2_5', type: 'text'},
	        		{name: 'PORC_CSMO_MAX', type: 'text'},
	        		{name: 'PORC_IMPORTE_MAX', type: 'text'},
	        		{name: 'PORC_USO_DREN', type: 'text'},
	        		{name: 'PORC_IVA', type: 'text'},
	        		{name: 'PORC_SANEAMIENTO', type: 'text'},
	        		{name: 'DIAS_VENC', type: 'text'},
	        		{name: 'FOTO_PREDIO', type: 'text'}
	        	]
	        },
	        {
	        	name: 'ConceptosLibro',
	        	columns: [
	        		{name: 'id', type: 'integer PRIMARY KEY AUTOINCREMENT'},
	        		{name: 'NIS_RAD', type: 'text'},
	        		{name: 'SEC_NIS', type: 'text'},
	        		{name: 'CO_CONCEPTO', type: 'integer'},
	        		{name: 'DESC_COD', type: 'text'},
	        		{name: 'TOPE_CSMO_DCTO_BONIF', type: 'text'},
	        		{name: 'IND_IMPUESTO', type: 'text'},
	        		{name: 'IMPORTE', type: 'text'},
	        		{name: 'AOL_FIN', type: 'text'},
	        		{name: 'COD_TAR', type: 'text'}
	        	]
	        },
	        {
	            name: 'pendpagoordenes',
	            columns: [
	                {name: 'ACC_FINCA', type: 'text'},
	                {name: 'AOL', type: 'text'},
	                {name: 'CICLO', type: 'integer'},
	                {name: 'COD_TIPO_COR', type: 'text'},
	                {name: 'COLONIA', type: 'text'},
	                {name: 'DEUDA', type: 'text'},
	                {name: 'DIRECCION', type: 'text'},
	                {name: 'ESTADO_ORDEN', type: 'text'},
	                {name: 'EST_OS', type: 'text'},
	                {name: 'F_ESTM_REST', type: 'text'},
	                {name: 'MUNICIPIO', type: 'text'},
	                {name: 'NIS_RAD', type: 'text'},
	                {name: 'NOMBRE', type: 'text'},
	                {name: 'NUM_OS', type: 'text'},
	                {name: 'OBS', type: 'text'},
	                {name: 'RECIBOS_VENCIDOS', type: 'text'},
	                {name: 'REFERENCIA', type: 'text'},
	                {name: 'RUTA', type: 'text'},
	                {name: 'TARIFA', type: 'text'},
	                {name: 'TIPO', type: 'text'},
	                {name: 'FECHA', type:'text'},
	                {name: 'LAT', type:'text'},
	                {name: 'LON', type:'text'},
	                {name: 'Pagado', type: 'NUMERIC DEFAULT 0'}
	            ]
	        },
	        {
	        	name: 'ordenesPend',
	        	columns: [
	        		{name: 'id', type: 'integer PRIMARY KEY AUTOINCREMENT'},
	        		{name: 'COMENTARIO_VISITA', type: 'text'},
	        		{name: 'EST_OS', type: 'text'},
	        		{name: 'NUM_OS', type: 'text'},
	        		{name: 'TIPO_CORTE_EJE', type: 'text'},
	        		{name: 'USUARIO', type: 'text'}
	        	]
	        }
	    ]
	})
})();
