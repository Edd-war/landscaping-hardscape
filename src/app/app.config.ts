import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withHttpTransferCacheOptions, withI18nSupport, withIncrementalHydration } from '@angular/platform-browser';

// PRIMENG & ANIMATIONS
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideHttpClient, withFetch, withInterceptors, withXsrfConfiguration } from '@angular/common/http';
import { dateFormatResponseInterceptor } from '@interceptors/date-format-response.interceptor';
import { xsrfTokenInterceptor } from '@interceptors/xsrf-token.interceptor';

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZonelessChangeDetection(),
		provideAnimationsAsync(),
		provideAnimations(),
		provideRouter(routes),
		provideClientHydration(
			withI18nSupport(),
			withIncrementalHydration(),
			withHttpTransferCacheOptions({
				includePostRequests: true,
				includeRequestsWithAuthHeaders: true,
			}),
		),
		provideHttpClient(
			withFetch(),
			withInterceptors([
				dateFormatResponseInterceptor,
				xsrfTokenInterceptor,
			]),
			withXsrfConfiguration({
				cookieName: 'XSRF-TOKEN',
				headerName: 'X-XSRF-TOKEN',
			}),
		),
		providePrimeNG({
			ripple: true,
			theme: {
				preset: Aura,
				options: {
					darkModeSelector: '.dark',
					cssLayer: {
						name: 'primeng',
						order: 'theme, base, primeng',
					}
				}
			}
		})
	]
};
