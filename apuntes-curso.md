# Apuntes del curso: React + TypeScript

Resumen del curso, conceptos clave por módulo y ayuda memoria para repasar.

---

## Árbol de conocimiento del curso

```
React + TypeScript
│
├── 1. FUNDAMENTOS TYPESCRIPT
│   ├── Tipos primitivos
│   │   ├── string
│   │   ├── number
│   │   └── boolean
│   ├── Inferencia de tipos
│   ├── Estructuras
│   │   ├── Arrays (T[], Array<T>)
│   │   └── Tuplas ([number, string])
│   ├── Funciones tipadas
│   │   ├── Parámetros tipados
│   │   └── Tipo de retorno
│   └── Valores ausentes
│       ├── null (T | null)
│       └── undefined (T | undefined)
│
├── 2. PROPS Y ESTADO
│   ├── Props
│   │   ├── Opcionales (prop?: type)
│   │   └── Valores por defecto ({ a = 0 })
│   ├── useState tipado
│   │   ├── Implícito (inferido)
│   │   ├── Explícito (useState<T>)
│   │   ├── Con null (T | null)
│   │   └── Con undefined (T | undefined)
│   ├── Modelado de datos
│   │   ├── type (uniones, intersecciones)
│   │   └── interface (extensión, merging)
│   └── Tipos compuestos
│       ├── Uniones literales ("a" | "b")
│       └── Intersecciones (A & B)
│
├── 3. EVENTOS Y FORMULARIOS
│   ├── Eventos tipados
│   │   ├── ChangeEvent<HTMLInputElement>
│   │   ├── FormEvent / SubmitEvent<HTMLFormElement>
│   │   └── MouseEvent<HTMLButtonElement>
│   ├── Formularios controlados
│   │   ├── value (estado como fuente de verdad)
│   │   └── onChange → setState
│   └── Callbacks tipados
│       └── (event: E) => void
│
├── 4. HOOKS Y CUSTOM HOOKS
│   ├── useEffect
│   │   ├── Dependencias ([], [a, b])
│   │   ├── Cleanup (return () => { ... })
│   │   └── Múltiples efectos por componente
│   └── Custom hooks
│       ├── useFetch<T>(url) → { data }
│       └── Genéricos para tipar respuesta API
│
├── 5. COMPONENTES AVANZADOS
│   ├── Children
│   │   ├── React.PropsWithChildren<P>
│   │   └── React.ReactNode
│   ├── Componentes genéricos
│   │   ├── List<T> (items, renderItem)
│   │   └── Render props (item: T) => ReactNode
│   └── Refs
│       ├── useRef<HTMLInputElement>(null)
│       └── ref.current?.focus()
│
├── 6. ESTADO GLOBAL (ZUSTAND)
│   ├── Store
│   │   ├── create<Store>((set) => ({ ... }))
│   │   ├── Estado (state)
│   │   └── Acciones (actions)
│   ├── set
│   │   └── set({ key: value }) — actualización parcial
│   ├── Acciones asíncronas
│   │   └── login/logout con loading y error
│   └── Uso en componentes
│       ├── useStore() — desestructuración
│       └── useStore(s => s.user) — selector
│
└── 7. PROYECTO INTEGRADO (POKEDEX)
    ├── TanStack Query
    │   ├── QueryClientProvider
    │   ├── useQuery({ queryKey, queryFn })
    │   └── data | isLoading | isError | error
    ├── Integración
    │   ├── Zustand (store fetchPokemons)
    │   ├── usePokedexQuery(limit) — custom hook + useQuery
    │   └── Tipos (Pokemon interface)
    └── UI
        ├── Estados: loading, error, lista
        └── List<T> + renderItem para cada Pokémon
```

### Leyenda del árbol

| Símbolo | Significado |
|--------|-------------|
| `├──` | Rama con más nodos debajo |
| `└──` | Última rama de ese nivel |
| `│`   | Continuación vertical del nivel anterior |

---

## Resumen general del curso

El curso recorre **React con TypeScript** desde fundamentos de tipos hasta un proyecto integrado (Pokedex). Se trabaja: tipos básicos, props/estado tipados, eventos y formularios, hooks (useEffect, custom hooks), componentes avanzados (children, genéricos, refs), estado global con **Zustand** y un proyecto final que combina Zustand, **TanStack Query** y componentes reutilizables.

---

## Módulo 1 — Introducción a TypeScript en React

**Tema:** Tipos básicos, inferencia, arrays, tuplas, funciones tipadas y valores nulos.

### Conceptos clave

- **Tipos primitivos:** `string`, `number`, `boolean`.
- **Inferencia:** TypeScript infiere el tipo si no lo declaras (ej. `const ki = 9001` → `number`).
- **Arrays:** `const equipoZ = ["Goku", "Vegeta"]` (inferido) o tipado explícito.
- **Tuplas:** array de longitud y tipos fijos: `[number, number, string]` → `[42, 17, "hi"]`.
- **Funciones tipadas:** parámetros y retorno:  
  `(base: number, mult: number): number => base * mult`
- **Union con null/undefined:** `string | null`, `string | undefined` para valores opcionales o ausentes.

### Ejemplo rápido

```ts
const coordenadas: [number, number, string] = [42, 17, "hi"];
const calcularDanio = (base: number, mult: number): number => base * mult;
```

---

## Módulo 2 — Props y estado

**Tema:** Props opcionales y con default, `useState` tipado, `type` vs `interface`, uniones literales e intersecciones.

### Conceptos clave

- **Props opcionales y default:**  
  `type ContadorProps = { initial?: number; step?: number }` y en el componente:  
  `({ initial = 0, step = 1 }: ContadorProps)`.
- **useState tipado:**
  - Implícito: `useState(1)` → número.
  - Explícito: `useState<Cafe["intensidad"]>("Suave")`.
  - Con null: `useState<Cafe | null>(null)`.
  - Con undefined: `useState<number | undefined>(undefined)`.
- **type:** definición de forma de datos; permite uniones e intersecciones.
- **interface:** contrato de objeto; se puede extender y declarar varias veces (declaration merging).
- **Uniones literales:** solo ciertos valores: `"Suave" | "Fuerte"`, `"agua" | "cafe" | "azucar"`.
- **Intersecciones:** combinar tipos con `&`: `type Persona = A & B & C`.

### Ejemplo rápido

```ts
type ContadorProps = { initial?: number; step?: number };
const [count, setCount] = useState<number>(initial ?? 0);
type Cafe = { intensidad: "Suave" | "Fuerte" };
type Persona = { nombre: string } & { edad: string };
```

---

## Módulo 3 — Eventos y formularios

**Tema:** Tipado de eventos de React, formularios controlados y componentes de botón tipados.

### Conceptos clave

- **Formularios controlados:** el estado es la “fuente de verdad”; cada input tiene `value` + `onChange` que actualiza estado.
- **ChangeEvent:** para inputs: `React.ChangeEvent<HTMLInputElement>`; el valor en `event.target.value`.
- **SubmitEvent:** para envío: `React.FormEvent<HTMLFormElement>` o `React.SubmitEvent<HTMLFormElement>`; usar `event.preventDefault()` para evitar recarga.
- **MouseEvent:** para clics: `React.MouseEvent<HTMLButtonElement>`.
- **Componente con callback tipado:**  
  `onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void`.

### Ejemplo rápido

```ts
const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); /* ... */ };
<input value={email} onChange={handleEmail} />
```

---

## Módulo 4 — Hooks y custom hooks

**Tema:** `useEffect` (suscripciones, limpieza), temporizador, y custom hook `useFetch<T>` para APIs.

### Conceptos clave

- **useEffect:** ejecuta código después del render; recibe función y array de dependencias `[deps]`.
- **Dependencias vacías `[]:** se ejecuta solo al montar; ideal para listeners globales (ej. teclado).
- **Limpieza (cleanup):** devolver una función en el efecto para eliminar listeners o intervals:  
  `return () => { removeEventListener(...); clearInterval(id); };`
- **Varios useEffect:** separar lógica (ej. un efecto para tecla “k”, otro para el interval del temporizador según `running`).
- **Custom hook useFetch<T>:** recibe `url`, usa `useState<T | null>` y `useEffect` con `fetch`; retorna `{ data }`. El genérico `<T>` tipa la respuesta.

### Ejemplo rápido

```ts
useEffect(() => {
  const id = setInterval(() => setTick((t) => t + 1), 1000);
  return () => clearInterval(id);
}, [running]);

const { data } = useFetch<Pokemon>("https://pokeapi.co/api/v2/pokemon/ditto");
```

---

## Módulo 5 — Componentes avanzados

**Tema:** `children`, componentes genéricos y `useRef` para acceder al DOM.

### Conceptos clave

- **Children:** contenido que se pone entre las etiquetas del componente. Tipado con `React.PropsWithChildren<CardProps>` o `children: React.ReactNode` en las props.
- **Componente contenedor:** el componente renderiza `{children}` dentro de su layout (ej. Card con título + children).
- **Componentes genéricos:** tipo `T` para listas reutilizables:  
  `List<T>` con `items: T[]` y `renderItem: (item: T, index: number) => React.ReactNode`.  
  Uso: `<List<User> items={users} renderItem={(item) => <li>{item.name}</li>} />`.
- **useRef:** referencia a un nodo del DOM: `const inputRef = useRef<HTMLInputElement>(null)`. Acceso con `inputRef.current?.focus()` (optional chaining por si aún no está montado).

### Ejemplo rápido

```ts
const Card = ({ title, children }: React.PropsWithChildren<{ title: string }>) => (
  <div><span>{title}</span>{children}</div>
);

type ListProps<T> = { items: T[]; renderItem: (item: T, i: number) => React.ReactNode };
const List = <T,>({ items, renderItem }: ListProps<T>) => <ul>{items.map(renderItem)}</ul>;

const inputRef = useRef<HTMLInputElement>(null);
inputRef.current?.focus();
```

---

## Módulo 6 — Zustand

**Tema:** Estado global con Zustand: store, estado, acciones y uso en componentes.

### Conceptos clave

- **Zustand:** librería de estado global; no requiere providers; el store se crea con `create<T>()`.
- **Store:** tipo que combina estado + acciones (ej. `AuthState & AuthAction`); se define con `create<AuthStore>((set) => ({ ... }))`.
- **set:** función que recibe un objeto parcial para actualizar el estado: `set({ user: u })`, `set({ loading: true, error: null })`.
- **Acciones asíncronas:** dentro del store se puede usar `async`; llamar `set` en try/catch/finally para loading, datos y error.
- **Uso en componente:** `const { login, logout, user, loading, error } = useAuthStore();` (desestructuración); o `const user = useAuthStore((s) => s.user)` para suscribirse solo a una parte.

### Ejemplo rápido

```ts
type Store = { user: User | null; login: (email: string, pass: string) => Promise<void>; logout: () => void };
const useAuthStore = create<Store>((set) => ({
  user: null,
  login: async (email, pass) => { set({ loading: true }); /* ... */ set({ user }); },
  logout: () => set({ user: null }),
}));
```

---

## Módulo 7 — Proyecto 1: Pokedex

**Tema:** Integración: Zustand (pokedexStore), TanStack Query (usePokedexQuery), componentes genéricos (List) y tipos (Pokemon).

### Conceptos clave

- **TanStack Query (React Query):** maneja caché, loading y errores de peticiones. Se usa `useQuery({ queryKey, queryFn })` y se obtiene `{ data, isLoading, isError, error }`.
- **QueryClientProvider:** en la raíz (App) con `QueryClient` para que `useQuery` funcione.
- **Integración Zustand + Query:** el store puede exponer `fetchPokemons(limit)`; el custom hook `usePokedexQuery(limit)` usa ese `queryFn` y devuelve el resultado de `useQuery`.
- **Tipos para API:** interface `Pokemon` con `id`, `name`, `sprites`, `types` etc., para tipar respuestas de PokeAPI.
- **Lista genérica:** reutilizar `<List>` con `renderItem` para mostrar cada Pokémon (imagen, nombre, tipos).
- **Estados de UI:** mostrar loading, error y lista según `isLoading`, `isError` y `data`.

### Ejemplo rápido

```ts
const usePokedexQuery = (limit: number) =>
  useQuery({ queryKey: ["pokedex", limit], queryFn: () => fetchPokemons(limit) });
const { data, isLoading, isError, error } = usePokedexQuery(3);
<List items={data ?? []} renderItem={(pokemon) => <li key={pokemon.id}>...</li>} />
```

---

# Ayuda memoria — React + TypeScript

## Tipos y sintaxis TypeScript

| Concepto | Sintaxis / Ejemplo |
|----------|--------------------|
| Primitivos | `string`, `number`, `boolean` |
| Array | `T[]` o `Array<T>` |
| Tupla | `[number, string]` |
| Union | `A \| B` |
| Literal | `"a" \| "b"` |
| Optional | `prop?: type` |
| Null/undefined | `T \| null`, `T \| undefined` |
| Genérico | `function f<T>(x: T): T` |
| Intersección | `A & B` |
| Retorno función | `(a: number) => number` |

## React: estado y props

| Concepto | Uso |
|----------|-----|
| Props con default | `({ a = 0 }: Props)` |
| useState implícito | `useState(0)` |
| useState explícito | `useState<number>(0)`, `useState<Cafe \| null>(null)` |
| Actualizar estado | `setCount((c) => c + 1)` |

## Eventos (React)

| Evento | Tipo típico |
|--------|-------------|
| Input change | `React.ChangeEvent<HTMLInputElement>` |
| Form submit | `React.FormEvent<HTMLFormElement>` |
| Click botón | `React.MouseEvent<HTMLButtonElement>` |
| Valor input | `event.target.value` |
| Evitar submit | `event.preventDefault()` |

## Hooks

| Hook | Uso |
|------|-----|
| useEffect | Efecto con deps `[a, b]`; cleanup con `return () => { ... }` |
| useRef | `useRef<HTMLInputElement>(null)` → `ref.current` |
| Custom hook | Función que usa otros hooks; puede devolver `{ data, loading }` |

## Componentes

| Patrón | Ejemplo |
|--------|---------|
| Children | `React.PropsWithChildren<{ title: string }>` o `children: React.ReactNode` |
| Genérico | `<T,>({ items, renderItem }: ListProps<T>)` |
| Render props | `renderItem: (item: T, index: number) => React.ReactNode` |

## Zustand

| Concepto | Uso |
|----------|-----|
| Crear store | `create<Store>((set) => ({ state, actions }))` |
| Actualizar | `set({ key: value })` |
| Usar en componente | `const { state, action } = useStore()` |
| Selector | `useStore((s) => s.user)` |

## TanStack Query

| Concepto | Uso |
|----------|-----|
| Provider | `<QueryClientProvider client={queryClient}>` |
| useQuery | `useQuery({ queryKey: ["key"], queryFn: fn })` |
| Resultado | `data`, `isLoading`, `isError`, `error` |

## Buenas prácticas rápidas

1. Tipar props e estado desde el inicio.
2. Usar `interface` para objetos y contratos; `type` para uniones e intersecciones.
3. En formularios: siempre controlados (`value` + `onChange`).
4. En useEffect: devolver cleanup para listeners e intervals.
5. Custom hooks genéricos (`useFetch<T>`) para reutilizar y tipar datos de API.
6. Componentes genéricos (`List<T>`) para listas reutilizables.
7. Refs con optional chaining: `ref.current?.focus()`.
8. En Zustand: separar estado y acciones en el tipo del store.

---

*Apuntes generados a partir del proyecto React + TypeScript del curso.*
