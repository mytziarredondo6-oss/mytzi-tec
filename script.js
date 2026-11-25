const unidades = {

1: {

        titulo: "Unidad 1: Arquitectura de computadoras",

        contenido: `

            <section class="arquitecturas">


                <h2 class="titulo-seccion">

                    1.1 modulos arquitectura de computo

                </h2>

                <h3> 1.Arquitectura clasicas: </h3>


                <div class="comparacion-arquitecturas">


                    <!-- ARQUITECTURA VON NEUMANN -->

                    <article class="arquitectura">


                        <h4>

                            <strong style="color:black;"> Arquitectura de Von Neumann (Mauchly-Eckert)</strong>

                        </h4>


                        <p>

                            Utiliza una sola memoria principal y un bus

                            compartido para almacenar tanto las instrucciones

                            del programa como los datos. Presenta un cuello

                            de botella secuencial porque el procesador no

                            puede acceder a una instrucción y a un dato

                            al mismo tiempo.

                        </p>


                        <div class="diagrama">


                            <h4 class="titulo-diagrama">

                        <strong style="color: black;">  Arquitectura Von Neumann</strong>

                            </h4>


                            <div class="esquema">


                                <div class="cpu">

                                    <strong>CPU</strong>

                                    <span>Unidad de control</span>

                                    <span>ALU</span>

                                    <span>Registros</span>

                                </div>


                                <div class="bus">

                                    <span>Bus compartido</span>

                                    <div class="flecha">↔</div>

                                </div>


                                <div class="memoria memoria-compartida">

                                    <strong style="color: black;"> Memoria principal</strong>

                                    <span>Instrucciones + Datos</span>

                                </div>


                            </div>


                            <div class="aviso">

                                <span>!</span>

                                Cuello de botella secuencial

                            </div>


                        </div>

                    </article>


                    <!-- ARQUITECTURA HARVARD -->

                    <article class="arquitectura">


                        <h4> <strong style="color: black;"> Arquitectura Harvard </strong> </h4>


                        <p>

                            Emplea memorias y buses físicamente separados

                            para el programa (instrucciones) y para los

                            datos. Esto permite realizar accesos simultáneos

                            a ambas memorias, reduciendo el cuello de

                            botella tradicional.

                        </p>


                        <div class="diagrama">


                            <h4 class="titulo-diagrama">

                                Arquitectura Harvard

                            </h4>


                            <div class="esquema esquema-harvard">


                                <div class="cpu">

                                    <strong>CPU</strong>

                                    <span>Unidad de control</span>

                                    <span>ALU</span>

                                    <span>Registros</span>

                                </div>


                                <div class="buses-separados">


                                    <div class="linea-bus instrucciones">

                                        <span>Bus de instrucciones</span>

                                        <b>↔</b>

                                    </div>


                                    <div class="linea-bus datos">

                                        <span>Bus de datos</span>

                                        <b>↔</b>

                                    </div>


                                </div>


                                <div class="memorias">


                                    <div class="memoria memoria-instrucciones">

                                        <strong style="color: black;"> Memoria de instrucciones</strong>

                                        <span>Programa</span>

                                    </div>


                                    <div class="memoria memoria-datos">

                                        <strong style="color: black;"> Memoria de datos</strong>

                                        <span>Datos</span>

                                    </div>


                                </div>


                            </div>


                            <div class="correcto">

                                <span>✓</span>

                                Accesos simultáneos

                            </div>

                        </div>
<!-- IMAGEN VON NEUMANN -->
                        <div class="imagen-arquitectura" style="text-align: center; margin: 15px 0;">
                            <img src="clasica.png" alt="Arquitectura Von Neumann" style="max-width: 100%; height: auto; border-radius: 8px;">
                        </div>

                    </article>

                    <!-- 2.ARQUITECTURA SEGMENTADA (PIPELINING) -->
                    <article class="arquitectura">
                    <h3>2.Arquitectura Segmentada (Pipelining): </h3>

                    <p>
                            <strong style="color: black;"> Procesamiento en cadena: </strong> Dividen el ciclo de ejecución de las instrucciones en etapas paralelas (búsqueda, decodificación, ejecución) mediante unidades funcionales independientes.
                        </p>
                        <p>
                            Multiplican la cantidad de instrucciones procesadas por segundo (mayor rendimiento), aunque los saltos en el código o la competencia por recursos pueden reducir su eficiencia.
                        </p>
                </div>

                <div>
<!-- IMAGEN PIPELING -->
                        <div class="imagen-arquitectura" style="text-align: center; margin: 12px 0;">
                            <img src="segmentada.png" alt="Arquitectura segmentada" style="max-width: 90%; height: auto; border-radius: 8px;">
                            </div>
                        </div>
                        </div>

                    </article>

                    <!-- 3.Multiprocesamiento (Taxonomía de Flynn): -->
                    <article class="arquitectura">
                    <h3>3. Multiprocesamiento (Taxonomía de Flynn): </h3>
                    <p>
                    • <strong style="color: black;"> SISO (Single Instruction, Single Data):</strong> Monoprocesador tradicional secuencial.
</p>
<p>
• <strong style="color: black;"> SIMO / SIMD (Single Instruction, Multiple Data):</strong> Una sola instrucción opera simultáneamente sobre múltiples datos (procesadores vectoriales, extensiones MMX o SSE).
</p>
<p>
• <strong style="color: black;"> MISO (Multiple Instruction, Single Data):</strong> No implementado de forma comercial.
</p>
<p>
• <strong style="color: black;"> MIMO / MIMD (Multiple Instruction, Multiple Data):</strong> Múltiples procesadores ejecutan instrucciones distintas sobre datos diferentes. Incluye sistemas multiprocesador simétricos (SMP), clústeres y unidades de procesamiento gráfico (GPUs).
</p>
</div> </div>

                        <div> 
                        <!-- IMAGEN MULTIPROCESAMIENTO  TAXONOMIA DE FLYNN-->
                        <div class="imagen-arquitectura" style="text-align: center; margin: 12px 0;">
                            <img src="multiprocesamiento.jpg" alt="multiprocesamiento taxonomia de flynn" style="max-width: 60%; height: auto; border-radius: 6px;">
                        </div>

                        <div>

                        <section class="arquitecturas">

                        <h2 class="titulo-seccion">

                    1.2 Analisis de los componentes

                </h2>

                <h3>
                1.2.1.1 Arquitecturas
                </h3>

                <p>
                Se implementan instrucciones especiales que realizan funciones complejas, de manera que un programador puede encontrar con seguridad, una instrucción especial que realiza en hardware la función que el necesita.                CISC vs RISC
                                <!-- IMAGEN arquitecturas -->
                        <div class="imagen-arquitecturas" style="text-align: center; margin: 10px 0;">
                            <img src="arquitecturas.jpg" alt=arquitecturas" style="max-width: 60%; height: auto; border-radius: 6px;">

                            <p>  El total de ciclos de reloj para la versión cisc debe ser:
(2 movs * 1 ciclo) +(1 mul * 30 ciclos) = 32 ciclos

El total de ciclos de reloj para la version risc debe ser:
(3 movs * 1 ciclo) +(5 adds * 1 ciclo)+(5 loops *1 ciclo) = 13 ciclos
</p>
<!-- IMAGEN arquitecturas2 -->
                        <div class="imagen-arquitecturas2" style="text-align: center; margin: 10px 0;">
                            <img src="arquitecturas2.jpg" alt=arquitecturas" style="max-width: 60%; height: auto; border-radius: 6px;">

                        </div>
                        </div>

                        <secction class="class arquitecturas">

                        <h2 class="titulo-seccion">

                        1.2.2 Unidad central del procesamiento(CPU)

                        </h2>
                        <p>
                        La CPU es el administrador dentro de la computadora donde la entrada de datos se transforma en salida de información. Almacena y ejecuta instrucciones de programa a través de sus vastas redes de circuitos. puede realizar múltiples tareas. Esto significa que también es la parte de la computadora que regula simultáneamente las funciones internas de la computadora. 
                        </p>
                        <h3>
                        Unidad Aritmetica Lógica(ALU)
                        </h3>
                        <p>
                        Una ALU es una de las piezas clave dentro de la unidad central de procesamiento (CPU) de una computadora. Se encarga de realizar operaciones aritméticas, como suma y resta, y operaciones lógicas como AND, OR o comparaciones de valores. 
                        Contiene:
                        </p>
                        <p>
• Circuitos aritméticos que ejecutan operaciones matemáticas básicas.
</p>
<p>
• Circuitos lógicos (como puertas AND, OR,XOR) responsables de procesar operaciones a nivel lógico.
</p>
<p>
• Circuitos de control que dirigen el flujo de instrucciones y datos dentro de la ALU. 
</p>
<!-- IMAGEN unidad aritmetica logica -->
                        <div class="unidad aritmetica logica" style="text-align: center; margin: 10px 0;">
                            <img src="UAL.jpg" alt=UAL" style="max-width: 60%; height: auto; border-radius: 6px;">

                            </div>
                            </div>
                            <h3>
                            Unidad de Control(UC)
                            </h3>
                            <p>
                            La unidad de control es un componente esencial dentro de la unidad central de procesamiento (CPU) u función principa es coordinar y gestionar la ejecución de instrucciones. Interpreta y decodifica las instrucciones que se obtienen de la memoria, regula el flujo de datos entre diferentes partes de la CPU y asegura el correcto funcionamiento de todo elprocesador. 
                            </p>
                            <!--IMAGEN UNIDAD CONTROL -->
                        <div class="imagen-unidad-control" style="text-align: center; margin: 10px 0;">
                            <img src="UC.jpg" alt=unidad control" style="max-width: 60%; height: auto; border-radius: 6px;">

                            </div>
                            </div>
                            <h3>
                            Registros
                            </h3>
                            <p>
                            Los registros de CPU son pequeñas ubicaciones de memoria de alta velocidad dentro del procesador, utilizadas para almacenar datos temporales, instrucciones y estados de control durante la ejecución de tareas. Actúan como el área de almacenamiento más rápida de la computadora, permitiendo un acceso inmediato y crucial para las operaciones matemáticas y de direcciones. 
                            </p>
                            <!--IMAGEN Registros -->
                        <div class="imagen registros" style="text-align: center; margin: 10px 0;">
                            <img src="registros.png" alt=unidad control" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

                            <h3>
                            Buses
                            </h3>
                            <p>
                            Los buses de la CPU son sistemas digitales de cables o pistas de circuito impreso que transfieren datos entre el procesador, la memoria y los periféricos de entrada/salida. Centralizan la comunicación para mejorar la eficiencia y se dividen en tres tipos principales: de datos, direcciones y control, formando en conjunto el bus del sistema o front-side bus.

Bus del Sistema (System Bus):
Conecta la CPU con la memoria principal y componentes principales. 
<!--IMAGEN Buses -->
                        <div class="imagen buses" style="text-align: center; margin: 10px 0;">
                            <img src="cable-bus.jpg" alt=unidad control" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

<h3>
Bus Local:
</h3>
<p>
Conecta dispositivos de alta velocidad directamente a la CPU, evitando cuellos de botella del bus de expansión. 
</p>

<h3>
Memorias
</h3>
<p>
La memoria de CPU, comúnmente conocida como memoria RAM (Random Access Memory), es un tipo de almacenamiento temporal de alta velocidad que el procesador utiliza para guardar datos e instrucciones de las aplicaciones en ejecución. Es volátil (pierde datos sin energía) y esencial para la velocidad y la multitarea, con estándares actuales como DDR4 y DDR5. ...
</p>
<!--IMAGEN  REGISTROS -->
                        <div class="imagen registros" style="text-align: center; margin: 10px 0;">
                            <img src="memorias.png" alt=unidad control" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

<section class="arquitecturas">


                <h2 class="titulo-seccion">

                    1.3 Memoria principal

                </h2>
                <p>
                La memoria RAM funciona como la memoria a corto plazo de tu computadora, almacenando temporalmente los datos y programas que la CPU necesita usar de forma inmediata para un acceso rapidísimo, actuando como un búfer ultrarrápido entre el almacenamiento a largo plazo (disco duro/SSD) y el procesador, lo que permite una multitarea fluida y un rendimiento general ágil. 
                </p>
                <!--IMAGEN MEMORIARAM -->
                        <div class="imagen memoria ram" style="text-align: center; margin: 10px 0;">
                            <img src="memoriaRAM.png" alt=unidad control" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

                <h3>
                Memoria Cache:
                </h3>
                <p>
                La memoria caché es un tipo de almacenamiento temporal de alta velocidad, situado entre la CPU y la RAM, que guarda los datos e instrucciones utilizados con más frecuencia para acelerar el rendimiento del sistema. Actúa como intermediario, permitiendo al procesador acceder rápidamente a información sin tener que buscarla constantemente en la RAM, muchomás lenta. 
                </p>
                <!--IMAGEN CACHE -->
                        <div class="imagen cache" style="text-align: center; margin: 10px 0;">
                            <img src="memoriaC.jpg" alt=unidad control" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

                <section class="arquitecturas">


                <h2 class="titulo-seccion">
                1.4 Modulos Entrada-Salida E/S
                </h2>
                <p>
                Los módulos de E/S son la interfaz entre la CPU y los periféricos. Su función es gestionar las diferencias de velocidad, formatos de datos y voltajes entre el procesador y el hardware externo. 
                </p>
                <h3>
                E/S Programadas
                </h3>
                <p>
                La entrada/salida (E/S) programada es un método de comunicación entre la CPU y los periféricos donde el procesador controla directamente toda la operación. La CPU solicita la transferencia y, mediante sondeo (polling), verifica continuamente si el dispositivo está listo, ocupando recursos del sistema hasta completar la acción. 
                </p>
                <!--IMAGEN E/S P -->
                        <div class="imagen E/S programada" style="text-align: center; margin: 10px 0;">
                            <img src="programada.jpg" alt=unidad control" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
                <h3>
                E/S Interrupciones
                </h3>
                <p>
                La Entrada/Salida (E/S) mediante interrupciones es un método eficiente donde el periférico avisa a la CPU que está listo para transferir datos, permitiendo al procesador ejecutar otras tareas mientras espera. Cuando el dispositivo (teclado, disco, red) tiene datos, envía una señal (IRQ) que suspende temporalmente el programa actual para atender la operación. 
                </p>
                <!--IMAGEN E/S Interrupcion -->
                        <div class="imagen interupcion" style="text-align: center; margin: 10px 0;">
                            <img src="interrupcion.png" alt=E/S Interrupcion" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

                <section class="arquitecturas">


                <h2 class="titulo-seccion">
                1.5 Acceso directo a memoria
                </h2>
                <p>
                El módulo DMA controla el intercambio de datos entre la memoria principal y el dispositivo de E/S. Gracias a DMA, el dispositivo puede transferir datos directamente hacia y desde la memoria, en lugar de utilizar la CPU como intermediario, y así puede aliviar la congestión en el bus. La CPU solo está involucrada al principio y al final de la transferencia y se interrumpe solo después de que se haya transferido todo el bloque. 
                </p>
                <!--IMAGEN ACCESO DIRECTO MEMORIA -->
                        <div class="imagen acceso directo memoria" style="text-align: center; margin: 10px 0;">
                            <img src="DMA.png" alt="acceso directo memoria" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

                <section class="arquitecturas">


                <h2 class="titulo-seccion">
                1.6 Buses
                </h2>
                <p>
                Un bus, en informática y tecnología digital, es una vía electrónica por la que se transfieren datos. Es esencial para la comunicación entre componentes dentro de una computadora o red. Estos canales transmiten señales a diferentes velocidades, permitiendo que los datos fluyan sin interrupciones. 
                </p>
                <h3>
                Tipos de buses:
                </h3>
                <p>
                -<strong style="color: black;">Buses de sistema:</strong> Conectan la CPU con la memoria principal y otros componentes críticos, como tarjetas gráficas o de sonido.
<p>
-<strong style="color: black;">Bus de datos:</strong> Un bus de datos o bus bidireccional es un tipo de bus de comunicación en el que se transmiten los datos entre los diferentes componentes de una computadora o sistema. La información puede fluir en ambas direcciones, ya sea desde el ordenador hacia otros dispositivos, o desde los propios dispositivos hacia el ordenador.
<p>
-<strong style="color: black;">Bus de direcciones:</strong> El bus de dirección es un componente separado del bus de datos en un sistema cuya función principal es transmitir la dirección de memoria de la información que se desea acceder o transmitir.
<p>
-<strong style="color: black;">Bus de control:</strong> El bus de control es un componente esencial en un sistema de computadora que se encarga de controlar el acceso y el uso de las líneas de dirección y datos. Estas líneas son suministradas por dispositivos específicos que tienen el control sobre su uso.
<p>
-<strong style="color: black;">Buses locales:</strong> Permiten que dispositivos internos, como discos duros y unidades de almacenamiento, se conecten a la placa madre.
<p>
-<strong style="color: black;">Buses periféricos:</strong> Hacen posible la conexión de dispositivos externos como teclados, mouse y monitores. 
<p>
</p>
</p>
</p>
</p>
</p>
</p>
</p>

<h3>
Estructura
</h3>
<p>
La estructura de los buses en arquitectura de computadoras es el sistema de interconexión física (cables, pistas en la placa base) que permite la transferencia de datos entre la CPU, la memoria y los periféricos. Se organizan en líneas de datos, direcciones y control, clasificándose funcionalmente en buses de sistema (rápidos) y buses de expansión (lentos) para optimizar el rendimiento. 
</p>
                        <div class="imagen estructura buses" style="text-align: center; margin: 9px 0;">
                            <img src="estructura.jpg" alt="estructura buses" style="max-width: 60%; height: auto; border-radius: 4px;">
                            </div>
                            </div>

<h3>
Jerarquia
</h3>
<p>
La jerarquía de buses en la arquitectura de computadoras organiza las vías de comunicación por velocidad y función, conectando el procesador con componentes más lentos mediante niveles. Generalmente se estructura en: Bus Local/Procesador (el más rápido), Bus de Sistema/Caché (RAM), y Buses de Expansión/E/S (periféricos como SATA, USB). 
</p>
                        <div class="imagen jeraquia de buses style="text-align: center; margin: 10px 0;">
                            <img src="jeraquias.png" alt="jeraquia de buses" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>


                <section class="arquitecturas">


                <h2 class="titulo-seccion">
                1.7 Interrupciones
                </h2>

                <p>
                Una interrupción consiste en un mecanismo que provoca la alteración del orden lógico de ejecución de instrucciones como respuesta a un evento externo, generado por el hardware de entrada/salida en forma asincrónica al programa que está siendo ejecutado y fuera de su control. 
                </p>
                <h3>
                Sincronizacion con la E/S
                </h3>
                <p>
                La sincronización de Entrada/Salida (E/S) por interrupciones permite a la CPU realizar otras tareas mientras un periférico procesa datos, mejorando drásticamente el rendimiento al eliminar la espera activa. Cuando el dispositivo de E/S termina, envía una señal (IRQ) a la CPU, provocando una rutina de servicio de interrupción (ISR) que gestiona la transferencia de datos 
                </p>
                        <div class="imagen sincronizacionES" style="text-align: center; margin: 10px 0;">
                            <img src="sincronizacionES.jpg" alt="sincronizacionES" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>


<h3>
Tecnica de poleo
</h3>
<p>
La técnica de poleo (del inglés polling, que significa sondeo o encuesta) en las interrupciones de computadora es un método de gestión de entrada/salida (E/S) donde la unidad central de procesamiento (CPU) verifica repetidamente y de forma activa el estado de un dispositivo periférico para determinar si necesita atención. 
</p>

            </section>

        `

    },


    2: {

        titulo: "Unidad 2: CPU y procesador",

        contenido: `

            <section class="arquitecturas">

                <h3 class="titulo-seccion">

                    Unidad Central de Procesamiento

                </h3>


                <p>

                    La CPU es el componente encargado de interpretar

                    y ejecutar las instrucciones de los programas.

                </p>

                <u1>

                <h2 class="titulo-seccion">

                    2.1 Organizacion del procesador

                </h2>
                <p>
                Un procesador, incluye tanto registros visibles por el usuario como registros de control/estado. Los registros visibles por el usuario pueden ser de uso general o tener una utilidad especial, mientras que los registros de control y estado se usan para controlar el funcionamiento del procesador, un claro ejemplo es el contador de programa.
                </p>
                <p>
            <strong style="color: black;">Lleva a cabo una gran variedad de:</strong>
<p>
<strong style="color: black;"> • </strong>    Cálculos
</p>
<p>
<strong style="color: black;"> • </strong>    Comparaciones numéricas
</p>
<p>
<strong style="color: black;"> • </strong>    Transferencias de datos como respuesta a las peticiones de los programas que están siendo ejecutados en memoria.
</p>


<div class="imagen organizacion procesador" style="text-align: center; margin: 10px 0;">
                            <img src="organizacionP.png" alt="sincronizacionES" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
<p>
La CPU controla las operaciones básicas del ordenador enviando y recibiendo señales de control, direcciones de memoria y datos de un lugar a otro de la computadora a través de un grupo de canales llamados BUS.
</p>
<p>
<strong style="color: black;"> La Unidad Central de Proceso está constituida internamente por: </strong>
<p>
<strong style="color: black;"> • </strong>    La Unidad de Control
</p>
<p>
<strong style="color: black;"> • </strong>    Unidad Aritmético-Lógica
</p>
</p>

<h2 class="titulo-seccion">

                    2.2 Estructura de registros

                </h2>

                <p>
                Los registros son memorias internas de alta velocidad dentro de la CPU que almacenan datos, instrucciones y direcciones temporales para acelerar el procesamiento. Se estructuran principalmente en registros visibles al usuario (datos/uso general) y registros de control/estado (gestionan la ejecución), con tamaños de 8 a 64 bits
                </p>

<div class="imagen estructua de registros" style="text-align: center; margin: 10px 0;">
                            <img src="Eregistros.png" alt="sincronizacionES" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

                            <h3 class="titulo-seccion">
                Clasificacion de registros
                </h3>

<h4>
<p>
Registro de datos:
</p>
</h4>
<p>
<strong style="color: black;"> Un CPU puede funcionar con datos en uno de tres modos:</strong>
</p>
<p>
entre dos registros, entre registros y una ubicación de Memoria de acceso al azar (RAM - Random-Access Memory) y entre dos ubicaciones RAM. Como el CPU está conectado directamente a los registros, las operaciones que implican dos registros son las más rápidas; las que se dan entre ubicaciones RAM son las más lentas.  Es decir, junta dos registros, añade un registro a una ubicación RAM, o añade dos ubicaciones RAM.
</p>
<p>
<strong style="color: black;"> registros direcciones:</strong>
</p>
<p> Para que un CPU pueda almacenar y recuperar datos en RAM, debe tener la dirección de la memoria de la información. Esas operaciones que implican RAM usan registros de dirección de memoria. EL CPU no realiza aritmética en estos registros; en cambio, los usa para ubicar datos que necesita.
</p>
<p>
<strong style="color: black;"> registros indice:</strong>
</p>
<p>
Un CPU no puede hacer matemáticas en registros de datos, aunque puede hacerlo indirectamente con un registro de índice. Éste trabaja con los registros de datos, permitiendo a un programa procesar hilos de información eficazmente.
</p>
<p>
<strong style="color: black;"> registros segmento: </strong>
</p>
<p>
Un registro de segmento tiene 16 bits de longitud y facilita un área de memoria para direccionamiento conocida como segmento actual.
</p>
<p>
<strong style="color: black;"> registro Cs: </strong>
</p>
<p>
el dos almacena la dirección inicial del segmento de código de un programa en el registro CS. Indica la dirección de una instrucción que es buscada para su ejecución.
    </p>
    <p>
    <strong style="color: black;"> registro Ds: </strong>
    </p>
    <p>
    genera una referencia a la localidad de un byte específico en el segmento de datos.
    </p>
    <p>
    <strong style="color: black;"> registro SS: </strong>
    </p>
    <p>
    permite la colocación en memoria de una pila, para almacenamiento temporal de dirección y datos.
    </p>
    <p>
    <strong style="color: black;"> registro Es:</strong>
    </p>
    <p>
    se utiliza para algunas operaciones con cadenas de caracteres se utiliza para el manejo de direccionamiento de memoria.
    </p>
    <p>
    <strong style="color: black;"> Registros de propósito general: </strong>
    </p>
    <p>
Los registros de propósito general son el AX, BX, CX, y DX, de 16 bits. Cada uno de ellos se divide en dos registros de 8 bits, llamados AH y AL, BH y BL, CH y CL, y, DH y DL, H significando High (alto) y L significando Low (bajo), indicando la parte alta o la parte baja del registro correspondiente de 16 bits.
</p>
<p>
<strong style="color: black;"> Registro AX: </strong>
</p>
<p>
    El registro AX es el registro acumulador, es utilizado para operaciones que implican entrada/salida, y multiplicación y división (estas dos últimas en conjunto con el registro DX).
    </p>
    <p>
    <strong style="color: black;"> Registro BX: </strong>
    </p>
    <p>
    El registro BX es el registro base, y es el único registro de propósito general que puede ser un índice para direccionamiento indexado.
    </p>
    <p>
    <strong style="color: black;"> Registro CX:</strong>
    </p>
    <p>
    El registro CX es conocido como el registro contador. Puede contener un valor para controlar el número de veces que un ciclo se repite o un valor para corrimiento de bits.
    </p>
    <p>
    <strong style="color: black;"> Registro DX: </strong>
    </p>
    <p>
    El registro DX es el registro de datos. En algunas operaciones se indica mediante este registro el número de puerto de entrada/salida, y en las operaciones de multiplicación y división de 16 bits se utiliza junto con el acumulador AX.
    </p>

    <p>
    Registros de apuntadores: Los registros SP (apuntador de pila) y BP (apuntador base) están asociados con el registro SS y permiten al sistema acceder a datos en el segmento de la pila.
</p>
<p>
<strong style="color: black;"> Registro SP: </strong>
</p>
<p>
    El apuntador de pila de 16 bits está asociado con el segmento SS y proporciona un valor de desplazamiento que se refiere a la palabra actual que está siendo procesada en la pila.
    </p>
    <p>
    <strong style="color: black;">  Registro BP: </strong>
    </p>
    <p>
    El apuntador base de 16 bits facilita la referencia de parámetros dentro de la pila.
    </p>
    <p>
        <strong style="color: black;"> Registros de banderas: </strong>
        </p>
    <p>
Es un registro de 16 bits, de los cuales nueve sirven para indicar el estado actual de la máquina y el resultado del procesamiento.
La tabla contiene 16 posiciones (de 0 a 15), que son los 16 bits del registro de banderas, numeradas de derecha a izquierda. La posición 0 la encontraremos a la derecha y la posición 15 a la izquierda.
</p>

<h4>
<p>
Los bits de las banderas son las siguientes:
</p>
</h4>
<p>
<strong style="color: black;"> OF (overflow, desbordamiento): </strong>
</p>
<p>
Indica desbordamiento del bit de mayor orden después de una operación aritmética de números con signo (1=existe overflow; 0=no existe overflow). Para operaciones sin signo, no se toma en cuenta esta bandera.
</p>
<p>
<strong style="color: black;"> DF (dirección): </strong>
</p>
<p>
Controla la selección de incremento o decremento de los registros SI y DI en las operaciones con cadenas de caracteres (1=decremento automático; 0=incremento). La bandera DF se controla con las instrucciones STD y CLD.
</p>
<p>
<strong style="color: black;"> IF (interrupción): </strong>
</p>
<p>
Controla el disparo de las interrupciones (1=habilita las interrupciones; 0=deshabilita las interrupciones). La interrupción no enmascarable es la única que no puede ser bloqueada por esta bandera. El estado de la bandera IF se controla con las instrucciones STI y CLI.
</p>
<p>
<strong style="color: black;"> TF (trampa): </strong>
</p>
<p>
Permite la operación del procesador en modo de depuración (paso a paso).
</p>
<p>
<strong style="color: black;"> SF (signo): </strong>
</p>
<p>
Contiene el signo resultante de una operación aritmética (0=positivo; 1=negativo).
</p>
<p>
<strong style="color: black;"> ZF (cero): </strong>
</p>
<p>
ndica el resultado de una operación aritmética o de comparación (0=resultado diferente de cero; 1=resultado igual a cero).
</p>
<p>
<strong style="color: black;"> AF (acarreo auxiliar): </strong>
</p>
<p>
Contiene el acarreo del bit 3. Esta bandera se prueba con las instrucciones DAA y DAS para ajustar el valor de AL después de una suma o resta BCD.
</p>
<p>
<strong style="color: black;"> PF (paridad): </strong>
</p>
<p>
Indica si el número de bits 1, del byte menos significativos de una operación, es par (0=número de bits 1 es impar; 1=número de bits 1 es par).
</p>
<p>
<strong style="color: black;"> CF (acarreo): </strong>
</p>
<p>
Contiene el acarreo del bit de mayor orden después de una operación aritmética; también almacena el contenido del último bit en una operación de desplazamiento o de rotación.
</p>
<p>
<strong style="color: black;"> Registro de punteros de instrucción: </strong>
</p>
<p>
El registro IP de 16 bits contiene el desplazamiento de dirección de la siguiente instrucción que se ejecuta. El IP está asociado con el registro CS en el sentido de que el IP indica la instrucción actual dentro del segmento de código que se está ejecutando actualmente en la memoria.
</p>

<h2 class="titulo-seccion">
2.3 Ciclo de instruccion
                </h2>
                <h4>
                <p>
                Un ciclo de instrucción incluye los siguientes subciclos:
                </p>
                </h4>
<p>
    <strong style="color: black;"> Captación:</strong> llevar la siguiente instrucción de la memoria al procesador.
    </p>
    <p>
    <strong style="color: black;">Ejecución:</strong> interpretar el código de operación y llevar a cabo la operación indicada.
    </p>
    <p>
    <strong style="color: black;">Interrupción:</strong> si las interrupciones están habilitadas y ha ocurrido una interrupción, guardar el estado del proceso actual y atender la interrupción.
</p>
<p>

El Ciclo Indirecto
La ejecución de una instrucción puede involucrar a uno o más operandos en memoria, cada uno de los cuales requiere un acceso a memoria. Además, si se usa direccionamiento indirecto serán necesarios accesos a memoria adicionales.
Podemos considerar la captación de direcciones indirectas como un subciclo de instrucción más. El resultado se muestra en la Figura 12.4. La principal línea de actividad consiste en alternar las  actividades de captación y ejecución de instrucciones. Después de que una instrucción sea captada, es examinada para determinar si incluye algún direccionamiento indirecto. Si es así, los operandos requeridos se captan usando direccionamiento indirecto. Tras la ejecución se puede procesar una interrupción antes de la captación de la siguiente instrucción.
</p>

<div class="ciclo instrucion" style="text-align: center; margin: 10px 0;">
                            <img src="cicloI.jpg" alt="ciclo instruccion" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
<h2 class="titulo-seccion">
2.3.1 ciclo_fetch_decode
                </h2>
                <p>
                El <h4> ciclo Fetch-Decode-Execute (Búsqueda-Decodificación-Ejecución)</h4> es el proceso fundamental que realiza la CPU para procesar instrucciones, repitiéndose continuamente desde el arranque hasta el apagado. 
                <p>
                <strong style="color: black;"> Consta de tres fases clave: </strong>
                </p>
                buscar la instrucción en la memoria (Fetch), interpretarla (Decode) y realizar la acción (Execute).El ciclo Fetch-Decode (Búsqueda-Decodificación) es la primera parte del ciclo de instrucción del procesador (o CPU), responsable de captar una instrucción desde la memoria RAM y prepararla para su ejecución. La CPU repite este proceso continuamente mientras está encendida para procesar software. 
                </p>
                <div class="imagen cicloFC" style="text-align: center; margin: 10px 0;">
                            <img src="CFD.png" alt=ciclo fetch code" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
<h2 class="titulo-seccion">
2.3.2 Segmentación-Execute
                </h2>

                <p>
                La segmentación de instrucciones (pipelining) es una técnica de arquitectura de computadoras que mejora el rendimiento al ejecutar varias instrucciones en paralelo, dividiéndolas en etapas secuenciales (fetch, decode, execute, etc.). 
                </p>
                <div class="imagen segmentacion instrucciones" style="text-align: center; margin: 10px 0;">
                            <img src="segmentacionI.png" alt="segmentacion instrucciones" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

                            <h2 class="titulo-seccion">
                            2.3.3 conjunto de instrucciones, caracteristicas y funciones
                </h2>

                <p>
                El conjunto de instrucciones de una computadora es esencial porque se comunica directamente con el procesador para gestionar los datos y determina qué programas puede soportar el CPU, lo que explica por qué no siempre se pueden usar las mismas aplicaciones en diferentes dispositivos. A pesar de estas diferencias entre procesadores, los conjuntos de instrucciones comparten características y funciones comunes que definen su funcionamiento.
                </p>
                <p>
                <strong style="color: black;"> ortogonales(simetricas):</strong>
                </p>
                <p>
                La ortogonalidad es una característica que busca la independencia y consistencia en un conjunto de instrucciones. Esto significa que cualquier operando puede combinarse con cualquier modo de direccionamiento sin restricciones, evitando que existan registros exclusivos para un solo tipo de dato. Cuanto más flexible y simétrica sea esta relación dentro de la arquitectura, mayor será el nivel de ortogonalidad del set de instrucciones.
                </p>
                <strong style="color: black;"> Risc </strong>
                </p>
                <p>
                Este conjunto de instrucciones se caracteriza por tener un número reducido de instrucciones simples, utilizar pipelining para dividir la ejecución en fases y acelerar el proceso, y emplear instrucciones ortogonales para flexibilizar el direccionamiento. Además, realiza sus operaciones directamente sobre una gran cantidad de registros (reservando la memoria solo para accesos específicos), lo que hace que programar con él requiera más líneas de código debido a dicha simplicidad.
                </p>
                <p>
                <strong style="color: black;"> Cisc </strong>
                </p>
                <p>
                Este conjunto de instrucciones cuenta con una cantidad considerable de instrucciones complejas que no utilizan pipelining y no son ortogonales, por lo que se debe tener cuidado al elegir los registros. Permite trabajar directamente en memoria (lo que reduce la cantidad de registros internos necesarios) y facilita la programación al requerir menos código gracias a tareas más complejas.

Por otra parte, la segmentación (pipelining) funciona de manera similar a una cadena de montaje industrial con etapas secuenciales y especializadas para lograr un procesamiento más eficiente. Finalmente, las arquitecturas y sus sets de instrucciones se pueden clasificar considerando aspectos clave como el almacenamiento y posición de los operandos (si están en memoria o en registros de la CPU), la cantidad de operandos explícitos, los modos de direccionamiento y los tipos de operaciones disponibles.
</p>

<h2 class="titulo-seccion">
                    2.3.4 Modos de direccionamiento
                </h2>

                <p>
                Los modos de direccionamiento son los mecanismos que utiliza el procesador para localizar datos u operandos durante la ejecución de una instrucción. Definen cómo calcular la dirección de memoria efectiva o dónde se encuentra el operando (registros, memoria o dentro de la instrucción), facilitando el manejo de datos, la reubicación de código y optimizando el espacio. 
                </p>
                <div class="imagen modos de direccionamiento" style="text-align: center; margin: 10px 0;">
                            <img src="MD.png" alt="modos de direccionamiento" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
                            <p>
                        <strong style="color: black;">  direccionamiento inmediato</strong>
                            </p>
                            <p>
                            El operando está incluido explícitamente en la propia instrucción. Ejemplo: MOV AX, 5 (cargar 5 en AX).
                            </p>
                            <div class="imagen direccionamiento inmediato" style="text-align: center; margin: 10px 0;">
                            <img src="DI.png" alt="direccionamiento inmediato" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
                            <p>
                            <strong style="color: black;">direccionamiento de registro</strong>
                            </p>
                            <p>
                            El operando se encuentra en un registro de la CPU, lo que lo hace muy rápido. Ejemplo: ADD AX, BX.
                            </p>
                            <div class="imagen direccionamiento registro" style="text-align: center; margin: 10px 0;">
                            <img src="DR.png" alt="direccionamiento registro" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
                            <p>
                            <strong style="color: black;">direccionamiento directo o absoluto</strong>
                            </p>
                            <p>
                            La instrucción contiene la dirección de memoria exacta del operando. Ejemplo: MOV AX, [1000h].
                            </p>
                            <div class="imagen direccionamiento directo" style="text-align: center; margin: 10px 0;">
                            <img src="DD.png" alt="direccionamiento directo" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
                            <p>
                            <strong style="color: black;"> direccionamiento indirecto (por registro o memoria)</strong>
                            </p>
                            <div class="imagen direccionamiento indirecto o por registro" style="text-align: center; margin: 10px 0;">
                            <img src="DIOR.png" alt="direccionamiento indirecto o por regitro" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
                            <p>
                            <strong style="color: black;"> direccionamiento desplazamiento/indexado </strong>
                            </p>
                            </p>
                            Combina una dirección base (en un registro) con un valor constante (desplazamiento) para calcular la dirección final. Muy usado para arreglos.
                            </p>
                            <div class="imagen direccionamiento desplazamiento" style="text-align: center; margin: 10px 0;">
                            <img src="DDI.jpg" alt="direccionamiento desplazamiento" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
                            <p>
                            <strong style="color: black;"> direccionamiento implicito </strong>
                            </p>
                            <p>
                            La instrucción no necesita especificar operandos porque estos están predefinidos, como el acumulador.
                            </p>
                            <div class="imagen direccionamiento implicito" style="text-align: center; margin: 10px 0;">
                            <img src="DImplicito.png" alt="direccionamiento implicito" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
                            <p>
                            <strong style="color: black;"> direccionamiento de pila </strong>
                            </p>
                            <p>
                            El operando se encuentra en la cima de la pila (stack).
                            </p>
                            <div class="imagen direccionamiento pilas" style="text-align: center; margin: 10px 0;">
                            <img src="DP.png" alt="direccionamiento pilas" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

                            <h2 class="titulo-seccion">
                    2.4 Casos de estudio CPU reales
                </h2>

                <p>
                I-8086
Los modos de direccionamiento del 8086 (Crawford & Gelsinger, 1987) son muy irregulares. Los registros del procesador, se usan para contener los datos con que se está trabajando puesto que el acceso a los registros es mucho más rápido que los accesos a memoria. Se pueden realizar operaciones aritméticas y lógicas, comparaciones, entre otras.
Hay un campo para un registro (reg), que especiﬁca uno de los operandos, y otros dos campos (mod y r/m) para el otro.
</p>
<p>
Los modos del 8086 son indirectos por registro, indexados o directos por registro.
</p>
<p>
<strong> Registros Propósito General: </strong>
</p>
<p>
    <strong style="color: black;"> Registro AX:</strong> El registro AX es el registro acumulador, es utilizado para operaciones que implican entrada/salida, y multiplicación y división (estas dos últimas en conjunto con el registro DX)
    </p>
    <p>
    <strong style="color: black;"> Registro BX:</strong> El registro BX es el registro base, y es el único registro de propósito general que puede ser un índice para direccionamiento indexado.
    </p>
    <p>
    <strong style="color: black;">Registro CX:</strong> El registro CX es conocido como el registro contador. Puede contener un valor para controlar el número de veces que un ciclo se repite.
    </p>
    <p>
    <strong style="color: black;">Registro DX:</strong> El registro DX es el registro de datos.
    </p>
<p>
<strong>Registros Índice:</strong>
</p>
<p>
    <strong style="color: black;">Registro SI:</strong> El registro índice fuente de 16 bits es requerido por algunas operaciones con cadenas de caracteres.
    </p>
    <p>
    <strong style="color: black;">Registro DI:</strong> El registro índice destino también es requerido por algunas operaciones con cadenas de caracteres.
    </p>
<p>
<strong>Registros Apuntadores:</strong>
</p>
<p>
    <strong style="color: black;">Registro SP:</strong> Apuntador de pila de 16 bits proporciona un valor de desplazamiento que se refiere a la palabra actual que está siendo procesada en la pila.
    </p>
    <p>
    <strong style="color: black;">Registro BP:</strong> El apuntador base de 16 bits facilita la referencia de parámetros dentro de la pila.
</p>

<p>
Motorola 68000
</p>
<p>
En el Motorola 68000 el mismo direccionamiento lleva implícito el tipo de registro sobre el que trabaja (direcciones o datos). Está basado en dos bancos de 8 registros de 32 bits. Un banco es de datos (Dn) y el otro de punteros (An). Además contiene un contador de programa de 32 bits y un registro de estado de 16 bits. Los registros de datos (D0 a D7) se pueden usar como registros de 32 bits (.l), 16 bits (.w) y 8 bits (.b). Cualquiera de ellos puede usarse como acumulador, índice o puntero.
</p>
<p>
<strong>Acepta los siguientes modos de direccionamiento:</strong>
</p>
<p>
    Implícito (o inherente).
    </p>
    <p>
    Inmediato.
    </p>
    <p>
    Absoluto.
    </p>
    <p>
    Directo a registro.
    </p>
    <p>
    Indirecto.
    </p>
    <p>
    Relativo a PC con desplazamiento.
    </p>
    <p>
    Relativo a PC con índice y desplazamiento.
    </p>

    <p>
    El 80386 tiene registros de 32 bits en las siguientes categorías:
    </p>
    <p>
    Registros de propósito general.
    </p>
    <p>
    Registros de segmento.
    </p>
    <p>
    Puntero de instrucciones
    </p>
    <p>
    Indicadores.
    </p>
    <p>
    Registros de control (nuevos en el 80386).
    </p>
    <p>
    Registros de direcciones de sistema.
    </p>
    <p>
    Registros de depuración (debug) (nuevos en el 80386).
    </p>
    <p>
    Registros de test (nuevos en el 80386).
    </p>

    <p>
    Procesador I3
    </p>
    <p>
Línea de microprocesadores Intel, gama baja. 3 era generación 2010.
</p>
<p>
<strong>Características:</strong>
</p>
<p>
    Procesador de 2 núcleos
    </p>
    <p>
    4 hilos de procesamiento en paralelo
    </p>
    <p>
    Tarjeta gráfica integrada
    </p>
    <p>
    Controlador de memoria
    </p>
    <p>
    Controlador PCI Express 2.0 integrado
    </p>

    <h2>
    <p>
    Casos de estudio Reales de CPU
    </p>
    </h2>
    <p>
<strong> I-8086: </strong>
</p>
<p>
Los registros del procesador, se usan para contener los datos con que se está trabajando puesto que el acceso a los registros es mucho más rápido que los accesos a memoria. Se pueden realizar operaciones aritméticas y lógicas, comparaciones, entre otras. Los modos del 8086 son indirectos por registro, indexados o directos por registro.
</p>
<p>
Motorola 68000: El mismo direccionamiento lleva implícito el tipo de registro sobre el que trabaja (direcciones o datos). Está basado en dos bancos de 8 registros de 32 bits. Un banco es de datos (Dn) y el otro de punteros (An). Además contiene un contador de programa de 32 bits y un registro de estado de 16 bits.
</p>
<p>
80386: Para este microprocesador existe un modo nuevo que requiere un byte adicional denominado SIB (escala, índice, base) que se añade al byte de operandos, es útil para direccionar elementos de vectores de longitudes diferentes en bucles. Es una alternativa a los modos autoindexados que esta máquina no soporta.
</p>
            </section>

        `

    },


    3: {

        titulo: "Unidad 3: Memoria",

        contenido: `

        <h2 class="titulo-seccion">
                    3.1 chip set
                </h2>

                <p>
                son un conjunto de chips que controlan algunas funciones 
del  ordenador  y  también  el  chipset  de  una  placa  se  encarga  de  controlar  los 
componentes de la placa base como el micro y memoria. 
                </p>
                <div class="imagen chip set" style="text-align: center; margin: 10px 0;">
                            <img src="ChipSet.png" alt="chip set" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
                            <p>
                            El chipset (o circuito auxiliar integrado) define la estabilidad, rendimiento, calidad en 
el funcionamiento y capacidad de overlocking, no solamente de la placa base sino 
del equipo de cómputo.” 
</p>
<h3 class="titulo-seccion">
Los conjuntos de chipsets se dividen en dos partes:
</h3>
<p>
<strong style="color: black;"> NorthBridge (Memory Controller Hub [MCH] – Intel)</strong>
</p>
<p>
<strong style="color: black;"> • </strong>Realiza la comunicación entre la CPU (Front Side Bus – FSB), la memoria y la tarjeta gráfica. 
</p>
<p>
<strong style="color: black;"> SouthBridge (I/O controller Hub [ICH] – Intel) </strong>
</p>
<p>
<strong style="color: black;"> • </strong>Realiza la comunicación entre la CPU y los discos duros, LAN, USB.
</p>
<div class="imagen chips" style="text-align: center; margin: 10px 0;">
                            <img src="ChipS.png" alt="chips" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
                            <h3 class="titulo-seccion">
                            El NorthBridge:
                            </h3>
                            <p>
Se encarga de controlar el tráfico entre el procesador a través del BUS QPI o del 
Front Side Bus; la memoria RAM pro medio dl bus de memoria-; la interfaz de video 
por medio del bus PCI Express. 
Todas las  tareas  que  lleva  a  cabo  el  northbridge  implican  una  gran  cantidad de 
cálculos. A causa de esto, el integrado suele generar altas temperaturas, y, por este 
motivo, la mayoría de los fabricantes opta por colocar encima del puente norte un 
disipador de calor, un cooler o heat pipes (como se está viendo en los modelos de 
motherboards más avanzados y recientes). 
El northbridge se solía conectar al procesador por medio de un bus de datos muy 
especial: el FSB (Front Side Bus), el cual define el rendimiento del motherboard. 
</p>
<h3 class="titulo-seccion">
El SouthBridge:
</h3>
<p>
El objetivo de este integrado es el de controlar gran número de dispositivos, como 
la controladora del bus PCI, los puertos USB y Firewire, y las controladoras para 
unidades  Serial-ATA  y  Parallel-ATA,  entre  otras  funciones.Vale  aclarar  que  el 
fabricante Intel suele denominar al southbridge (y a ciertas funciones que dependen 
de él) con determinados nombres. 
Por ejemplo, durante la década de 1990, Intel denominaba al southbridge con una 
famosa sigla: PIIX (PCI IDE ISA Xcelerator), implementación que llegó a contar con 
varias versiones que fueron evolucionando (PIIX3 y PIIX4 para motherboards de 
escritorio, y PIIX5 para servidores). 
</p>
<h3 class="titulo-seccion">
Chip Super I/O:
</h3>
<p>
El northbridge y el southbridge no suelen ser los únicos integrados que conforman 
el chipset. 
También  pueden  ser  necesarios  algunos  chips  adicionales  que  se  encargan  de 
gestionar  a  otros  servicios,  tales  como  audio,  gráficos,  controladoras  de  disco, 
puertos serie, puertos PS/2 y controladoras de puertos USB, entre otros. Estos chips 
no son más que tarjetas de expansión, con la excepción de que sus componentes 
están soldados en forma directa sobre el motherboard. 
</p>

<h2 class="titulo-seccion">
3.1.1 Unidad central del procesamiento(CPU)
                </h2>
                <p>
                es el componente principal de una computadora. La CPU se encarga de realizar las operaciones de cálculo y también de controlar el flujo de datos entre los diversos elementos que forman una computadora.

Es  en  sí  el   cerebro, el     cual se compone  a  su  vez  de la Unidad Aritmética Lógica y de la Unidad de Control.   Esta unidad trabaja en base a un reloj maestro     que     interpreta y    coordina    la   ejecución    de   todas   las operaciones y las que realiza el microprocesador.
</p>
<div class="imagen CPU" style="text-align: center; margin: 10px 0;">
                            <img src="CPU.png" alt="CPU" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

<h2 class="titulo-seccion">
3.1.2 Controlador de Bus
                </h2>
                <p>
        es un circuito integrado en la placa base que gestiona y dirige las comunicaciones (internas y externas) de un sistema informático.
        </p>
        <h3 class="titulo-seccion">
Tipos de buses
</h3>
<p>
<strong style="color: black;"> Bus de datos: </strong>
</p>
<p>
<strong style="color: black;"> • </strong> Transporta la información (datos)
</p>
<p>
<strong style="color: black;"> • </strong> Es bidireccional (va y viene) Bus de direcciones
</p>
<p>
<strong style="color: black;"> • </strong> Indica la ubicación de memoria a la que se quiere acceder
</p>
<p>
<strong style="color: black;"> • </strong> Generalmente es unidireccional (desde la CPU)
</p>
<P>
<strong style="color: black;"> Bus de Control: </strong>
</p>
<p>
<strong style="color: black;">  • </strong> Transporta señales de control
</p>
<p>
<strong style="color: black;">  • </strong> Coordina las operaciones del sistema
</p>
<p>
<strong style="color: black;">  EJEMPLOS DE SEÑALES:</strong>
</p>
<p>
<strong style="color: black;">  •  </strong> Lectura (Read)
</p>
<p>
<strong style="color: black;">  • </strong> Escritura (Write)
</p>
<p>
<strong style="color: black;">  • </strong> Interrupciones
</p>
<h3 class="titulo-seccion">
Funciones principales:
</h3>
<p>
<strong style="color: black;">  • Frecuencia de funcionamiento: </strong> Regula la velocidad a la que operan las transferencias en el bus.
</p>
<p>
<strong style="color: black;">  • Señales de sincronismo y temporización: </strong> Marca los tiempos exactos para que los datos lleguen de un componente a otro sin errores.
</p>
<p>
<strong style="color: black;">  • Señales de control: </strong> Coordina cuándo un componente puede enviar o recibir información (por ejemplo, operaciones de lectura y escritura).
</p>
<p>
<strong style="color: black;">  • Transferencia pura: </strong> Actúa estrictamente como un canal de paso; no almacena información en ningún momento, solo permite que las señales eléctricas viajen entre los dispositivos conectados.
</p>
<div class="imagen controlador de bus" style="text-align: center; margin: 10px 0;">
                            <img src="controladorB.jpg" alt="controlador de bus" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

                            <h2 class="titulo-seccion">
                    3.1.3 puertas entrada y salidas
                </h2>
                <p>
                Un puerto de entrada/salida (I/O), también conocido como interfaz de entrada/salida, es un punto de conexión en una computadora o dispositivo electrónico que permite transferir datos entre el dispositivo y periféricos externos. Funciona como un canal de comunicación, facilitando el intercambio de información hacia y desde el dispositivo. 
                </p>
                <h3 class="titulo-seccion">
                ¿Cómo funciona un puerto de entrada/salida?
                </h3>
</p>
<p>
Un puerto de entrada/salida actúa como una puerta de enlace para la transferencia de datos. Recibe datos entrantes desde dispositivos externos y envía datos salientes hacia ellos. Este puerto incluye pines o conectores diseñados para facilitar la transferencia de información, como USB (Universal Serial Bus), HDMI (High-Definition Multimedia Interface), ethernet o conectores de audio. 
</p>
<h3 class="titulo-seccion">
¿Qué dispositivos se pueden conectar a un puerto de entrada/salida?
</h3>
</p>
<p>
Puedes conectar una amplia gama de dispositivos a un puerto I/O, incluyendo teclados, mouse, monitores, impresoras, escáneres, discos duros externos, altavoces, micrófonos, cámaras y adaptadores de red. Estos dispositivos utilizan el puerto I/O para intercambiar datos con la computadora o con el dispositivo electrónico.
</p>
<h3 class="titulo-seccion">
¿Cuál es el papel de los puertos de entrada/salida en la informática?
</h3>
</p>
<p>
Los puertos I/O tienen un papel fundamental en la informática, ya que permiten a los usuarios interactuar con sus dispositivos y conectar periféricos adicionales. Facilitan la transmisión de datos entre la computadora y los dispositivos externos, mejorando la funcionalidad y ampliando las capacidades de los equipos. 
</p>
<div class="imagen puertos ES" style="text-align: center; margin: 10px 0;">
                            <img src="puertosES.png" alt="puertos ES" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
<h2 class="titulo-seccion">
                    3.1.4 Controlador de interrupciones
                </h2>
                <p>
                es un componente de hardware diseñado para gestionar, priorizar y canalizar múltiples señales de interrupción (IRQ) provenientes de diversos periféricos hacia una o más líneas de entrada de la CPU.
                Actúa como un intermediario o "recepcionista" para el procesador, evitando que este tenga que revisar constantemente cada periférico (método conocido como polling) y permitiéndole reaccionar de forma asíncrona solo cuando ocurre un evento.
                </p>
                <h3>
                <p>
                ⚙️ Principio de Funcionamiento
                </p>
                </h3>
                <p>
            <strong style="color: black;">   El proceso de comunicación entre los periféricos, el controlador de interrupciones y la CPU sigue una secuencia lógica y estructurada:</strong>
                </p>
                <p>
                [ Periférico ] ---> ( Envía IRQ ) ---> [ Controlador de Interrupciones ] ---> ( Activa señal INT ) ---> [ CPU ]
                                                                                                        |
[ Periférico ] <--- ( Ejecuta RSI ) <--- [ Busca Vector de Interrupción ] <--- ( Responde con INTA ) <---|
</p>
<p>
<strong style="color: #0c0137;"> 1. Petición (IRQ):</strong> Un periférico (como un teclado o un puerto serie) genera una señal de petición de interrupción o IRQ (Interrupt Request).
</p>
<p>
<strong style="color: #0c0137;"> 2. Evaluación de Prioridad:</strong> El controlador recibe la señal. Si hay varias peticiones simultáneas, las evalúa según un orden de prioridad preestablecido.
</p>
<p>
<strong style="color: #0c0137;"> 3. Aviso a la CPU:</strong> El controlador activa la línea INT (Interrupción) del procesador.
</p>
<p>
<strong style="color: #0c0137;"> 4. Aceptación (INTA):</strong> Si la CPU no tiene las interrupciones deshabilitadas de forma global, detiene temporalmente la ejecución del programa actual, resguarda el estado de sus registros en la pila y responde al controlador mediante la señal INTA (Interrupt Acknowledge).
</p>
<p>
<strong style="color: #0c0137;"> 5. Entrega del Vector:</strong> Al recibir la señal INTA, el controlador de interrupciones coloca en el bus de datos el vector de interrupción (un número identificador).
</p>
<p>
<strong style="color: #0c0137;"> 6. Atención al Evento:</strong> La CPU lee este vector, busca la dirección correspondiente en la Tabla de Vectores de Interrupción y salta a ejecutar la RSI (Rutina de Servicio de Interrupción), que es el código específico para atender al periférico. Una vez terminada la rutina, el procesador vuelve a las tareas que realizaba originalmente
</p>
<div class="imagen controlador interrupciones" style="text-align: center; margin: 10px 0;">
                            <img src="Controlador I.png" alt="Controlador interrupciones" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
<h3>
<p>
🛠️ Modos de Gestión y Prioridades
</p>
</h3>
<p>
Un controlador programable permite configurar el comportamiento ante múltiples peticiones síncronas o simultáneas mediante diferentes esquemas:
</p>
<p>
<strong style="color: black;"> • Prioridades Fijas (Duras):</strong> Cada canal de interrupción tiene asignada una jerarquía fija por diseño (por ejemplo, el canal 0 tiene prioridad absoluta sobre el canal 1).
</p>
<p>
<strong style="color: black;"> • Prioridades Rotativas:</strong> La prioridad cambia de forma dinámica. Cuando un periférico es atendido, automáticamente pasa a tener la prioridad más baja, garantizando que todos los dispositivos tengan oportunidad de ser escuchados y evitando el bloqueo de componentes secundarios.
</p>
<p>
<strong style="color: black;"> • Conexión en Cascada:</strong> Permite conectar la salida de un controlador de interrupciones a la entrada de otro. Esta técnica fue ampliamente utilizada en la arquitectura de las PC (como el chip clásico Intel 8259A), donde un controlador "Maestro" se conectaba a un controlador "Esclavo" para expandir la capacidad de 8 a 15 líneas IRQ independientes.
</p>
<p>
Tipos
</p>
<ul>
    <li>
        <strong style="color: black;">PIC (Controlador Programable de Interrupciones):</strong>
        </li>
        </u1>
        <p>
        Maneja múltiples líneas de interrupción de hardware y las combina en una o varias hacia la CPU. Un ejemplo clásico en la arquitectura x86 es el chip 8259A.
        </p>
        <strong style="color: black;">APIC (Controlador Avanzado):</strong>
        </li>
        </u1>
        <p>
        Es la evolución moderna del PIC. Se utiliza en sistemas multiprocesador y permite enrutar interrupciones entre diferentes núcleos de la CPU de forma dinámica.
        </p>
        <li>
        <strong style="color: black;">NVIC (Controlador Vectorizado e Anidado)):</strong>
        </li>
        </u1>
        <p>
        Muy común en microcontroladores modernos (como la arquitectura ARM Cortex-M), permite manejar interrupciones anidadas (una interrupción interrumpe a otra menos importante) de forma rápida y eficiente.
        </p>

        <h2 class="titulo-seccion">
        3.1.5 Controlador de Acceso Directo a Memoria
        </h2>
        <p>
        El Controlador de Acceso Directo a Memoria (DMAC o DMA Controller, por sus siglas en inglés) es un chip o componente de hardware especializado que permite transferir datos directamente entre los periféricos del sistema (como discos duros, tarjetas gráficas o de sonido) y la memoria RAM, sin la intervención continua de la Unidad Central de Procesamiento (CPU).
        </p>
        <div class="imagen controlador DMA" style="text-align: center; margin: 10px 0;">
                            <img src="DMA.jpg" alt="controlaor DMA" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
<h3 class="titulo-seccion">
¿Cómo funciona?
</h3>
<p>
<strong style="color: black;"> 1. </strong><strong style="color: #0c0137;"> Configuración:</strong> La CPU le indica al controlador DMA los parámetros iniciales: la dirección de origen, la dirección de destino, el tamaño del bloque de datos y la dirección del flujo.
</p>
<p>
<strong style="color: black;"> 2. </strong><strong style="color: #0c0137;"> Transferencia:</strong> El controlador DMA toma el control del bus del sistema (actuando como bus master) y realiza el copiado de los datos por su cuenta.
</p>
<p>
<strong style="color: black;"> 3. </strong><strong style="color: #0c0137;"> Liberación y aviso:</strong> Una vez que termina de mover todo el bloque, el controlador DMA envía una señal de interrupción a la CPU para notificarle que el proceso ha concluido.
</p>

<h3 class="titulo-seccion">
Métodos de operación del controlador DMA
</h3>
<p>
<strong style="color: black;"> • </strong><strong style="color: #0c0137;"> Robo de ciclo (Cycle stealing):</strong> El controlador DMA le "roba" a la CPU uno o varios ciclos de reloj del bus para transferir una palabra de dato, pausando brevemente al procesador.
</p>
<p>
<strong style="color: black;"> • </strong><strong style="color: #0c0137;"> Modo ráfaga (Burst mode):</strong> El controlador DMA toma el control total del bus y transfiere el bloque completo de datos de una sola vez antes de devolverle el bus a la CPU.
</p>
<p>
<strong style="color: black;"> • </strong><strong style="color: #0c0137;"> Ciclo oculto (Transparent/Hidden mode):</strong> El controlador aprovecha los momentos en los que la CPU no está utilizando el bus de datos (por ejemplo, mientras ejecuta una instrucción en su caché interna) para hacer la transferencia sin afectar su velocidad.
</strong>

<h3 class="titulo-seccion">
Principales ventajas

</h3>
<p>
<strong style="color: black;"> • </strong><strong style="color: #0c0137;"> Libera a la CPU:</strong> Evita que el procesador pierda tiempo valioso moviendo byte por byte entre la memoria y los dispositivos.
</strong>
</p>
<p>
<strong style="color: black;"> • </strong><strong style="color: #0c0137;"> Mayor velocidad:</strong> Acelera las operaciones de Entrada/Salida (E/S) masivas, como lectura de unidades SSD/HDD o transmisión de red.
</strong>
</p>
<p>
<strong style="color: black;"> • </strong><strong style="color: #0c0137;"> Menor consumo energético:</strong> En sistemas embebidos, permite que la CPU permanezca en estados de bajo consumo mientras el hardware mueve la información.
</strong>
</p>

<h2 class="titulo-seccion">
        3.1.6 Circuitos de temporización   
        </h2>
        <p>
        Los circuitos de temporización y control son redes secuenciales dentro de la arquitectura de las computadoras (frecuentemente integradas en el chipset o la unidad de control) que aceptan un código de operación y generan una secuencia ordenada de señales de control.
        </p>
<h3 class="titulo-seccion">
Funciones principales
</h3>
<p>
<strong style="color: black;"> • Regulación de operaciones:</strong> Dirigen el flujo de información hacia y desde los registros internos de la CPU, la Unidad Aritmético-Lógica (ALU) y los buses del sistema.
</p>
<p>
<strong style="color: black;"> • Control de memoria y E/S:</strong> Generan las señales de lectura/escritura y validación de direcciones en el bus de control.
</p>
<p>
<strong style="color: black;"> • Sincronización (Reloj):</strong> Utilizan una frecuencia de reloj (medida en Hertzios o MHz) para marcar el ritmo de los pulsos y ciclos en que se ejecutan las instrucciones.
</p>
<div class="imagen circuito temporizacion" style="text-align: center; margin: 10px 0;">
                            <img src="circuitoT.png" alt="circuito temporizacion" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

    <h2 class="titulo-seccion">
    3.1.7 Circuitos de control
    </h2>
    <p>
    Un circuito de control es el conjunto de componentes físicos y lógicos encargados de gobernar, regular y automatizar el funcionamiento de una máquina o proceso industrial. A diferencia del circuito de fuerza (que suministra la alta potencia eléctrica para mover cargas como motores), el circuito de control opera con baja potencia para ejecutar órdenes seguras de arranque, paro, inversión de giro o regulación de variables.
    </p>
<h3 class="titulo-seccion">
Componentes principales
</h3>
<p>
<strong style="color: black;"> Los elementos de mando y maniobra interconectados en un esquema eléctrico o electrónico suelen dividirse en tres etapas:</strong>
</p>
<p>
<strong style="color: #0c0137;"> • Dispositivos de entrada o mando: </strong> Captan órdenes del operador o condiciones físicas del entorno mediante pulsadores, selectores, finales de carrera y sensores.
</p>
<p>
<strong style="color: #0c0137;"> • Elementos de procesamiento y lógica: </strong> Evalúan las señales recibidas para tomar decisiones utilizando relevadores auxiliares, temporizadores o un Controlador Lógico Programable (PLC).
</p>
<p>
<strong style="color: #0c0137;"> • Elementos de actuación y salida: </strong> Ejecutan la acción sobre la etapa de potencia a través de bobinas de contactores, electroválvulas y luces piloto de señalización.
</p>

<h3 class="titulo-seccion">
Clasificación según su operación
</h3>
<p>
<strong style="color: black;"> Dependiendo del grado de intervención humana y del tipo de tecnología empleada, los circuitos se agrupan en distintas categorías:</strong>
</p>
<p>
<strong style="color: #0c0137;"> • Sistemas manuales. </strong> Requieren que un operador accione directamente un interruptor o pulsador cada vez que se desea iniciar o detener el equipo.
</p>
<p>
<strong style="color: #0c0137;"> • Sistemas semiautomáticos. </strong> Combinan una orden manual inicial (como un botón de arranque con enclavamiento) con secuencias posteriores gobernadas por temporizadores o sensores.
</p>
<p>
<strong style="color: #0c0137;"> • Sistemas automáticos o de lazo cerrado. </strong> Ajustan continuamente una variable de proceso (PV) para igualarla a un punto de ajuste (SP) sin intervención humana, empleando sensores y controladores PID
</p>

<h3 class="titulo-seccion">
Funciones básicas en control electromecánico
</h3>
<p>
<strong style="color: black;"> En instalaciones industriales y diagramas de escalera (ladder), existen maniobras fundamentales para proteger tanto al operador como a la maquinaria:</strong>
</p>
<p>
<strong style="color: #0c0137;"> • Arranque y paro (enclavamiento). </strong> Utiliza un contacto normalmente abierto (NA) en paralelo con el pulsador de inicio para mantener energizada la bobina tras soltar el botón.
</p>
<p>
<strong style="color: #0c0137;"> • Enclavamiento de seguridad. </strong> Emplea contactos normalmente cerrados (NC) cruzados entre dos contactores para evitar que dos acciones opuestas (como giro horario y antihorario) ocurran al mismo tiempo.
</p>
<p>
<strong style="color: #0c0137;"> • Protección contra sobrecarga. </strong> Integra contactos auxiliares de relés térmicos o guardamotores en serie con la línea de control para cortar la energía ante fallas eléctricas.
</p>
<div class="imagen circuitos de control" style="text-align: center; margin: 10px 0;">
                            <img src="circuitoC.png" alt="circuitos de control" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

<h2 class="titulo-seccion">
                3.1.8 controles de video
                </h2>
<p>
Un controlador de video (también conocido como tarjeta de video, adaptador gráfico o VDC por sus siglas en inglés, Video Display Controller) es el puente entre los datos binarios que procesa la CPU y las imágenes visuales que percibe el usuario.
</p>
<p>
<strong style="color: black;">  • Generación de señal: </strong> Toma los datos provenientes del procesador y los traduce en señales eléctricas o digitales (como HDMI, DisplayPort o VGA) comprensibles para el dispositivo de salida.
</p>
<p>
<strong style="color: black;">  • Sincronización: </strong> Genera las señales de temporización (sincronización horizontal y vertical) necesarias para dibujar cada cuadro o fotograma en la pantalla de manera ordenada.
</p>
<h3 class="titulo-seccion">
Componentes Clave de un Sistema de Video
</h3>
<p>
<strong style="color: black;"> Para cumplir con su función dentro de la arquitectura del computador, el subsistema de video se apoya en varios elementos internos:</strong>
</p>
<p>
• 
<strong style="color: #0c0137;">  GPU (Unidad de Procesamiento Gráfico):</strong> Es el coprocesador especializado encargado de realizar los cálculos matemáticos complejos para renderizar gráficos en 2D y 3D, liberando de esta carga a la CPU principal.
</p>
<p>
• 
<strong style="color: #0c0137;">  VRAM (Memoria de Video):</strong> Es una memoria de acceso rápido dedicada exclusivamente a almacenar las texturas, los mapas de bits y el framebuffer (la imagen exacta que se está mostrando en pantalla en ese instante).
</p>
<p>
• 
<strong style="color: #0c0137;">  RAMDAC / Interfaz de salida:</strong> En arquitecturas clásicas o salidas analógicas, convierte las señales digitales almacenadas en la memoria de video en señales analógicas; en sistemas modernos, transmite el flujo digital directo hacia el monitor.
</p>
<div class="imagen controladores de video" style="text-align: center; margin: 10px 0;">
                            <img src="controladorV.jpg" alt="controladores de video" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
<h3 class="titulo-seccion">
Tipos de Controladores según su Arquitectura
</h3>
<p>
<strong style="color: black;"> Dentro del diseño de la placa base y el chipset, los controladores de video se dividen en dos grandes categorías:</strong>
</p>
<p>
•<strong style="color: #0c0137;">  Controladores integrados (IGP):</strong> El circuito gráfico viene integrado dentro del mismo encapsulado del procesador (CPU) o, en arquitecturas más antiguas, dentro del Puente Norte (Northbridge) del chipset. Comparten la memoria RAM principal del sistema.
</p>
<p>
• <strong style="color: #0c0137;">
Controladores dedicados (Tarjetas de expansión):</strong> Son placas independientes con su propia GPU y memoria VRAM que se conectan a la placa base mediante buses de alta velocidad como PCI Express (PCIe)
</p>
<p>
• <strong style="color: #0c0137;"> GPU (Unidad de Procesamiento Gráfico):</strong> El cerebro encargado de los cálculos matemáticos masivos en paralelo. Se organiza en arquitecturas específicas (como Ada Lovelace de NVIDIA o RDNA de AMD).
</p>
<p>
• <strong style="color: #0c0137;"> VRAM (Memoria de Video):</strong> Memoria de alta velocidad dedicada exclusivamente a almacenar texturas, búferes de fotogramas y geometrías.
</p>
<p>
• <strong style="color: #0c0137;"> Drivers (Controladores de Software):</strong> El programa intermedio que permite que el sistema operativo y las aplicaciones (como videojuegos o software de diseño) se comuniquen correctamente con el hardware de video.
</p>
<p>
• <strong style="color: #0c0137;"> DAC (Convertidor Digital-Analógico):</strong> En monitores antiguos, traduce las señales digitales de la GPU a señales analógicas; en la actualidad, se maneja principalmente de forma digital.
</p>
<div class="imagen controladores de video" style="text-align: center; margin: 10px 0;">
                            <img src="controladoresV2.png" alt="controladores de video" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

<h2 class="titulo-seccion">
                3.2 Aplicaciones
                </h2>
<p>
La arquitectura de computadoras es la base que conecta el hardware y el software. Sus aplicaciones prácticas abarcan desde el diseño de microchips y sistemas embebidos (como el internet de las cosas) hasta la supercomputación y la optimización de inteligencia artificial, garantizando un mejor rendimiento y eficiencia energética. 
</p>
<h3 class="titulo-seccion">
Funciones y Aplicaciones Principales del Chipset
</h3>
<p>
<strong style="color: black;">  • Interconexión de componentes:</strong> Actúa como un puente de comunicación que enlaza el microprocesador (CPU) con la memoria RAM, la tarjeta de vídeo y los dispositivos de almacenamiento.
</p>
<p>
<strong style="color: black;">  • Gestión del Puente Norte (Northbridge):</strong> Controla el tráfico de alta velocidad entre la CPU, la memoria RAM y el subsistema gráfico o ranuras PCIe (en arquitecturas tradicionales).
</p>
<p>
<strong style="color: black;">  • Gestión del Puente Sur (Southbridge):</strong> Administra los periféricos de E/S (entrada y salida), como los puertos USB, discos duros (SATA/NVMe), tarjetas de red (LAN), audio y el control de interrupciones.
</p>
<p>
<strong style="color: black;">  • Soporte en dispositivos móviles y SoC:</strong> En los teléfonos inteligentes y equipos modernos, muchas de estas funciones vienen integradas directamente en el System on Chip (SoC) junto con la GPU y el procesador.
</p>
div class="imagen aplicaciones" style="text-align: center; margin: 10px 0;">
                            <img src="AS.png" aplicaciones" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
                            <p>
<strong style="color: black;"> • Ofimática:</strong> Uso básico (documentos y hojas de cálculo).
</p>
<p>
<strong style="color: black;"> • Multimedia:</strong> Edición de imagen, audio y video.
</p>
<p>
<strong style="color: black;"> • Videojuegos:</strong> Requieren alto rendimiento gráfico.
</p>
<p>
<strong style="color: black;"> • Educativas:</strong> Aprendizaje y simulaciones.
</p>
<p>
<strong style="color: black;"> • Empresariales:</strong> Control de datos y procesos. 
</p>


<h2 class="titulo-seccion">
                    3.2.1 Entrada/Salida (E/S)
                </h2>
<p>
Los dispositivos de entrada permiten introducir datos y señales hacia el sistema o computadora (como teclados, ratones, micrófonos o escáneres), mientras que los dispositivos de salida muestran o traducen la información procesada para el usuario (como pantallas, impresoras o altavoces).
</p>
<p>
Por otro lado, los puertos de entrada/salida (I/O) son los puntos de conexión físicos o lógicos (como USB, HDMI o Ethernet) que permiten la transferencia de datos entre el equipo y los periféricos externos.
</p>
<p>
<strong style="color: black;"> • Entrada (Input):</strong> Datos, señales o instrucciones enviados al sistema para su procesamiento (ej. teclado, micrófono, cámara web).
</p>
<p>
<strong style="color: black;"> • Salida (Output):</strong> Resultados generados por el sistema tras procesar la información (ej. monitor, impresoras, altavoces).
</p>
<p>
<strong style="color: black;"> • Periféricos Mixtos (E/S):</strong> Dispositivos capaces de funcionar en ambas direcciones, enviando y recibiendo datos (ej. pantallas táctiles, memorias USB, módems). 
</p>
<div class="imagen entrada y salida" style="text-align: center; margin: 10px 0;">
                            <img src="DES.png" alt="entrada y salida" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

<h2 class="titulo-seccion">
                    3.2.2 Almacenamiento
                </h2>
                <p>
                El almacenamiento en arquitectura de computadoras organiza de forma jerárquica los dispositivos para gestionar, retener y recuperar datos e instrucciones. Su objetivo es equilibrar la velocidad del procesador (CPU) y la capacidad de los medios físicos para lograr el máximo rendimiento. 
                </p>
    <h3 class="titulo-seccion">            
1. La Jerarquía de Memoria
</h3>
<p>
Para evitar que el procesador espere por los datos, los sistemas utilizan una estructura piramidal que va de menor capacidad y mayor velocidad a mayor capacidad y menor velocidad.
</p>
<p>
<strong style="color: black;"> • Registros del CPU:Memoria interna del procesador:< </strong> Es la más rápida (acceso en 1 ciclo de reloj) pero de capacidad mínima.
</p>
<p>
<strong style="color: black;"> • Memoria Caché (L1, L2, L3): </strong> Memoria ultrarrápida ubicada cerca o dentro del CPU. Almacena datos e instrucciones de uso frecuente para acelerar el procesamiento.
</p>
<p>
<strong style="color: black;"> • Memoria Principal (RAM): </strong> Memoria volátil de acceso aleatorio. Mantiene temporalmente los programas y datos que el CPU está utilizando activamente en tiempo real.
</p>
<p>
<strong style="color: black;"> • Memoria Secundaria / Almacenamiento Masivo: </strong> Dispositivos no volátiles que guardan datos permanentemente (apagarse no borra la información). Ejemplos clave son los SSDs (Unidades de Estado Sólido) y los HDDs (Discos duros mecánicos).
</p>

<h3 class="titulo-seccion">
    2. Formas de Conexión en la Arquitectura
</h3>
<p>
<strong style="color: black;"> • Almacenamiento Local (DAS): </strong> Conectado directo al equipo (por ejemplo, unidades internas o discos externos vía USB / SATA).
</p>
<p>
<strong style="color: black;"> • Almacenamiento en Red (NAS / SAN): </strong> Discos centralizados y accesibles a través de redes de área local para compartir archivos entre múltiples sistemas. 
</p>
<div class="imagen alamcenamiento" style="text-align: center; margin: 10px 0;">
                            <img src="Almacenamiento.png" alt="almacenamiento" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

<h2 class="titulo-seccion">
        3.2.3 Fuentes de alieantcaion
        </h2>
        <p>
        Una fuente de alimentación (PSU, por sus siglas en inglés) es el dispositivo que convierte la corriente alterna (CA) de la red eléctrica en una o varias corrientes continuas (CC) con los voltajes adecuados para que funcionen los componentes de un equipo electrónico, como un ordenador, un televisor o un circuito.
        </p>
<h3 class="titulo-seccion">
Función principal
</h3>
<p>
<strong style="color: black;">  • Conversión de energía:</strong> Toma la electricidad de alta tensión de la toma de corriente y la transforma en voltajes estables de menor nivel (por ejemplo, en un PC: +12V, +5V, +3.3V).
</p>
<p>
<strong style="color: black;"> • Distribución y protección:</strong> Reparte la energía a cada pieza según su necesidad (placa base, procesador, tarjeta gráfica) y protege al sistema contra sobrecargas o cortocircuitos.
</p>
<h3 class="titulo-seccion">
Etapas de una fuente de alimentación tradicional
</h3>
<p>
<strong style="color: black;"> 1. Transformación:</strong> Reduce o eleva el voltaje de entrada de la corriente alterna mediante un transformador.
</p>
<p>
<strong style="color: black;"> 2. Rectificación:</strong> Convierte la corriente alterna en corriente pulsante (unidireccional).
</p>
<p>
<strong style="color: black;"> 3. Filtrado:</strong> Suaviza los pulsos mediante condensadores para eliminar el rizado (ondulación).
</p>
<p>
<strong style="color: black;"> 4. Regulación:</strong> Mantiene el voltaje de salida constante sin importar las variaciones en la carga o en la red.
</p>
<h3 class="titulo-seccion">
Tipos principales
</h3>
<p>
<strong style="color: black;"> • Lineales:</strong> Utilizan un transformador pesado; son sencillas y con bajo nivel de ruido eléctrico, pero poco eficientes.
</p>
<p>
<strong style="color: black;">• Conmutadas (SMPS):</strong> Trabajan a alta frecuencia, lo que las hace mucho más ligeras, pequeñas y eficientes (muy utilizadas en ordenadores y cargadores).
</p>
<p>
<strong style="color: black;">• Ininterrumpidas (SAI / UPS):</strong> Incorporan baterías para seguir suministrando energía en caso de un apagón.
</p>
<div class="imagen fuente alimentacion" style="text-align: center; margin: 10px 0;">
                            <img src="FuentesA.png" alt="fuente alimentacion" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

            <h2 class="titulo-seccion">
                    3.3 Ambientes de servicio
                </h2>
<p>
El negocio de proveer servicios de datos es mucho más complejo que la forma en la que se dan los tradicionales servicios, que con frecuencia se terminan involucrando o necesitando la colaboración de terceras empresas.
</p>
<P>
    <strong style="color: black;"> 1. Desarrollo de nuevos mercados y productos</strong>
    </p>
    <p>
    <strong style="color: black;"> 2. Adquisición y administración de clientes</strong>
    </p>
    <p>
    <strong style="color: black;"> 3. Proveer y desarrollar servicios para la red</strong>
    </p>
    <p>
<strong style="color: black;">  4. dministración del negocio</strong>
    </p>

<h3 class="titulo-seccion">
1. Arquitectura Cliente-Servidor
</h3>
<p>
<strong style="color: black;"> • Funcionamiento:</strong> 
</p>
<p>
Divide el sistema entre clientes (que solicitan recursos) y servidores (que procesan peticiones y proveen datos o servicios centralizados).
</p>
<h3 class="titulo-seccion">
2. Arquitectura Orientada a Servicios (SOA)
</h3>
<p>
<strong style="color: black;">• Funcionamiento:</strong> Estilo de diseño donde las funciones del software se agrupan en módulos o "servicios" que se comunican entre sí a través de una red mediante interfaces estándar.
</p>
<p>
<strong style="color: black;"> • Ventajas:</strong> Alta reutilización de código, independencia de plataformas y estandarización.
</p>

<h3 class="titulo-seccion">
3. Microservicios y Contenedores
</h3>
<p>
<<strong style="color: black;">• Funcionamiento:</strong>Evolución de SOA donde una aplicación se divide en pequeños servicios autónomos, cada uno ejecutándose en su propio entorno aislado.
</p>
<p>
<strong style="color: black;">• Tecnologías clave:</strong> Facilita el uso de plataformas de virtualización ligera y orquestación para garantizar la disponibilidad. 
</p>
<div class="imagen ambiente de servicio" style="text-align: center; margin: 10px 0;">
                            <img src="AmbienteS.png" alt=ambiente de servicio" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

<h2 class="titulo-seccion">
    3.3.1 Negocios
    </h2>
    <p>
    Los negocios en arquitectura de computadoras abarcan desde la creación de hardware especializado e inteligencia artificial hasta la consultoría de infraestructura. 
    </p>
    <h3 class="titulo-seccion">
    1. Estrategia de Negocio (Ventaja Competitiva)
</h3>
<p>
<strong style="color: black;"> define cómo una empresa logra destacar frente a la competencia. Según Michael Porter, se divide en tres vertientes:</strong>
</p>
<p>
<strong style="color: #0c0137;"> Liderazgo en costos:</strong> Ofrecer precios más bajos optimizando los procesos.
</p>
<p>
<strong style="color: #0c0137;"> Diferenciación:</strong> Hacer que el producto o servicio sea único y valorado por el cliente.
</p>
<p>
<strong style="color: #0c0137;"> Foco o alta segmentación:</strong> Concentrarse en un grupo específico de consumidores
</p>

<h3 class="titulo-seccion">
2. Planeación y Resumen Ejecutivo (Plan de Negocios)
</h3>
<p>
<strong style="color: black;">suele iniciar el bloque de Planeación. Incluye: </strong>
</p>
<p>
<strong style="color: #0c0137;">Resumen ejecutivo:</strong> La síntesis clara de la idea de negocio, la misión y la viabilidad del proyecto.
</p>
<p>
<strong style="color: #0c0137;">Definición del problema:</strong> Identificar la necesidad insatisfecha del mercado que la empresa va a resolver. 
</p>
<div class="imagen Negocios" style="text-align: center; margin: 10px 0;">
                            <img src="Negocios.png" alt="Negocios" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

<h2 class="titulo-seccion">
                    3.2.2 Industria
                </h2>
    <p>
    La arquitectura de computadoras impulsa el desarrollo de hardware y sistemas embebidos. Sus principales industrias incluyen semiconductores (fabricación de microprocesadores), centros de datos y nube, automotriz (vehículos autónomos) y electrónica de consumo, todas ellas marcadas por la innovación continua. 
    </p>
    <h3 class="titulo-seccion">
Aplicaciones clave en el sector industrial:
</h3>
<p>
<strong style="color: black;"> Automatización y control:</strong> Uso de PLC (controladores lógicos programables) y microcontroladores basados en arquitecturas eficientes para operar maquinaria en líneas de ensamblaje.
</p>
<p>
<strong style="color: black;"> Procesamiento de datos en tiempo real:</strong> Implementación de sistemas de cómputo robustos para supervisar sensores, variables físicas y flujos de trabajo (sistemas SCADA).
</p>
<p>
<strong style="color: black;"> Gestión de recursos y logística:</strong> Integración de redes de computadoras y servidores locales o en la nube para administrar inventarios, cadenas de suministro y planificación de producción (ERP).
</p>
<p>
<strong style="color: black;"> Eficiencia energética y tolerancia a fallos:</strong> Diseño de hardware especializado que soporta entornos industriales hostiles (temperaturas extremas, vibraciones) con un consumo eléctrico optimizado.
</p>
<div class="imagen Industria" style="text-align: center; margin: 10px 0;">
                            <img src="Industria.png" alt="Industria" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

<h2 class="titulo-seccion">
                3.3.3 Comercio electronico
                </h2>
    <p>
    La arquitectura de computadoras en el comercio electrónico se refiere a la infraestructura de hardware y software que soporta las ventas digitales. Acelera las transacciones en tiempo real al optimizar servidores, bases de datos y APIs. Esto permite procesar pagos y gestionar inventarios de manera simultánea sin interrupciones. 
    </p>
    <h3 class="titulo-seccion">
    Componentes de la Arquitectura para Comercio Electrónico:
    </h3>
    <p>
<strong style="color: black;"> Servidores y procesamiento central:</strong> Equipos de alto rendimiento (procesadores multicore) que gestionan las peticiones de los usuarios en tiempo real.
</p>
<p>
<strong style="color: black;"> Sistemas de almacenamiento masivo:</strong> Dispositivos (como arreglos de discos o bases de datos en red) para guardar catálogos, historiales de transacciones y datos de clientes de forma segura. 
</p>
<p>
<strong style="color: black;"> Redes y protocolos de comunicación:</strong> Tarjetas de interfaz de red y enrutadores que permiten la transmisión rápida y cifrada de información entre el cliente y el servidor. 
</p>
<p>
<strong style="color: black;"> Seguridad por hardware:</strong> Chips especializados (como los módulos de plataforma segura o TPM) que protegen los datos de tarjetas de crédito y la autenticación de usuarios.
</p>
<div class="imagen comercio electronico" style="text-align: center; margin: 10px 0;">
                            <img src="comercioE.jpg" alt="comercio electronico" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

<h3 class="titulo-seccion">
Niveles principales de la infraestructura:
</h3>
<p>
<strong style="color: black;">• Nivel de Usuario (Frontend):</strong> Las interfaces y aplicaciones web con las que interactúa el cliente (catálogos, carritos).
</p>
<p>
<strong style="color: black;">• Nivel de Funcionalidad Técnica (Backend):</strong> La lógica de negocios que procesa los pedidos, gestiona el inventario y aplica filtros de seguridad.
</p>
<p>
<strong style="color: black;">• Nivel de Infraestructura:</strong> Servidores físicos o en la nube, balanceadores de carga, cortafuegos y bases de datos que soportan el tráfico del sitio. 
</p>
`

    },
4: {

        titulo: "Unidad 4: Procesamiento paralelo",

        contenido: `

    <h2 class="titulo-seccion">
    4.1 Aspectos basicos de la computacion paraela
    </h2>
<p>
La computación paralela es una forma de procesamiento en la que múltiples instrucciones o tareas se ejecutan simultáneamente. Se basa en la idea de que los problemas grandes o complejos se pueden dividir en subproblemas más pequeños para resolverlos al mismo tiempo utilizando varios procesadores, núcleos o equipos conectados
</p>
<h3 class="titulo-seccion">
Aspectos clave de la computación paralela
</h3>
<p>
<strong style="color: black;">• Principio fundamental:</strong> En lugar de procesar datos de forma secuencial (un paso tras otro con un solo procesador), se distribuye la carga de trabajo para reducir drásticamente el tiempo de ejecución.
</p>
<p>
<strong style="color: black;">• Motivación principal:</strong> Surge debido a las limitaciones físicas de los semiconductores y el consumo energético que impiden seguir aumentando indefinidamente la frecuencia de reloj (GHz) de un solo procesador.
</p>
<div class="imagen computacion paralela" style="text-align: center; margin: 10px 0;">
                            <img src="computacionP.png" alt="computacion paralela" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

<h2 class="titulo-seccion">
                    4.2 Tipos de computacion paralela
                </h2>
<p>
• <strong style="color: black;"> Nivel de bit:</strong> Aumenta el tamaño de la palabra del procesador (por ejemplo, pasar de procesadores de 8 bits a 32 o 64 bits), reduciendo el número de instrucciones necesarias para operar con datos grandes.
</p>
<p>
• <strong style="color: black;">Nivel de instrucción (ILP):</strong> Ejecuta varias instrucciones de un mismo programa al mismo tiempo dentro de un mismo procesador (técnicas como pipelining o superescalar).
</p>
<p>
• <strong style="color: black;">Paralelismo de datos:</strong> Un mismo conjunto de operaciones se aplica simultáneamente a diferentes bloques de datos (ejemplo: procesamiento de matrices o imágenes).
</p>
<p>
• <strong style="color: black;">Paralelismo de tareas:</strong> El cálculo total se divide en subtareas completamente distintas que se ejecutan en paralelo en diferentes procesadores.
</p>
<div class="imagen Tipos CP" style="text-align: center; margin: 10px 0;">
                            <img src="TCP.jpg" alt="Tipos CP" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

<h2 class="titulo-seccion">
4.2.1 Clasificacion
                </h2>
        <p>
    La computación paralela se clasifica principalmente según la Taxonomía de Flynn (flujos de instrucciones y datos) y el nivel de paralelismo (bits, instrucciones, datos o tareas).
</p>
<p>
<strong style="color: black;"> • SISD (Single Instruction, Single Data):</strong> Secuencial tradicional.
</p>
<p>
<strong style="color: black;"> • SIMD (Single Instruction, Multiple Data):</strong> Una instrucción se aplica a múltiples datos a la vez (ej. GPUs).
</p>
<p>
<strong style="color: black;"> • MISD (Multiple Instruction, Single Data):</strong> Poco común, múltiples instrucciones sobre el mismo dato.
</p>
<p>
<strong style="color: black;"> • MIMD (Multiple Instruction, Multiple Data): </strong>Diferentes procesadores ejecutan distintas instrucciones sobre diferentes datos; es la más flexible y común en sistemas modernos.
</p>
<div class="imagen clasificacion" style="text-align: center; margin: 10px 0;">
                            <img src="clasificacionP.png" alt="clasificacion" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

<h2 class="titulo-seccion">
            4.2.2 Arquitectura de computadoras secuenciales
            </h2>
            <p>
            La arquitectura de computadoras secuenciales, basada fundamentalmente en el modelo de Von Neumann, ejecuta instrucciones una tras otra en un orden específico, donde cada tarea debe completarse antes de iniciar la siguiente. Utiliza una CPU, memoria unificada para datos e instrucciones, y buses de comunicación para procesar información de manera ordenada y automática.
            </p>
<h3 class="titulo-seccion">
Características principales
</h3>
<p>
<strong style="color: black;"> • Modelo SISD (Taxonomía de Flynn):</strong> Corresponde a la categoría Single Instruction Stream, Single Data Stream (flujo único de instrucciones y flujo único de datos), donde un procesador ejecuta una secuencia de instrucciones sobre un solo conjunto de datos a la vez.
</p>
<h3 class="titulo-seccion">
• Componentes fundamentales:
</h3>
<p>
	<strong style="color: black;"> • Una CPU (Unidad Central de Procesamiento) dividida en Unidad de Control y Unidad Aritmético-Lógica (ALU).</strong>
    </p>
    <p>
    <strong style="color: black;">• Una memoria principal compartida tanto para programas (instrucciones) como para datos.</strong>
    </p>
    <p>
	<strong style="color: black;">• Un sistema de buses (datos, direcciones y control) que comunica al procesador con la memoria y los dispositivos de entrada/salida.</strong>
    </p>
    <p>
	<strong style="color: black;">• Un mecanismo de sincronización basado en señal de reloj (sistemas síncronos).</strong>
    </p>
    <div class="imagen computadoras secuenciles" style="text-align: center; margin: 10px 0;">
                            <img src="arquitecturaS.png" alt="computadora secuenciales" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
    
    <h2 class="titulo-seccion">
                    4.2.3 Organizacion de direcciones de memoria
                </h2>
<p>
La organización de direcciones de memoria utiliza un sistema jerárquico y virtual para gestionar datos eficientemente. La CPU trabaja con direcciones lógicas (virtuales), que la Unidad de Gestión de Memoria (MMU) traduce a direcciones físicas reales en la RAM, a menudo usando paginación. La memoria se organiza en niveles: registros (más rápidos), caché, RAM y disco duro. .
</p>
<div class="imagen direccion de memoria" style="text-align: center; margin: 10px 0;">
                            <img src="organizacionM.png" alt="direccion de memoria" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

<h3 class="titulo-seccion">
Conceptos Clave de la Organización
</h3>
<p>
<strong style="color: black;"> • Celdas y Palabras:</strong> La memoria se divide en un arreglo de posiciones donde cada celda o grupo de bits (generalmente de 8 bits o múltiplos, formando una palabra) almacena una instrucción o un dato.
</p>
<p>
<strong style="color: black;"> • Espacio de Direccionamiento:</strong> Es el número total de ubicaciones únicas que la CPU puede identificar. Depende directamente del número de líneas del bus de direcciones (n líneas permiten \(2^{n}\) direcciones distintas). Por ejemplo, un bus de 32 bits permite direccionar hasta 2³² (4.294.967.296) posiciones.
</p>
<p>
<strong style="color: black;"> • Representación:</strong> Las direcciones se identifican habitualmente mediante números enteros sin signo (de 0 hasta \(2^n - 1\)), y se suelen mostrar y manipular en formato hexadecimal para facilitar su lectura.
</p>
<h3 class="titulo-seccion">
Registros Involucrados:
</h3>
<p>
	<strong style="color: black;">• MAR (Memory Address Register / Registro de Direcciones de Memoria):</strong> Almacena temporalmente la dirección de memoria a la que se va a leer o escribir.
    </p>
    <p>
	<strong style="color: black;">• MDR (Memory Data Register / Registro de Datos de Memoria):</strong> Contiene el dato que se transfiere hacia o desde la dirección indicada.
    </p>
    <p>
<strong style="color: black;">• Traducción y Gestión:</strong> En sistemas operativos modernos, la Unidad de Gestión de Memoria (MMU) traduce las direcciones lógicas o virtuales generadas por los programas a direcciones físicas reales de la RAM.
</p>


<p>
<strong style="color: black;"> • Memoria Líneal:</strong>
</p>
<p>
Los datos se almacenan uno tras otro, en direcciones consecutivas. Es simple pero no muy eficiente en sistemas grandes.
</p>
<p>
<strong style="color: black;"> • Memoria segmentada:</strong>
</p>
<p>
La memoria se divide en partes llamadas segmentos, como código, datos y pila, lo que permite una mejor organización.
</p>
<p>
<strong style="color: black;"> • Memoria paginada:</strong>
</p>
<p>
La memoria se divide en bloques del mismo tamaño llamados páginas, lo que ayuda a evitar desperdicio de espacio y mejora el rendimiento. 
</p>

<h2 class="titulo-seccion">
                    4.3 Sistema de memoria(compartida) multiprocesadores
                </h2>
<p>
Los sistemas de memoria compartida son arquitecturas donde múltiples procesadores o procesos acceden a un conjunto común de memoria, permitiendo una comunicación rápida y eficiente al leer/escribir en ubicaciones compartidas. Es una técnica clave para el paralelismo en servidores y sistemas multinúcleo que requiere sincronización (como semáforos) para evitar inconsistencias de datos.
</p>
<div class="imagen multriprocesamiento" style="text-align: center; margin: 10px 0;">
                            <img src="multriprocesador.jpg" alt="multriprocesamiento" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

<h2 class="titulo-seccion">
                4.3.1 Redes de interconexion dinamica(indirecta) comutadas
                </h2>
<p>
Las redes de interconexión dinámicas o indirectas son aquellas cuya topología puede variar (reconfigurarse) durante la ejecución de los procesos o entre una ejecución y otra, utilizando elementos de conmutación intermedios en lugar de enlaces fijos y directos entre los nodos
</p>
<h3 class="titulo-seccion">
Medio Compartido
</h3>

<p>
Un sistema de memorias medio compartidas (también llamado memoria compartida intermedia) es un mecanismo de comunicación entre procesos en sistemas operativos y arquitecturas de cómputo. Se utiliza para que varios procesos puedan acceder a una misma región de memoria y así intercambiar información de manera rápida, sin necesidad de pasar por archivos o mensajes.
</p>
<h3 class="titulo-seccion">
Conmutadas
</h3>
<p>
Un sistema de memorias conmutadas (o conmutación de bancos de memoria, bank switching en inglés) es una técnica de arquitectura de computadoras utilizada para aumentar la memoria disponible más allá de la cantidad máxima que el procesador puede direccionar directamente.
</p>
<div class="imagen multriprocesadores2" style="text-align: center; margin: 10px 0;">
                            <img src="multiprocesamiento.jpg" alt="multriprocesadores2" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

<h2 class="titulo-seccion">
            4.4 Sistema de memorias distribuida
                </h2>
<p>
Un sistema de memoria distribuida (típico de multicomputadoras y clústeres) es una arquitectura de cómputo paralelo donde cada procesador o nodo cuenta con su propia memoria local privada, y no existe un espacio de direcciones de memoria global y compartido de manera física.
</p>
<div class="imagen memoria distribuida" style="text-align: center; margin: 10px 0;">
                            <img src="SistemaMD.png" alt="memoria distribuida" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
<h3 class="titulo-seccion">
Multicomputadoras
</h3>
<p>
Las multicomputadoras son sistemas de computación paralela donde múltiples computadoras autónomas (nodos) están interconectadas por una red de alta velocidad. A diferencia de los multiprocesadores, cada nodo posee su propia memoria local y CPU (memoria distribuida), comunicándose mediante el paso explícito de mensajes. Son ideales para procesamiento paralelo a gran escala y clústers.
</p>

<h2 class="titulo-seccion">
                4.4.1 Redes de Interconexión estáticas
                </h2>
<p>
Las redes de interconexión estáticas son estructuras de comunicación en sistemas multiprocesador donde los nodos (procesadores/memoria) están conectados mediante enlaces físicos directos y permanentes. Se caracterizan por tener topologías fijas que no cambian durante el funcionamiento, lo que limita su escalabilidad pero permite un rendimiento eficiente si el tráfico es predecible.
</p>
<div class="imagen interconexion estatica" style="text-align: center; margin: 10px 0;">
                            <img src="RIE.png" alt="interconeion esttaica" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>

<h2 class="titulo-seccion">
                    4.5 Casos para estudios
                </h2>
    <p>
    Un estudio de caso (frecuentemente numerado como apartado 4.5 Casos de estudio en manuales, tesis o proyectos) es una técnica de investigación o método de enseñanza que consiste en analizar de manera profunda y detallada una situación, un problema real, una organización o un evento específico.
    </p>
<h3 class="titulo-seccion">
Elementos principales de un estudio de caso
</h3>
<p>
<strong style="color: black;"> • Título:</strong> Clara referencia al tema o dilema central.
</p>
<p>
<strong style="color: black;"> • Contexto o introducción:</strong> Descripción del escenario, los actores y el entorno.
</p>
<p>
<strong style="color: black;"> • Planteamiento del problema:</strong> Exposición de hechos, datos, cifras o dificultades concretas.
</p>
<p>
<strong style="color: black;"> • Preguntas de análisis:</strong> Interrogantes que guían el pensamiento crítico y la evaluación.
</p>
<p>
<strong style="color: black;"> • Propuesta de solución o discusión:</strong> Estrategias, alternativas y conclusiones derivadas del análisis.
</p>
<h3 class="titulo-seccion">
INTEL CORE / XEON (MULTINÚCLEO Y REDES INTERNAS):
</h3>
<p>
Destaca por cómo conecta sus núcleos internos. Históricamente han usado redes en Anillo (Ring Bus) para procesadores de escritorio y redes enMalla (Mesh) para servidores masivos (Xeon).
</p>
<div class="imagen intel" style="text-align: center; margin: 10px 0;">
                            <img src="Intel.jpg" alt="intel" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
<h3 class="titulo-seccion">
AMD RYZEN / EPYC (ARQUITECTURA CHIPLET):
</h3>
<p>
En lugar de hacer un chip gigante, AMD fabrica "pedacitos" de procesador llamados chiplets y los conecta usando su propia red de interconexión ultra rápida llamada Infinity Fabric.
</p>
<div class="imagen AMD" style="text-align: center; margin: 10px 0;">
                            <img src="AMDR.jpg" alt="AMD" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>
<h3 class="titulo-seccion">
NVIDIA GPUS (PARALELISMO MASIVO):
</h3>
<p>
Mientras un CPU normal tiene 8 o 16 núcleos muy potentes, una tarjeta gráfica NVIDIA tiene miles de núcleos más pequeños trabajando al mismo tiempo (ideal para videojuegos o Inteligencia Artificial).
</p>
<div class="imagen NVIDIA GPUS" style="text-align: center; margin: 10px 0;">
                            <img src="NVIDIA GPUS.png" alt="NVIDIA GPUS" style="max-width: 60%; height: auto; border-radius: 6px;">
                            </div>
                            </div>



        `
    }
};

// Elementos de la ventana
const modal = document.getElementById("modalUnidad");
const tituloUnidad = document.getElementById("tituloUnidad");
const contenidoUnidad = document.getElementById("contenidoUnidad");
const cerrarModal = document.getElementById("cerrarModal");

// Botones para mostrar las unidades
document.querySelectorAll(".btn-ver-unidad").forEach((boton) => {

    boton.addEventListener("click", () => {

        const numero = boton.dataset.unidad;
        const unidad = unidades[numero];

        if (unidad) {
            tituloUnidad.textContent = unidad.titulo;
            contenidoUnidad.innerHTML = unidad.contenido;
        } else {
            tituloUnidad.textContent = "Unidad " + numero;
            contenidoUnidad.innerHTML =
                "La información de esta unidad todavía no está disponible.";
        }

        modal.classList.add("activo");
    });

});

// Cerrar con el botón X
cerrarModal.addEventListener("click", () => {
    modal.classList.remove("activo");
});

// Cerrar al hacer clic fuera de la ventana
modal.addEventListener("click", (evento) => {
    if (evento.target === modal) {
        modal.classList.remove("activo");
    }
});