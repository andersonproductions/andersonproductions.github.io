# Public assets
This folder contains all the uncompressed assets in the anderson productions website ideally using bazel and build steps we should be able to keep images managable and also attach extra metadata....

```mermaid
flowchart TD
A(["BUILD REQ"])
C(["Check DB for prevoius hashes"])
B(["Search for all IMGS"])
D(["Add raw image data into db with hash"])
E(["Query all IMGs"])
F(["Create IMG Versions"])
G(["Write all images + styles to static folder"])
H(["Create JSON with all image data"])
I(["Write to lib for querying"])
J(["Call standard build fn"])
    A --> B
    B --> C
    C --> D
    D --> E --> F --> G

E --> H --> I
I & G --> J
```
