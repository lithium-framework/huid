[thorium-huid](README.md) / Exports

# thorium-huid

## Table of contents

### Classes

- [\_HUID](classes/HUID.md)
- [uuid](classes/uuid.md)

### Interfaces

- [HierarchicalUUIDOptions](interfaces/HierarchicalUUIDOptions.md)

### Type Aliases

- [CollectionId](modules.md#collectionid)
- [ComponentId](modules.md#componentid)
- [FixedLengthString](modules.md#fixedlengthstring)
- [HUID](modules.md#huid)
- [ParentSegementId](modules.md#parentsegementid)
- [Segment](modules.md#segment)

## Type Aliases

### CollectionId

Ƭ **CollectionId**: [`FixedLengthString`](modules.md#fixedlengthstring)\<``12``\>

#### Defined in

[modules/huid/src/index.ts:5](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L5)

___

### ComponentId

Ƭ **ComponentId**: [`FixedLengthString`](modules.md#fixedlengthstring)\<``12``\>

#### Defined in

[modules/huid/src/index.ts:2](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L2)

___

### FixedLengthString

Ƭ **FixedLengthString**\<`Length`\>: `string` & \{ `__fixedLength`: `Length`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Length` | extends `number` |

#### Defined in

[modules/huid/src/index.ts:1](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L1)

___

### HUID

Ƭ **HUID**: \`$\{ComponentId}-$\{ParentSegementId}-$\{CollectionId}\`

#### Defined in

[modules/huid/src/index.ts:6](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L6)

___

### ParentSegementId

Ƭ **ParentSegementId**: \`$\{Segment}-$\{Segment}-$\{Segment}\`

#### Defined in

[modules/huid/src/index.ts:4](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L4)

___

### Segment

Ƭ **Segment**: [`FixedLengthString`](modules.md#fixedlengthstring)\<``4``\>

#### Defined in

[modules/huid/src/index.ts:3](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L3)
