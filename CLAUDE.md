@AGENTS.md

# FORGE — konwencje projektu

## Architektura
- Next.js App Router (`app/`), bez folderu `src/`.
- TypeScript w trybie `strict`. Unikamy `any`; przy `unknown` zawsze pokazujemy narrowing.
- Import alias: `@/*` wskazuje na katalog główny repo.
- Warstwy: UI → Server Action / Route Handler → Service → Repository → Prisma → PostgreSQL.
- Provider abstractions dla AI (`AIProvider`) i Storage (`StorageProvider`) — produkcja i mocki wymienialne.

## Testy
- Vitest + React Testing Library + Playwright.
- Używamy `test()`, nie `it()`.

## Styl kodu
- Komentarze w kodzie po polsku, tłumaczą **dlaczego**, nie **co robi linia**.

## Commity
- Conventional Commits (`feat:`, `fix:`, `test:`, `refactor:`, `perf:`, `docs:`).
- Małe, logiczne commity — nie `feat: finish everything`.

## Struktura folderów tworzymy iteracyjnie
- Nie zakładamy z góry pustych podfolderów (`components/viewer`, `lib/ai` itd.) — powstają w branchu, który ich realnie potrzebuje.