self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('mi-cache')
        .then(cache => {
          return cache.addAll([
            'index.html',
            'index_en.html',

            'css/estilo.css',

            'img/Conocimientos/CSS.png',
            'img/Conocimientos/Flutter.png',
            'img/Conocimientos/GitHub.png',
            'img/Conocimientos/HTML.png',
            'img/Conocimientos/Java.png',
            'img/Conocimientos/JavaScript.png',
            'img/Conocimientos/Laravel.png',
            'img/Conocimientos/PHP.png',
            'img/Conocimientos/React_Native.png',
            'img/Conocimientos/SQL.png',

            'img/Currículums/currículum_español.png',
            'img/Currículums/currículum_inglés.png',

            'img/Proyectos/Adivina_la_escena/adivina_la_escena_1.png',
            'img/Proyectos/Adivina_la_escena/adivina_la_escena_2.png',
            'img/Proyectos/Adivina_la_escena/adivina_la_escena_3.png',
            'img/Proyectos/Adivina_la_escena/adivina_la_escena_4.png',
            'img/Proyectos/Adivina_la_escena/adivina_la_escena_5.png',

            'img/Proyectos/Control_ahorro/control_ahorro_1.png',
            'img/Proyectos/Control_ahorro/control_ahorro_2.png',
            'img/Proyectos/Control_ahorro/control_ahorro_3.png',
            'img/Proyectos/Control_ahorro/control_ahorro_4.png',
            'img/Proyectos/Control_ahorro/control_ahorro_5.png',
            'img/Proyectos/Control_ahorro/control_ahorro_6.png',

            'img/Proyectos/Food_Delivery/food_delivery_1.png',
            'img/Proyectos/Food_Delivery/food_delivery_2.png',
            'img/Proyectos/Food_Delivery/food_delivery_3.png',
            'img/Proyectos/Food_Delivery/food_delivery_4.png',
            'img/Proyectos/Food_Delivery/food_delivery_5.png',

            'img/Proyectos/Hot_Cars/hot_cars_1.png',
            'img/Proyectos/Hot_Cars/hot_cars_2.png',
            'img/Proyectos/Hot_Cars/hot_cars_3.png',
            'img/Proyectos/Hot_Cars/hot_cars_4.png',
            'img/Proyectos/Hot_Cars/hot_cars_5.png',
            'img/Proyectos/Hot_Cars/hot_cars_6.png',
            'img/Proyectos/Hot_Cars/hot_cars_7.png',

            'img/Proyectos/On-linebooks/on-linebooks_1.png',
            'img/Proyectos/On-linebooks/on-linebooks_2.png',
            'img/Proyectos/On-linebooks/on-linebooks_3.png',
            'img/Proyectos/On-linebooks/on-linebooks_4.png',
            'img/Proyectos/On-linebooks/on-linebooks_5.png',

            'img/Proyectos/Portafolio_JS/portafolio_js_1.png',
            'img/Proyectos/Portafolio_JS/portafolio_js_2.png',
            'img/Proyectos/Portafolio_JS/portafolio_js_3.png',
            'img/Proyectos/Portafolio_JS/portafolio_js_4.png',
            'img/Proyectos/Portafolio_JS/portafolio_js_5.png',

            'img/Proyectos/Punto_de_venta_Productos_Rivera/punto_de_venta_productos_rivera_1.png',
            'img/Proyectos/Punto_de_venta_Productos_Rivera/punto_de_venta_productos_rivera_2.png',
            'img/Proyectos/Punto_de_venta_Productos_Rivera/punto_de_venta_productos_rivera_3.png',
            'img/Proyectos/Punto_de_venta_Productos_Rivera/punto_de_venta_productos_rivera_4.png',
            'img/Proyectos/Punto_de_venta_Productos_Rivera/punto_de_venta_productos_rivera_5.png',
            'img/Proyectos/Punto_de_venta_Productos_Rivera/punto_de_venta_productos_rivera_6.png',

            'img/Proyectos/Redes_y_Servicios_UTEsc/sistema_redes_y_servicios_utesc_1.png',
            'img/Proyectos/Redes_y_Servicios_UTEsc/sistema_redes_y_servicios_utesc_2.png',
            'img/Proyectos/Redes_y_Servicios_UTEsc/sistema_redes_y_servicios_utesc_3.png',
            'img/Proyectos/Redes_y_Servicios_UTEsc/sistema_redes_y_servicios_utesc_4.png',
            'img/Proyectos/Redes_y_Servicios_UTEsc/sistema_redes_y_servicios_utesc_5.png',

            'img/Proyectos/Sistema_area_de_proyectos_SITEHASA/sistema_area_de_proyectos_sitehasa_1.png',
            'img/Proyectos/Sistema_area_de_proyectos_SITEHASA/sistema_area_de_proyectos_sitehasa_2.png',
            'img/Proyectos/Sistema_area_de_proyectos_SITEHASA/sistema_area_de_proyectos_sitehasa_3.png',
            'img/Proyectos/Sistema_area_de_proyectos_SITEHASA/sistema_area_de_proyectos_sitehasa_4.png',
            'img/Proyectos/Sistema_area_de_proyectos_SITEHASA/sistema_area_de_proyectos_sitehasa_5.png',

            'img/Conalep.png',
            'img/english.png',
            'img/Formal1.jpg',
            'img/mexico.png',
            'img/UTESC.png',
          ]);
        })
    );
});
  
self.addEventListener('activate', event => {
    const cacheWhitelist = ['mi-cache'];
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
});  

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Devuelve el recurso de la caché
        }
        return fetch(event.request); // O hace la petición a la red
      })
  );
});
