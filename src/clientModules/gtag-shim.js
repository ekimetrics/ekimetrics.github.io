/**
 * Ensures window.gtag exists before Docusaurus gtag client runs (page_view on route change).
 * The official plugin only injects gtag scripts in production builds; without this, navigation
 * can throw when the global is missing (dev, blocked scripts, or load order).
 */
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM && typeof window.gtag !== 'function') {
	window.dataLayer = window.dataLayer || [];
	window.gtag = function gtag() {
		window.dataLayer.push(arguments);
	};
}
