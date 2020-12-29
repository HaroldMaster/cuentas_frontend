/*
 * Archivo: Command1_CM_TCNTASUI_SNN.java
 *
 * Esta aplicacion es parte de los paquetes bancarios propiedad de COBISCORP.
 * Su uso no autorizado queda expresamente prohibido asi como cualquier
 * alteracion o agregado hecho por alguno de sus usuarios sin el debido
 * consentimiento por escrito de COBISCORP.
 * Este programa esta protegido por la ley de derechos de autor y por las
 * convenciones internacionales de propiedad intelectual. Su uso no
 * autorizado dara derecho a COBISCORP para obtener ordenes de secuestro
 * o retencion y para perseguir penalmente a los autores de cualquier infraccion.
 */

package com.cobiscorp.cobis.cntas.customevents.impl.form.executecommand;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.ReferenceCardinality;
import org.apache.felix.scr.annotations.Service;

import com.cobiscorp.cobis.cntas.model.TipoCuenta;
import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.designer.api.DataEntity;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.api.customization.IExecuteCommand;
import com.cobiscorp.designer.api.customization.arguments.IExecuteCommandEventArgs;
import com.cobiscorp.designer.api.managers.DesignerManagerException;
import com.cobiscorp.designer.bli.api.IBLIExecutor;
@Component
@Service({ IExecuteCommand.class })
@Properties({ @Property(name = "task.module", value = "CNTAS"),
             @Property(name = "task.submodule", value = "ADMIN"),
             @Property(name = "task.id", value = "T_CNTASUIONTSGU_110"),
             @Property(name = "task.version", value = "1.0.0"),
             @Property(name = "task.controlId", value = "CM_TCNTASUI_SNN")})

public class Command1_CM_TCNTASUI_SNN implements IExecuteCommand {
	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(Command1_CM_TCNTASUI_SNN.class);
	@Reference(bind = "setBLI3281_bli_insertar_cuenta_ahorros", unbind = "unsetBLI3281_bli_insertar_cuenta_ahorros", cardinality = ReferenceCardinality.MANDATORY_UNARY, target = "(bli.id=BLI3281_bli_insertar_cuenta_ahorros)")
	private IBLIExecutor bLI3281_bli_insertar_cuenta_ahorros;

	public void setBLI3281_bli_insertar_cuenta_ahorros(com.cobiscorp.designer.bli.api.IBLIExecutor bLI3281_bli_insertar_cuenta_ahorros) {
		this.bLI3281_bli_insertar_cuenta_ahorros = bLI3281_bli_insertar_cuenta_ahorros;
	}

	public void unsetBLI3281_bli_insertar_cuenta_ahorros(com.cobiscorp.designer.bli.api.IBLIExecutor bLI3281_bli_insertar_cuenta_ahorros) {
		this.bLI3281_bli_insertar_cuenta_ahorros = null;
	}
	@Reference(bind = "setBLI7954_bli_insertar_cuenta_corriente", unbind = "unsetBLI7954_bli_insertar_cuenta_corriente", cardinality = ReferenceCardinality.MANDATORY_UNARY, target = "(bli.id=BLI7954_bli_insertar_cuenta_corriente)")
	private IBLIExecutor bLI7954_bli_insertar_cuenta_corriente;

	public void setBLI7954_bli_insertar_cuenta_corriente(com.cobiscorp.designer.bli.api.IBLIExecutor bLI7954_bli_insertar_cuenta_corriente) {
		this.bLI7954_bli_insertar_cuenta_corriente = bLI7954_bli_insertar_cuenta_corriente;
	}

	public void unsetBLI7954_bli_insertar_cuenta_corriente(com.cobiscorp.designer.bli.api.IBLIExecutor bLI7954_bli_insertar_cuenta_corriente) {
		this.bLI7954_bli_insertar_cuenta_corriente = null;
	}
	
	@Override
	public void executeCommand(DynamicRequest arg0, IExecuteCommandEventArgs arg1) {
		// TODO Auto-generated method stub
		try {
			
			if (logger.isDebugEnabled()) {
				logger.logDebug("Start executeCommand in Command1_CM_TCNTASUI_SNN");
			}
			DataEntity entity = arg0.getEntity("TipoCuenta");
		      String tipo = (String)entity.get(TipoCuenta.TIPO);
		      if (tipo.equals("C")) {
		        this.bLI7954_bli_insertar_cuenta_corriente.execute(arg0);
		      } else if (tipo.equals("A")) {
		        this.bLI3281_bli_insertar_cuenta_ahorros.execute(arg0);
		      }
		} catch (Exception ex) {
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
	}

}

