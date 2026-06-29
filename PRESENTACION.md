# ECORESCATE

## Aplicación de Detección de Señales de Vida bajo Escombros

---

### 1. ¿Qué es EcoRescate?

EcoRescate es una aplicación web progresiva (PWA) gratuita, diseñada para asistir en operaciones de búsqueda y rescate de personas atrapadas bajo escombros. Utiliza el micrófono del teléfono celular y algoritmos de procesamiento de audio en tiempo real para detectar **golpes rítmicos** y **voz humana** a través de materiales como concreto, metal y escombros.

**No requiere instalación** — funciona directamente desde el navegador del celular (Chrome, Safari, Edge). Tampoco requiere conexión a internet después de la primera carga (funciona offline).

---

### 2. Problemática que Resuelve

En situaciones de desastre natural (terremotos, derrumbes, explosiones), el tiempo es crítico. Las primeras 72 horas son las más importantes para encontrar personas con vida. Sin embargo:

- Los equipos de rescate especializados (con sensores acústicos, radar, cámaras térmicas) **no siempre llegan a tiempo** o en cantidad suficiente.
- Los rescatistas voluntarios y comunidades locales **no tienen acceso a tecnología de detección**.
- El ruido de maquinaria y ambiente dificulta escuchar señales humanas a simple oído.

EcoRescate convierte cualquier teléfono celular en una **herramienta de detección acústica**, aumentando la capacidad de búsqueda y permitiendo que más personas participen en las labores de rescate.

---

### 3. ¿Cómo funciona?

#### 3.1 Captura de Audio

La app accede al micrófono del teléfono y analiza la señal de audio en tiempo real, 60 veces por segundo.

#### 3.2 Calibración Automática

Al iniciar, la app mide el ruido ambiental durante 3 segundos y ajusta automáticamente los umbrales de detección. Esto permite que funcione correctamente tanto en ambientes silenciosos como en zonas con ruido de fondo (viento, maquinaria, tráfico).

#### 3.3 Detección de Golpes (80-400 Hz)

Los golpes contra concreto, metal o mampostería generan energía en frecuencias bajas (80-400 Hz). El algoritmo:

1. Mide la energía en esa banda de frecuencia
2. Detecta ataques súbitos (transitorios percusivos)
3. Identifica patrones rítmicos (2, 3 o más golpes en secuencia)
4. Alerta al rescatista con vibración y aviso visual

**Los golpes rítmicos (3 o más en ventana de 6 segundos) se consideran señal de auxilio.**

#### 3.4 Detección de Voz Humana (75-400 Hz, pitch)

La voz humana tiene una característica única: es una señal **periódica** con una frecuencia fundamental (pitch) entre 75 Hz (voz grave) y 400 Hz (voz aguda/niños). El algoritmo:

1. Aplica **autocorrelación** a la señal de audio para detectar periodicidad
2. Filtra ruido no periódico (viento, motores, golpes resonantes)
3. Requiere señal sostenida (~80 ms) para evitar falsos positivos
4. Alertan sobre posibles voces humanas

#### 3.5 Calibración de Sensibilidad por el Usuario

El panel de ajustes permite al usuario controlar la sensibilidad:

| Nivel | Etiqueta | Capta |
|-------|----------|-------|
| 1 | Máxima | Susurros, respiración |
| 3 | Alta | Voz baja, golpes suaves |
| 5 | Normal | Conversación, golpes medios |
| 7 | Baja | Solo gritos, golpes fuertes |
| 10 | Mínima | Solo sonidos muy claros |

---

### 4. Funcionalidades Adicionales

#### 4.1 Linterna LED
Prende el flash del teléfono para iluminar zonas oscuras durante la búsqueda.

#### 4.2 Alerta Sonora
Emite pitidos audibles en secuencia para que personas atrapadas sepan que hay rescatistas cerca. Se reproduce en ciclo hasta que el usuario lo detiene.

#### 4.3 Compartir Ubicación GPS
Obtiene las coordenadas del lugar de búsqueda y permite compartirlas por WhatsApp, Telegram, SMS, etc., facilitando la coordinación entre brigadas de rescate.

#### 4.4 Funcionamiento Offline
Después de la primera visita, la app funciona completamente sin internet, ideal para zonas donde las redes de comunicación pueden estar caídas.

#### 4.5 Sin Publicidad ni Costos
Es completamente gratuita, sin publicidad, sin registro, sin servidores. Código abierto en GitHub.

---

### 5. Tecnología Utilizada

| Componente | Tecnología |
|------------|------------|
| Interfaz | HTML5, CSS3, JavaScript puro |
| Audio | Web Audio API (AnalyserNode, FFT) |
| Detección de pitch | Autocorrelación en dominio del tiempo |
| Almacenamiento | localStorage (preferencias del usuario) |
| Servidor | PHP mínimo (contador de visitas) |
| Hosting | GitHub Pages (gratuito, con HTTPS) |
| Compatibilidad | Chrome, Firefox, Safari, Edge (Android/iOS) |

**No utiliza** frameworks externos, librerías de IA, ni servicios en la nube. Todo el procesamiento ocurre en el dispositivo del usuario.

---

### 6. Limitaciones y Consideraciones

| Limitación | Explicación |
|------------|-------------|
| No es radar | No puede "ver" a través de los escombros, solo escuchar |
| Depende del micrófono | La calidad varía según el modelo de teléfono |
| Falsos positivos | Ruido ambiental puede generar alertas incorrectas |
| No reemplaza equipos profesionales | Es una herramienta complementaria, no sustituta |

**Ventaja clave**: cualquier persona con un celular puede usarlo, multiplicando los "ojos y oídos" en una zona de desastre.

---

### 7. Caso de Uso Típico

1. Un equipo de rescate llega a una zona de escombros
2. Activan EcoRescate en uno o varios teléfonos
3. Mantienen silencio 3 segundos para calibración
4. Colocan los teléfonos sobre los escombros o los acercan a grietas
5. La app escucha y alerta automáticamente si detecta golpes o voces
6. Si se sospecha que hay alguien, activan la **alerta sonora** para indicar su presencia
7. Coordinan con otros equipos compartiendo la **ubicación GPS**
8. Repiten el proceso en diferentes sectores

---

### 8. Impacto Potencial

- **Multiplica la capacidad de búsqueda**: cualquier ciudadano puede ayudar
- **Reduce tiempo de respuesta**: no esperar equipos especializados
- **Costo cero**: no requiere inversión pública
- **Fácil adopción**: sin capacitación técnica, solo abrir un link
- **Cobertura masiva**: funciona en cualquier celular moderno

---

### 9. Enlaces

- **App:** https://infobits-technology.github.io/ecorescate/
- **Código fuente:** https://github.com/InfoBits-Technology/ecorescate
- **Contacto:** José Vásquez - jf.vasquez@outlook.es

---

*EcoRescate fue desarrollado para la comunidad venezolana, como respuesta a la necesidad de herramientas accesibles de búsqueda y rescate. El código es abierto y cualquier gobierno, organización o individuo puede usarlo, modificarlo y distribuirlo libremente.*
