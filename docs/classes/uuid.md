[thorium-huid](../README.md) / [Exports](../modules.md) / uuid

# Class: uuid

Classe pour générer des UUID

## Table of contents

### Constructors

- [constructor](uuid.md#constructor)

### Accessors

- [NIL](uuid.md#nil)
- [collectionId](uuid.md#collectionid)
- [componentId](uuid.md#componentid)
- [segment1](uuid.md#segment1)
- [segment2](uuid.md#segment2)
- [segment3](uuid.md#segment3)

### Methods

- [encode](uuid.md#encode)
- [hv1](uuid.md#hv1)
- [v4](uuid.md#v4)

## Constructors

### constructor

• **new uuid**(): [`uuid`](uuid.md)

#### Returns

[`uuid`](uuid.md)

## Accessors

### NIL

• `get` **NIL**(): [`_HUID`](HUID.md)

Méthode pour obtenir un UUID NIL (null) par défaut.

#### Returns

[`_HUID`](HUID.md)

L'UUID NIL est renvoyé sous forme de chaîne dans le format
"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", où chaque "x" représente un chiffre hexadécimal.

#### Defined in

[modules/huid/src/index.ts:127](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L127)

___

### collectionId

• `get` **collectionId**(): [`CollectionId`](../modules.md#collectionid)

Méthode pour obtenir une valeur par défaut pour l'identifiant de collection.

#### Returns

[`CollectionId`](../modules.md#collectionid)

La valeur renvoyée est '000000000000' en tant que CollectionId.

#### Defined in

[modules/huid/src/index.ts:120](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L120)

___

### componentId

• `get` **componentId**(): [`ComponentId`](../modules.md#componentid)

Méthode pour obtenir une valeur par défaut pour l'identifiant de composant.

#### Returns

[`ComponentId`](../modules.md#componentid)

La valeur renvoyée est '000000000000' en tant que ComponentId.

#### Defined in

[modules/huid/src/index.ts:96](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L96)

___

### segment1

• `get` **segment1**(): [`Segment`](../modules.md#segment)

Méthode pour obtenir une valeur par défaut pour la première section de l'UUID.

#### Returns

[`Segment`](../modules.md#segment)

La valeur renvoyée est '0000' en tant que Segment.

#### Defined in

[modules/huid/src/index.ts:102](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L102)

___

### segment2

• `get` **segment2**(): [`Segment`](../modules.md#segment)

Méthode pour obtenir une valeur par défaut pour la première section de l'UUID.

#### Returns

[`Segment`](../modules.md#segment)

La valeur renvoyée est '0000' en tant que Segment.

#### Defined in

[modules/huid/src/index.ts:108](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L108)

___

### segment3

• `get` **segment3**(): [`Segment`](../modules.md#segment)

Méthode pour obtenir une valeur par défaut pour la première section de l'UUID.

#### Returns

[`Segment`](../modules.md#segment)

La valeur renvoyée est '0000' en tant que Segment.

#### Defined in

[modules/huid/src/index.ts:114](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L114)

## Methods

### encode

▸ **encode**\<`N`\>(`chaine`): [`FixedLengthString`](../modules.md#fixedlengthstring)\<`N`\>

Méthode `encode` pour traiter une chaîne de longueur fixe en remplaçant certains caractères par
des valeurs hexadécimales aléatoires.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `number` = ``12`` \| ``4`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chaine` | [`FixedLengthString`](../modules.md#fixedlengthstring)\<`N`\> | Le paramètre `chaine` est de type `FixedLengthString<N>`, c'est-à-dire une chaîne de longueur fixe. La longueur de la chaîne est déterminée par le type générique `N`, qui étend le type `number` et peut uniquement être soit `4` ou `12`. |

#### Returns

[`FixedLengthString`](../modules.md#fixedlengthstring)\<`N`\>

une valeur de type `FixedLengthString<N> | FixedLengthString<N>`.

#### Defined in

[modules/huid/src/index.ts:137](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L137)

___

### hv1

▸ **hv1**(`options?`): [`_HUID`](HUID.md)

Méthode `hv1` pour générer un UUID hiérarchique en fonction des options fournies, y compris
l'identifiant parent et l'identifiant de collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`HierarchicalUUIDOptions`](../interfaces/HierarchicalUUIDOptions.md) | Le paramètre `options` est un objet facultatif qui peut contenir les propriétés suivantes : |

#### Returns

[`_HUID`](HUID.md)

un nouvel UUID hiérarchique (_HUID) qui est construit en concaténant les valeurs de
`componentId`, `segment1`, `segment2`, `segment3` et `collectionId` avec des tirets ("-") entre eux.

#### Defined in

[modules/huid/src/index.ts:168](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L168)

___

### v4

▸ **v4**(): \`$\{string}-$\{string}-$\{string}-$\{string}-$\{string}\`

Méthode pour générer un UUID de version 4 en utilisant des valeurs aléatoires de la bibliothèque
crypto.

#### Returns

\`$\{string}-$\{string}-$\{string}-$\{string}-$\{string}\`

un UUID de version 4 (Universally Unique Identifier) sous forme de chaîne dans le format
"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", où chaque "x" représente un chiffre hexadécimal.

#### Defined in

[modules/huid/src/index.ts:150](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L150)
