import { HttpRequest, HttpEvent, HttpXsrfTokenExtractor, HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { inject } from '@angular/core';

export const xsrfTokenInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {

	const xsrfTokenService: HttpXsrfTokenExtractor = inject(HttpXsrfTokenExtractor);
	const timezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
	const locale: string = Intl.DateTimeFormat().resolvedOptions().locale;
	const headerCSRF: string = 'X-XSRF-TOKEN';
	const xsrfToken: string | null = xsrfTokenService.getToken();

	const reqWithCredentials: HttpRequest<unknown> = req.clone({ withCredentials: true });
	const reqWithHeaders: HttpRequest<unknown> = reqWithCredentials.clone(
		{
			setHeaders:
			{
				'Accept': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
				'Time-Zone': timezone,
				'Accept-Language': locale,
			},
		}
	);

	let reqWithXSRFToken: HttpRequest<unknown> = reqWithHeaders.clone();
	if (req.method !== 'GET' && req.method !== 'HEAD') {
		if (xsrfToken !== null && !req.headers.has(headerCSRF)) {
			reqWithXSRFToken = reqWithXSRFToken.clone(
				{
					headers: reqWithHeaders.headers.set(headerCSRF, xsrfToken)
				}
			);
		}
	}

	return next(reqWithXSRFToken)
		.pipe(
			catchError((error: HttpErrorResponse) => {
				// Si recibimos un 401, eso significa que no estamos autorizados
				// Aquí podríamos redirigir al usuario a la página de login
				// o mostrar un mensaje de error
				throw error;
			})
		);
}
