# submitting a note to the SPA version of the notes app

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

    Note right of browser: The browser updates its own notes. The browser executes the callback function that renders the notes
```
