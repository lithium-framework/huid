# Thorium-HUID

Thorium-HUID / [Documentation](docs/modules.md) / [Tests](tests/reports/test-report.md)

Thorium-HUID est une bibliothèque TypeScript pour la gestion d'UUID hiérarchiques (UUID).

## Introduction

Les UUID hiérarchiques sont des identifiants uniques qui combinent plusieurs composants pour former une structure hiérarchique. Thorium-HUID permet la création et la gestion d'UUID hiérarchiques en TypeScript.

## Fonctionnalités

- Génération d'UUID hiérarchiques personnalisés.
- Extraction des composants individuels d'un UUID hiérarchique.
- Conversion d'UUID hiérarchiques en chaînes.
- Génération d'UUID de version 4. a
- Encodage de chaînes de longueur fixe avec des caractères hexadécimaux aléatoires.

## Installation

Vous pouvez installer Thorium-HUID à l'aide de npm ou yarn :

```bash
npm install thorium-huid
# ou
yarn add thorium-huid
```

## Exemple d'utilisation

Voici un exemple simple d'utilisation de Thorium-HUID pour générer un UUID hiérarchique :

```typescript
import { uuid, _HUID } from 'thorium-huid';

// Génération d'un UUID hiérarchique
const hierarchicalUUID = uuid.hv1();

console.log('UUID Hiérarchique :', hierarchicalUUID);
console.log('Composant ID :', hierarchicalUUID.componentId);
console.log('Collection ID :', hierarchicalUUID.collectionId);
```

## Documentation

Pour plus de détails sur l'utilisation de Thorium-HUID, consultez la documentation complète.