1. ¿Qué es y cómo funciona el elemento ``<RouterOutlet>``?

Es una directiva que viene de ``RouterModule`` y mapea las URL a los componentes que se deben cargar y mostrar cuando el usuario navega a una ruta en particular.

2. ¿Para qué se utilizan las directivas ``routerLink`` y ``routerLinkActive``? ¿Existen más directivas relacionadas con el ``router``?

``routerLink`` nos asegura que todas la navegación ocurre dentro de Angular, mientra que ``routerLinkActive`` añade el argumento que se le pasa como una clase de css cuando el enlace actual del navegador coincide con la directiva ``routerLink``.

Además de estas, existen las siguietnes directivas:
- ``router-outlet``: Indica dónde se debe renderizar el contenido de la ruta actual en la plantilla principal (explicado en el punto anterior)
- ``routerLinkWithHref``: Es una alternativa a ``routerLink`` y se utiliza en enlaces ``<a>``
- ``routerLinkActiveOptions``: Se utiliza en conjunto con ``routerLinkActive`` para especificar opciones adicionales

3. ¿Qué diferencias hay entre los servicios ``Router`` y ``ActivatedRoute``? ¿Qué funcionalidades tiene cada uno de estos servicios? 

El servicio ``Router`` se encarga de gestionar la navegación en la aplicación, mientras que ``ActivatedRoute`` se utiliza para acceder a la información de la ruta activa.

Las funcionalidades más importantes de ``Router`` son:

- ``navigate``: Permite navegar a una ruta específica. 
- ``navigateForward`` y ``navigateBack``: Navega hacia adelante o hacia atrás en el historial de navegación.
- ``events``: Proporciona un Observable que emite eventos de navegación, como cambios de ruta, inicio de navegación, navegación exitosa, entre otros

Las funcionalidades más importantes de ``ActivatedRoute`` son:

- ``params``: Proporciona un Observable que emite los parámetros de la ruta actual como un objeto
- ``queryParamMap``: Proporciona un Observable que emite los parámetros de consulta de la ruta actual como un objeto de tipo ``ParamMap``
- ``data``: Proporciona acceso a los datos asociados a la ruta actual
- ``fragment``: Proporciona acceso al fragmento de URL de la ruta actual

4. ¿Qué son las ``Route Guards``? ¿Cómo se usan las guardas en Angular?

Nos permite controlar y proteger las rutas de tu aplicación, determinan si una ruta puede ser accedida y que acciones se pueden realizar antes de que la misma se active y también puede redirigir o mostrar una página de error.

Hay distintos tipos de guards, por lo que tienen distintos usos, como por ejemplo:

- ``CanActivateFn``: Determina si una ruta puede ser activada y permite la navegación a dicha ruta
- ``CanMatchFn``: Si todos los guards devuelven true, la navegación continua, mientras que si alguna no lo hace, la ruta se omite y se procesan otras configuraciones
- ``CanDeactivateFn``: Se usa para prevenir una navegación accidental fuera de la ruta solicitando al usuario que confirme una acción
- ``CanActivateChildFn``: Previene el acceso no autorizado a rutas hijas de una ruta padre

5. ¿Qué es la carga ``Lazy`` de los módulos de Angular? ¿Cómo se configura en Angular la carga ``Lazy``?

La carga ``Lazy`` nos permite cargar los módulos de nuestra aplicación Angular de manera asíncrona cuando se requieran, haciendo que la carga sea mucho más rápida dado que no tiene que cargarlo todo al inicio.

La carga Lazy se configura de la siguiente manera:
   - Debemos de tener una aplicación con ``routing``
   - Creamos un módulo con un componente al que diriguirse, así tendremos una funcionalidad que podemos cargar de manera asíncrona
   - En el modulo raíz de la aplicación, definimos una ruta para el módulo de la carga Lazy utilizando el método ``loadChildren `` seguido de una función import.


6. ¿Qué es/para qué son útiles los ``middlewares`` en el contexto de node.js?
¿Dónde estás usando ``middlewares`` en nuestra aplicación?


Los middlewares actucan como capas intermedias entre el servidor y las rutas, y pueden gestionar las peticiones y respuestas HTTP, por lo que estos pueden manipularlas. 

En nuestra aplicación usamos middlewares para validar datos y autenticar usuarios, aunque permite hacer otras muchas cosas.