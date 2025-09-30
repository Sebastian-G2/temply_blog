
// 1. Define la función gtag y el estado de consentimiento por defecto.
// Esto DEBE ejecutarse antes de que se cargue GTM.
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied'
});

// 2. Configuración de Klaro!
window.klaroConfig = {
  // La versión de la configuración. Si la cambias, se le volverá a pedir
  // consentimiento a todos los usuarios.
  version: 1,

  // Si es `true`, Klaro esperará a que llames a `klaro.show()` para mostrarse.
  // Lo queremos en `false` para que se muestre automáticamente.
  noAutoLoad: false,

  // Si es `true`, los usuarios pueden cerrar el banner sin tomar una decisión.
  // Es mejor ponerlo en `false` para forzar una elección.
  hideDeclineAll: false,
  hideLearnMore: false,
  acceptAll: true,
  
  // Puedes personalizar los textos aquí.
  translations: {
    es: {
      consentModal: {
        title: 'Este sitio web utiliza cookies',
        description: 'Utilizamos cookies para mejorar tu experiencia en nuestro sitio. Algunas son esenciales para su funcionamiento, mientras que otras nos ayudan a entender cómo interactúas con él.',
        privacyPolicy: 'Política de Privacidad'
      },
      consentNotice: {
        description: 'Usamos cookies para mejorar tu experiencia. ¿Nos permites usarlas?',
        learnMore: 'Saber más'
      },
      ok: 'Ok',
      accept: 'Aceptar',
      acceptAll: 'Aceptar todo',
      decline: 'Rechazar',
      declineAll: 'Rechazar todo',
      close: 'Cerrar',
      purposes: 'Propósitos',
      purpose: 'Propósito',
      app: {
        purpose: 'Propósitos',
        purposes: 'Propósitos',
        required: 'Necesarias',
      },
      apps: {
        'google-analytics': {
          title: 'Google Analytics 4',
          description: 'Recopila estadísticas de uso del sitio para mejorar nuestros contenidos.',
        },
      },
    },
  },

  // Define las aplicaciones que usan cookies.
  apps: [
    {
      name: 'google-analytics',
      default: false, // No se activa por defecto
      title: 'Google Analytics 4',
      purposes: ['analytics'],
      cookies: [
        /_ga_.*/,
        /_gid/,
        /_ga/
      ],
      required: false,
      optOut: false,
      // Esta función se llama cuando el usuario acepta este servicio.
      callback: function(consent, app) {
        if (consent) {
          gtag('consent', 'update', {
            'analytics_storage': 'granted'
          });
        }
      },
    },
  ],
};
