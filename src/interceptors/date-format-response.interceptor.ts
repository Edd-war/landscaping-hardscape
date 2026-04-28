import { HttpRequest, HttpEvent, HttpResponse, HttpInterceptorFn, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const dateFormatResponseInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
	return next(req).pipe(
		map((event: HttpEvent<unknown>) => {
			if (event instanceof HttpResponse && event.body && typeof event.body === 'object') {
				convertirFechas(event.body);
			}
			return event;
		})
	);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- recursive JSON traversal requires any for property mutation
function convertirFechas(obj: any): any {
	if (obj instanceof Array) {
		for (let i = 0; i < obj.length; i++) {
			obj[i] = convertirFechas(obj[i]);
		}
	} else if (obj instanceof Object) {
		for (const key of Object.keys(obj)) {
			obj[key] = convertirFechas(obj[key]);
		}
	} else if (typeof obj === 'string') {
		// Expresión regular para fechas con "Z" (UTC)
		const regexUTC = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d+)?Z$/;

		const regexOffset = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d+)?([+-])(\d{2}):(\d{2})$/;
		// Expresión regular para fechas sin "Z" (hora local)
		const regexLocal = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}(?::\d{2})?$/;
		// 📌 Regex para solo fecha sin hora
		const regexSoloFecha = /^\d{4}-\d{2}-\d{2}$/;

		if (regexUTC.test(obj)) {
			// 📌 Fecha en UTC, se usa new Date() sin modificaciones
			obj = new Date(obj);
		} else if (regexOffset.test(obj)) {
			// 📌 Caso: Fecha con offset de zona horaria (+hh:mm o -hh:mm)
			obj = new Date(obj);
		} else if (regexLocal.test(obj)) {
			// 📌 Fecha sin "Z", se parsea manualmente a zona local
			const [fecha, hora] = obj.split(" ");
			const [año, mes, día] = fecha.split("-").map(Number);
			const [hh, mm, ss] = (hora ? hora.split(":") : ["00", "00", "00"]).map(Number);
			obj = new Date(año, mes - 1, día, hh, mm, ss || 0);
		}
		else if (regexSoloFecha.test(obj)) {
            // 📌 Solo fecha (YYYY-MM-DD), se toma medianoche en zona local
            const [año, mes, día] = obj.split("-").map(Number);
            obj = new Date(año, mes - 1, día, 0, 0, 0);
        }
	}

	return obj;
}
