```mermaid {scale: 0.7} 
graph TD 
A[Code JavaScript] --> B[Call Stack] 
B --> C{Opération<br>synchrone?} 
C -->|Oui| D[Exécution immédiate] 
C -->|Non| E[APIs Asynchrones] 
E --> F[Callback Queue] 
F --> G[Event Loop] 
G --> H{Stack<br>vide?} 
H -->|Oui| I[Exécuter callback] 
I --> B 
H -->|Non| G 
style A fill:#42b883 
style G fill:#3549
