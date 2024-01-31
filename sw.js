// Etapas intalacion intalado activacion activado modeo de espera

// etapa 1 etapa de instalación solo se ejecuta na vez
//verifican versiones 
// cambios grandes v2.1238+
self.addEventListener('install', event=>{
    console.log('Etapa 1 de instalacion');


    const promptt = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log('etapa 2 recursos descargados');
            self.skipWaiting();
            resolve();
        }, 500);  //ESPERA DE 5s
    })
    event.waitUntil(promptt);
});


//etapa dos de activación 

//eliminar recursos obsoletos 
// modificar recursos necesarios
// eliminar versiones viejas de cache

self.addEventListener('activate', event=>{
    console.log('etapa 3 de activación');
    // self.skipWaiting();   activa el SW DESDE CODIGO 

})

//etapa en la que el usuario ocupa la aplicaciob

self.addEventListener('fetch', event=>{
    console.log('Etapa 4: Donde se ejecuta la funcionalidad del codigo');
    //desde aqui se manda a llamar.

    //esto modifica el css
    if(event.request.url.includes('css/style.css')){
        let nuevoCss = new Response(`
            body{
                height: 100%;
                background-color: #3fff;
                color: #eeeee;
                text-align: center;
            }        
            img{
                width: 200px;
            }
        `,{
            headers: {
                'Content-Type': 'text/css'
            }
        });
        event.respondWith(nuevoCss);

    }
})


//modo ocioso espera background
self.addEventListener('push', event=>{
    console.log('Etapa 5: Envio de notificaciones al usuario');
})








