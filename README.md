Sistema de Cotización de Seguro

Este programa realiza la cotización de un seguro en base a diferentes
características del asegurado. El sistema solicita información al usuario,
calcula recargos según ciertas condiciones y muestra el precio final del
seguro.

El programa permite realizar múltiples cotizaciones, repitiendo el
proceso hasta que el usuario ingrese la palabra Salir.

Funcionamiento del programa

1. El programa solicita el nombre del asegurado.
2. Si el usuario escribe **“Salir”**, el programa finaliza.
3. Si no, el sistema continúa solicitando:
   - Edad del asegurado
   - Estado civil
   - Edad del cónyuge (si está casado)
   - Cantidad de hijos
   - Cantidad de propiedades
   - Salario del asegurado
4. En base a estos datos se calculan los recargos correspondientes.
5. Se suma el total de recargos al precio base.
6. Se muestra el **precio final del seguro**.
7. El proceso se repite para una nueva cotización.

Aspectos importantes del problema a considerar

- Validar que los datos ingresados sean numéricos cuando corresponda.
- Convertir correctamente los valores ingresados con "parseInt".
- Controlar las respuestas del usuario usando "toUpperCase()" para evitar
  errores por mayúsculas o minúsculas.
- Acumular correctamente los recargos en una sola variable ("recargo_total").
- Permitir que el programa realice varias cotizaciones sin reiniciarse.

Posibles mejoras del programa

- Validar que no se ingresen valores negativos.
- Mostrar todos los resultados en una sola alerta o en pantalla.
- Utilizar funciones para evitar repetir código.
- Implementar una interfaz gráfica.
- Permitir seleccionar opciones mediante menús en lugar de escribir texto.
- Guardar el historial de cotizaciones realizadas.

Conclusión

El programa cumple con los requerimientos solicitados, realiza correctamente
el cálculo del seguro y aplica los recargos según las condiciones del asegurado.
Además, permite realizar múltiples cotizaciones de forma eficiente y clara.
