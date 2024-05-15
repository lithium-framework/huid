export type FixedLengthString<Length extends number> = string & {
    __fixedLength: Length;
};
export type ComponentId = FixedLengthString<12>;
export type Segment = FixedLengthString<4>;
export type ParentSegementId = `${Segment}-${Segment}-${Segment}`;
export type CollectionId = FixedLengthString<12>;
export type HUID = `${ComponentId}-${ParentSegementId}-${CollectionId}`;
/**
 * Interface pour les options de l'UUID hiérarchique
*/
export interface HierarchicalUUIDOptions {
    /**
     * Identifiant parent (optionnel)
    */
    parentId?: FixedLengthString<12>;
    /**
     * Identifiant de collection (optionnel)
    */
    collectionId?: FixedLengthString<12>;
}
/**
 * Classe _HUID pour manipuler les UUID hiérarchiques
*/
export declare class _HUID extends String {
    /**
     * Méthode pour obtenir l'identifiant de composant en extrayant la première partie de l'UUID.
     * @returns L'identifiant de composant est renvoyé.
    */
    get componentId(): ComponentId;
    /**
     * Méthode pour obtenir la première section de l'UUID après sa division par '-'.
     * @returns La première section de l'UUID après division par '-' est renvoyée.
    */
    get section1(): Segment;
    /**
     * Méthode pour obtenir la deuxième section de l'UUID après sa division par '-'.
     * @returns La deuxième section de l'UUID après division par '-' est renvoyée.
    */
    get section2(): Segment;
    /**
     * Méthode pour obtenir la troisième section de l'UUID après sa division par '-'.
     * @returns La troisième section de l'UUID après division par '-' est renvoyée.
    */
    get section3(): Segment;
    /**
     * Méthode pour obtenir l'identifiant de collection en extrayant la cinquième partie de l'UUID.
     * @returns L'identifiant de collection est renvoyé.
    */
    get collectionId(): CollectionId;
    /**
     * Méthode pour obtenir l'identifiant parent en concaténant les sections 1, 2 et 3.
     * @returns La méthode `parentId` renvoie une chaîne qui est la concaténation de `this.section1`,
     * `this.section2` et `this.section3`. La chaîne résultante a une longueur fixe de 12 caractères.
    */
    get parentId(): FixedLengthString<12>;
    /**
     * Méthode pour étendre l'UUID hiérarchique avec des options personnalisées.
     * @param {HierarchicalUUIDOptions} [options] - Le paramètre `options` est un objet facultatif
     * pouvant être passé à la fonction `extend`. Il vous permet de personnaliser le comportement de
     * la fonction en fournissant des valeurs pour les propriétés suivantes :
     * @returns un nouvel UUID hiérarchique (_HUID) généré à l'aide de la méthode `uuid.hv1`. Les
     * valeurs `parentId` et `collectionId` sont transmises en tant que paramètres à la méthode
     * `uuid.hv1`.
    */
    extend(options?: HierarchicalUUIDOptions): _HUID;
}
/**
 * Classe pour générer des UUID
*/
export declare class uuid {
    /**
     * Méthode pour obtenir une valeur par défaut pour l'identifiant de composant.
     * @returns La valeur renvoyée est '000000000000' en tant que ComponentId.
    */
    static get componentId(): ComponentId;
    /**
     * Méthode pour obtenir une valeur par défaut pour la première section de l'UUID.
     * @returns La valeur renvoyée est '0000' en tant que Segment.
    */
    static get segment1(): Segment;
    /**
     * Méthode pour obtenir une valeur par défaut pour la première section de l'UUID.
     * @returns La valeur renvoyée est '0000' en tant que Segment.
    */
    static get segment2(): Segment;
    /**
     * Méthode pour obtenir une valeur par défaut pour la première section de l'UUID.
     * @returns La valeur renvoyée est '0000' en tant que Segment.
    */
    static get segment3(): Segment;
    /**
     * Méthode pour obtenir une valeur par défaut pour l'identifiant de collection.
     * @returns La valeur renvoyée est '000000000000' en tant que CollectionId.
    */
    static get collectionId(): CollectionId;
    /**
     * Méthode pour obtenir un UUID NIL (null) par défaut.
     * @returns L'UUID NIL est renvoyé sous forme de chaîne dans le format
     * "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", où chaque "x" représente un chiffre hexadécimal.
    */
    static get NIL(): _HUID;
    /**
     * Méthode `encode` pour traiter une chaîne de longueur fixe en remplaçant certains caractères par
     * des valeurs hexadécimales aléatoires.
     * @param chaine - Le paramètre `chaine` est de type `FixedLengthString<N>`, c'est-à-dire une
     * chaîne de longueur fixe. La longueur de la chaîne est déterminée par le type générique `N`,
     * qui étend le type `number` et peut uniquement être soit `4` ou `12`.
     * @returns une valeur de type `FixedLengthString<N> | FixedLengthString<N>`.
    */
    static encode<N extends number = 4 | 12>(chaine: FixedLengthString<N>): FixedLengthString<N>;
    /**
     * Méthode pour générer un UUID de version 4 en utilisant des valeurs aléatoires de la bibliothèque
     * get-random-values.
     * @returns un UUID de version 4 (Universally Unique Identifier) sous forme de chaîne dans le format
     * "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", où chaque "x" représente un chiffre hexadécimal.
    */
    static v4(): `${string}-${string}-${string}-${string}-${string}`;
    /**
     * Méthode `hv1` pour générer un UUID hiérarchique en fonction des options fournies, y compris
     * l'identifiant parent et l'identifiant de collection.
     * @param {HierarchicalUUIDOptions} [options] - Le paramètre `options` est un objet facultatif qui
     * peut contenir les propriétés suivantes :
     * @returns un nouvel UUID hiérarchique (_HUID) qui est construit en concaténant les valeurs de
     * `componentId`, `segment1`, `segment2`, `segment3` et `collectionId` avec des tirets ("-") entre eux.
    */
    static hv1(options?: HierarchicalUUIDOptions): _HUID;
}
