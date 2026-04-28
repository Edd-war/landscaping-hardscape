module.exports = {
	apps: [{
		name: "ssr_landscaping-hardscape_site",
		script: "npm",
		args: "run serve:ssr:landscaping-hardscape",
		cwd: "./",
		max_restarts: 10,
		restart_delay: 5000,
		env: {
			NODE_ENV: "production",
			PUERTO_SSR_SITIO_LANDSCAPING_HARDSCAPE: 4052
		}
	}]
}
