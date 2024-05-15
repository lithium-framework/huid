import { uuid } from '../dist';

describe( 'Hierarchical UUID' , () => {

  it( 'UUID NIL is 000000000000-0000-0000-0000-000000000000' , (  ) => {

    const expectedString = "000000000000-0000-0000-0000-000000000000";

    expect( uuid.NIL.toString() ).toEqual(expectedString);

  });

  it( 'UUID NIL[encode]' , (  ) => {

    let encoded_nil = uuid.encode( uuid.NIL );

    let [ a , b , c , d , e ] = encoded_nil.split('-');

    expect( a.length ).toEqual( 12 );
    expect( b.length ).toEqual( 4 );
    expect( c.length ).toEqual( 4 );
    expect( d.length ).toEqual( 4 );
    expect( e.length ).toEqual( 12 );

  })

  it( 'UUID [V4]' , (  ) => {

    let v4 = uuid.v4();

    let [ a , b , c , d , e ] = v4.split('-');

    expect( a.length ).toEqual( 12 );
    expect( b.length ).toEqual( 4 );
    expect( c.length ).toEqual( 4 );
    expect( d.length ).toEqual( 4 );
    expect( e.length ).toEqual( 12 );

  });

  it( 'UUID [HV1]' , (  ) => {

    let hv1 = uuid.hv1();

    let [ a , b , c , d , e ] = hv1.split('-');

    expect( a.length ).toEqual( 12 );
    expect( b.length ).toEqual( 4 );
    expect( c.length ).toEqual( 4 );
    expect( d.length ).toEqual( 4 );
    expect( e.length ).toEqual( 12 );

  });

  it( 'UUID [HV1]parent -> [HV1]children' , (  ) => {

    let parent_hv1 = uuid.hv1();
    let parent_hv1_id = parent_hv1.componentId;
    let children_hv1 = uuid.hv1({ parentId : parent_hv1_id });
    let hierarchicalId = `${children_hv1.section1}${children_hv1.section2}${children_hv1.section3}`;

    expect( hierarchicalId ).toEqual( parent_hv1_id );

  });

  it( 'UUID [HV1]children -[extend]-> [HV1]parent' , (  ) => {

    let parent_hv1 = uuid.hv1();
    let children_hv1 = parent_hv1.extend();

    expect( children_hv1.parentId.toString() ).toEqual( parent_hv1.componentId.toString() );

  });

  it( 'UUID [HV1]children.collectionId -[extend]-> [HV1]parent.collectionId' , (  ) => {

    let parent_hv1 = uuid.hv1({ collectionId : 'XXXXXXXXXXX' });
    let children_hv1 = parent_hv1.extend();

    expect( children_hv1.collectionId.toString() ).toEqual( parent_hv1.collectionId.toString() );

  });

})