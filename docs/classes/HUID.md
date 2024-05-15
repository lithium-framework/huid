[thorium-huid](../README.md) / [Exports](../modules.md) / \_HUID

# Class: \_HUID

Classe _HUID pour manipuler les UUID hiérarchiques

## Hierarchy

- `String`

  ↳ **`_HUID`**

## Table of contents

### Constructors

- [constructor](HUID.md#constructor)

### Properties

- [length](HUID.md#length)

### Accessors

- [collectionId](HUID.md#collectionid)
- [componentId](HUID.md#componentid)
- [parentId](HUID.md#parentid)
- [section1](HUID.md#section1)
- [section2](HUID.md#section2)
- [section3](HUID.md#section3)

### Methods

- [[iterator]](HUID.md#[iterator])
- [anchor](HUID.md#anchor)
- [at](HUID.md#at)
- [big](HUID.md#big)
- [blink](HUID.md#blink)
- [bold](HUID.md#bold)
- [charAt](HUID.md#charat)
- [charCodeAt](HUID.md#charcodeat)
- [codePointAt](HUID.md#codepointat)
- [concat](HUID.md#concat)
- [endsWith](HUID.md#endswith)
- [extend](HUID.md#extend)
- [fixed](HUID.md#fixed)
- [fontcolor](HUID.md#fontcolor)
- [fontsize](HUID.md#fontsize)
- [includes](HUID.md#includes)
- [indexOf](HUID.md#indexof)
- [italics](HUID.md#italics)
- [lastIndexOf](HUID.md#lastindexof)
- [link](HUID.md#link)
- [localeCompare](HUID.md#localecompare)
- [match](HUID.md#match)
- [matchAll](HUID.md#matchall)
- [normalize](HUID.md#normalize)
- [padEnd](HUID.md#padend)
- [padStart](HUID.md#padstart)
- [repeat](HUID.md#repeat)
- [replace](HUID.md#replace)
- [search](HUID.md#search)
- [slice](HUID.md#slice)
- [small](HUID.md#small)
- [split](HUID.md#split)
- [startsWith](HUID.md#startswith)
- [strike](HUID.md#strike)
- [sub](HUID.md#sub)
- [substr](HUID.md#substr)
- [substring](HUID.md#substring)
- [sup](HUID.md#sup)
- [toLocaleLowerCase](HUID.md#tolocalelowercase)
- [toLocaleUpperCase](HUID.md#tolocaleuppercase)
- [toLowerCase](HUID.md#tolowercase)
- [toString](HUID.md#tostring)
- [toUpperCase](HUID.md#touppercase)
- [trim](HUID.md#trim)
- [trimEnd](HUID.md#trimend)
- [trimLeft](HUID.md#trimleft)
- [trimRight](HUID.md#trimright)
- [trimStart](HUID.md#trimstart)
- [valueOf](HUID.md#valueof)
- [fromCharCode](HUID.md#fromcharcode)
- [fromCodePoint](HUID.md#fromcodepoint)
- [raw](HUID.md#raw)

## Constructors

### constructor

• **new _HUID**(`value?`): [`_HUID`](HUID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |

#### Returns

[`_HUID`](HUID.md)

#### Inherited from

String.constructor

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:535

## Properties

### length

• `Readonly` **length**: `number`

Returns the length of a String object.

#### Inherited from

String.length

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:517

## Accessors

### collectionId

• `get` **collectionId**(): [`CollectionId`](../modules.md#collectionid)

Méthode pour obtenir l'identifiant de collection en extrayant la cinquième partie de l'UUID.

#### Returns

[`CollectionId`](../modules.md#collectionid)

L'identifiant de collection est renvoyé.

#### Defined in

[modules/huid/src/index.ts:58](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L58)

___

### componentId

• `get` **componentId**(): [`ComponentId`](../modules.md#componentid)

Méthode pour obtenir l'identifiant de composant en extrayant la première partie de l'UUID.

#### Returns

[`ComponentId`](../modules.md#componentid)

L'identifiant de composant est renvoyé.

#### Defined in

[modules/huid/src/index.ts:34](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L34)

___

### parentId

• `get` **parentId**(): [`FixedLengthString`](../modules.md#fixedlengthstring)\<``12``\>

Méthode pour obtenir l'identifiant parent en concaténant les sections 1, 2 et 3.

#### Returns

[`FixedLengthString`](../modules.md#fixedlengthstring)\<``12``\>

La méthode `parentId` renvoie une chaîne qui est la concaténation de `this.section1`,
`this.section2` et `this.section3`. La chaîne résultante a une longueur fixe de 12 caractères.

#### Defined in

[modules/huid/src/index.ts:65](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L65)

___

### section1

• `get` **section1**(): [`Segment`](../modules.md#segment)

Méthode pour obtenir la première section de l'UUID après sa division par '-'.

#### Returns

[`Segment`](../modules.md#segment)

La première section de l'UUID après division par '-' est renvoyée.

#### Defined in

[modules/huid/src/index.ts:40](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L40)

___

### section2

• `get` **section2**(): [`Segment`](../modules.md#segment)

Méthode pour obtenir la deuxième section de l'UUID après sa division par '-'.

#### Returns

[`Segment`](../modules.md#segment)

La deuxième section de l'UUID après division par '-' est renvoyée.

#### Defined in

[modules/huid/src/index.ts:46](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L46)

___

### section3

• `get` **section3**(): [`Segment`](../modules.md#segment)

Méthode pour obtenir la troisième section de l'UUID après sa division par '-'.

#### Returns

[`Segment`](../modules.md#segment)

La troisième section de l'UUID après division par '-' est renvoyée.

#### Defined in

[modules/huid/src/index.ts:52](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L52)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<`string`\>

Iterator

#### Returns

`IterableIterator`\<`string`\>

#### Inherited from

String.[iterator]

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.iterable.d.ts:238

___

### anchor

▸ **anchor**(`name`): `string`

Returns an `<a>` HTML anchor element and sets the name attribute to the text value

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.anchor

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:459

___

### at

▸ **at**(`index`): `string`

Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`string`

#### Inherited from

String.at

#### Defined in

node_modules/@types/node/globals.d.ts:94

___

### big

▸ **big**(): `string`

Returns a `<big>` HTML element

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.big

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:465

___

### blink

▸ **blink**(): `string`

Returns a `<blink>` HTML element

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.blink

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:471

___

### bold

▸ **bold**(): `string`

Returns a `<b>` HTML element

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.bold

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:477

___

### charAt

▸ **charAt**(`pos`): `string`

Returns the character at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | `number` | The zero-based index of the desired character. |

#### Returns

`string`

#### Inherited from

String.charAt

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:418

___

### charCodeAt

▸ **charCodeAt**(`index`): `number`

Returns the Unicode value of the character at the specified location.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The zero-based index of the desired character. If there is no character at the specified index, NaN is returned. |

#### Returns

`number`

#### Inherited from

String.charCodeAt

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:424

___

### codePointAt

▸ **codePointAt**(`pos`): `number`

Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
value of the UTF-16 encoded code point starting at the string element at position pos in
the String resulting from converting this object to a String.
If there is no element at that position, the result is undefined.
If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | `number` |

#### Returns

`number`

#### Inherited from

String.codePointAt

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:406

___

### concat

▸ **concat**(`...strings`): `string`

Returns a string that contains the concatenation of two or more strings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...strings` | `string`[] | The strings to append to the end of the string. |

#### Returns

`string`

#### Inherited from

String.concat

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:430

___

### endsWith

▸ **endsWith**(`searchString`, `endPosition?`): `boolean`

Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
endPosition – length(this). Otherwise returns false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `searchString` | `string` |
| `endPosition?` | `number` |

#### Returns

`boolean`

#### Inherited from

String.endsWith

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:422

___

### extend

▸ **extend**(`options?`): [`_HUID`](HUID.md)

Méthode pour étendre l'UUID hiérarchique avec des options personnalisées.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`HierarchicalUUIDOptions`](../interfaces/HierarchicalUUIDOptions.md) | Le paramètre `options` est un objet facultatif pouvant être passé à la fonction `extend`. Il vous permet de personnaliser le comportement de la fonction en fournissant des valeurs pour les propriétés suivantes : |

#### Returns

[`_HUID`](HUID.md)

un nouvel UUID hiérarchique (_HUID) généré à l'aide de la méthode `uuid.hv1`. Les
valeurs `parentId` et `collectionId` sont transmises en tant que paramètres à la méthode
`uuid.hv1`.

#### Defined in

[modules/huid/src/index.ts:76](https://github.com/Odyssee-Software/thorium-uuid/blob/0db4d16/src/index.ts#L76)

___

### fixed

▸ **fixed**(): `string`

Returns a `<tt>` HTML element

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.fixed

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:483

___

### fontcolor

▸ **fontcolor**(`color`): `string`

Returns a `<font>` HTML element and sets the color attribute value

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.fontcolor

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:489

___

### fontsize

▸ **fontsize**(`size`): `string`

Returns a `<font>` HTML element and sets the size attribute value

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.fontsize

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:495

▸ **fontsize**(`size`): `string`

Returns a `<font>` HTML element and sets the size attribute value

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `string` |

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.fontsize

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:501

___

### includes

▸ **includes**(`searchString`, `position?`): `boolean`

Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchString` | `string` | search string |
| `position?` | `number` | If position is undefined, 0 is assumed, so as to search all of the String. |

#### Returns

`boolean`

#### Inherited from

String.includes

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:415

___

### indexOf

▸ **indexOf**(`searchString`, `position?`): `number`

Returns the position of the first occurrence of a substring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchString` | `string` | The substring to search for in the string |
| `position?` | `number` | The index at which to begin searching the String object. If omitted, search starts at the beginning of the string. |

#### Returns

`number`

#### Inherited from

String.indexOf

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:437

___

### italics

▸ **italics**(): `string`

Returns an `<i>` HTML element

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.italics

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:507

___

### lastIndexOf

▸ **lastIndexOf**(`searchString`, `position?`): `number`

Returns the last occurrence of a substring in the string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchString` | `string` | The substring to search for. |
| `position?` | `number` | The index at which to begin searching. If omitted, the search begins at the end of the string. |

#### Returns

`number`

#### Inherited from

String.lastIndexOf

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:444

___

### link

▸ **link**(`url`): `string`

Returns an `<a>` HTML element and sets the href attribute value

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.link

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:513

___

### localeCompare

▸ **localeCompare**(`that`): `number`

Determines whether two strings are equivalent in the current locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `that` | `string` | String to compare to target string |

#### Returns

`number`

#### Inherited from

String.localeCompare

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:450

▸ **localeCompare**(`that`, `locales?`, `options?`): `number`

Determines whether two strings are equivalent in the current or specified locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `that` | `string` | String to compare to target string |
| `locales?` | `string` \| `string`[] | A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details. |
| `options?` | `CollatorOptions` | An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details. |

#### Returns

`number`

#### Inherited from

String.localeCompare

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:4522

___

### match

▸ **match**(`regexp`): `RegExpMatchArray`

Matches a string with a regular expression, and returns an array containing the results of that search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regexp` | `string` \| `RegExp` | A variable name or string literal containing the regular expression pattern and flags. |

#### Returns

`RegExpMatchArray`

#### Inherited from

String.match

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:456

▸ **match**(`matcher`): `RegExpMatchArray`

Matches a string or an object that supports being matched against, and returns an array
containing the results of that search, or null if no matches are found.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matcher` | `Object` | An object that supports being matched against. |
| `matcher.[match]` | (`string`: `string`) => `RegExpMatchArray` | - |

#### Returns

`RegExpMatchArray`

#### Inherited from

String.match

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:241

___

### matchAll

▸ **matchAll**(`regexp`): `IterableIterator`\<`RegExpMatchArray`\>

Matches a string with a regular expression, and returns an iterable of matches
containing the results of that search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regexp` | `RegExp` | A variable name or string literal containing the regular expression pattern and flags. |

#### Returns

`IterableIterator`\<`RegExpMatchArray`\>

#### Inherited from

String.matchAll

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2020.string.d.ts:27

___

### normalize

▸ **normalize**(`form`): `string`

Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `form` | ``"NFC"`` \| ``"NFD"`` \| ``"NFKC"`` \| ``"NFKD"`` | Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC" |

#### Returns

`string`

#### Inherited from

String.normalize

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:430

▸ **normalize**(`form?`): `string`

Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `form?` | `string` | Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC" |

#### Returns

`string`

#### Inherited from

String.normalize

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:438

___

### padEnd

▸ **padEnd**(`maxLength`, `fillString?`): `string`

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the end (right) of the current string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxLength` | `number` | The length of the resulting string once the current string has been padded. If this parameter is smaller than the current string's length, the current string will be returned as it is. |
| `fillString?` | `string` | The string to pad the current string with. If this string is too long, it will be truncated and the left-most part will be applied. The default value for this parameter is " " (U+0020). |

#### Returns

`string`

#### Inherited from

String.padEnd

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2017.string.d.ts:44

___

### padStart

▸ **padStart**(`maxLength`, `fillString?`): `string`

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the start (left) of the current string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxLength` | `number` | The length of the resulting string once the current string has been padded. If this parameter is smaller than the current string's length, the current string will be returned as it is. |
| `fillString?` | `string` | The string to pad the current string with. If this string is too long, it will be truncated and the left-most part will be applied. The default value for this parameter is " " (U+0020). |

#### Returns

`string`

#### Inherited from

String.padStart

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2017.string.d.ts:31

___

### repeat

▸ **repeat**(`count`): `string`

Returns a String value that is made from count copies appended together. If count is 0,
the empty string is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | number of copies to append |

#### Returns

`string`

#### Inherited from

String.repeat

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:445

___

### replace

▸ **replace**(`searchValue`, `replaceValue`): `string`

Replaces text in a string, using a regular expression or search string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `string` \| `RegExp` | A string or regular expression to search for. |
| `replaceValue` | `string` | A string containing the text to replace. When the searchValue is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of searchValue is replaced. |

#### Returns

`string`

#### Inherited from

String.replace

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:463

▸ **replace**(`searchValue`, `replacer`): `string`

Replaces text in a string, using a regular expression or search string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `string` \| `RegExp` | A string to search for. |
| `replacer` | (`substring`: `string`, ...`args`: `any`[]) => `string` | A function that returns the replacement text. |

#### Returns

`string`

#### Inherited from

String.replace

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:470

▸ **replace**(`searchValue`, `replaceValue`): `string`

Passes a string and replaceValue to the `[Symbol.replace]` method on searchValue. This method is expected to implement its own replacement algorithm.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `Object` | An object that supports searching for and replacing matches within a string. |
| `searchValue.[replace]` | (`string`: `string`, `replaceValue`: `string`) => `string` | - |
| `replaceValue` | `string` | The replacement text. |

#### Returns

`string`

#### Inherited from

String.replace

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:248

▸ **replace**(`searchValue`, `replacer`): `string`

Replaces text in a string, using an object that supports replacement within a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `Object` | A object can search for and replace matches within a string. |
| `searchValue.[replace]` | (`string`: `string`, `replacer`: (`substring`: `string`, ...`args`: `any`[]) => `string`) => `string` | - |
| `replacer` | (`substring`: `string`, ...`args`: `any`[]) => `string` | A function that returns the replacement text. |

#### Returns

`string`

#### Inherited from

String.replace

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:255

___

### search

▸ **search**(`regexp`): `number`

Finds the first substring match in a regular expression search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regexp` | `string` \| `RegExp` | The regular expression pattern and applicable flags. |

#### Returns

`number`

#### Inherited from

String.search

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:476

▸ **search**(`searcher`): `number`

Finds the first substring match in a regular expression search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searcher` | `Object` | An object which supports searching within a string. |
| `searcher.[search]` | (`string`: `string`) => `number` | - |

#### Returns

`number`

#### Inherited from

String.search

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:261

___

### slice

▸ **slice**(`start?`, `end?`): `string`

Returns a section of a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The index to the beginning of the specified portion of stringObj. |
| `end?` | `number` | The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj. |

#### Returns

`string`

#### Inherited from

String.slice

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:484

___

### small

▸ **small**(): `string`

Returns a `<small>` HTML element

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.small

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:519

___

### split

▸ **split**(`separator`, `limit?`): `string`[]

Split a string into substrings using the specified separator and return them as an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator` | `string` \| `RegExp` | A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. |
| `limit?` | `number` | A value used to limit the number of elements returned in the array. |

#### Returns

`string`[]

#### Inherited from

String.split

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:491

▸ **split**(`splitter`, `limit?`): `string`[]

Split a string into substrings using the specified separator and return them as an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `splitter` | `Object` | An object that can split a string. |
| `splitter.[split]` | (`string`: `string`, `limit?`: `number`) => `string`[] | - |
| `limit?` | `number` | A value used to limit the number of elements returned in the array. |

#### Returns

`string`[]

#### Inherited from

String.split

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:268

___

### startsWith

▸ **startsWith**(`searchString`, `position?`): `boolean`

Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `searchString` | `string` |
| `position?` | `number` |

#### Returns

`boolean`

#### Inherited from

String.startsWith

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:452

___

### strike

▸ **strike**(): `string`

Returns a `<strike>` HTML element

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.strike

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:525

___

### sub

▸ **sub**(): `string`

Returns a `<sub>` HTML element

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.sub

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:531

___

### substr

▸ **substr**(`from`, `length?`): `string`

Gets a substring beginning at the specified location and having the specified length.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `number` | The starting position of the desired substring. The index of the first character in the string is zero. |
| `length?` | `number` | The number of characters to include in the returned substring. |

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.substr

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:526

___

### substring

▸ **substring**(`start`, `end?`): `string`

Returns the substring at the specified location within a String object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based index number indicating the beginning of the substring. |
| `end?` | `number` | Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end. If end is omitted, the characters from start through the end of the original string are returned. |

#### Returns

`string`

#### Inherited from

String.substring

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:499

___

### sup

▸ **sup**(): `string`

Returns a `<sup>` HTML element

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.sup

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:537

___

### toLocaleLowerCase

▸ **toLocaleLowerCase**(`locales?`): `string`

Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.

#### Parameters

| Name | Type |
| :------ | :------ |
| `locales?` | `string` \| `string`[] |

#### Returns

`string`

#### Inherited from

String.toLocaleLowerCase

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:505

___

### toLocaleUpperCase

▸ **toLocaleUpperCase**(`locales?`): `string`

Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.

#### Parameters

| Name | Type |
| :------ | :------ |
| `locales?` | `string` \| `string`[] |

#### Returns

`string`

#### Inherited from

String.toLocaleUpperCase

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:511

___

### toLowerCase

▸ **toLowerCase**(): `string`

Converts all the alphabetic characters in a string to lowercase.

#### Returns

`string`

#### Inherited from

String.toLowerCase

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:502

___

### toString

▸ **toString**(): `string`

Returns a string representation of a string.

#### Returns

`string`

#### Inherited from

String.toString

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:412

___

### toUpperCase

▸ **toUpperCase**(): `string`

Converts all the alphabetic characters in a string to uppercase.

#### Returns

`string`

#### Inherited from

String.toUpperCase

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:508

___

### trim

▸ **trim**(): `string`

Removes the leading and trailing white space and line terminator characters from a string.

#### Returns

`string`

#### Inherited from

String.trim

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:514

___

### trimEnd

▸ **trimEnd**(): `string`

Removes the trailing white space and line terminator characters from a string.

#### Returns

`string`

#### Inherited from

String.trimEnd

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2019.string.d.ts:21

___

### trimLeft

▸ **trimLeft**(): `string`

Removes the leading white space and line terminator characters from a string.

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility. Use `trimStart` instead

#### Inherited from

String.trimLeft

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2019.string.d.ts:30

___

### trimRight

▸ **trimRight**(): `string`

Removes the trailing white space and line terminator characters from a string.

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility. Use `trimEnd` instead

#### Inherited from

String.trimRight

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2019.string.d.ts:36

___

### trimStart

▸ **trimStart**(): `string`

Removes the leading white space and line terminator characters from a string.

#### Returns

`string`

#### Inherited from

String.trimStart

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2019.string.d.ts:24

___

### valueOf

▸ **valueOf**(): `string`

Returns the primitive value of the specified object.

#### Returns

`string`

#### Inherited from

String.valueOf

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:529

___

### fromCharCode

▸ **fromCharCode**(`...codes`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...codes` | `number`[] |

#### Returns

`string`

#### Inherited from

String.fromCharCode

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es5.d.ts:538

___

### fromCodePoint

▸ **fromCodePoint**(`...codePoints`): `string`

Return the String value whose elements are, in order, the elements in the List elements.
If length is 0, the empty string is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...codePoints` | `number`[] |

#### Returns

`string`

#### Inherited from

String.fromCodePoint

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:545

___

### raw

▸ **raw**(`template`, `...substitutions`): `string`

String.raw is usually used as a tag function of a Tagged Template String. When called as
such, the first argument will be a well formed template call site object and the rest
parameter will contain the substitution values. It can also be called directly, for example,
to interleave strings and values from your own tag function, and in this case the only thing
it needs from the first argument is the raw property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `template` | `Object` | A well-formed template string call site representation. |
| `template.raw` | readonly `string`[] \| `ArrayLike`\<`string`\> | - |
| `...substitutions` | `any`[] | A set of substitution values. |

#### Returns

`string`

#### Inherited from

String.raw

#### Defined in

modules/huid/node_modules/typescript/lib/lib.es2015.core.d.ts:556
