# Public assets
This folder contains all the uncompressed assets in the anderson productions website ideally using bazel and build steps we should be able to keep images managable and also attach extra metadata....

```mermaid
flowchart TD
 subgraph s1["Create IMG Versions"]
        F(["Strip unnecessary metadata"])
        K(["Add new metadata"])
        L(["Sign image with content creds"])
        F --> K
        K -.-> L
  end
    A(["BUILD REQ"]) --> B(["Search for all IMGS"])
    B --> C(["Check DB for prevoius hashes"])
    C --> D(["Add raw image data into db with hash"])
    D --> E(["Query all IMGs"])
    E --> s1 & H(["Create JSON with all image data"])
    s1 --> G(["Write all images + styles to static folder"])
    H --> I(["Write to lib for querying"])
    I --> J(["Call standard build fn"])
    G --> J
```
