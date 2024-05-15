// ===============================================
// https://www.npmjs.com/package/get-random-values
// ===============================================
import { default as getRandomValues } from 'get-random-values';
/**
 * Classe _HUID pour manipuler les UUID hiérarchiques
*/
export class _HUID extends String {
    /**
     * Méthode pour obtenir l'identifiant de composant en extrayant la première partie de l'UUID.
     * @returns L'identifiant de composant est renvoyé.
    */
    get componentId() { return this.split('-')[0]; }
    /**
     * Méthode pour obtenir la première section de l'UUID après sa division par '-'.
     * @returns La première section de l'UUID après division par '-' est renvoyée.
    */
    get section1() { return this.split('-')[1]; }
    /**
     * Méthode pour obtenir la deuxième section de l'UUID après sa division par '-'.
     * @returns La deuxième section de l'UUID après division par '-' est renvoyée.
    */
    get section2() { return this.split('-')[2]; }
    /**
     * Méthode pour obtenir la troisième section de l'UUID après sa division par '-'.
     * @returns La troisième section de l'UUID après division par '-' est renvoyée.
    */
    get section3() { return this.split('-')[3]; }
    /**
     * Méthode pour obtenir l'identifiant de collection en extrayant la cinquième partie de l'UUID.
     * @returns L'identifiant de collection est renvoyé.
    */
    get collectionId() { return this.split('-')[4]; }
    /**
     * Méthode pour obtenir l'identifiant parent en concaténant les sections 1, 2 et 3.
     * @returns La méthode `parentId` renvoie une chaîne qui est la concaténation de `this.section1`,
     * `this.section2` et `this.section3`. La chaîne résultante a une longueur fixe de 12 caractères.
    */
    get parentId() { return [this.section1, this.section2, this.section3].join(''); }
    /**
     * Méthode pour étendre l'UUID hiérarchique avec des options personnalisées.
     * @param {HierarchicalUUIDOptions} [options] - Le paramètre `options` est un objet facultatif
     * pouvant être passé à la fonction `extend`. Il vous permet de personnaliser le comportement de
     * la fonction en fournissant des valeurs pour les propriétés suivantes :
     * @returns un nouvel UUID hiérarchique (_HUID) généré à l'aide de la méthode `uuid.hv1`. Les
     * valeurs `parentId` et `collectionId` sont transmises en tant que paramètres à la méthode
     * `uuid.hv1`.
    */
    extend(options) {
        return uuid.hv1({
            parentId: this.componentId,
            collectionId: this.collectionId,
        });
    }
}
/**
 * Classe pour générer des UUID
*/
export class uuid {
    /**
     * Méthode pour obtenir une valeur par défaut pour l'identifiant de composant.
     * @returns La valeur renvoyée est '000000000000' en tant que ComponentId.
    */
    static get componentId() { return '000000000000'; }
    /**
     * Méthode pour obtenir une valeur par défaut pour la première section de l'UUID.
     * @returns La valeur renvoyée est '0000' en tant que Segment.
    */
    static get segment1() { return '0000'; }
    /**
     * Méthode pour obtenir une valeur par défaut pour la première section de l'UUID.
     * @returns La valeur renvoyée est '0000' en tant que Segment.
    */
    static get segment2() { return '0000'; }
    /**
     * Méthode pour obtenir une valeur par défaut pour la première section de l'UUID.
     * @returns La valeur renvoyée est '0000' en tant que Segment.
    */
    static get segment3() { return '0000'; }
    /**
     * Méthode pour obtenir une valeur par défaut pour l'identifiant de collection.
     * @returns La valeur renvoyée est '000000000000' en tant que CollectionId.
    */
    static get collectionId() { return '000000000000'; }
    /**
     * Méthode pour obtenir un UUID NIL (null) par défaut.
     * @returns L'UUID NIL est renvoyé sous forme de chaîne dans le format
     * "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", où chaque "x" représente un chiffre hexadécimal.
    */
    static get NIL() { return new _HUID(`${uuid.componentId}-${uuid.segment1}-${uuid.segment2}-${uuid.segment3}-${uuid.collectionId}`); }
    /**
     * Méthode `encode` pour traiter une chaîne de longueur fixe en remplaçant certains caractères par
     * des valeurs hexadécimales aléatoires.
     * @param chaine - Le paramètre `chaine` est de type `FixedLengthString<N>`, c'est-à-dire une
     * chaîne de longueur fixe. La longueur de la chaîne est déterminée par le type générique `N`,
     * qui étend le type `number` et peut uniquement être soit `4` ou `12`.
     * @returns une valeur de type `FixedLengthString<N> | FixedLengthString<N>`.
    */
    static encode(chaine) {
        return chaine.replace(/[018]/g, (c) => {
            return (c ^ getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
        });
    }
    /**
     * Méthode pour générer un UUID de version 4 en utilisant des valeurs aléatoires de la bibliothèque
     * get-random-values.
     * @returns un UUID de version 4 (Universally Unique Identifier) sous forme de chaîne dans le format
     * "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", où chaque "x" représente un chiffre hexadécimal.
    */
    static v4() {
        return uuid.NIL.replace(/[018]/g, (c) => {
            return (c ^ getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
        });
    }
    /**
     * Méthode `hv1` pour générer un UUID hiérarchique en fonction des options fournies, y compris
     * l'identifiant parent et l'identifiant de collection.
     * @param {HierarchicalUUIDOptions} [options] - Le paramètre `options` est un objet facultatif qui
     * peut contenir les propriétés suivantes :
     * @returns un nouvel UUID hiérarchique (_HUID) qui est construit en concaténant les valeurs de
     * `componentId`, `segment1`, `segment2`, `segment3` et `collectionId` avec des tirets ("-") entre eux.
    */
    static hv1(options) {
        if (!options)
            options = {
                parentId: null,
                collectionId: null
            };
        let componentId = uuid.encode(uuid.componentId);
        let segment1 = uuid.encode(uuid.segment1);
        let segment2 = uuid.encode(uuid.segment2);
        let segment3 = uuid.encode(uuid.segment3);
        let collectionId = uuid.encode(uuid.collectionId);
        if (options.parentId && options.parentId.length == 12) {
            segment1 = options.parentId.slice(0, 4);
            segment2 = options.parentId.slice(4, 8);
            segment3 = options.parentId.slice(8, 12);
        }
        else
            console.error('parentId.length exeded 12 char length.');
        if (options.collectionId)
            collectionId = options.collectionId;
        return new _HUID(`${componentId}-${segment1}-${segment2}-${segment3}-${collectionId}`);
    }
}
//# sourceMappingURL=index.js.map