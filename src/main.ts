import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as Sentry from "@sentry/vue";

import App from './App.vue'
import router from './router'

import './assets/main.css'

import coupon from 'v-coupon'
const app = createApp(App)
app.use(coupon)

app.use(createPinia())
app.use(router)
app.config.globalProperties.name = 'java'
Sentry.init({
    app,
    dsn: "https://1e7b8da885c7416aa45163899e2e4598@o4504949066170368.ingest.sentry.io/4504949072461824",
    integrations: [
      new Sentry.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracePropagationTargets: ["localhost", "my-site-url.com", /^\//],
      }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 0.5,
});

app.mount('#app')
